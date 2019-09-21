import GameUI from "./../script/GameUI"
import Player from "./../script/Player";
//不知道是否正确
export default class ShadowCollisionScript extends Laya.Script3D {
    public obj:Laya.MeshSprite3D;
    constructor() {
        //父类
        super();
    }
    public TriggerCollisionScript() {

    }
    public onTriggerEnter(other: Laya.PhysicsComponent): void {
        super.onTriggerEnter(other);
        if( other.owner.name == "jelly" ) {
            let jelly = other.owner.getComponent(Player);
            if (jelly && jelly.pillar){
                let pillar:Laya.MeshSprite3D = jelly.pillar as Laya.MeshSprite3D;
                let shadow_pillar:Laya.MeshSprite3D = pillar.getChildByName("Shadow Pillar") as Laya.MeshSprite3D;
                shadow_pillar.active = true;
            }            
        }    
    }

	public onTriggerStay(other : Laya.PhysicsComponent):void {
        
    }

    public onTriggerExit(other:Laya.PhysicsComponent):void {
        super.onTriggerExit(other);
        if( other.owner.name == "jelly" ) {
            let jelly = other.owner.getComponent(Player);
            if (jelly && jelly.pillar){
                let pillar:Laya.MeshSprite3D = jelly.pillar as Laya.MeshSprite3D;
                let shadow_pillar:Laya.MeshSprite3D = pillar.getChildByName("Shadow Pillar") as Laya.MeshSprite3D;
                shadow_pillar.active = false;
            }            
        }    
    }
    
    public onCollisionEnter(collision:Laya.Collision):void {
        //if (collision.other.owner ===this.kinematicSprite)
        //    (((this.owner as Laya.MeshSprite3D).meshRenderer as Laya.MeshRenderer).sharedMaterial as Laya.BlinnPhongMaterial).albedoColor = new Laya.Vector4(0.0, 0.0, 0.0, 1.0);        
    }
    
    public onCollisionStay(collision:Laya.Collision):void {

    }
    
    public onCollisionExit(collision:Laya.Collision):void {
        
    }
}