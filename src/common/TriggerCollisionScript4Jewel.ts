export default class TriggerCollisionScript4Jewel extends Laya.Script3D {

    constructor() {
        super();
    }
    public TriggerCollisionScript() {

    }
    public onTriggerEnter(other: Laya.PhysicsComponent): void {

        if( other.owner.name == "jelly" ) {
            
            this.owner.event("trigger");
            this.owner.destroy();
            this.owner = null;
            //run particle
        }                   
    }

	public onUpdate() :void {
        
    }

    public onTriggerStay(other : Laya.PhysicsComponent):void {
        
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