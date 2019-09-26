import GameInfo from "./../script/GameInfo"
import GameUI from "./../script/GameUI"
import PlayerModel from "./../script/Player";

//不知道是否正确
export default class TriggerCollisionScript extends Laya.Script3D {
    public kinematicSprite:Laya.Sprite3D;
    public pillar_mat:Laya.BaseMaterial = null;
    private createdPieceTime:number = 0;
    private pieceArray:Laya.MeshSprite3D;// = new Array<Laya.MeshSprite3D>(2);
    private playerBody:Laya.MeshSprite3D;
    private explosionRadiusCenter:Laya.Vector3;
    constructor() 
    {
        //父类
        super();
    }
    public TriggerCollisionScript()
    {

    }
    public onTriggerEnter(other: Laya.PhysicsComponent): void {
        if(this.pillar_mat == null)
            this.pillar_mat = ((this.owner as Laya.MeshSprite3D).meshRenderer as Laya.MeshRenderer).material;

        if( other.owner.name == "jelly" ) {
            
            this.playerBody = other.owner as Laya.MeshSprite3D;
           
            if( !GameInfo.fever_ok ) {
                this.playerBody.getComponent(PlayerModel).bMoveState = false;
                this.owner.event("trigger", this.owner.parent.numChildren/2);//would be modified
            }
            this.explode();
        }            
    }

	private createPiece(tmp:Laya.Vector3, pillar_mat):Laya.MeshSprite3D
	{
        var cubeSize = 0.2;
        var piece = Laya.stage.getChildAt(0).addChild(new Laya.MeshSprite3D(Laya.PrimitiveMesh.createBox(cubeSize, cubeSize, cubeSize))) as Laya.MeshSprite3D;
        piece.meshRenderer.material = pillar_mat;
        piece.transform.position = tmp;
        
        var rigidbd = piece.addComponent(Laya.Rigidbody3D);        
        var boxShape = new Laya.BoxColliderShape(cubeSize, cubeSize, cubeSize);
		rigidbd.colliderShape = boxShape;
        rigidbd.mass = cubeSize;
        rigidbd.isTrigger = false;

        return piece;
    }

    public explode():void {     
        var tmp = this.owner as Laya.MeshSprite3D;
        var pos = tmp.transform.position;
        
        this.pieceArray = new Laya.MeshSprite3D();
        
        this.pieceArray = this.createPiece(pos, this.pillar_mat);
        
        var force = new Laya.Vector3(10, 10, 10);
        this.createdPieceTime = Laya.timer.currTimer;
        this.explosionRadiusCenter = this.playerBody.transform.position;

        tmp.meshRenderer.enable = false;
        (tmp.getComponent(Laya.PhysicsCollider) as Laya.PhysicsCollider).enabled = false;        
    }
    
    public onUpdate() :void 
    {
        var explosionRadius = 2;
        var explosionForce = 5;
        if(GameInfo.fever_ok)
        {
            explosionRadius = 5;
            explosionForce = 5;
        }
        if( this.createdPieceTime > 0 ) {
            if (Laya.Vector3.distance(this.pieceArray.transform.position, this.explosionRadiusCenter) <= explosionRadius) {

                var force:Laya.Vector3 = new Laya.Vector3(0,0,0);
                Laya.Vector3.subtract(this.pieceArray.transform.position, this.explosionRadiusCenter, force);
                var rbd:Laya.Rigidbody3D = this.pieceArray.getComponent(Laya.Rigidbody3D);
                Laya.Vector3.scale(force, (explosionForce), force);
                
                var rnd :Laya.Rand = new Laya.Rand(this.pieceArray.transform.position.x*this.pieceArray.transform.position.y*1000);
                var delta = rnd.getUint() % 5;
                force.z -= delta/10;
                force.y += delta;
                rbd.applyForce(force);
            }            
        }
        if( this.createdPieceTime > 0 && Laya.timer.currTimer - this.createdPieceTime > 1500 )
        {
            this.pieceArray.active = false;
            this.pieceArray.meshRenderer.enable = false;
            this.pieceArray.destroy();
            this.pieceArray = null;
            
            this.createdPieceTime = 0;
            this.owner.destroy();
        }  
        
    }

    public onTriggerStay(other : Laya.PhysicsComponent):void
    {
        
    }
    
    public onTriggerExit(other:Laya.PhysicsComponent):void {
    
    }
    
    public onCollisionEnter(collision:Laya.Collision):void {
         
    }    
    
    public onCollisionStay(collision:Laya.Collision):void {

    }
    
    public onCollisionExit(collision:Laya.Collision):void {
        
    }
}