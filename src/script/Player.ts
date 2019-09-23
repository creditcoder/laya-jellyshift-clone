import GameInfo from "./GameInfo";
import ShadowCollisionScript from "./../script/ShadowCollisionScript";
import ShadowAnimationScript from "./../script/ShadowAnimationScript";
import TriggerCollisionScript from "../common/TriggerCollisionScript";
import Sound from "./Sound";
export default class Player extends Laya.Script3D {

    protected  camera:Laya.BaseCamera = null;
    protected  scene : Laya.Scene3D = null;
    protected  offset : number = 0 ;
    public  rigidbody : Laya.Rigidbody3D = null;
    protected  speedArr : Array<any> = [];
    protected  shadow : Laya.Sprite3D = null
    protected  isMouseDown:Boolean;
    
    private player_box: Laya.MeshSprite3D = null;
    private pFollow:Laya.BaseCamera = null;
    private player:Laya.Sprite3D = null;
    private delta = 0.001;
    private pillar_const = 1000;
    private pillar: Laya.MeshSprite3D = null;
    private distance: number = 0;
    private length:number = 0;
    private cube:Laya.MeshSprite3D = null;
    private cubeDownside:Laya.MeshSprite3D = null;

    private ySize:number;

	private zsize:number;

    public moving:boolean = true;
    public rotating:boolean = false;
    public backMoving:boolean = false;

    public is_start:boolean = false;

    private closeObjectIndex:number = 0;
    private distToPillar:number = 1000;
    private obstaclesCount:number = 0;

    private particlePrefab:Laya.MeshSprite3D;

    public bMoveState:boolean = false;

    public current_dir = "z";
    public velocity:number = 0.2;
    private backdelta:number = 0.2;
    public fever:number = 0;
    public initpos:Laya.Vector3;
    
    public  onAwake():void {
        
    }

    private current_mouseX:number = 0;
    private current_mouseY:number = 0;
    private stopTime:number = 0;
    private camerastart:boolean = false;

    public EnableCameraAnim(bFlag:boolean) {
        var animator1 = this.camera.getComponent(Laya.Animator) as Laya.Animator;
        if( animator1 != null )
        {
            animator1.enabled = bFlag;
        }
    }

    public ZoomInCamera() {
        var animator1 = this.camera.getComponent(Laya.Animator) as Laya.Animator;
        if( animator1 != null )
        {
            animator1.play("ZoomIn"); 
        }
    }
    public ZoomOutCamera() {
        var animator1 = this.camera.getComponent(Laya.Animator) as Laya.Animator;
        if( animator1 != null )
        {
            animator1.play("ZoomOut"); 
        }
    }
    private StartCamera() {
        var animator1 = this.camera.getComponent(Laya.Animator) as Laya.Animator;
        if( animator1 != null )
        {
            animator1.play("startCamera"); 
        }
    }
    private EndCamera() {
        
        var animator1 = this.camera.getComponent(Laya.Animator) as Laya.Animator;
        if( animator1 != null && animator1.enabled == true )
        {
            animator1.play("endCamera"); 
        }
        this.ShowEndParticle();
        this.ShowEndParticle();
        this.ShowEndParticle();
    }

    public InitPlayerChilds() {
        this.player_box.addChild(this.camera);

        this.AddPlayerTrail();

    }
    private bCustomize:boolean = false;
    public updateCustomState(state):void {
        this.bCustomize = state;
    }

    private vdelta:Laya.Vector3 = new Laya.Vector3(0,0,0);

    public mouseMoveProc():void {
        if(GameInfo.GAME_STATE >= 2|| this.bCustomize == true)    
        return;
        if( this.is_start == false ) {                      

            //this.InitPlayerChilds();

            this.owner.event("game_started");

            this.obstaclesCount = GameInfo.GetObstacleCount();
            var subModel1 = this.player.getChildAt(1);
            var animator1 = subModel1.getComponent(Laya.Animator) as Laya.Animator;
            if (!animator1)
                animator1 = subModel1.getChildAt(0).getComponent(Laya.Animator) as Laya.Animator;
            if( animator1) {
                animator1.play("startCharacter"); 
            }
            this.bMoveState = true;                          
            this.is_start = true;    
            this.StartCamera();
            var temp = this.player.transform.localPosition as Laya.Vector3;
            this.initpos.setValue(0, temp.y,0);
            
            this.SetShadowScriptToParticles();                    
        }                

        let offset_dir = "down";
        let delta_y:number = Laya.stage.mouseY - this.current_mouseY;

        if (delta_y < 0)
            offset_dir = "up";
        

        let val_a = 1.9, val_b = 2.1;
        let lim_a = 0.25, lim_b = 1.95;

        if (Math.abs(delta_y)>2) {
            //console.log("offset_dir=", delta_y+"_"+offset_dir);
            let numY = this.player.transform.localScale.y;
            let numX = this.player.transform.localScale.x;
                    
            if (offset_dir == "up" ) {
                    numY += 0.1;
                    if(numY > lim_b) numY = lim_b;
            }
            if (offset_dir == "down") {
                    numY -= 0.1;
                    if(numY < lim_a) numY = lim_a;
            }
            numX = (val_b - numY) * val_a / val_b;

            //console.log("before localscale changed =" +GameInfo.GAME_STATE);
            this.player.transform.localScale = new Laya.Vector3(numX, numY, this.player.transform.localScale.z);
        }

        this.current_mouseY = Laya.stage.mouseY;                        
        this.rigidbody.colliderShape.localOffset.y = this.player.transform.localScale.y/2;
    }

    private camPos:Laya.MeshSprite3D;
    public onUpdate() :void {
        if( GameInfo.GAME_STATE == 2)  {
            return;
        }

        Laya.stage.on(Laya.Event.MOUSE_DOWN, this, ():void=>{
            Laya.stage.on(Laya.Event.MOUSE_MOVE, this, this.mouseMoveProc);
        }); 
        Laya.stage.on(Laya.Event.MOUSE_UP, this, ():void=>{
            Laya.stage.off(Laya.Event.MOUSE_MOVE, this, this.mouseMoveProc);
        });
        
        if (this.current_dir == "z" || this.current_dir == "x")
            this.InitPlayerRoatate();

        if (!this.is_start) {
            this.player.addChild(this.cube);
            this.player.addChild(this.cubeDownside);
            return;
        }              

        // traslate player
        if( this.bMoveState )
        {   
            if (this.current_dir == "z") {
                this.vdelta.z = this.velocity;
            } else if (this.current_dir == "r1_1") {
                this.vdelta.z = this.velocity * Math.sin(75/180*3.14);
                this.vdelta.x = (-1)*this.velocity * Math.cos(75/180*3.14);
                if (this.rotate_cnt == 0) {
                    this.player.transform.rotate(new Laya.Vector3(0, -30, 0), true, false);       
                    this.rotate_cnt = 1;

                    this.camPos = this.scene.addChild(new Laya.MeshSprite3D(Laya.PrimitiveMesh.createBox(this.delta, this.delta, this.delta))) as Laya.MeshSprite3D;
                    this.camPos.meshRenderer.enable = false;
                    this.player.addChild(this.camPos);                    
                    this.camPos.transform.position = this.camera.transform.position;
                    this.camPos.transform.rotation = this.camera.transform.rotation;
                    this.EnableCameraAnim(false);
                }                              
            } else if (this.current_dir == "r1_2") {
                this.vdelta.z = this.velocity * Math.sin(45/180*3.14);
                this.vdelta.x = (-1)*this.velocity * Math.cos(45/180*3.14);
                if (this.rotate_cnt == 1) {
                    this.player.transform.rotate(new Laya.Vector3(0, -30, 0), true, false);       
                    this.rotate_cnt = 2;
                }                
            } else if (this.current_dir == "r1_3") {
                this.vdelta.z = this.velocity * Math.sin(15/180*3.14);
                this.vdelta.x = (-1)*this.velocity * Math.cos(15/180*3.14);
                if (this.rotate_cnt == 2) {
                    this.player.transform.rotate(new Laya.Vector3(0, -30, 0), true, false);       
                    this.rotate_cnt = 3;
                }
            } else if (this.current_dir == "x") {
                this.vdelta.x = (-1)*this.velocity;          
                this.vdelta.z = 0;    
                this.initpos.z = 1;                                   
            }            
            if (this.current_dir != "z") {
                this.camera.transform.position = this.camPos.transform.position;
                this.camera.transform.rotation = this.camPos.transform.rotation;
            }                

            if(GameInfo.fever_ok) {
                let p = 0.07;
                if (this.current_dir == "z")                
                    this.vdelta.z +=p;
                else if (this.current_dir == "x")                
                    this.vdelta.x -=p;
            }                                      
            this.player_box.transform.translate(this.vdelta, true);
        } 
        else // if collisioned with obstacles, backward.
        {
            Sound.playHitObstacleSound();

            if( this.stopTime == 0 )
            {
                this.stopTime = Laya.timer.currTimer;
                this.velocity = GameInfo.org_velocity;
            }    
            else if( Laya.timer.currTimer - this.stopTime >  300)
            {
                 this.stopTime = 0;
                 this.bMoveState = true;
            }
            if (this.current_dir == "z")
                this.player_box.transform.localPosition = new Laya.Vector3(this.player_box.transform.localPosition.x, this.player_box.transform.localPosition.y, this.player_box.transform.localPosition.z - this.backdelta)
            else if (this.current_dir == "x")
                this.player_box.transform.localPosition = new Laya.Vector3(this.player_box.transform.localPosition.x+this.backdelta, this.player_box.transform.localPosition.y, this.player_box.transform.localPosition.z)

            return;
        }

        // get distance to target pillar
        this.pillar = this.FindClosestPillar();
        
        if (!this.pillar)
            return;

        this.distance = Laya.Vector3.distance(this.player.transform.position, this.pillar.transform.position);

        // set flag at last obstacle
        if( this.closeObjectIndex == this.obstaclesCount-1 )  {
            if( GameInfo.GAME_STATE == 3 && this.distance < 0.5 )
                this.SetNextCloseIndex();
            else
            {   
                GameInfo.GAME_STATE = 3; // going last position
                this.cube.active = false;
                this.cubeDownside.active = false;
                this.player.transform.localPosition = this.initpos;
            }            
            return;
        }  
 
        // initialize local position's change
        if( this.closeObjectIndex < this.obstaclesCount-1 )  
        {
            //this.player.transform.localPosition = this.initpos;        
            this.initpos.y = this.player.transform.localPosition.y;
            this.player.transform.localPosition = this.initpos;
            
        }
 
        // show shadow cube to target
        this.length = this.distance;//this.player.transform.position.x - this.pillar.transform.position.x;
        let position: Laya.Vector3 = new Laya.Vector3(0, 0, this.length + 0.2);
        if (this.distance < 1000 && this.distance > 0) {
            this.cube.active = true;
            this.cubeDownside.active = true;
            this.cube.transform.localPosition = position;
			this.cubeDownside.transform.localPosition = new Laya.Vector3(0,0,0);
            
            if (this.current_dir == "z" || this.current_dir == "x") {
                this.cube.transform.localScale = new Laya.Vector3(1.3, 1, 0.1);
                this.cubeDownside.transform.localScale = new Laya.Vector3(1.3, 1, this.length);    
            } else {
                this.cube.transform.localScale = new Laya.Vector3(0, 0, 0);
                this.cubeDownside.transform.localScale = new Laya.Vector3(0, 0, 0);
            }            
        } else {
            if (this.cube)
                this.cube.active = false;
            if (this.cubeDownside)
                this.cubeDownside.active = false;
        }

        this.updateGameInfo();
    }

    private rotate_cnt = 0;

    public updateDir(dir):void {
        this.current_dir = dir;
    }

    private InitPlayerRoatate()
    {
        var delta:Laya.Vector3 = this.player.transform.localRotationEuler;
        var target = new Laya.Vector3(0,0,0);
        if( this.current_dir == "x" )
            target.y = -90; 
        Laya.Vector3.subtract(target, delta, delta);
        this.player.transform.rotate(delta, true, false);       
    }

    public ShowSpeedParticle(){
        let particles = Laya.loader.getRes("unity/model/particle.lh") as Laya.Sprite3D;
        let tmp = particles.getChildAt(2) as Laya.Sprite3D;
		if (!tmp) { //jewel round
			return;
		}
		
        var dup = Laya.MeshSprite3D.instantiate(tmp) as Laya.MeshSprite3D;
        this.player_box.addChild(dup);
        dup.transform.localPosition = new Laya.Vector3(0,0,0);
        dup.transform.localScale = new Laya.Vector3(1,1,1);
        dup.transform.localPosition.y += 0.5;

        dup.active = true;
    }

    public HideWndParticle(){
        var wnd = this.player_box.getChildByName("wnd") as Laya.MeshSprite3D;;
        if(wnd)
        {
            wnd.active = false;
            return;
        }
    }
    public ShowWndParticle(){
        var wnd = this.player_box.getChildByName("wnd") as Laya.MeshSprite3D;;
        if(wnd)
        {
            wnd.active = true;
            return;
        }

        let particles = Laya.loader.getRes("unity/model/particle.lh") as Laya.Sprite3D;
        let tmp = particles.getChildAt(4) as Laya.Sprite3D;
		if (!tmp) { //jewel round
			return;
		}
		
        var dup = Laya.MeshSprite3D.instantiate(tmp) as Laya.MeshSprite3D;
        this.player_box.addChild(dup);
        dup.name = "wnd";
        dup.transform.localPosition = new Laya.Vector3(0,0,0);
        dup.transform.localScale = new Laya.Vector3(1,1,1);
        dup.transform.localPosition.y += 1;
        dup.active = true;
    }
    
    public ShowEndParticle(){
        let particles = Laya.loader.getRes("unity/model/particle.lh") as Laya.Sprite3D;
        let tmp = particles.getChildAt(0) as Laya.Sprite3D;
		if (!tmp) { //jewel round
			return;
		}
			
        var dup = Laya.MeshSprite3D.instantiate(tmp) as Laya.MeshSprite3D;
        this.player.addChild(dup);
        dup.transform.localPosition = new Laya.Vector3(0,0,0);
        var delta:Laya.Vector3 = new Laya.Vector3(0,0,0);
        Laya.Vector3.subtract(this.camera.transform.position, this.player.transform.position, delta);
        Laya.Vector3.normalize(delta, delta);
        Laya.Vector3.scale(delta, 5, delta);
        Laya.Vector3.add(dup.transform.position, delta, dup.transform.position);
        dup.transform.localScale = new Laya.Vector3(2,2,2);
        dup.active = true;
	}
    public SetShadowScriptToParticles():void {
        var translevel = this.scene.getChildByName("Level");
        var obstacles = translevel.getChildByName("obstacles");      
        var subObj = obstacles.getChildAt(this.closeObjectIndex) as Laya.MeshSprite3D; // sub obstacl\
        var particleObj = subObj.getChildByName("particle1") as Laya.MeshSprite3D;
        particleObj.addComponent(ShadowAnimationScript);
    }

    public AddPlayerTrail() {
        let trailCube = Laya.loader.getRes("unity/trail/Cube.lh") as Laya.Sprite3D;
        let tcube = Laya.Sprite3D.instantiate(trailCube);
        tcube.transform.position = this.player.transform.position;
        tcube.transform.position.y += 0.8;
        this.player_box.addChild(tcube);
        tcube.name = "trail";
        (tcube.getChildAt(0) as Laya.MeshSprite3D).meshRenderer.enable = false;
        ((tcube.getChildAt(0).getChildAt(0) as Laya.TrailSprite3D).trailRenderer.material as Laya.TrailMaterial).color = new Laya.Vector4(0, 0.5, 0, 0.1);
        tcube.active = false;
    }
    public ShowTrail(flag:boolean){
        this.player_box.getChildByName("trail").active = flag;
    }

    public updateGameInfo():void {
        //update game status info
        let maxlen = GameInfo.getTerrainLength(GameInfo.round);
        if (GameInfo.curPassedLen > maxlen)
            GameInfo.curPassedLen = maxlen;
        else 
            GameInfo.curPassedLen += this.velocity;

        this.owner.event("update_path", GameInfo.curPassedLen/maxlen);//must send percent value, and would be modified.
    }

    public startFollow(sprite:Laya.Scene3D, cam:Laya.Camera, dz : number) : void{

        this.rotate_cnt = 0;

        this.scene = sprite;
        this.camera = cam;
        this.offset = dz;     

        /////////////////////
        this.player =  this.owner as Laya.Sprite3D;
        this.rigidbody = this.owner.getComponent(Laya.Rigidbody3D);
        this.initpos =  new Laya.Vector3(0,0,0);
        /////////////////////

        this.cube = this.scene.getChildByName("Cube") as Laya.MeshSprite3D;

        if (!this.cube.getChildAt(0).getComponent(ShadowCollisionScript))
            this.cube.getChildAt(0).addComponent(ShadowCollisionScript);

        this.cubeDownside = this.scene.getChildByName("Cube Down Side") as Laya.MeshSprite3D;         

////////////////////////////////////////////////////////////////////////////////////////////////////
        var tmp = this.scene.getChildByName("jellyBox") as Laya.MeshSprite3D;
        if( tmp == null )
            this.player_box = this.scene.addChild(new Laya.MeshSprite3D(Laya.PrimitiveMesh.createBox(this.delta, this.delta, this.delta))) as Laya.MeshSprite3D;
        else 
            this.player_box = tmp;

        this.player_box.name = "jellyBox";
        this.player_box.addChild(this.player);
           
        this.InitPlayerChilds();            
    }

    public  onDestroy():void {

    }

    public ShowParticle():void{
        var clone:Laya.ShuriKenParticle3D = Laya.Sprite3D.instantiate(this.particlePrefab) as Laya.ShuriKenParticle3D;
        //clone.particleSystem.startSpeedConstant = 10;
        this.player.addChild(clone);
        clone.transform.localPosition = new Laya.Vector3(0,0,0);
        clone.active = true;           
    }

    public onCollisionEnter(collision:Laya.Collision):void {

    }

    public FindClosestPillar():Laya.MeshSprite3D {
        var translevel = this.scene.getChildByName("Level");
        var obstacles = translevel.getChildByName("obstacles");      
        var subObj = obstacles.getChildAt(this.closeObjectIndex) as Laya.MeshSprite3D; // sub obstacl\

        return subObj;
    }
    
    private pieceArray:Array<Laya.MeshSprite3D>;
    private pillar_mat:Laya.BaseMaterial = null;
    private explosionRadiusCenter:Laya.Vector3;
    private createdPieceTime:number = 0;
    private totalCnt:number = 0;
    

    public ExplodePillar()
    {
        if(!GameInfo.fever_ok)  return;

        let translevel = this.scene.getChildByName("Level") as Laya.MeshSprite3D; 
        let obstacles = translevel.getChildByName("obstacles");      
        let subObj = obstacles.getChildAt(this.closeObjectIndex-1) as Laya.MeshSprite3D; // sub obstacl\

        let tmp = (subObj.getChildAt(0) as Laya.MeshSprite3D).meshRenderer;

        if (!tmp) {
            return;
        }

        this.pillar_mat = (tmp as Laya.MeshRenderer).material;
        this.pieceArray = new Array<Laya.MeshSprite3D>(subObj.numChildren);
        
       for( var i = 0 ; i < subObj.numChildren-1; i++ )
       {
           //this.explodeOne(subObj.getChildAt(i) as Laya.MeshSprite3D);
           var trigger:TriggerCollisionScript = subObj.getChildAt(i).getComponent(TriggerCollisionScript);
           trigger.onTriggerEnter(this.player.getComponent(Laya.PhysicsComponent));
       }
       this.createdPieceTime = Laya.timer.currTimer;
       this.explosionRadiusCenter = this.player.transform.position;
    }

    public disablePillarsCollider()
    {
        if(!GameInfo.fever_ok)  return;
        var subObj = this.FindClosestPillar();
        for( var i = 0 ; i < subObj.numChildren-1; i++ )
        {
            var col = (subObj.getChildAt(i).getComponent(Laya.PhysicsCollider) as Laya.PhysicsCollider);
            col.colliderShape.localOffset.y = -1;
            col.colliderShape.updateLocalTransformations();
        }
    }

    public vibration(){
        try {
            window.navigator.vibrate(100);
        } catch(e) {
            console.log("navigator exp...", e.toString());
        }
        
        // navigator.vibrate(100);
        // wx.vibrateLong(100);        
        // wx.vibrateShort(100);
    }

    public SetNextCloseIndex()
    {
            this.distToPillar = 1000;
            this.closeObjectIndex++; 

            // set velocity by round and passed point
            //this.velocity *= (1+GameInfo.round/100.0);                   
            this.ShowSpeedParticle();
            this.vibration();
            // last point, process 
            if( this.closeObjectIndex >= this.obstaclesCount ) 
            { // end
                GameInfo.GAME_STATE = 2;
                
                this.rigidbody.enabled = false;
                this.player.transform.localPosition = this.initpos;
                this.InitPlayerRoatate();
                this.player.transform.localScale = new Laya.Vector3(1, 1, 1);

                var subModel = this.player.getChildAt(1);
                
                var self = this;
                Laya.timer.once(100, this, function() {
                    var animator = subModel.getComponent(Laya.Animator) as Laya.Animator;
                    if( animator != null ) {
                        animator.play("endCharacter");
                    }                
                    this.EndCamera();                
                    self.owner.event("game_ended");
                    this.HideWndParticle();
                });
                return;
            }
            
            this.owner.event("update_pass");//for fever

            //this.ShowRibonParticle();
            //this.ExplodePillar();
            if( this.closeObjectIndex < this.obstaclesCount-1 )  
             {
                this.SetShadowScriptToParticles();
                //this.disablePillarsCollider();

                Sound.playFeverDestroySound();
             }   
             else
                this.distToPillar = 1000;
            
            return;
     } 

     public onTriggerEnter(other: Laya.PhysicsComponent): void {
        if( other.owner == null ) 
            return;
        if( other.owner.name != "Check" )   
            return;
        
        GameInfo.GAME_STATE = 4;
       
        this.is_start = false;

        this.owner.event("game_failed");

        this.HideWndParticle();
     }
}

//继承自AnimatorStateScript(动画状态脚本)
class AnimatorStateScriptDemo extends Laya.AnimatorStateScript{
	
	constructor(){
		super();
	}

		
	/**
	 * 动画状态开始时执行。
	 */
	public onStateEnter():void {
		console.log("动画开始播放了");
	}
		
	/**
	 * 动画状态更新时执行。
	 */
	public onStateUpdate():void {
		console.log("动画状态更新了");
	}
		
	/**
	 * 动画状态退出时执行。
	 */
	public onStateExit():void {
		console.log("动画退出了");
	}
}