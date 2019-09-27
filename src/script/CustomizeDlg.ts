import { ui } from "./../ui/layaMaxUI";
import GameUI from "./../script/GameUI";
import GameInfo from "./../script/GameInfo";
import ScrollView from "./../common/ScrollView";
import Sound from "./Sound";

class Item extends Laya.Box {
    role: Laya.Sprite;
    constructor(width: number, height: number) {
        super();
        this.width = width;
        this.height = height;

        this.graphics.drawRect(0, 0, this.width, this.height, null);
        this.anchorX = 0.5;
        this.anchorY = 0.5;

        this.role = new Laya.Sprite();
        this.role.width = 532;
        this.role.height = 565;
        this.role.scale(0.4, 0.4);
        this.role.pos(this.width / 2, this.height / 2);

        this.addChild(this.role);

        let sound_active = localStorage.getItem("jelly_sound");
        Sound.sound_active = (sound_active == "true")?true:false;        
    }
}

export default class CustomizeDlg extends ui.CustomizeSceneUI {
    private mouse_dir = "right";
    private prev_x = 0;
    private model_name = "";

    constructor() {
        super();       
         
        Laya.timer.frameLoop(1, this, this.onUpdate);

        this.init();
        this.connect();       
        this.setScrollView();   
    }

    private _mouseX: number = 0;
    private scrollView: ScrollView;
    private _mouseDown: boolean = false;
    private _mouseSpeed: number = 0;
    private _mouseStartPosX: number = 0;
    private _curMoveFrame: number = 0;

    private onUpdate() {
        if (!this.visible) {
            return;
        }
        if (!this._mouseDown && this._mouseSpeed != 0) {
            var direction = Math.abs(this._mouseSpeed) / this._mouseSpeed;
            var absSpeed = Math.sqrt(Math.abs(this._mouseSpeed));
            var moveDis = this._mouseSpeed;
            this.updateScrollViewPos(moveDis);
            
            absSpeed = absSpeed - 0.3;
            if (absSpeed < 1) {
                absSpeed = 0;
                this._mouseSpeed = 0;
                this.centeringControl();
            } else {
                this._mouseSpeed = absSpeed * absSpeed * direction;
            }
        }
    }

    private setScrollView() {
        this.scrollView = new ScrollView();
        this.addChild(this.scrollView);
        this.initScrollView();

        let array = [];
        let cust_panel = this.getChildByName("cust_panel");
        let len = cust_panel.numChildren;
        for (var i = 0; i < len; i++) {
            array.push(i);//just used to count children
            this.scrollView.addChild(cust_panel.getChildAt(0));
            (this.scrollView.getChildAt(i) as Laya.Sprite).pos(640*i, 0);
        }

        this.scrollView.array = array;
        this.scrollView.mouseHandler = new Laya.Handler(this, this.onScrollMouse);
    }

    /**
     * 设置ScrollView属性
     */
    private initScrollView() {
        this.scrollView.leftAlign = 0;
        this.scrollView.rightAlign = 0;
        this.scrollView.space = 0;
        this.scrollView.cellWidth = 640;
        this.scrollView.cellHeight = 0;
        this.scrollView.itemRender = Item;
        this.scrollView.height = 450;
        this.scrollView.width = 640;
        this.scrollView.anchorY = 0.5;
        this.scrollView.pos(0, 550);
        
    }

    private onScrollMouse(e: Event) {
        if (e.type == Laya.Event.MOUSE_DOWN) {
            this.mouseDown();
        } else if(e.type == Laya.Event.MOUSE_UP) {
            this.mouseUp();
        } else if (e.type == Laya.Event.MOUSE_MOVE) {
            this.mouseMove();
        }
    }

    private mouseDown() {
        if (this._mouseDown) {
            console.error("mouse had down");
        }
        this._mouseDown = true;
        this._mouseStartPosX = Laya.MouseManager.instance.mouseX;
        this._mouseX = Laya.MouseManager.instance.mouseX;
    }

    private mouseUp() {
        if (!this._mouseDown) {
            return;
        }

        var stableFrame = Laya.timer.currFrame - this._curMoveFrame;
        if (stableFrame > 2) {
            this._mouseSpeed = 0;
            this.centeringControl();
        }
        this._mouseDown = false;
    }

    private mouseMove() {
        if (this._mouseDown) {
            var dis = Laya.MouseManager.instance.mouseX - this._mouseX;
            this._mouseX = Laya.MouseManager.instance.mouseX;

            this.updateScrollViewPos(dis);
            
            this._curMoveFrame = Laya.timer.currFrame;
            this._mouseSpeed = dis;
        }
    }

    private updateScrollViewPos(dis: number) {
        var posX: number = dis + this.scrollView.x;
        if (posX > 0) {
            posX = 0;
        } 
        if (posX < -this.scrollView.width + Laya.stage.width) {
            posX = -this.scrollView.width + Laya.stage.width;
        }
        this.scrollView.pos(posX, this.scrollView.y);
    }

    private centeringControl() {
        var centerIndex = this.getScreenCenterCellIndex()
        var cellPosX = this.getCellPosByIndex(centerIndex);
        var posX = Laya.stage.width / 2 - cellPosX;
        Laya.Tween.to(this.scrollView, {x: posX}, 500, Laya.Ease.cubicOut).update = new Laya.Handler(this,  null);
        this.showRolePrice();
    }

    public getScreenCenterCellIndex(): number {
        var distance = -this.scrollView.x;
        var index: number = (distance - this.scrollView.leftAlign + this.scrollView.space + (Laya.stage.width + this.scrollView.cellWidth) / 2 ) / (this.scrollView.cellWidth + this.scrollView.space);
        return Math.round(index) - 1;
    }

    public getCellPosByIndex(index: number):number {
        return this.scrollView.leftAlign + (index + 0.5) * this.scrollView.cellWidth + index * this.scrollView.space;
    }

    private showRolePrice() {
        var centerIndex = this.getScreenCenterCellIndex();
        let price = 500;
        this.lbl_price.changeText((price*(centerIndex+1)).toString());                   
    }

    public init():void {
        
        for (let i = 0; i < GameInfo.models.length; i ++) {
            if (GameInfo.models[i].active) {
                let group_name = GameInfo.models[i].sub_category+"_group";
                let child_name = GameInfo.models[i].category+"_"+GameInfo.models[i].name;
                let child = this.getChildByName("cust_panel").getChildByName(group_name).getChildByName(child_name);
                
                let question = child.getChildByName("question") as Laya.Image;
                if (question)
                    question.visible = false;

                let selected = child.getChildByName("selected") as Laya.Image;
                if (selected)
                    selected.visible = false;
            }                
        }      
       
    }

    public onClosed():void {
        Sound.playCustomizeCloseSound();   
        if (this.model_name != "" && this.model_name != GameInfo.modelName) {
            GameInfo.modelName = this.model_name;
            this.event("select_player", GameInfo.modelName);
        }
        this.event("close_dlg");             
    }

    private onUnlock(e:Laya.Event):void {
        if(e.target.name == "btn_unlock") {

            let current_jewel_cnt = parseInt(localStorage.getItem("jelly_jewel"));
            if (current_jewel_cnt < parseInt(this.lbl_price.text)) {
                console.log("Not enough jewels!");
                return;
            }                

            let price = parseInt(this.lbl_price.text);
            current_jewel_cnt -= price;

            localStorage.setItem("jelly_jewel", current_jewel_cnt.toString());

            this.event("update_jewel");
            
            for (let i = 0; i < GameInfo.models.length; i ++) {
                if (GameInfo.models[i].price == price && GameInfo.models[i].active == false) {
                    this.selected_arr.push(GameInfo.models[i]);
                }
            }

            Laya.timer.loop(100, this, this.animate4select);
            
        }
    }

    private selected_arr = [];
    private repeatTimes = 0;
    private selectedIdx = 0;

    private animate4select():void {
        let len = this.selected_arr.length;
        let idx = Math.floor(Math.random() * len);
        
        Sound.playCustomizeRandomSound();

        for (let i = 0; i < this.selected_arr.length; i ++) {
            let group_name = this.selected_arr[i].sub_category+"_group";
            let child_name = this.selected_arr[i].category+"_"+this.selected_arr[i].name;
            let child = this.scrollView.getChildByName(group_name).getChildByName(child_name);

            let question = child.getChildByName("question") as Laya.Image;
            if (question)
                question.visible = true;
        } 
            
        let group_name = this.selected_arr[idx].sub_category+"_group";
        let child_name = this.selected_arr[idx].category+"_"+ this.selected_arr[idx].name;
        let child = this.scrollView.getChildByName(group_name).getChildByName(child_name);
        
        let question = child.getChildByName("question") as Laya.Image;
        if (question)
            question.visible = false;

        this.repeatTimes ++;

        if (this.repeatTimes >= 20) {

            let selected = child.getChildByName("selected") as Laya.Image;
            if (selected)
                selected.visible = false;

            this.selectedIdx = idx;
            Laya.timer.clearAll(this);
            
            let jelly_models_str = localStorage.getItem("jelly_models");
            let jelly_models_parent = JSON.parse(jelly_models_str);
            let jelly_models = jelly_models_parent.data;
            jelly_models[this.selected_arr[this.selectedIdx].idx-1].active = true;

            localStorage.setItem("jelly_models", JSON.stringify({"data":jelly_models}));
            
            GameInfo.models = jelly_models;
            this.selected_arr = [];
            this.selectedIdx = 0;
            this.repeatTimes = 0;
        }                                     
    }

    private selectPlayer(e:Laya.Event):void {
        if(e.target.name.indexOf("_close") == -1) {       
            Sound.playCustomizeSelectSound();
            if (!(e.target.getChildByName("question") as Laya.Image).visible && !(e.target.getChildByName("selected") as Laya.Image).visible) {
                
                let t = e.target.parent;

                for (let i = 0; i < t.numChildren; i ++) {
                    let tt = t.getChildAt(i).getChildByName("selected") as Laya.Image;
                    if (tt)
                        tt.visible = false;
                }

                (e.target.getChildByName("selected") as Laya.Image).visible = true;
                this.model_name = e.target.name;
            }                

        }
    }

    public connect():void {
        this.btn_unlock.on(Laya.Event.MOUSE_DOWN,this,this.onUnlock);

        this.animals_Bear.on(Laya.Event.MOUSE_DOWN, this, this.selectPlayer);
        this.animals_Cat.on(Laya.Event.MOUSE_DOWN, this, this.selectPlayer);
        this.animals_Cheetah.on(Laya.Event.MOUSE_DOWN, this, this.selectPlayer);
        this.animals_Cock.on(Laya.Event.MOUSE_DOWN, this, this.selectPlayer);
        this.animals_Dog.on(Laya.Event.MOUSE_DOWN, this, this.selectPlayer);
        this.animals_Duck.on(Laya.Event.MOUSE_DOWN, this, this.selectPlayer);
        this.animals_Fox.on(Laya.Event.MOUSE_DOWN, this, this.selectPlayer);
        this.animals_Frog.on(Laya.Event.MOUSE_DOWN, this, this.selectPlayer);
        this.animals_Hippo.on(Laya.Event.MOUSE_DOWN, this, this.selectPlayer);
        this.animals_Lion.on(Laya.Event.MOUSE_DOWN, this, this.selectPlayer);
        this.animals_Owl.on(Laya.Event.MOUSE_DOWN, this, this.selectPlayer);
        this.animals_Penguin.on(Laya.Event.MOUSE_DOWN, this, this.selectPlayer);
        this.animals_Pig.on(Laya.Event.MOUSE_DOWN, this, this.selectPlayer);
        this.animals_Racoon.on(Laya.Event.MOUSE_DOWN, this, this.selectPlayer);
        this.animals_Sheep.on(Laya.Event.MOUSE_DOWN, this, this.selectPlayer);
        
        this.heroes_BadGuy.on(Laya.Event.MOUSE_DOWN, this, this.selectPlayer);
        this.heroes_CaptainAmerica.on(Laya.Event.MOUSE_DOWN, this, this.selectPlayer);
        this.heroes_Cowboy.on(Laya.Event.MOUSE_DOWN, this, this.selectPlayer);
        this.heroes_Deadpool.on(Laya.Event.MOUSE_DOWN, this, this.selectPlayer);
        this.heroes_IronMan.on(Laya.Event.MOUSE_DOWN, this, this.selectPlayer);
        this.heroes_Magician.on(Laya.Event.MOUSE_DOWN, this, this.selectPlayer);
        this.heroes_Princess.on(Laya.Event.MOUSE_DOWN, this, this.selectPlayer);
        this.heroes_Robin.on(Laya.Event.MOUSE_DOWN, this, this.selectPlayer);
        this.heroes_PinkGuy.on(Laya.Event.MOUSE_DOWN, this, this.selectPlayer);
        
        this.jelly_blue_guy.on(Laya.Event.MOUSE_DOWN, this, this.selectPlayer);
        this.jelly_bright_blue_girl.on(Laya.Event.MOUSE_DOWN, this, this.selectPlayer);
        this.jelly_green_guy.on(Laya.Event.MOUSE_DOWN, this, this.selectPlayer);
        this.jelly_pink_girl.on(Laya.Event.MOUSE_DOWN, this, this.selectPlayer);
        this.jelly_Snarglius.on(Laya.Event.MOUSE_DOWN, this, this.selectPlayer);
        this.jelly_yellow_guy.on(Laya.Event.MOUSE_DOWN, this, this.selectPlayer);    
        
        this.legendary_Coala.on(Laya.Event.MOUSE_DOWN, this, this.selectPlayer);
        this.legendary_CommandoTiger.on(Laya.Event.MOUSE_DOWN, this, this.selectPlayer);
        this.legendary_Cow.on(Laya.Event.MOUSE_DOWN, this, this.selectPlayer);
        this.legendary_Crock.on(Laya.Event.MOUSE_DOWN, this, this.selectPlayer);
        this.legendary_Lama.on(Laya.Event.MOUSE_DOWN, this, this.selectPlayer);
        this.legendary_Panda.on(Laya.Event.MOUSE_DOWN, this, this.selectPlayer);
        this.legendary_Rabbit.on(Laya.Event.MOUSE_DOWN, this, this.selectPlayer);
        this.legendary_Shark.on(Laya.Event.MOUSE_DOWN, this, this.selectPlayer);
        this.legendary_Sloth.on(Laya.Event.MOUSE_DOWN, this, this.selectPlayer); 
    }
}