export default class Sound {
    public static play(snd_path):void {
        Laya.SoundManager.playSound("sounds/" + snd_path + ".mp3", 1, null);
    }

    public static playGameStartSound():void {
        this.play("GameStart");        
    }
    public static playCatchFoodSound():void {
        this.play("CatchFood");        
    }
    public static playHitObstacleSound():void {
        this.play("HitObstacle");        
    }
    public static playLevelCompleteSound():void {
        this.play("LeveCompleteUIAppear");        
    }
    public static playGemCounterSound():void {
        this.play("GemCounter");        
    }
    public static playGemRushGemSound():void {
        this.play("GemRushGem");        
    }
    public static playReachFinishSound():void {
        this.play("ReachFinish");        
    }
    public static playShapePerfectSound():void {
        this.play("ShapePerfect1");        
    } 
    public static playFeverStartSound():void {
        this.play("FeverStart");        
    }
    public static playFeverLoopSound():void {
        this.play("FeverLoop");        
    }    
    public static playFeverDestroySound():void {
        this.play("FereverDestroyObstacle");        
    }  
    public static playFallSound():void {
        this.play("Fall");        
    }   
    public static playJellyLandSound():void {
        this.play("JellyLand");
    }
    public static playCustomizeCloseSound():void {
        this.play("CustomizeClose");
    }
    public static playCustomizeOpenSound():void {
        this.play("CustomizeOpen");
    }
    public static playCustomizeRandomSound():void {
        this.play("CustomizeRandomBleep");
    }
    public static playCustomizeSelectSound():void {
        this.play("CustomizeSelect");
    }    
}