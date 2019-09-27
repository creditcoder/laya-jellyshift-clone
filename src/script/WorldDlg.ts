import { ui } from "./../ui/layaMaxUI";
import Sound from "./Sound";

export default class CustomizeDlg extends ui.WorldSceneUI {
    constructor() {
        super();      
         
        let sound_active = localStorage.getItem("jelly_sound");
        Sound.sound_active = (sound_active == "true")?true:false;        
    }

    public onClosed():void {
        Sound.playCustomizeCloseSound();   
        this.event("close_dlg");             
    }
}