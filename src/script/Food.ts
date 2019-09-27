import GameInfo from "./../script/gameInfo";

export default class Food extends Laya.Script3D {
    
    private scene:Laya.Scene3D = null;
    
    private model:Laya.Sprite3D = null;

    public is_start:boolean = false;
    public velocity:number = 0.5;
    protected  camera:Laya.BaseCamera = null;
    private curr_round = 0;

    public  onAwake():void {
        this.model =  this.owner as Laya.Sprite3D;

        this.curr_round = parseInt(localStorage.getItem("jelly_round")) + 1;
        
        let planeStaticCollider : Laya.PhysicsCollider = this.model.addComponent(Laya.PhysicsCollider);
        planeStaticCollider.colliderShape = new Laya.BoxColliderShape(3,3,3);        
        planeStaticCollider.friction = 2;
        planeStaticCollider.restitution = 0.3;
        planeStaticCollider.isTrigger = false;
        
    }

    public isCurveLevel():boolean {
        let ret = false;
        if (this.curr_round >3)
            ret = ((this.curr_round+1) % 4 == 0);
        return ret;
    }

    public startFollow(sprite:Laya.Scene3D, cam:Laya.Camera) : void {
        this.scene = sprite;
        this.camera = cam;
        
    }
    
    public updateGameState(game_state):void {
        GameInfo.GAME_STATE = game_state;
    }

    public updatePassLen(pass_len):void {
        GameInfo.curFoodLen = pass_len;
    }

    public start():void {
        this.is_start = true;
    }

    private y_delta = 2.5;

    private bCustomize:boolean = false;

    public updateCustomState(state):void {
        this.bCustomize = state;
    }

    public onUpdate() :void {

        if( GameInfo.GAME_STATE == 2 || this.bCustomize)  {
            return;
        }

        if (!this.is_start)
            return;
    
        if (GameInfo.curFoodLen > 10) {
            this.velocity = 0.205;
            if (this.y_delta != 0.8) {
                this.y_delta -= 0.01;
                if (this.y_delta < 0.8)
                    this.y_delta = 0.8;
            }               
        }
        else {
            this.velocity = 0.4;
        }            

        if (this.isCurveLevel()) {
            // if (GameInfo.curFoodLen > 109) {
            //     this.current_dir = "x";
            // }
        }       

        let y_pos = this.y_delta + Math.sin(this.model.transform.localPositionZ/2)*0.2;

        if (this.current_dir == "z") {
            this.model.transform.localPosition = new Laya.Vector3(this.model.transform.localPositionX, y_pos, this.model.transform.localPositionZ+this.velocity);
        } else if (this.current_dir == "x") {
            this.model.transform.localPosition = new Laya.Vector3(this.model.transform.localPositionX-this.velocity, y_pos, this.model.transform.localPositionZ);
        }

        this.updateGameInfo();
    }

    private current_dir = "z";

    public updateGameInfo():void {

        let maxlen = GameInfo.getTerrainLength(this.curr_round);
        //update game status info
        if (GameInfo.curFoodLen > maxlen)
            GameInfo.curFoodLen = maxlen;
        else 
            GameInfo.curFoodLen += this.velocity;

        let cur_per = GameInfo.curFoodLen/maxlen;

        if (cur_per > 0.3)
            this.velocity = 0.09;

        this.owner.event("update_path", cur_per);//must send percent value, and would be modified.
    }

    public  onDestroy():void {

    }

    public onCollisionEnter(collision:Laya.Collision):void {
        
        if (collision.other.owner.name == "jelly") {
            this.owner.event("food_destroy");
            this.model.destroy();   
        }
    }   

    public onTriggerEnter(other: Laya.PhysicsComponent): void {
        
        if( other.owner == null ) 
            return;               
        
    }

    public ShowEatParticle(model){
        let particles = Laya.loader.getRes("unity/model/particle.lh") as Laya.Sprite3D;
        let tmp = particles.getChildAt(1) as Laya.Sprite3D;
		if (!tmp) { //jewel round
			return;
		}
			
        var dup = Laya.MeshSprite3D.instantiate(tmp) as Laya.MeshSprite3D;
        this.model.addChild(dup);
        dup.transform.localPosition = new Laya.Vector3(0,0,0);
        var delta:Laya.Vector3 = new Laya.Vector3(0,0,0);
        Laya.Vector3.subtract(this.camera.transform.position, model.transform.position, delta);
        Laya.Vector3.normalize(delta, delta);
        Laya.Vector3.scale(delta, 5, delta);
        Laya.Vector3.add(dup.transform.position, delta, dup.transform.position);
        dup.transform.localScale = new Laya.Vector3(2,2,2);
        dup.active = true;
    }

    public ShowEndParticle(){
        let particles = Laya.loader.getRes("unity/model/particle.lh") as Laya.Sprite3D;
        let tmp = particles.getChildAt(0) as Laya.Sprite3D;
		if (!tmp) { //jewel round
			return;
		}
			
        var dup = Laya.MeshSprite3D.instantiate(tmp) as Laya.MeshSprite3D;
        this.model.addChild(dup);
        dup.transform.localPosition = new Laya.Vector3(0,0,0);
        var delta:Laya.Vector3 = new Laya.Vector3(0,0,0);
        Laya.Vector3.subtract(this.camera.transform.position, this.model.transform.position, delta);
        Laya.Vector3.normalize(delta, delta);
        Laya.Vector3.scale(delta, 5, delta);
        Laya.Vector3.add(dup.transform.position, delta, dup.transform.position);
        dup.transform.localScale = new Laya.Vector3(2,2,2);
        dup.active = true;
	}
    public ShowRibonParticle(model){
        let particles = Laya.loader.getRes("unity/model/particle.lh") as Laya.Sprite3D;
        let tmp = particles.getChildAt(0) as Laya.Sprite3D;
		if (!tmp) { //jewel round
			return;
		}
			
        var dup = Laya.MeshSprite3D.instantiate(tmp) as Laya.MeshSprite3D;
        // dup.transform.position = this.player_box.transform.position;
        // dup.transform.position.z += 0.5;
        // dup.transform.position.y += 1;
        model.addChild(dup);
        dup.transform.localPosition = new Laya.Vector3(0,0,0);
        dup.transform.localPosition.y += 0.5;

        let self = this;
        Laya.timer.once(1500, this, function(){
            model.removeChild(dup);
        });        
	}
}