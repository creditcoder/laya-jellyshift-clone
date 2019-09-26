import GameUI from "./../script/GameUI"
import PlayerModel from "./../script/Player";
import ShadowAnimationScript from "./ShadowAnimationScript";
//不知道是否正确
export default class ShadowCollisionScript extends Laya.Script3D {
    public obj:Laya.MeshSprite3D;
    private shadow_pillar:Laya.MeshSprite3D;
    constructor() {
        //父类
        super();
    }

    public onTriggerEnter(other: Laya.PhysicsComponent): void {
        super.onTriggerEnter(other);
        if( other.owner.name == "jelly" ) {
            other.owner.getComponent(PlayerModel).SetNextCloseIndex();

            console.log("it's me!!!!!!!!");
            
            let pillar:Laya.MeshSprite3D = other.owner.getComponent(PlayerModel).pillar as Laya.MeshSprite3D;
            this.shadow_pillar = pillar.getChildByName("particle1") as Laya.MeshSprite3D;
            this.shadow_pillar.active = true;
 
            this.shadow_pillar.getComponent(ShadowAnimationScript).ShowPasseedParticle();
        }
    }
}