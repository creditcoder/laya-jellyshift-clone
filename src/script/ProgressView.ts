import { ui } from "./../ui/layaMaxUI";
import GameInfo from "./../script/GameInfo";

export default class ProgressView extends ui.ProgressSceneUI {

    private splashObj:Laya.Sprite = null;

    constructor() {
        super();

        Laya.URL.basePath = GameInfo.baseResPath;		

        this.splashObj = new Laya.Sprite();
        let logo_img = new Laya.Image("Images/saygames.png");

        Laya.URL.basePath = GameInfo.baseResPath;

        logo_img.width = 428;
        logo_img.height = 441;

        let pos_arr = GameInfo.getPos(Laya.stage, logo_img);
		logo_img.pos(pos_arr[0], pos_arr[1]-80);

        this.splashObj.addChild(logo_img);
        Laya.stage.addChild(this.splashObj);        

        Laya.timer.once(1500,this,this.splashLoop);
    }

    private splashLoop():void {
        Laya.timer.clearAll(this);
        Laya.stage.removeChild(this.splashObj);

        this.logo.visible = true;
        // this.status.visible = true;
        this.loading_prog.visible = true;
        this.panel.visible = true;
        // this.startLoading(); 
        this.event("splash_finish");        
    }
    
	public onLoadComplete(): void {
        this.loading_prog.changeHandler = new Laya.Handler(this, this.onChange);
        Laya.timer.loop(100, this, this.changeValue);
    }

    private changeValue(): void {
        if (this.loading_prog.value >= 1) {
            Laya.timer.clearAll(this);
            this.event("load_finish");         
            this.removeSelf();  
        }            
        this.loading_prog.value += 0.05;
    }

    private onChange(value: number): void {
        let desc = "Loading：" + Math.floor(value * 100) + "%";        
    }    
}