export default class TriggerCollisionScript4Round extends Laya.Script3D {

    constructor() {
        super();
    }
    public TriggerCollisionScript4Round() {

    }
    public onTriggerEnter(other: Laya.PhysicsComponent): void {

        if( other.owner.name == "jelly" ) {
            
            this.owner.event("trigger", this.owner.name);

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