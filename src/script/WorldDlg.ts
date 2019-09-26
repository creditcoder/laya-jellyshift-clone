import { ui } from "./../ui/layaMaxUI";
import Sound from "./Sound";

export default class CustomizeDlg extends ui.WorldSceneUI {
    constructor() {
         super();                  
    }

    public onClosed():void {
        Sound.playCustomizeCloseSound();   
        this.event("close_dlg");             
    }
}