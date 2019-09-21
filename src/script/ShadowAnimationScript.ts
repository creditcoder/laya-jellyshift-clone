import GameUI from "./../script/GameUI"
import Player from "./../script/Player";
import GameInfo from "./../script/GameInfo";
//不知道是否正确
export default class ShadowAnimationScript extends Laya.Script3D {
    public obj:Laya.MeshSprite3D;

    private startAnim:boolean = false;
    private startedTime:number = 0;
    private me:Laya.MeshSprite3D;

    constructor() {
        //父类
        super();
    }

	public ShowPasseedParticle():void
    {
        // for (var i = 0; i < this.me.numChildren; i++)
        // {
        //     this.me.getChildAt(i).active = true;
        // }
        this.me = this.owner as Laya.MeshSprite3D;
        this.startedTime = Laya.timer.currTimer;
        this.startAnim = true;
        
        var mat1:Laya.BlinnPhongMaterial = (this.me.getChildAt(0) as Laya.MeshSprite3D).meshRenderer.material as Laya.BlinnPhongMaterial;
        mat1.albedoColor = GameInfo.getGroundColor();
        mat1.albedoColor.w = 0.5;
    }
	
	// Update is called once per frame
    public onUpdate() :void {
		if(this.startAnim && Laya.timer.currTimer - this.startedTime < 300)
        {
            var lscale:Laya.Vector3 = this.me.transform.localScale;
            var delta = new Laya.Vector3(lscale.x*1.02, lscale.x*1.09, 1);
            //Laya.Vector3.add(lscale, delta, lscale);
            this.me.transform.localScale = delta;
        }
        else 
        {
            if(this.startAnim && Laya.timer.currTimer - this.startedTime >= 600)
            {                
                var mat1:Laya.BlinnPhongMaterial = (this.me.getChildAt(0) as Laya.MeshSprite3D).meshRenderer.material as Laya.BlinnPhongMaterial;
                mat1.albedoColorA -= 0.05;
                if(mat1.albedoColorA <= 0)
                {
                    this.me.active = false;
                    this.startAnim = false;
                }
            }
        }
	}

    // private Init():void
    // {
    //     for(int i = 0; i < this.transform.childCount; i ++)
    //     {
    //         this.transform.GetChild(i).gameObject.SetActive(false);
    //     }
    // }
}