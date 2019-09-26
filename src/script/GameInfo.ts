export default class GameInfo {

    public static round:number = 6;
    public static jewelCnt:number = 2000;

    // public static baseResPath = "https://beatstreet.digitalgalaxy.cn/jelly/";
    // public static baseResPath = "https://games.gamesafari.cn/jelly/";
    public static baseResPath:string = "http://localhost/jelly/";
    public static round_period:number = 12;
    public static jewel_unit = 5;

    public static models = [
        {"idx":1, "name":"blue_guy", "category":"jelly", "sub_category":"jelly", "active":true, "color":"#1b6efa", "price":500}
        , {"idx":2, "name":"bright_blue_girl", "category":"jelly", "sub_category":"jelly", "active":false, "color":"#1efefd", "price":500}
        , {"idx":3, "name":"green_guy", "category":"jelly", "sub_category":"jelly", "active":false, "color":"#7df81a", "price":500}
        , {"idx":4, "name":"pink_girl", "category":"jelly", "sub_category":"jelly", "active":false, "color":"#e175ff", "price":500}
        , {"idx":5, "name":"Snarglius", "category":"jelly", "sub_category":"jelly", "active":false, "color":"#fdb381", "price":500}
        // , {"idx":5, "name":"red_guy_cube", "category":"jelly", "sub_category":"jelly", "active":false, "color":"#fa246d", "price":500}
        , {"idx":6, "name":"yellow_guy", "category":"jelly", "sub_category":"jelly", "active":false, "color":"#fbe21c", "price":500}
        
        , {"idx":7, "name":"Bear", "category":"animals", "sub_category":"animals1", "active":false, "color":"#ff9e4d", "price":1000}
        , {"idx":8, "name":"Cat", "category":"animals", "sub_category":"animals1", "active":false, "color":"#718ad4", "price":1000}
        , {"idx":9, "name":"Cheetah", "category":"animals", "sub_category":"animals1", "active":false, "color":"#ffc83c", "price":1000}
        , {"idx":10, "name":"Cock", "category":"animals", "sub_category":"animals1", "active":false, "color":"#e70503", "price":1000}
        , {"idx":11, "name":"Dog", "category":"animals", "sub_category":"animals1", "active":false, "color":"#9d8674", "price":1000}
        , {"idx":12, "name":"Duck", "category":"animals", "sub_category":"animals1", "active":false, "color":"#55d044", "price":1000}
        , {"idx":13, "name":"Fox", "category":"animals", "sub_category":"animals2", "active":false, "color":"#ff7f04", "price":1500}
        , {"idx":14, "name":"Frog", "category":"animals", "sub_category":"animals2", "active":false, "color":"#7bdb21", "price":1500}
        , {"idx":15, "name":"Hippo", "category":"animals", "sub_category":"animals2", "active":false, "color":"#7fc9fb", "price":1500}
        , {"idx":16, "name":"Lion", "category":"animals", "sub_category":"animals2", "active":false, "color":"#ffd83c", "price":1500}
        , {"idx":17, "name":"Owl", "category":"animals", "sub_category":"animals2", "active":false, "color":"#e4aaf4", "price":1500}
        , {"idx":18, "name":"Penguin", "category":"animals", "sub_category":"animals2", "active":false, "color":"#263e9a", "price":1500}
        , {"idx":19, "name":"Pig", "category":"animals", "sub_category":"animals2", "active":false, "color":"#fd8ab2", "price":1500}
        , {"idx":20, "name":"Racoon", "category":"animals", "sub_category":"animals2", "active":false, "color":"#475068", "price":1500}
        , {"idx":21, "name":"Sheep", "category":"animals", "sub_category":"animals2", "active":false, "color":"#d4e7e6", "price":1500}
    
        , {"idx":22, "name":"BadGuy", "category":"heroes", "sub_category":"heroes", "active":false, "color":"#6df889", "price":2000}
        , {"idx":23, "name":"CaptainAmerica", "category":"heroes", "sub_category":"heroes", "active":false, "color":"#f44816", "price":2000}
        , {"idx":24, "name":"Cowboy", "category":"heroes", "sub_category":"heroes", "active":false, "color":"#fcb280", "price":2000}
        , {"idx":25, "name":"Deadpool", "category":"heroes", "sub_category":"heroes", "active":false, "color":"#4aa0d6", "price":2000}
        , {"idx":26, "name":"IronMan", "category":"heroes", "sub_category":"heroes", "active":false, "color":"#ffff3c", "price":2000}
        , {"idx":27, "name":"Magician", "category":"heroes", "sub_category":"heroes", "active":false, "color":"#fdb381", "price":2000}
        , {"idx":28, "name":"PinkGuy", "category":"heroes", "sub_category":"heroes", "active":false, "color":"#fd68d3", "price":2000}
        , {"idx":29, "name":"Princess", "category":"heroes", "sub_category":"heroes", "active":false, "color":"#4be9fe", "price":2000}
        , {"idx":30, "name":"Robin", "category":"heroes", "sub_category":"heroes", "active":false, "color":"#7fbb61", "price":2000}
        // , {"idx":31, "name":"Snarglius", "category":"heroes", "sub_category":"heroes", "active":false, "color":"#fdb381", "price":2000}
    
        , {"idx":31, "name":"Coala", "category":"legendary", "sub_category":"legendary", "active":false, "color":"#a085a0", "price":2500}
        , {"idx":32, "name":"CommandoTiger", "category":"legendary", "sub_category":"legendary", "active":false, "color":"#fa850a", "price":2500}
        , {"idx":33, "name":"Cow", "category":"legendary", "sub_category":"legendary", "active":false, "color":"#979797", "price":2500}
        , {"idx":34, "name":"Crock", "category":"legendary", "sub_category":"legendary", "active":false, "color":"#c3faa9", "price":2500}
        , {"idx":35, "name":"Lama", "category":"legendary", "sub_category":"legendary", "active":false, "color":"#cb9258", "price":2500}
        , {"idx":36, "name":"Panda", "category":"legendary", "sub_category":"legendary", "active":false, "color":"#c4bbbc", "price":2500}
        , {"idx":37, "name":"Rabbit", "category":"legendary", "sub_category":"legendary", "active":false, "color":"#ffa6df", "price":2500}
        , {"idx":38, "name":"Shark", "category":"legendary", "sub_category":"legendary", "active":false, "color":"#79fdfe", "price":2500}
        , {"idx":39, "name":"Sloth", "category":"legendary", "sub_category":"legendary", "active":false, "color":"#ecdc91", "price":2500}
    ];

    public static jewel_init_x = 337;
    public static jewel_init_y = 618;

    public static anim_pos_category = [
		[
			[GameInfo.jewel_init_x, GameInfo.jewel_init_y],
			[350, 500],
			[400, 410],
			[426, 330],
			[456, 260],
			[476, 180],
			[500, 120],
			[566, 90],
			[577, 74]
		],
		[
			[GameInfo.jewel_init_x, GameInfo.jewel_init_y],
			[370, 520],
			[396, 480],
			[420, 360],
			[430, 300],
			[440, 200],
			[520, 150],
			[556, 85],
			[577, 74]
		],
		[
			[GameInfo.jewel_init_x, GameInfo.jewel_init_y],
			[340, 540],
			[360, 420],
			[406, 330],
			[436, 250],
			[455, 180],
			[495, 130],
			[560, 80],
			[577, 74]
		]
	];

    public static emojis:Array<string> = [
        "Angry"//example, whole, Buble_Ancer
        , "Emoji_All"//"All_Emoji_Scaller"
        , "Scarred"//"example","whole", "Buble_Ancer"
        , "Smile"//"example","whole","Buble_Ancer"
        , "Tongue"//
        , "Wink"//
        , "Worried"//
        , "Worried2" //       
    ];

    public static food_array:Array<string> = [
        "apple"
        , "banana"
        , "blackberry"
        , "cake"
        , "can"
        , "cherry"
        , "coconut"
        , "cupcake"
        , "donut"
        , "gummybear"
        , "ice_cream"
        , "lollypop"
        , "pear"
        , "slushy"
        , "strawberry"
        , "watermelon"
    ];  
    
    //not used
    public static food_jewel_array:Array<number> = [
        50//"apple"
        , 50//"banana"
        , 50//"blackberry"
        , 50//"cake"
        , 50//"can"
        , 50 //"cherry"
        , 50//"coconut"
        , 50//"cupcake"
        , 50//"donut"
        , 50//"gummybear"
        , 50//"ice_cream"
        , 50//"lollypop"
        , 50//"pear"
        , 50//"slushy"
        , 50//"strawberry"
        , 50//"watermelon"
    ];  
    
    public static particlce_info = {//Sprite3D
        "FireworkSky":[//ShuriKenParticle3D
            "SphereGlow"
            , "Sparks"
            , "Smoke"
            , "FireTrail"
        ]
        , "Rocket":[//Sprite3D
            "Rocket_bullet"//MeshSprite3D
        ]
        , "FireworkEndExplosion":[//ShuriKenParticle3D
            "SphereGlow"
            ,"Sparks"
            ,"Smoke"
            ,"FireTrail"
        ]
        , "FireworkBall":[//ShuriKenParticle3D
            "FireTrail"
            ,"SparkTrail"
            ,"SmokeTrail"
        ]
        , "Firework":[//Sprite3D
            "firework"//MeshSprite3D
            ,"RocketMissilePurple"//ShuriKenParticle3D
        ]
        , "Balloon":[//Sprite3D
            "Shark_gun_water_baloon"//MeshSprite3D
        ]
    };

    public static resArray = [
        "res/atlas/Images.atlas"
        , "res/atlas/Images.png"
        , "res/atlas/resources/icons.atlas"
        , "unity/model/player.lh"
        , "unity/model/food.lh"
        , "unity/model/Emojis.lh"
        , "unity/model/particle.lh"
        , "unity/trail/Cube.lh"
        , {url:"res/particles/glow_jiesuan.png",type: Laya.Loader.IMAGE },
		  {url:"res/particles/Jiesuan_eff.part",type: Laya.Loader.JSON },
		  {url:"res/particles/heart.png",type: Laya.Loader.IMAGE },
		  {url:"res/particles/texture.png",type: Laya.Loader.IMAGE },
		  {url:"res/particles/RadiusMode.part",type: Laya.Loader.JSON },
		  {url:"res/particles/particleNew.part",type: Laya.Loader.JSON },
		  {url:"res/particles/GravityMode.part",type: Laya.Loader.JSON }
    ];
 
    public static org_velocity = 0.3;

    public static GAME_STATE:number = 0;// 0: ready, 1:running, 2:end,
    public static modelName:string =  GameInfo.models[0].category + "_" + GameInfo.models[0].name;    
    
    public static eatJewelCnt:number = 0;
    public static coinCnt:number = 0;
    public static targetFood:number = 0;
    public static targetFoodEat:boolean = false;

    public static curFoodLen:number = 0;
    public static curPassedLen:number = 0;
    public static maxLevelLen:number = 100;

    public static curPhisingValue:number = 0;
    public static maxPhisingValue:number = 100;
    public static deltaPhisingValue:number = 20;
    
    public static isJewelsRound:boolean = false;
    public static terrainNum:number = 0;
    public static terrainCol:Laya.Color;
    public static terrainSky:Laya.Color;

    public static groundColor:string = "ffffff";
    
    public static scene:Laya.Scene3D;
    public static current_fever = 0;
    public static fever_ok:boolean = false;

    public static InitGameInfo() {
        GameInfo.GAME_STATE = 0;
        GameInfo.curPassedLen = 0;
        GameInfo.curFoodLen = 0;
        GameInfo.fever_ok = false;

        GameInfo.storeGameStatus();
        GameInfo.GetLoadLevel();
        GameInfo.GetTargetFoodIndex();
        GameInfo.isJewelsLevel();
        GameInfo.GetTerrainInfo();

        GameInfo.eatJewelCnt = 0;
    }

    public static storeGameStatus():void {
        localStorage.setItem("jelly_state", GameInfo.GAME_STATE.toString());        
        localStorage.setItem("jelly_player_pass", GameInfo.curPassedLen.toString());        
        localStorage.setItem("jelly_food_pass", GameInfo.curFoodLen.toString());        

        localStorage.setItem("jelly_round", GameInfo.round.toString());        
        localStorage.setItem("jelly_jewel", GameInfo.jewelCnt.toString());        
        localStorage.setItem("jelly_coin", GameInfo.coinCnt.toString());      

        localStorage.setItem("jelly_target_food", GameInfo.targetFood.toString());                                          
        localStorage.setItem("jelly_models", JSON.stringify({"data":GameInfo.models}));
    }

    // load save level data
    public static GetLoadLevel() {
        let current_round = parseInt(localStorage.getItem("jelly_round"));
        GameInfo.round = current_round + 1; 
        
        let current_coinCnt = parseInt(localStorage.getItem("jelly_coin"));
        GameInfo.coinCnt = current_coinCnt + 1;

        let current_jewelCnt = parseInt(localStorage.getItem("jelly_jewel"));
        GameInfo.jewelCnt = current_jewelCnt;

        if (GameInfo.targetFoodEat) {
            let target_food = parseInt(localStorage.getItem("jelly_target_food"));
            GameInfo.targetFood ++;       
            if (GameInfo.targetFood > 15)
                GameInfo.targetFood = 0;
        }      
    }

    public static GetTerrainInfo() {
        GameInfo.terrainNum = GameInfo.round % GameInfo.round_period;
        if (GameInfo.terrainNum == 0)
            GameInfo.terrainNum = GameInfo.round_period;
        GameInfo.terrainCol = ( GameInfo.isJewelsRound )?Laya.Color.YELLOW:Laya.Color.GRAY;
        var colorList = [Laya.Color.RED, Laya.Color.GREEN, Laya.Color.BLUE, Laya.Color.MAGENTA, Laya.Color.CYAN];
        GameInfo.terrainSky = colorList[GameInfo.round % 5];
    }

    public static GetPhisingPercent():number {
        var percent = GameInfo.curPhisingValue/GameInfo.maxPhisingValue;
        return percent;
    }
    public static GetPassedLevelPercent():number {
        return GameInfo.curPassedLen/GameInfo.maxLevelLen;
    }
    public GetMaxLVLength():number {
        return GameInfo.maxLevelLen;
    }
    public GetPassedLVLength():number {
        return GameInfo.curPassedLen;
    }

    public static getTerrainLength(round:number):number {
        let terr_len_arr = [
            100, 150, 120, 130, 150
        ];
        let idx = round%5;
        if (idx == 0)
            idx = 5;
        return terr_len_arr[idx-1];
    }
    
    public static GetTargetFoodIndex():number{
        if( GameInfo.round % 4 == 0 )   
            return -1;
        
        return GameInfo.targetFood;
    }

    public static getFoodName():string {
        let ret = "";
        ret = GameInfo.food_array[GameInfo.GetTargetFoodIndex()];
        return ret;
    }
    
    public static getFoodArray():Array<string> {
        if (GameInfo.isJewelsRound)
            return [];
            
        let from_idx = Math.floor(GameInfo.targetFood/3)*3;
        let to_idx = Math.floor(GameInfo.targetFood/3+1)*3;
        let ret_arr = GameInfo.food_array.slice(from_idx, to_idx);      
        let idx2 = GameInfo.targetFood%3;
        
        for (let i = 0; i< 3; i++) {
            ret_arr[i] = ret_arr[i]+"_"+((i>idx2)?"disabled":"enabled")+".png";            
        }      

        return ret_arr;
    }

    public static getPos(obj1, obj2):Array<number> {
		let x:number = Math.abs(obj1.width - obj2.width)/2;
		let y:number = Math.abs(obj1.height - obj2.height)/2;
		return [x, y];
    }

    public static getRoundJewelCnt():number {
        let ret = 30;
        if (GameInfo.round > 4)
            ret = 40;
        return ret;
    }

    public static isJewelsLevel():Boolean {
        GameInfo.isJewelsRound =  (GameInfo.round % 4 == 0);
        return GameInfo.isJewelsRound;
    }

    public static isCurveLevel():Boolean {
        let isCurveRound =  ((GameInfo.round+1) % 4 == 0);
        return isCurveRound;
    }

    public SetCoin() {
       
    }

    public static GetObstacleCount():number {
        var translevel = this.scene.getChildByName("Level");
        var obstacles = translevel.getChildByName("obstacles");
    
        return obstacles.numChildren;
    }

    public static setGroundColor(group, player):void {
        let hex = "#ffffff";
        for (let i = 0 ; i < GameInfo.models.length; i ++) {
            if (GameInfo.models[i].category == group && GameInfo.models[i].name == player)
                GameInfo.groundColor = GameInfo.models[i].color;    
        }         
    }

    public static getGroundColor():Laya.Vector4 {
        var temp = this.calcRGB(GameInfo.groundColor);
        temp.w = 0.3;
        return temp;
    }

    public static getJewelGroundColor():Laya.Vector4 {
        var temp = this.calcRGB("#FFFF99");
        temp.w = 0.5;
        return temp;
    }

    public static getSkyColor():Laya.Vector4 {

        let arr = ["#e06cff", "#00ff00", "#0000ff", "#ffff00", "#BA1FDE","#00ffff", "#ff00ff","#ff0000"];
        //let cl = Math.floor(Math.random()*6);
        //console.log(cl);
        let ret = this.calcRGB(arr[GameInfo.round % 8]);

        return ret;
    }

    public static calcRGB(hex:string):Laya.Vector4 {
        let r = GameInfo.hexToR(hex);
        let g = GameInfo.hexToG(hex);
        let b = GameInfo.hexToB(hex);
        
        let ret = new Laya.Vector4(r/255, g/255, b/255, 1);
        return ret;
    }

    public static hexToR(h) {return parseInt((this.cutHex(h)).substring(0,2),16)}
    public static hexToG(h) {return parseInt((this.cutHex(h)).substring(2,4),16)}
    public static hexToB(h) {return parseInt((this.cutHex(h)).substring(4,6),16)}
    public static cutHex(h) {return (h.charAt(0)=="#") ? h.substring(1,7):h}
  
}