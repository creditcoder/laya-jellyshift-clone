import { ui } from "./../ui/layaMaxUI";
import Sound from "./Sound";

export default class SettingDlg extends ui.SettingSceneUI {
    constructor() {
        super();         

        this.chk_haptic.on("change", this, this.onHapticChange);
        this.chk_sound.on("change", this, this.onSoundChange);
    }  

    public onOpened():void{
        let sound_active = localStorage.getItem("jelly_sound");
        let haptic_active = localStorage.getItem("jelly_haptic");
        Sound.sound_active = (sound_active == "true")?true:false;        

        this.chk_sound.selected = sound_active == "false"?false:true;
        this.chk_haptic.selected = haptic_active == "false"?false:true;        
    }

    public onHapticChange():void {

        let selected = this.chk_haptic.selected;
        localStorage.setItem("jelly_haptic", selected.toString());
       
        this.event("haptic_changed");
    }

    public onSoundChange():void {
        let selected = this.chk_sound.selected;
        localStorage.setItem("jelly_sound", selected.toString());

        this.event("sound_changed");
    }

    public onClosed():void {
        Sound.playCustomizeCloseSound();   
        this.event("close_dlg");             
    }        
}