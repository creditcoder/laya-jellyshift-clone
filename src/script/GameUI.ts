import { ui } from "./../ui/layaMaxUI";
import CameraMoveScript from "./../common/CameraMoveScript";
import TriggerCollisionScript from "./../common/TriggerCollisionScript";
import TriggerCollisionScript4Jewel from "../common/TriggerCollisionScript4Jewel";
import Player from "./../script/Player";
import CameraFollow from "../script/CameraFollow";
import SettingDlg from "./../script/SettingDlg";
import CustomizeDlg from "./../script/CustomizeDlg";
import ProgressView from "./../script/ProgressView";
import WorldDlg from "./../script/WorldDlg";
import GameInfo from "./../script/GameInfo";
import Food from "./Food";
import Sound from "./Sound";

export default class GameUI extends ui.GameSceneUI {

	public settingDlg: SettingDlg = new SettingDlg();
	public customizeDlg: CustomizeDlg = new CustomizeDlg();
	public worldDlg: WorldDlg = new WorldDlg();
	public static progressView: ProgressView = null;

	private character: Laya.MeshSprite3D;

	private curScene:Laya.Scene3D;
	private curCamera: Laya.Camera;
	private player_body: Laya.MeshSprite3D;
	private food_model: Laya.Sprite3D;
	private food_pointer: Food;
	private player_pointer:Player;

	private initial_avatar_x = this.avatar.x;//initial value of avatar x.
	private initial_food_x = this.fruit.x;// initial value of fruit x.
	private path_right_x = this.path.x + this.path.width;//right point of path

	private sp:Laya.Particle2D;

	constructor() {
		super();
		
		this.connect();
		this.displaySplash();	
		
		this.jewel_img_arr[0] = this.eat_jewel_img0;
		this.jewel_img_arr[1] = this.eat_jewel_img1;
		this.jewel_img_arr[2] = this.eat_jewel_img2;
		this.jewel_img_arr[3] = this.eat_jewel_img3;
		this.jewel_img_arr[4] = this.eat_jewel_img4;
		this.jewel_img_arr[5] = this.eat_jewel_img5;
		this.jewel_img_arr[6] = this.eat_jewel_img6;
		this.jewel_img_arr[7] = this.eat_jewel_img7;
		this.jewel_img_arr[8] = this.eat_jewel_img8;
		this.jewel_img_arr[9] = this.eat_jewel_img9;

		this.loading_anim.loadAtlas("res/atlas/loading.atlas", Laya.Handler.create(this, this.onLoadingAnimLoaded));
		this.eat_anim.loadAtlas("res/atlas/food_particle.atlas", Laya.Handler.create(this, this.onLoadingAnimLoaded));
		
	}

	private connect():void {
		this.btn_setting.on(Laya.Event.MOUSE_DOWN, this, this.showSettingDlg);
		this.btn_customize.on(Laya.Event.MOUSE_DOWN, this, this.showCustomizeDlg);
		this.btn_world.on(Laya.Event.MOUSE_DOWN, this, this.showWorldDlg);
		this.btn_next.on(Laya.Event.MOUSE_DOWN, this, this.nextRound);
		this.btn_continue.on(Laya.Event.MOUSE_DOWN, this, this.restartRound);

		////////customize dlg///////////////////////////////////////
		this.customizeDlg.on("select_player", this, this.initPlayer);
		this.customizeDlg.on("close_dlg", this, this.closeCustomDlg);
		this.customizeDlg.on("update_jewel", this, this.updateJewel);		
	}

	private displaySplash(): void {
		GameUI.progressView = new ProgressView();
		GameUI.progressView.on("splash_finish", this, this.startResourceLoading);
		Laya.stage.addChild(GameUI.progressView);
	}

	private startResourceLoading():void {

		GameUI.progressView.off("splash_finish", this, this.startResourceLoading);
		GameUI.progressView.on("load_finish", this, this.enterRound);
		Laya.loader.create(GameInfo.resArray, Laya.Handler.create(GameUI.progressView, GameUI.progressView.onLoadComplete, null, false));
		Laya.URL.basePath = GameInfo.baseResPath;		
	}

	public initGameInfo4Food():void {
		if (!this.food_pointer)
			return;
		this.food_pointer.updateGameState(GameInfo.GAME_STATE);	
		this.food_pointer.updatePassLen(GameInfo.curFoodLen);	
	}

	private anim_pos_array = [];
	private jewel_img_arr = [];

	public nextRound():void {
		Sound.playLevelCompleteSound();

		if (parseInt(this.eat_jewel_cnt.text) > 0) {
			if (GameInfo.IsJewlsLevel()) {
				let cj = parseInt(this.current_jewel.text);
				let ej = parseInt(this.eat_jewel_cnt.text);
				cj += ej;
				this.current_jewel.text = cj.toString();

				this.calcJewelAndGoNext();
			} else {
				for (let i = 0; i < this.jewel_img_arr.length; i ++) {
					this.arr_idx_arr[i] = Math.floor(Math.random()*3);
				}
				Laya.timer.loop(100, this, this.animate4Jewel);		
			}			
		} else {
			this.calcJewelAndGoNext();
		}
	}

	private jewel_desc_delta = 0;
	private jewel_anim_order = 0;
	private arr_idx_arr = [];
	private animate4Jewel():void {
		this.jewel_anim_order ++;
		if (parseInt(this.eat_jewel_cnt.text) > 0) {
			Sound.playGemRushGemSound();
			this.eat_jewel_cnt.text = (parseInt(this.eat_jewel_cnt.text)-this.jewel_desc_delta).toString();
			this.current_jewel.text = (parseInt(this.current_jewel.text)+this.jewel_desc_delta).toString();

			for (let i = 0; i < this.jewel_img_arr.length; i ++) {
				
				this.anim_pos_array = GameInfo.anim_pos_category[this.arr_idx_arr[i]];
				if (i >= this.jewel_anim_order)
					continue;

				let tmp = this.jewel_img_arr[i] as Laya.Image;
				let img_pos_indr = -1;

				for (let j = 0; j < this.anim_pos_array.length; j ++) {
					if (this.anim_pos_array[j][0] == tmp.x && this.anim_pos_array[j][1] == tmp.y)
						img_pos_indr = j;
				}

				if (img_pos_indr > -1 && img_pos_indr < this.anim_pos_array.length - 1) {
					tmp.x = this.anim_pos_array[img_pos_indr + 1][0]; // move to the next point in pos_array
					tmp.y = this.anim_pos_array[img_pos_indr + 1][1];	
				} 				
			}		
		} else {
			Laya.timer.clearAll(this);
			this.calcJewelAndGoNext();
		}
	}

	private calcJewelAndGoNext():void {
		GameInfo.jewelCnt = parseInt(this.current_jewel.text);
		localStorage.setItem("jelly_jewel", this.current_jewel.text);
		this.enterRound();
	}

	private restartRound():void {
		
		GameInfo.round -- ;
		localStorage.setItem("jelly_round", GameInfo.round.toString());
		this.enterRound();
	}

	private enterRound(): void {

		GameInfo.InitGameInfo();
		this.initGameInfo4Food();
		this.resetUI();		
		
		let old_scene = Laya.stage.getChildByName("jelly_scene");
		if (old_scene) {
			old_scene.destroy();
			old_scene = null;
			this.curScene = null;
			Laya.Resource.destroyUnusedResources();
		}	

		var self = this;
		Laya.loader.load([
			"res/atlas/Images.atlas", 
			"res/atlas/resources/icons.atlas"
		], Laya.Handler.create(null, function(){
			self.initScene();		
		}));		
		Laya.URL.basePath = GameInfo.baseResPath;
	}

	private initScene(): void {
		var self = this;

		this.loading_anim.visible = true;
		
		Laya.Scene3D.load("unity/round/terrain" + GameInfo.terrainNum + ".ls", Laya.Handler.create(null, function(scene:Laya.Scene3D) {
			self.initSceneImpl(scene);   			         
        }))
		Laya.URL.basePath = GameInfo.baseResPath;
	}

	private onLoadingAnimLoaded():void {
		
	}

	public showFoodEatPtcl():void {
		this.eat_anim.visible = true;
	}

	public hideFoodEatPtcl():void {
		this.eat_anim.visible = false;
	}

	private _quaternion: Laya.Quaternion = new Laya.Quaternion();
	private _direction : Laya.Vector3 = new Laya.Vector3();
	public initSceneImpl(scene:Laya.Scene3D):void {
		this.loading_anim.visible = false;
		this.btn_tuple.visible = true;
		this.curScene = scene;
		this.curScene.name = "jelly_scene";
		Laya.stage.addChild(this.curScene);
		Laya.stage.setChildIndex(this.curScene, 0);

		this.curCamera = this.curScene.getChildByName("Main Camera") as Laya.Camera;
		this.curCamera.transform.position = new Laya.Vector3(this.curCamera.transform.position.x, this.curCamera.transform.position.y, this.curCamera.transform.position.z - 1);

		GameInfo.scene = this.curScene;	

		var dlight = this.curScene.getChildByName("Directional light") as Laya.DirectionLight;
		//dlight.intensity = 0.5;
		
		// var dlight:Laya.DirectionLight = this.curScene.addChild(new Laya.DirectionLight()) as Laya.DirectionLight;
		// dlight.color = new Laya.Vector3(1, 1, 1);
		// dlight.transform.translate(new Laya.Vector3(0, 3, 0));
        // dlight.transform.rotate(new Laya.Vector3(-3.14 / 3, 0, 0.0));
		
		// dlight.shadow = true;
		// dlight.shadowDistance = 3;
		// dlight.shadowResolution = 2048;
		// dlight.shadowPSSMCount = 1;
		// dlight.shadowPCFType = 3;


		// Laya.timer.frameLoop(1, this, function (): void {
        //     Laya.Quaternion.createFromYawPitchRoll(0.025, 0, 0, this._quaternion);
        //     dlight.transform.worldMatrix.getForward(this._direction);
        //     Laya.Vector3.transformQuat(this._direction, this._quaternion,this._direction);
        //     var mat = dlight.transform.worldMatrix;
        //     mat.setForward(this._direction);
        //     dlight.transform.worldMatrix = mat;     
		// });
		
		//////////////////////////////////////////////////////////////////////////////////////
		// let road_obj:Laya.Sprite3D = this.curScene.getChildByName("RoadObject") as Laya.Sprite3D;
		// for (let i = 0; i < road_obj.numChildren; i ++) {
		// 	(road_obj.getChildAt(i) as Laya.MeshSprite3D).meshRenderer.castShadow = true;
		// 	(road_obj.getChildAt(i) as Laya.MeshSprite3D).meshRenderer.receiveShadow = true;
		// }		

		// let ground_obj:Laya.MeshSprite3D = this.curScene.getChildByName("Level").getChildAt(0).getChildByName("ground") as Laya.MeshSprite3D;
		// ground_obj.meshRenderer.castShadow = false;
		// ground_obj.meshRenderer.receiveShadow = true;

		// let obs_obj:Laya.Sprite3D = this.curScene.getChildByName("Level").getChildByName("obstacles") as Laya.Sprite3D;
		// for (let i = 0; i < obs_obj.numChildren; i ++) {
		// 	(obs_obj.getChildAt(i) as Laya.MeshSprite3D).meshRenderer.castShadow = true;
		// 	(obs_obj.getChildAt(i) as Laya.MeshSprite3D).meshRenderer.receiveShadow = true;
		// }		
		
///////////////////////////////////////////////////////////////////////////////////////////////////
		//(this.curScene.getChildAt(3) as Laya.MeshSprite3D).meshRenderer.receiveShadow = true;

		// return;
		// let ground = this.curScene.getChildByName("Level").getChildAt(0).getChildByName("ground") as Laya.MeshSprite3D;
		// ground.meshRenderer.receiveShadow = true;


		this.pillar_proc();
		if (GameInfo.IsJewlsLevel()) {
			this.jewel_proc();
		}
		
		this.SetSkyInfo();
		this.initPlayer();
		this.initFood();
		this.initUiInfo();		

		if (!GameInfo.IsJewlsLevel())
			return;

		var loaddata= [
			{url:"res/particles/glow_jiesuan.png",type: Laya.Loader.IMAGE },
			{url:"res/particles/Jiesuan_eff.part",type: Laya.Loader.JSON },
			{url:"res/particles/heart.png",type: Laya.Loader.IMAGE },
			{url:"res/particles/texture.png",type: Laya.Loader.IMAGE },
			{url:"res/particles/RadiusMode.part",type: Laya.Loader.JSON },
			{url:"res/particles/particleNew.part",type: Laya.Loader.JSON },
			{url:"res/particles/GravityMode.part",type: Laya.Loader.JSON }			
		]
		Laya.loader.load(loaddata, Laya.Handler.create(this, this.initParticle2D));	
	}

	private initPlayer():void {//player_group name, player name
		
		let model_name_arr = GameInfo.modelName.split('_');
		let group_name = model_name_arr[0];
		let player_name = model_name_arr[1];
		if (model_name_arr[2])
			player_name = player_name += "_" + model_name_arr[2];
		if (model_name_arr[3])
			player_name = player_name += "_" + model_name_arr[3];

		let pos_vtr;
		let tmp = this.curScene.getChildByName("jelly") as Laya.MeshSprite3D;
		
		if(tmp == null) {
			tmp = (this.curScene.getChildByName("jellyBox") as Laya.MeshSprite3D).getChildByName("jelly") as Laya.MeshSprite3D;			
		}			
			
		if (tmp) {
			pos_vtr = tmp.transform.position;
			pos_vtr.y = 0.258;
			tmp.destroy();
			tmp = null;	
		}	
		
		let player_list;
		if (!player_list)
			player_list = Laya.loader.getRes("unity/model/player.lh") as Laya.Sprite3D;
		let player_group = player_list.getChildByName(group_name);
		let player_body_org = player_group.getChildByName(player_name) as Laya.MeshSprite3D;
		this.player_body = Laya.MeshSprite3D.instantiate(player_body_org) as Laya.MeshSprite3D;
		this.player_body.active = true;
		this.player_body.name = "jelly";

///////////////////////////////////////////////
		var rigidBody = this.player_body.addComponent(Laya.Rigidbody3D) as Laya.Rigidbody3D;
		this.player_body.getChildAt(0).getChildAt(0).active = false;
		rigidBody.colliderShape = new Laya.BoxColliderShape(1.3,1,1);
		this.player_body.getChildAt(1).name = "jelly";
		rigidBody.colliderShape.localOffset.y = 0.5;
		rigidBody.mass = 100;
		rigidBody.friction = 0;	
		rigidBody.rollingFriction = 0;

//////////////////////////////////////////////
		
		this.player_body.transform.position = pos_vtr;		
		
		this.player_body.on("update_path", this, this.updateAvatarPath);
		this.player_body.on("update_pass", this, this.updateFeverUp);
		this.player_body.on("game_started", this, this.startRound);
		this.player_body.on("game_failed", this, this.stopRound);
		this.player_body.on("game_ended", this, this.endRound);
		
		this.player_pointer = this.player_body.addComponent(Player) as Player;
		this.player_pointer.startFollow(this.curScene, this.curCamera, 0.2);		
		
		/////////////////////////set groundColor
		this.setRoundColors(group_name, player_name);		
		
	}	

	private initFood():void {
		let food_idx =  GameInfo.GetTargetFoodIndex();
		
		let food_list = Laya.loader.getRes("unity/model/food.lh") as Laya.Sprite3D;
		
		let food_tmp = food_list.getChildAt(food_idx) as Laya.Sprite3D;
		if (!food_tmp) { //jewel round
			return;
		}
			
		this.food_model = Laya.MeshSprite3D.instantiate(food_tmp) as Laya.MeshSprite3D;
		this.food_model.name = GameInfo.getFoodName();
		this.food_model.active = true;		
		
		(this.food_model as Laya.MeshSprite3D).meshRenderer.castShadow = true;
		/////////////////////////////////////////////////////////////////////////
		// let emoji_list = Laya.loader.getRes("unity/model/Emojis.lh") as Laya.Sprite3D;
		// let emoji:Laya.Sprite3D = emoji_list.getChildByName("Scarred") as Laya.Sprite3D;
		// // let emoji:Laya.Sprite3D = emoji_tmp.getChildByName("example") as Laya.Sprite3D;
		// if (emoji) {
		// 	emoji.active = true;
			
		// 	emoji.transform.position = new Laya.Vector3(this.player_body.transform.position.x, this.player_body.transform.position.y+1, this.player_body.transform.position.z);
		// 	// this.food_model.addChild(emoji);
		// 	this.curScene.addChild(emoji);

		// 	var animator1 = emoji.getComponent(Laya.Animator) as Laya.Animator;
		// 	if( animator1 != null )
		// 	{
		// 		animator1.play("Start"); 
		// 	}
		// }			
		/////////////////////////////////////////////////////////////////////////

		this.curScene.addChild(this.food_model);
		this.food_model.transform.position = new Laya.Vector3(this.player_body.transform.position.x, this.player_body.transform.position.y, this.player_body.transform.position.z-3);
		this.food_model.on("update_path", this, this.updateFoodPath);
		this.food_model.on("food_destroy", this, this.destroyFood);
		this.food_pointer = this.food_model.addComponent(Food);
		this.food_pointer.startFollow(this.curScene, this.curCamera);
	}

	public setRoundColors(group_name:string, player_name:string):void {
		GameInfo.setGroundColor(group_name, player_name);
		let cube = this.curScene.getChildByName("Cube").getChildByName("Cube (1)") as Laya.MeshSprite3D;
		((cube.meshRenderer as Laya.MeshRenderer).sharedMaterial as Laya.BlinnPhongMaterial).albedoColor = GameInfo.getGroundColor();
		let cube_down_side = this.curScene.getChildByName("Cube Down Side").getChildByName("Cube (1)") as Laya.MeshSprite3D;
		((cube_down_side.meshRenderer as Laya.MeshRenderer).sharedMaterial as Laya.BlinnPhongMaterial).albedoColor = GameInfo.getGroundColor();

		let shader_obs_list = this.curScene.getChildByName("Level").getChildByName("obstacles") as Laya.MeshSprite3D;
		for (let i = 0; i < shader_obs_list.numChildren - 1; i ++) {
			let shader_obs_tmp = shader_obs_list.getChildAt(i);
			if (shader_obs_tmp) {
				for( var s = 0; s < shader_obs_tmp.numChildren-1; s++ )
				{
					(shader_obs_tmp.getChildAt(s) as Laya.MeshSprite3D).meshRenderer.castShadow = true;
				}
				let shader_obs = shader_obs_tmp.getChildByName("particle1") as Laya.MeshSprite3D;
				if (shader_obs)
					for (let j = 0; j < shader_obs.numChildren; j ++) {
						let final_shader = shader_obs.getChildAt(j) as Laya.MeshSprite3D;
						if (final_shader)
						((final_shader.meshRenderer as Laya.MeshRenderer).sharedMaterial as Laya.BlinnPhongMaterial).albedoColor = GameInfo.getGroundColor();
					}					
			}
		}
		
		if (!GameInfo.IsJewlsLevel())
			return;
		let ground_list = this.curScene.getChildByName("Level").getChildByName("1") as Laya.MeshSprite3D;
		for (let i = 0; i < ground_list.numChildren - 1; i ++) {
			let ground_tmp = ground_list.getChildAt(i) as Laya.MeshSprite3D;
			if (ground_tmp) {
				try {
					((ground_tmp.meshRenderer as Laya.MeshRenderer).sharedMaterial as Laya.BlinnPhongMaterial).albedoColor = GameInfo.getJewelGroundColor();
				} catch(e) {
					
				}				
			}
		}
		///////////////////////////////
		let jewel_group_list = this.curScene.getChildByName("Level").getChildByName("jewels") as Laya.MeshSprite3D;
		for (let i = 0; i < jewel_group_list.numChildren - 1; i ++) {
			let jewel_group = jewel_group_list.getChildAt(i);
			if (jewel_group)
				for (let j = 0; j < jewel_group.numChildren; j ++) {
					let jewel_item = jewel_group.getChildAt(j) as Laya.MeshSprite3D;
					if (jewel_item) {						
						this.jewel_arr.push(jewel_item);												
					}
				}								
		}

		Laya.timer.loop(100, this, this.animate4JewelArr);
	}

	private animate4JewelArr():void {
		
		let last_jewel = this.jewel_arr[this.jewel_arr.length - 1];

		if (!last_jewel)
			return;

		if (!last_jewel.transform)
			return;

		let current_scale = last_jewel.transform.localScaleX;

		if (Math.abs(current_scale) >= 0.5) {
			if (this.jewel_expand) {
				current_scale += 0.2;
				if (Math.abs(current_scale) > 1)
					this.jewel_expand = false;
			} else {
				current_scale -= 0.2;
				if (Math.abs(current_scale) < 0.5) {
					this.jewel_expand = true;
					current_scale = 0.5;
				}					
			}			
		}

		for (let i = 0; i < this.jewel_arr.length; i ++) {
			if (!this.jewel_arr[i])
				continue;
			if (!this.jewel_arr[i].transform)
				continue;
			this.jewel_arr[i].transform.localScaleX = current_scale;
			this.jewel_arr[i].transform.localScaleY = current_scale;
			this.jewel_arr[i].transform.localScaleZ = current_scale;
		}
	}

	private jewel_arr = [];
	private jewel_expand:boolean = true;

	public SetSkyInfo() {
		if (this.curCamera) {
			this.curCamera.clearFlag = Laya.BaseCamera.CLEARFLAG_SKY;////CLEARFLAG_SOLIDCOLOR;
			this.curCamera.fieldOfView = 60;
			this.StartSkyProc();
		}	
	}

	public closeCustomDlg():void {
		this.updateCustomState(false);
	}

	public updateJewel(custom_state):void {
		let current_jewel_cnt = localStorage.getItem("jelly_jewel");		
		GameInfo.jewelCnt = parseInt(current_jewel_cnt);
		this.current_jewel.text = current_jewel_cnt;		
	}

	public updateAvatarPath(cur_per):void {

		if (cur_per > 1) {
			cur_per = 1;			
		}			
		else {
			let cur_len = this.path.width * cur_per;
			if (this.path_right_x > this.avatar.x) {
				this.avatar.x = this.initial_avatar_x + cur_len;				
			}		
		}		
	}

	public destroyFood():void {
		this.food_model.active = false;		//invisible food_model
		this.food_model.destroy();
		this.food_model = null;
		
		this.fruit.visible = false;			//invisible food_indr

		GameInfo.targetFoodEat = true;		
		let eat_jewel = 50;
		this.jewel_desc_delta = 2;
		if (GameInfo.targetFood%3 == 2) {
			eat_jewel = 100;
			this.jewel_desc_delta = 4;
		}
			
		this.eat_jewel_cnt.text = eat_jewel.toString();
		GameInfo.eatJewelCnt = eat_jewel;

		Sound.playCatchFoodSound();
		this.showFoodEatPtcl();
		Laya.timer.once(900, this, function(){
			this.hideFoodEatPtcl();
		});
	}

	public updateFoodPath(cur_per):void {

		if (cur_per > 1) {
			cur_per = 1;			
		}			
		else {
			let cur_len = this.path.width * cur_per;
			if (this.path_right_x > this.fruit.x) {
				this.fruit.x = this.initial_food_x + cur_len;				
			}
		}		
	}

	public showSettingDlg(): void {
		this.settingDlg.show();
	}

	public updateCustomState(state):void {
		if (this.player_pointer)
			this.player_pointer.updateCustomState(state);
		if (this.food_pointer)
			this.food_pointer.updateCustomState(state);
	}

	public showCustomizeDlg(): void {
		this.customizeDlg.show();		
		this.updateCustomState(true);
	}

	public showWorldDlg(): void {
		this.worldDlg.show();		
	}

	// ###################################################################
	// Setting Level
	// ###################################################################

	private pillar_proc(): void {
		
		var translevel = this.curScene.getChildByName("Level");
		var obstacles = translevel.getChildByName("obstacles");
		for( var i = 0; i < obstacles.numChildren; i++ ) {
			var subObj = obstacles.getChildAt(i); // sub obstacle
			for( var j = 0; j < subObj.numChildren-1; j++ ) {
				subObj.getChildAt(j).on("trigger", this, this.updateFeverDown);
				subObj.getChildAt(j).addComponent(TriggerCollisionScript);				
			}					
		}	
		
	}

	private jewel_proc(): void {
		
		var translevel = this.curScene.getChildByName("Level");
		var jewel_groups = translevel.getChildByName("jewels");
		for( var i = 0; i < jewel_groups.numChildren; i++ ) {
			var subObj = jewel_groups.getChildAt(i); // sub obstacle
			for( var j = 0; j < subObj.numChildren-1; j++ ) {
				subObj.getChildAt(j).on("trigger", this, this.updateJewelBar);
				subObj.getChildAt(j).addComponent(TriggerCollisionScript4Jewel);				
			}					
		}	
		
	}
	
	public orgSky:Laya.Vector4 = new Laya.Vector4();
	public bSkyChange:boolean = false;
	public skyMat:Laya.PBRStandardMaterial = null;
	public targetSkyColor:Laya.Vector4;
	public targetSkyStep:number;
	public StartSkyProc()
	{
		//var jelly = this.curScene.getChildByName("jellyBox") as Laya.MeshSprite3D;
		this.skyMat = (this.curScene.getChildByName("Plane") as Laya.MeshSprite3D).meshRenderer.material as Laya.PBRStandardMaterial;
		
		let arr = ["#ff0000", "#00ff00", "#0000ff", "#ffff00", "#00ffff", "#ff00ff"];
		this.skyMat.albedoColor = GameInfo.getSkyColor();
		this.orgSky = GameInfo.getSkyColor();
		this.bSkyChange = false;
		Laya.timer.frameLoop(100, this, this.SkyUpdate);
	}
	public SkyUpdate()
	{
		if( !this.bSkyChange )	
			return;
		
		var deltaColor:Laya.Vector4 = new Laya.Vector4();
		Laya.Vector4.subtract(this.targetSkyColor, this.skyMat.albedoColor, deltaColor);
		
		try {
			this.skyMat.albedoColorR += (deltaColor.x/this.targetSkyStep);
			this.skyMat.albedoColorG += (deltaColor.y/this.targetSkyStep);
			this.skyMat.albedoColorB += (deltaColor.z/this.targetSkyStep);
		} catch(e) {
			console.log("this.skyMat...", e.toString());
		}
		
		this.targetSkyStep--;
		if(this.targetSkyStep == 0)	
			this.bSkyChange = false;
	}	
	public SetTargetSky(color:Laya.Vector4, step:number)
	{
		this.targetSkyColor = color;
		this.targetSkyStep = step;
		this.bSkyChange = true;
	}

	public setDarkSky() {
		var gray:Laya.Vector4 = new Laya.Vector4(0, 0, 0, 1);
		this.skyMat.albedoColor = gray;
	}

	public setGraySky() {
		var gray:Laya.Vector4 = new Laya.Vector4(0, 0, 0, 1);
		this.SetTargetSky(gray, 20);
	}
	public setFeverSky() {
		var dlight:Laya.DirectionLight = this.curScene.getChildByName("Directional light") as Laya.DirectionLight;
		dlight.color = new Laya.Vector3(0.8, 1, 0.8);
		dlight.intensity = 0.5;
		var fever:Laya.Vector4 = new Laya.Vector4(0, 1, 0, 1);
		this.SetTargetSky(fever, 3);	
	}

	public setOrgSky()
	{
		var dlight:Laya.DirectionLight = this.curScene.getChildByName("Directional light") as Laya.DirectionLight;
		dlight.color = new Laya.Vector3(1, 1, 1);
		dlight.intensity = 1;
		this.SetTargetSky(this.orgSky, 3);
	}

	public updateFeverUp():void {
		let tot_cnt = GameInfo.GetObstacleCount();
		if( GameInfo.fever_ok )
		{
			GameInfo.current_fever --;
			this.player_body.getComponent(Player).ExplodePillar();
			if(GameInfo.current_fever <= 0)
			{
				GameInfo.fever_ok = false;

				// Sound.playFeverDestroySound();

				this.setOrgSky();
				this.player_body.getComponent(Player).ZoomInCamera();
			} else {
				Sound.playFeverLoopSound();
			}
		}	
		else
		{
			GameInfo.current_fever ++;
			this.player_body.getComponent(Player).ShowTrail(true);
			if(GameInfo.current_fever > 1)
				this.setGraySky();

			if (GameInfo.current_fever >= tot_cnt/3) {
				GameInfo.fever_ok = true;
				
				this.setFeverSky();

				Sound.playFeverStartSound();

				this.player_body.getComponent(Player).ExplodePillar();				
				this.player_body.getComponent(Player).ZoomOutCamera();			
			}			
		}
		this.fever_bar.value = GameInfo.current_fever / (tot_cnt/3);
	}

	public updateFeverDown(block_cnt):void {
		GameInfo.current_fever = 0;
		GameInfo.fever_ok = false;
		this.fever_bar.value = 0;
		
		this.player_body.getComponent(Player).ShowTrail(false);
		this.setOrgSky();
	}

	private initParticle2D(): void {
		if(this.sp==null){

			// Jiesuan_eff.part, RadiusMode.part, particleNew.part, GravityMode.part

			var	settings:Laya.ParticleSetting = Laya.loader.getRes("res/particles/RadiusMode.part")
			this.sp = new Laya.Particle2D(settings);
			this.sp.mouseEnabled = false;
			this.addChild(this.sp);
			
			this.sp.pos(this.width/2, this.height/2+100);
			this.sp.visible = true;
			Laya.timer.once(1, this, ()=>{
				this.sp.visible = false;
			});
		}
	}

	public updateJewelBar():void {
		
		Sound.playGemRushGemSound();

		this.jewel_bar.value = GameInfo.eatJewelCnt / (30 * 5);	

		GameInfo.eatJewelCnt += 5;
		this.eat_jewel_cnt.text = GameInfo.eatJewelCnt.toString();

		this.sp.visible = true;
		Laya.timer.once(100, this, this.showParticle);
	}

	private showParticle():void {
		this.sp.visible = false;		
	}

	private startRound() {
		this.updateUI4Start();
		Sound.playGameStartSound();		

		if (!GameInfo.IsJewlsLevel()) {
			this.food_pointer.start();
		}			
	}

	private stopRound() {
		this.updateUI4Stop();
		Sound.playFallSound();		

					
	}

	private updateUI4Stop():void {
		this.failed_note.visible = true;
		this.btn_continue.visible = true;
		
		this.game_status.visible = false;
		this.fever_bar.visible = false;
		this.jewel_bar_box.visible = false;		
	}

	private updateUI4Start():void {
		this.failed_note.visible = false;
		this.btn_continue.visible = false;
		
		this.tut_img.visible = false;
		this.tut_bar.visible = false;
		this.btn_setting.visible = false;
		this.btn_tuple.visible = false;
		this.game_logo.visible = false;
				
		this.game_status.visible = true;

		this.renderLevelBar(true);
	}

	private endRound():void {
		this.setDarkSky();
		this.updateUI4End();
		this.pillar_end_proc();

		Sound.playReachFinishSound();

		this.showFoodEatPtcl();
		Laya.timer.once(1000, this, function(){
			this.hideFoodEatPtcl();
		});

		Laya.timer.loop(50,this,this.animate4shine);
	}

	private animate4shine():void {
		this.shine_img.rotation -= 2;
	}

	private updateUI4End():void {
		
		if (!GameInfo.IsJewlsLevel())
			this.star_bar.visible = true;
		this.btn_next.visible = true;
		this.level_note.visible = true;
	
		if (parseInt(this.eat_jewel_cnt.text) > 0) {
			this.gem_ret.visible = true;
			this.showJewels();
		} else {
			this.hideJewels();
		}
		
		if (GameInfo.targetFoodEat)
			this.food_ret.visible = true;

		this.game_status.visible = false;
		this.fever_bar.visible = false;		
		this.jewel_bar_box.visible = false;		
	}

	private showJewels():void {
		for (let i = 0; i < this.jewel_img_arr.length; i ++) {
			this.jewel_img_arr[i].visible = true;
		}
	}

	private hideJewels():void {
		for (let i = 0; i < this.jewel_img_arr.length; i ++) {
			this.jewel_img_arr[i].visible = false;
		}
	}

	private resetUI():void {
		
		this.failed_note.visible = false;
		this.btn_continue.visible = false;

		this.gold_star1.visible = false;
		this.gold_star2.visible = false;
		this.gold_star3.visible = false;
		
		this.star1.visible = true;
		this.star2.visible = true;
		this.star3.visible = true;
		
		this.star_bar.visible = false;
		this.btn_next.visible = false;
		this.level_note.visible = false;
	
		this.gem_ret.visible = false;
		this.food_ret.visible = false;

		if (!GameInfo.isJewlsRound)
			this.fruit.visible = true;

		this.avatar.x = this.initial_avatar_x;
		this.fruit.x = this.initial_food_x;		

////////////////////////////////////////////////////////
		this.hideJewels();


		let xv = GameInfo.jewel_init_x;//337;//this.eat_jewel_img.x;
		let yv = GameInfo.jewel_init_y;//618;//this.eat_jewel_img.y;
		
		for (let i = 0; i < this.jewel_img_arr.length; i ++) {
			this.jewel_img_arr[i].pos(xv, yv);
		}

		this.jewel_anim_order = 0;
////////////////////////////////////////////////////////

		this.jewel_bar.value = 0;
		GameInfo.targetFoodEat = false;		
	}

	private renderLevelLbl(state:boolean):void {
		let appl_state:boolean = GameInfo.IsJewlsLevel()?state:!state;

		this.gem_rush_lbl.visible = appl_state;
		this.level_bar_box.visible = !appl_state;	
		
	}

	private renderLevelBar(state:boolean):void {
		let appl_state:boolean = GameInfo.IsJewlsLevel()?state:!state;

		this.jewel_bar_box.visible = appl_state;
		this.fever_bar.visible = !appl_state;
		this.game_status.visible = !appl_state;		
	}

	private initUiInfo(): void {
		this.btn_tuple.visible = true;

		this.current_jewel.visible = true;
		this.jewel_img.visible = true;

		this.game_logo.visible = true;
				
		this.btn_setting.visible = true;
		this.tut_img.visible = true;
		this.tut_bar.visible = true;

		this.current_jewel.text = GameInfo.jewelCnt.toString();
		this.current_round.text = GameInfo.round.toString();

		let coin = GameInfo.coinCnt % 3;
		if (coin == 0 && GameInfo.coinCnt > 0) {
			this.gold_star1.visible = true;
			this.gold_star2.visible = true;
			this.gold_star3.visible = true;

			this.star1.visible = false;
			this.star2.visible = false;
			this.star3.visible = false;
		} else if (coin == 2) {
			this.gold_star1.visible = true;
			this.gold_star2.visible = true;
			this.gold_star3.visible = false;

			this.star1.visible = false;
			this.star2.visible = false;
			this.star3.visible = true;
		} else if (coin == 1) {
			this.gold_star1.visible = true;
			this.gold_star2.visible = false;
			this.gold_star3.visible = false;

			this.star1.visible = false;
			this.star2.visible = true;
			this.star3.visible = true;			
		}

		if (!GameInfo.isJewlsRound) {
			this.renderTargetFoodUI();
		}
		this.renderLevelLbl(true);	
		GameInfo.current_fever = 0;
		Laya.timer.loop(150,this,this.animate4tut);
    }

	private renderTargetFoodUI():void {
			let food_arr = GameInfo.getFoodArray();
		
			let img = []

			for (let i = 0; i < 3; i++) {
				img[i] = new Laya.Image("resources/icons/" + food_arr[i]);
				Laya.URL.basePath = GameInfo.baseResPath;;
				img[i].width = 60;
				img[i].height = 60;
				img[i].x = 10;
				img[i].y = 10;
				img[i].name = "target_food";
			}

			this.check1.visible = (food_arr[0].indexOf("disabled") != -1)?false:true;					
			this.check2.visible = (food_arr[1].indexOf("disabled") != -1)?false:true;					
			this.check3.visible = (food_arr[2].indexOf("disabled") != -1)?false:true;					
			
			this.food1.removeChildByName("target_food");
			this.food2.removeChildByName("target_food");
			this.food3.removeChildByName("target_food");

			this.food1.addChild(img[0]);
			this.food2.addChild(img[1]);
			this.food3.addChild(img[2]);

			////////////////////////////////////

			let targetFood = GameInfo.getFoodName();
			let targetIconPath = "resources/icons/" + targetFood + "_enabled.png";
			this.fruit.removeChildByName("fruit_body");
			let targetImg:Laya.Image = new Laya.Image(targetIconPath);
			Laya.URL.basePath = GameInfo.baseResPath;
			targetImg.width = 30;
			targetImg.height = 28;
			this.fruit.addChild(targetImg);	
	}

	private tut_expand:boolean = false;
    private animate4tut():void {
		if (Math.abs(this.tut_img.scaleY) >= 0.7) {
			if (this.tut_expand) {
				this.tut_img.scaleY -= 0.1;
				if (Math.abs(this.tut_img.scaleY) > 1)
					this.tut_expand = false;
			} else {
				this.tut_img.scaleY += 0.1;
				if (Math.abs(this.tut_img.scaleY) < 0.7) {
					this.tut_expand = true;
					this.tut_img.scaleY = -0.7;
				}					
			}
				
		}						
	}
	private pillar_end_proc(): void {
		
		var translevel = this.curScene.getChildByName("Level");
		var obstacles = translevel.getChildByName("obstacles");
		for( var i = 0; i < obstacles.numChildren; i++ ) {
			var subObj = obstacles.getChildAt(i); // sub obstacle
			for( var j = 0; j < subObj.numChildren-1; j++ ) {
				subObj.getChildAt(j).off("trigger", this, this.updateFeverDown);				
			}					
		}	
		
	}
}