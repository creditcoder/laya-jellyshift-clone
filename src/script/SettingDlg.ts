import { ui } from "./../ui/layaMaxUI";
import Sound from "./Sound";

export default class SettingDlg extends ui.SettingSceneUI {
    constructor() {
         super();         
    }  
    public onClosed():void {
        Sound.playCustomizeCloseSound();   
        this.event("close_dlg");             
    }        
}