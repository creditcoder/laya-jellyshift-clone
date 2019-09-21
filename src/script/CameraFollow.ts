export default class CameraFollow extends Laya.Script3D {
    protected  camera:Laya.BaseCamera = null;
    protected  target : Laya.Sprite3D = null;
    protected  offset : number = 0 ;

    public  onAwake():void {
        // Laya.stage.on(Laya.Event.RIGHT_MOUSE_DOWN, this, this.mouseDown);
        // Laya.stage.on(Laya.Event.RIGHT_MOUSE_UP, this, this.mouseUp);
        //Laya.stage.on(Event.RIGHT_MOUSE_OUT, this, mouseOut);
        this.camera = this.owner as Laya.Camera;
    }

    public startFollow(sprite:Laya.Sprite3D,dz : number) : void{
        this.target = sprite;
        this.offset = dz;
    }

    public onUpdate() :void{
        this.camera.transform.localPosition = new Laya.Vector3(this.camera.transform.localPosition.x+this.offset, this.camera.transform.localPosition.y, this.target.transform.localPosition.z)
    }
}