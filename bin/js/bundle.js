(function () {
	'use strict';

	var REG = Laya.ClassUtils.regClass;
	var ui;
	(function (ui) {
	    class CustomizeSceneUI extends Laya.Dialog {
	        constructor() { super(); }
	        createChildren() {
	            super.createChildren();
	            this.createView(CustomizeSceneUI.uiView);
	        }
	    }
	    CustomizeSceneUI.uiView = { "type": "Dialog", "props": { "width": 640, "runtime": "script/CustomizeDlg.ts", "isModal": true, "height": 1025 }, "compId": 2, "child": [{ "type": "Image", "props": { "y": 242, "x": 0, "width": 640, "skin": "Images/customize_popup.png", "height": 976 }, "compId": 3 }, { "type": "Label", "props": { "y": 249, "x": 200, "width": 237, "text": "CUSTOMIZE", "height": 44, "fontSize": 35, "font": "Arial", "color": "white" }, "compId": 4 }, { "type": "Button", "props": { "y": 253, "x": 492, "width": 35, "var": "btn_close", "stateNum": 1, "skin": "Images/x.png", "name": "close", "height": 35, "drawCallOptimize": true, "cacheAs": "bitmap" }, "compId": 5 }, { "type": "Button", "props": { "zOrder": 10, "y": 806, "x": 206, "presetID": 1, "width": 228, "var": "btn_unlock", "stateNum": 1, "skin": "Images/unlock_random_character_button.png", "name": "btn_unlock", "labelSize": 20, "labelFont": "Arial", "labelColors": "white", "labelAlign": "center", "label": "           UNLOCK\\n           RANDOM", "height": 82, "isPresetRoot": true }, "compId": 298, "child": [{ "type": "Image", "props": { "y": 16, "x": 35, "presetID": 2, "width": 25, "skin": "Images/gem_giant.png", "height": 25 }, "compId": 299 }, { "type": "Label", "props": { "y": 49, "x": 35, "presetID": 3, "width": 29, "var": "lbl_price", "text": "500", "name": "lbl_price", "height": 12, "color": "white" }, "compId": 300 }] }, { "type": "Sprite", "props": { "y": 290, "x": 9, "name": "cust_panel", "height": 500 }, "compId": 311, "child": [{ "type": "Sprite", "props": { "y": 42, "width": 640, "var": "jelly_group", "name": "jelly_group", "height": 600 }, "compId": 304, "child": [{ "type": "Image", "props": { "presetID": 10, "name": "", "y": 0, "x": 199, "width": 242, "skin": "Images/jelly_badge.png", "height": 60 }, "compId": 59, "child": [{ "type": "Label", "props": { "presetID": 11, "y": 9, "x": 54, "width": 136.18896484375, "text": "JELLIES", "height": 35, "fontSize": 35, "font": "Arial", "color": "blue" }, "compId": 60 }] }, { "type": "Button", "props": { "var": "jelly_green_guy", "presetID": 48, "name": "jelly_green_guy", "y": 145, "x": 390, "width": 100, "stateNum": 1, "height": 100 }, "compId": 120, "child": [{ "type": "Image", "props": { "presetID": 49, "y": 0, "x": 0, "width": 100, "skin": "Images/selected_item.png", "name": "selected", "height": 100 }, "compId": 185 }, { "type": "Image", "props": { "presetID": 50, "y": 0, "x": 0, "width": 100, "skin": "model/green_guy.png", "name": "character", "height": 100 }, "compId": 186 }, { "type": "Image", "props": { "presetID": 51, "y": 0, "x": 0, "width": 100, "skin": "Images/locked_item.png", "name": "question", "height": 100 }, "compId": 187 }] }, { "type": "Button", "props": { "var": "jelly_bright_blue_girl", "presetID": 52, "name": "jelly_bright_blue_girl", "y": 145, "x": 268, "width": 100, "stateNum": 1, "selected": false, "height": 100 }, "compId": 121, "child": [{ "type": "Image", "props": { "presetID": 53, "y": 0, "x": 0, "width": 100, "skin": "Images/selected_item.png", "name": "selected", "height": 100 }, "compId": 182 }, { "type": "Image", "props": { "presetID": 54, "y": -2, "x": 0, "width": 100, "skin": "model/bright_blue_girl.png", "name": "character", "height": 100 }, "compId": 183 }, { "type": "Image", "props": { "presetID": 55, "y": 0, "x": 0, "width": 100, "skin": "Images/locked_item.png", "name": "question", "height": 100 }, "compId": 184 }] }, { "type": "Button", "props": { "var": "jelly_blue_guy", "presetID": 56, "name": "jelly_blue_guy", "y": 145, "x": 146, "width": 100, "stateNum": 1, "selected": false, "height": 100 }, "compId": 122, "child": [{ "type": "Image", "props": { "presetID": 57, "y": 0, "x": 0, "width": 100, "skin": "Images/selected_item.png", "name": "selected", "height": 100 }, "compId": 178 }, { "type": "Image", "props": { "presetID": 58, "y": 0, "x": 0, "width": 100, "skin": "model/blue_guy.png", "name": "character", "height": 100 }, "compId": 179 }, { "type": "Image", "props": { "presetID": 59, "y": 0, "x": 0, "width": 100, "skin": "Images/locked_item.png", "name": "question", "height": 100 }, "compId": 180 }] }, { "type": "Button", "props": { "var": "jelly_yellow_guy", "presetID": 60, "name": "jelly_yellow_guy", "y": 258, "x": 390, "width": 100, "stateNum": 1, "height": 100 }, "compId": 123, "child": [{ "type": "Image", "props": { "presetID": 61, "y": -1, "x": 0, "width": 100, "skin": "Images/selected_item.png", "name": "selected", "height": 100 }, "compId": 188 }, { "type": "Image", "props": { "presetID": 62, "y": -1, "x": 0, "width": 100, "skin": "model/yellowguy.png", "name": "character", "height": 100 }, "compId": 189 }, { "type": "Image", "props": { "presetID": 63, "y": -1, "x": 0, "width": 100, "skin": "Images/locked_item.png", "name": "question", "height": 100 }, "compId": 190 }] }, { "type": "Button", "props": { "var": "jelly_Snarglius", "presetID": 64, "name": "jelly_Snarglius", "y": 258, "x": 268, "width": 100, "stateNum": 1, "height": 100 }, "compId": 124, "child": [{ "type": "Image", "props": { "presetID": 65, "y": 0, "x": 0, "width": 100, "skin": "Images/selected_item.png", "name": "selected", "height": 100 }, "compId": 191 }, { "type": "Image", "props": { "skin": "model/snarglius.png", "presetID": 66, "y": 0, "x": 0, "width": 100, "name": "character", "height": 100 }, "compId": 192 }, { "type": "Image", "props": { "presetID": 67, "y": 0, "x": 0, "width": 100, "skin": "Images/locked_item.png", "name": "question", "height": 100 }, "compId": 193 }] }, { "type": "Button", "props": { "var": "jelly_pink_girl", "presetID": 68, "name": "jelly_pink_girl", "y": 258, "x": 146, "width": 100, "stateNum": 1, "height": 100 }, "compId": 125, "child": [{ "type": "Image", "props": { "presetID": 69, "y": 0, "x": 0, "width": 100, "skin": "Images/selected_item.png", "name": "selected", "height": 100 }, "compId": 194 }, { "type": "Image", "props": { "presetID": 70, "y": 0, "x": 0, "width": 100, "skin": "model/pinkgirl.png", "name": "character", "height": 100 }, "compId": 195 }, { "type": "Image", "props": { "presetID": 71, "y": 0, "x": 0, "width": 100, "skin": "Images/locked_item.png", "name": "question", "height": 100 }, "compId": 196 }] }] }, { "type": "Sprite", "props": { "y": 42, "x": 635, "width": 640, "var": "animals1_group", "pivotY": 0, "pivotX": 0, "name": "animals1_group", "height": 600 }, "compId": 306, "child": [{ "type": "Image", "props": { "y": 0, "x": 200, "presetID": 8, "width": 240, "skin": "Images/rare.png", "height": 60 }, "compId": 55, "child": [{ "type": "Label", "props": { "presetID": 9, "y": 11, "x": 43, "width": 163, "text": "ANIMALS", "height": 40, "fontSize": 35, "font": "Arial", "color": "blue" }, "compId": 56 }] }, { "type": "Button", "props": { "y": 272, "x": 417, "presetID": 144, "width": 100, "var": "animals_Cheetah", "stateNum": 1, "name": "animals_Cheetah", "height": 100 }, "compId": 144, "child": [{ "type": "Image", "props": { "presetID": 145, "y": 0, "x": 0, "width": 100, "skin": "Images/selected_item.png", "name": "selected", "height": 100 }, "compId": 224 }, { "type": "Image", "props": { "presetID": 146, "y": 0, "x": 0, "width": 100, "skin": "model/cheetah.png", "name": "character", "height": 100 }, "compId": 225 }, { "type": "Image", "props": { "presetID": 147, "y": 0, "x": 0, "width": 100, "skin": "Images/locked_item.png", "name": "question", "height": 100 }, "compId": 226 }] }, { "type": "Button", "props": { "y": 272, "x": 270, "presetID": 148, "width": 100, "var": "animals_Cat", "stateNum": 1, "name": "animals_Cat", "height": 100 }, "compId": 145, "child": [{ "type": "Image", "props": { "presetID": 149, "y": 0, "x": 0, "width": 100, "skin": "Images/selected_item.png", "name": "selected", "height": 100 }, "compId": 227 }, { "type": "Image", "props": { "presetID": 150, "y": 0, "x": 0, "width": 100, "skin": "model/cat.png", "name": "character", "height": 100 }, "compId": 228 }, { "type": "Image", "props": { "presetID": 151, "y": 0, "x": 0, "width": 100, "skin": "Images/locked_item.png", "name": "question", "height": 100 }, "compId": 229 }] }, { "type": "Button", "props": { "y": 269, "x": 128, "presetID": 152, "width": 100, "var": "animals_Bear", "stateNum": 1, "name": "animals_Bear", "height": 100 }, "compId": 146, "child": [{ "type": "Image", "props": { "presetID": 153, "y": 0, "x": 0, "width": 100, "skin": "Images/selected_item.png", "name": "selected", "height": 100 }, "compId": 230 }, { "type": "Image", "props": { "presetID": 154, "y": 0, "x": 0, "width": 100, "skin": "model/bear.png", "name": "character", "height": 100 }, "compId": 231 }, { "type": "Image", "props": { "presetID": 155, "y": 0, "x": 0, "width": 100, "skin": "Images/locked_item.png", "name": "question", "height": 100 }, "compId": 232 }] }, { "type": "Button", "props": { "y": 140, "x": 417, "presetID": 156, "width": 100, "var": "animals_Duck", "stateNum": 1, "name": "animals_Duck", "height": 100 }, "compId": 147, "child": [{ "type": "Image", "props": { "presetID": 157, "y": 0, "x": 0, "width": 100, "skin": "Images/selected_item.png", "name": "selected", "height": 100 }, "compId": 233 }, { "type": "Image", "props": { "presetID": 158, "y": 0, "x": 0, "width": 100, "skin": "model/duck.png", "name": "character", "height": 100 }, "compId": 234 }, { "type": "Image", "props": { "presetID": 159, "y": 0, "x": 0, "width": 100, "skin": "Images/locked_item.png", "name": "question", "height": 100 }, "compId": 235 }] }, { "type": "Button", "props": { "y": 140, "x": 270, "presetID": 160, "width": 100, "var": "animals_Dog", "stateNum": 1, "name": "animals_Dog", "height": 100 }, "compId": 148, "child": [{ "type": "Image", "props": { "presetID": 161, "y": 0, "x": 0, "width": 100, "skin": "Images/selected_item.png", "name": "selected", "height": 100 }, "compId": 236 }, { "type": "Image", "props": { "presetID": 162, "y": 0, "x": 0, "width": 100, "skin": "model/dog.png", "name": "character", "height": 100 }, "compId": 237 }, { "type": "Image", "props": { "presetID": 163, "y": 0, "x": 0, "width": 100, "skin": "Images/locked_item.png", "name": "question", "height": 100 }, "compId": 238 }] }, { "type": "Button", "props": { "y": 140, "x": 128, "presetID": 164, "width": 100, "var": "animals_Cock", "stateNum": 1, "name": "animals_Cock", "height": 100 }, "compId": 149, "child": [{ "type": "Image", "props": { "presetID": 165, "y": 0, "x": 0, "width": 100, "skin": "Images/selected_item.png", "name": "selected", "height": 100 }, "compId": 239 }, { "type": "Image", "props": { "presetID": 166, "y": 0, "x": 0, "width": 100, "skin": "model/cock.png", "name": "character", "height": 100 }, "compId": 240 }, { "type": "Image", "props": { "presetID": 167, "y": 0, "x": 0, "width": 100, "skin": "Images/locked_item.png", "name": "question", "height": 100 }, "compId": 241 }] }] }, { "type": "Sprite", "props": { "y": 42, "x": 1283, "width": 640, "var": "animals2_group", "name": "animals2_group", "height": 600 }, "compId": 307, "child": [{ "type": "Image", "props": { "y": 0, "x": 209, "presetID": 6, "width": 240, "skin": "Images/rare.png", "height": 60 }, "compId": 53, "child": [{ "type": "Label", "props": { "presetID": 7, "y": 11, "x": 43, "width": 163, "text": "ANIMALS", "height": 40, "fontSize": 35, "font": "Arial", "color": "blue" }, "compId": 54 }] }, { "type": "Button", "props": { "y": 350, "x": 414, "presetID": 72, "width": 100, "var": "animals_Penguin", "stateNum": 1, "name": "animals_Penguin", "height": 100 }, "compId": 126, "child": [{ "type": "Image", "props": { "presetID": 73, "y": 0, "x": 0, "width": 100, "skin": "Images/selected_item.png", "name": "selected", "height": 100 }, "compId": 197 }, { "type": "Image", "props": { "presetID": 74, "y": 0, "x": 0, "width": 100, "skin": "model/penguin.png", "name": "character", "height": 100 }, "compId": 198 }, { "type": "Image", "props": { "presetID": 75, "y": 0, "x": 0, "width": 100, "skin": "Images/locked_item.png", "name": "question", "height": 100 }, "compId": 199 }] }, { "type": "Button", "props": { "y": 350, "x": 279, "presetID": 76, "width": 100, "var": "animals_Owl", "stateNum": 1, "name": "animals_Owl", "height": 100 }, "compId": 127, "child": [{ "type": "Image", "props": { "presetID": 77, "y": 0, "x": 0, "width": 100, "skin": "Images/selected_item.png", "name": "selected", "height": 100 }, "compId": 200 }, { "type": "Image", "props": { "presetID": 78, "y": 0, "x": 0, "width": 100, "skin": "model/owl.png", "name": "character", "height": 100 }, "compId": 201 }, { "type": "Image", "props": { "presetID": 79, "y": 0, "x": 0, "width": 100, "skin": "Images/locked_item.png", "name": "question", "height": 100 }, "compId": 202 }] }, { "type": "Button", "props": { "y": 350, "x": 142, "presetID": 80, "width": 100, "var": "animals_Lion", "stateNum": 1, "name": "animals_Lion", "height": 100 }, "compId": 128, "child": [{ "type": "Image", "props": { "presetID": 81, "y": 0, "x": 0, "width": 100, "skin": "Images/selected_item.png", "name": "selected", "height": 100 }, "compId": 203 }, { "type": "Image", "props": { "presetID": 82, "y": 0, "x": 0, "width": 100, "skin": "model/lion.png", "name": "character", "height": 100 }, "compId": 204 }, { "type": "Image", "props": { "presetID": 83, "y": 0, "x": 0, "width": 100, "skin": "Images/locked_item.png", "name": "question", "height": 100 }, "compId": 205 }] }, { "type": "Button", "props": { "y": 231, "x": 414, "presetID": 84, "width": 100, "var": "animals_Hippo", "stateNum": 1, "name": "animals_Hippo", "height": 100 }, "compId": 129, "child": [{ "type": "Image", "props": { "presetID": 85, "y": 0, "x": 0, "width": 100, "skin": "Images/selected_item.png", "name": "selected", "height": 100 }, "compId": 206 }, { "type": "Image", "props": { "presetID": 86, "y": 0, "x": 0, "width": 100, "skin": "model/hipo.png", "name": "character", "height": 100 }, "compId": 207 }, { "type": "Image", "props": { "presetID": 87, "y": 0, "x": 0, "width": 100, "skin": "Images/locked_item.png", "name": "question", "height": 100 }, "compId": 208 }] }, { "type": "Button", "props": { "y": 231, "x": 279, "presetID": 88, "width": 100, "var": "animals_Frog", "stateNum": 1, "name": "animals_Frog", "height": 100 }, "compId": 130, "child": [{ "type": "Image", "props": { "presetID": 89, "y": 0, "x": 0, "width": 100, "skin": "Images/selected_item.png", "name": "selected", "height": 100 }, "compId": 209 }, { "type": "Image", "props": { "presetID": 90, "y": 0, "x": 0, "width": 100, "skin": "model/frog.png", "name": "character", "height": 100 }, "compId": 210 }, { "type": "Image", "props": { "presetID": 91, "y": 0, "x": 0, "width": 100, "skin": "Images/locked_item.png", "name": "question", "height": 100 }, "compId": 211 }] }, { "type": "Button", "props": { "y": 231, "x": 142, "presetID": 92, "width": 100, "var": "animals_Fox", "stateNum": 1, "name": "animals_Fox", "height": 100 }, "compId": 131, "child": [{ "type": "Image", "props": { "presetID": 93, "y": 0, "x": 0, "width": 100, "skin": "Images/selected_item.png", "name": "selected", "height": 100 }, "compId": 212 }, { "type": "Image", "props": { "presetID": 94, "y": 0, "x": 0, "width": 100, "skin": "model/fox.png", "name": "character", "height": 100 }, "compId": 213 }, { "type": "Image", "props": { "presetID": 95, "y": 0, "x": 0, "width": 100, "skin": "Images/locked_item.png", "name": "question", "height": 100 }, "compId": 214 }] }, { "type": "Button", "props": { "y": 115, "x": 414, "presetID": 96, "width": 100, "var": "animals_Sheep", "stateNum": 1, "name": "animals_Sheep", "height": 100 }, "compId": 132, "child": [{ "type": "Image", "props": { "presetID": 97, "y": 0, "x": 0, "width": 100, "skin": "Images/selected_item.png", "name": "selected", "height": 100 }, "compId": 215 }, { "type": "Image", "props": { "presetID": 98, "y": 0, "x": 0, "width": 100, "skin": "model/sheep.png", "name": "character", "height": 100 }, "compId": 216 }, { "type": "Image", "props": { "presetID": 99, "y": 0, "x": 0, "width": 100, "skin": "Images/locked_item.png", "name": "question", "height": 100 }, "compId": 217 }] }, { "type": "Button", "props": { "y": 115, "x": 279, "presetID": 100, "width": 100, "var": "animals_Racoon", "stateNum": 1, "name": "animals_Racoon", "height": 100 }, "compId": 133, "child": [{ "type": "Image", "props": { "presetID": 101, "y": 0, "x": 0, "width": 100, "skin": "Images/selected_item.png", "name": "selected", "height": 100 }, "compId": 218 }, { "type": "Image", "props": { "presetID": 102, "y": 0, "x": 0, "width": 100, "skin": "model/raccon.png", "name": "character", "height": 100 }, "compId": 219 }, { "type": "Image", "props": { "presetID": 103, "y": 0, "x": 0, "width": 100, "skin": "Images/locked_item.png", "name": "question", "height": 100 }, "compId": 220 }] }, { "type": "Button", "props": { "y": 115, "x": 142, "presetID": 104, "width": 100, "var": "animals_Pig", "stateNum": 1, "name": "animals_Pig", "height": 100 }, "compId": 134, "child": [{ "type": "Image", "props": { "presetID": 105, "y": 0, "x": 0, "width": 100, "skin": "Images/selected_item.png", "name": "selected", "height": 100 }, "compId": 221 }, { "type": "Image", "props": { "presetID": 106, "y": 0, "x": 0, "width": 100, "skin": "model/pig.png", "name": "character", "height": 100 }, "compId": 222 }, { "type": "Image", "props": { "presetID": 107, "y": 0, "x": 0, "width": 100, "skin": "Images/locked_item.png", "name": "question", "height": 100 }, "compId": 223 }] }] }, { "type": "Sprite", "props": { "y": 42, "x": 1925, "width": 640, "var": "heroes_group", "name": "heroes_group", "height": 600 }, "compId": 308, "child": [{ "type": "Image", "props": { "y": -1, "x": 183, "presetID": 2, "width": 240, "skin": "Images/heroes.png", "height": 60 }, "compId": 49, "child": [{ "type": "Label", "props": { "presetID": 3, "y": 10.5, "x": 47.537109375, "text": "HEROES", "fontSize": 35, "font": "Arial", "color": "blue" }, "compId": 50 }] }, { "type": "Button", "props": { "y": 357, "x": 388, "presetID": 108, "width": 100, "var": "heroes_Magician", "stateNum": 1, "name": "heroes_Magician", "height": 100 }, "compId": 135, "child": [{ "type": "Image", "props": { "presetID": 109, "y": 0, "x": 0, "width": 100, "skin": "Images/selected_item.png", "name": "selected", "height": 100 }, "compId": 266 }, { "type": "Image", "props": { "presetID": 110, "y": 0, "x": 0, "width": 100, "skin": "model/magician.png", "name": "character", "height": 100 }, "compId": 267 }, { "type": "Image", "props": { "presetID": 111, "y": 0, "x": 0, "width": 100, "skin": "Images/locked_item.png", "name": "question", "height": 100 }, "compId": 268 }] }, { "type": "Button", "props": { "y": 357, "x": 260, "presetID": 112, "width": 100, "var": "heroes_IronMan", "stateNum": 1, "name": "heroes_IronMan", "height": 100 }, "compId": 136, "child": [{ "type": "Image", "props": { "presetID": 113, "y": 0, "x": 0, "width": 100, "skin": "Images/selected_item.png", "name": "selected", "height": 100 }, "compId": 263 }, { "type": "Image", "props": { "presetID": 114, "y": 0, "x": 0, "width": 100, "skin": "model/ironman.png", "name": "character", "height": 100 }, "compId": 264 }, { "type": "Image", "props": { "presetID": 115, "y": 0, "x": 0, "width": 100, "skin": "Images/locked_item.png", "name": "question", "height": 100 }, "compId": 265 }] }, { "type": "Button", "props": { "y": 357, "x": 132, "presetID": 116, "width": 100, "var": "heroes_Deadpool", "stateNum": 1, "name": "heroes_Deadpool", "height": 100 }, "compId": 137, "child": [{ "type": "Image", "props": { "presetID": 117, "y": 0, "x": 0, "width": 100, "skin": "Images/selected_item.png", "name": "selected", "height": 100 }, "compId": 260 }, { "type": "Image", "props": { "presetID": 118, "y": 0, "x": 0, "width": 100, "skin": "model/deadpool.png", "name": "character", "height": 100 }, "compId": 261 }, { "type": "Image", "props": { "presetID": 119, "y": 0, "x": 0, "width": 100, "skin": "Images/locked_item.png", "name": "question", "height": 100 }, "compId": 262 }] }, { "type": "Button", "props": { "y": 230, "x": 388, "presetID": 120, "width": 100, "var": "heroes_Cowboy", "stateNum": 1, "name": "heroes_Cowboy", "height": 100 }, "compId": 138, "child": [{ "type": "Image", "props": { "presetID": 121, "y": 0, "x": 0, "width": 100, "skin": "Images/selected_item.png", "name": "selected", "height": 100 }, "compId": 257 }, { "type": "Image", "props": { "presetID": 122, "y": 0, "x": 0, "width": 100, "skin": "model/cowboy.png", "name": "character", "height": 100 }, "compId": 258 }, { "type": "Image", "props": { "presetID": 123, "y": 0, "x": 0, "width": 100, "skin": "Images/locked_item.png", "name": "question", "height": 100 }, "compId": 259 }] }, { "type": "Button", "props": { "y": 230, "x": 260, "presetID": 124, "width": 100, "var": "heroes_CaptainAmerica", "stateNum": 1, "name": "heroes_CaptainAmerica", "height": 100 }, "compId": 139, "child": [{ "type": "Image", "props": { "presetID": 125, "y": 0, "x": 0, "width": 100, "skin": "Images/selected_item.png", "name": "selected", "height": 100 }, "compId": 254 }, { "type": "Image", "props": { "presetID": 126, "y": 0, "x": 0, "width": 100, "skin": "model/CaptainAmerica.png", "name": "character", "height": 100 }, "compId": 255 }, { "type": "Image", "props": { "presetID": 127, "y": 0, "x": 0, "width": 100, "skin": "Images/locked_item.png", "name": "question", "height": 100 }, "compId": 256 }] }, { "type": "Button", "props": { "y": 230, "x": 132, "presetID": 128, "width": 100, "var": "heroes_BadGuy", "stateNum": 1, "name": "heroes_BadGuy", "height": 100 }, "compId": 140, "child": [{ "type": "Image", "props": { "presetID": 129, "y": 0, "x": 0, "width": 100, "skin": "Images/selected_item.png", "name": "selected", "height": 100 }, "compId": 251 }, { "type": "Image", "props": { "presetID": 130, "y": 0, "x": 0, "width": 100, "skin": "model/badguy.png", "name": "character", "height": 100 }, "compId": 252 }, { "type": "Image", "props": { "presetID": 131, "y": 0, "x": 0, "width": 100, "skin": "Images/locked_item.png", "name": "question", "height": 100 }, "compId": 253 }] }, { "type": "Button", "props": { "y": 107, "x": 388, "presetID": 132, "width": 100, "var": "heroes_Robin", "stateNum": 1, "name": "heroes_Robin", "height": 100 }, "compId": 141, "child": [{ "type": "Image", "props": { "presetID": 133, "y": 0, "x": 0, "width": 100, "skin": "Images/selected_item.png", "name": "selected", "height": 100 }, "compId": 248 }, { "type": "Image", "props": { "presetID": 134, "y": 0, "x": 0, "width": 100, "skin": "model/robin.png", "name": "character", "height": 100 }, "compId": 249 }, { "type": "Image", "props": { "presetID": 135, "y": 0, "x": 0, "width": 100, "skin": "Images/locked_item.png", "name": "question", "height": 100 }, "compId": 250 }] }, { "type": "Button", "props": { "y": 107, "x": 260, "presetID": 136, "width": 100, "var": "heroes_Princess", "stateNum": 1, "name": "heroes_Princess", "height": 100 }, "compId": 142, "child": [{ "type": "Image", "props": { "presetID": 137, "y": 0, "x": 0, "width": 100, "skin": "Images/selected_item.png", "name": "selected", "height": 100 }, "compId": 245 }, { "type": "Image", "props": { "presetID": 138, "y": 0, "x": 0, "width": 100, "skin": "model/princess.png", "name": "character", "height": 100 }, "compId": 246 }, { "type": "Image", "props": { "presetID": 139, "y": 0, "x": 0, "width": 100, "skin": "Images/locked_item.png", "name": "question", "height": 100 }, "compId": 247 }] }, { "type": "Button", "props": { "y": 107, "x": 132, "presetID": 140, "width": 100, "var": "heroes_PinkGuy", "stateNum": 1, "name": "heroes_PinkGuy", "height": 100 }, "compId": 143, "child": [{ "type": "Image", "props": { "presetID": 141, "y": 0, "x": 0, "width": 100, "skin": "Images/selected_item.png", "name": "selected", "height": 100 }, "compId": 242 }, { "type": "Image", "props": { "presetID": 142, "y": 0, "x": 0, "width": 100, "skin": "model/pinkguy.png", "name": "character", "height": 100 }, "compId": 243 }, { "type": "Image", "props": { "presetID": 143, "y": 0, "x": 0, "width": 100, "skin": "Images/locked_item.png", "name": "question", "height": 100 }, "compId": 244 }] }] }, { "type": "Sprite", "props": { "y": 42, "x": 2562, "width": 640, "var": "legendary_group", "name": "legendary_group", "height": 600 }, "compId": 309, "child": [{ "type": "Image", "props": { "y": 0, "x": 147, "presetID": 4, "width": 338, "skin": "Images/legendary_ribbon.png", "height": 60 }, "compId": 51, "child": [{ "type": "Label", "props": { "presetID": 5, "y": 11.5, "x": 63, "text": "LEGENDARY", "fontSize": 35, "font": "Arial", "color": "blue" }, "compId": 52 }] }, { "type": "Button", "props": { "y": 353, "x": 394, "presetID": 12, "width": 100, "var": "legendary_Panda", "stateNum": 1, "name": "legendary_Panda", "height": 100 }, "compId": 109, "child": [{ "type": "Image", "props": { "presetID": 13, "y": 0, "x": 0, "width": 100, "skin": "Images/selected_item.png", "name": "selected", "height": 100 }, "compId": 293 }, { "type": "Image", "props": { "presetID": 14, "y": 0, "x": 0, "width": 100, "skin": "model/panda.png", "name": "character", "height": 100 }, "compId": 294 }, { "type": "Image", "props": { "presetID": 15, "y": 0, "x": 0, "width": 100, "skin": "Images/locked_item.png", "name": "question", "height": 100 }, "compId": 295 }] }, { "type": "Button", "props": { "y": 353, "x": 266, "presetID": 16, "width": 100, "var": "legendary_Lama", "stateNum": 1, "name": "legendary_Lama", "height": 100 }, "compId": 110, "child": [{ "type": "Image", "props": { "presetID": 17, "y": 0, "x": 0, "width": 100, "skin": "Images/selected_item.png", "name": "selected", "height": 100 }, "compId": 290 }, { "type": "Image", "props": { "presetID": 18, "y": 0, "x": 0, "width": 100, "skin": "model/Lama.png", "name": "character", "height": 100 }, "compId": 291 }, { "type": "Image", "props": { "presetID": 19, "y": 0, "x": 0, "width": 100, "skin": "Images/locked_item.png", "name": "question", "height": 100 }, "compId": 292 }] }, { "type": "Button", "props": { "y": 353, "x": 132, "presetID": 20, "width": 100, "var": "legendary_Crock", "stateNum": 1, "skin": "model/cock.png", "name": "legendary_Crock", "height": 100 }, "compId": 111, "child": [{ "type": "Image", "props": { "presetID": 21, "y": 0, "x": 0, "width": 100, "skin": "Images/selected_item.png", "name": "selected", "height": 100 }, "compId": 287 }, { "type": "Image", "props": { "presetID": 22, "y": -1, "x": 0, "width": 100, "skin": "model/blue_guy.png", "name": "character", "height": 100 }, "compId": 288 }, { "type": "Image", "props": { "presetID": 23, "y": 0, "x": 0, "width": 100, "skin": "Images/locked_item.png", "name": "question", "height": 100 }, "compId": 289 }] }, { "type": "Button", "props": { "y": 228, "x": 132, "presetID": 24, "width": 100, "var": "legendary_Cow", "stateNum": 1, "name": "legendary_Cow", "height": 100 }, "compId": 112, "child": [{ "type": "Image", "props": { "presetID": 25, "y": 0, "x": 0, "width": 100, "skin": "Images/selected_item.png", "name": "selected", "height": 100 }, "compId": 284 }, { "type": "Image", "props": { "presetID": 26, "y": -1, "x": 0, "width": 100, "skin": "model/cow.png", "name": "character", "height": 100 }, "compId": 285 }, { "type": "Image", "props": { "presetID": 27, "y": 0, "x": 0, "width": 100, "skin": "Images/locked_item.png", "name": "question", "height": 100 }, "compId": 286 }] }, { "type": "Button", "props": { "y": 228, "x": 394, "presetID": 28, "width": 100, "var": "legendary_CommandoTiger", "stateNum": 1, "name": "legendary_CommandoTiger", "height": 100 }, "compId": 113, "child": [{ "type": "Image", "props": { "presetID": 29, "y": 0, "x": 0, "width": 100, "skin": "Images/selected_item.png", "name": "selected", "height": 100 }, "compId": 281 }, { "type": "Image", "props": { "presetID": 30, "y": -1, "x": 0, "width": 100, "skin": "model/commando_tiger.png", "name": "character", "height": 100 }, "compId": 282 }, { "type": "Image", "props": { "presetID": 31, "y": 0, "x": 0, "width": 100, "skin": "Images/locked_item.png", "name": "question", "height": 100 }, "compId": 283 }] }, { "type": "Button", "props": { "y": 228, "x": 266, "presetID": 32, "width": 100, "var": "legendary_Coala", "stateNum": 1, "name": "legendary_Coala", "height": 100 }, "compId": 114, "child": [{ "type": "Image", "props": { "presetID": 33, "y": 0, "x": 0, "width": 100, "skin": "Images/selected_item.png", "name": "selected", "height": 100 }, "compId": 278 }, { "type": "Image", "props": { "presetID": 34, "y": 0, "x": 0, "width": 100, "skin": "model/Coala.png", "name": "character", "height": 100 }, "compId": 279 }, { "type": "Image", "props": { "presetID": 35, "y": 0, "x": 0, "width": 100, "skin": "Images/locked_item.png", "name": "question", "height": 100 }, "compId": 280 }] }, { "type": "Button", "props": { "y": 104, "x": 132, "presetID": 36, "width": 100, "var": "legendary_Sloth", "stateNum": 1, "name": "legendary_Sloth", "height": 100 }, "compId": 117, "child": [{ "type": "Image", "props": { "presetID": 37, "y": 0, "x": 0, "width": 100, "skin": "Images/selected_item.png", "name": "selected", "height": 100 }, "compId": 275 }, { "type": "Image", "props": { "presetID": 38, "y": 0, "x": 0, "width": 100, "skin": "model/sloth.png", "name": "character", "height": 100 }, "compId": 276 }, { "type": "Image", "props": { "presetID": 39, "y": 0, "x": 0, "width": 100, "skin": "Images/locked_item.png", "name": "question", "height": 100 }, "compId": 277 }] }, { "type": "Button", "props": { "y": 104, "x": 394, "presetID": 40, "width": 100, "var": "legendary_Shark", "stateNum": 1, "name": "legendary_Shark", "height": 100 }, "compId": 118, "child": [{ "type": "Image", "props": { "presetID": 41, "y": 0, "x": 0, "width": 100, "skin": "Images/selected_item.png", "name": "selected", "height": 100 }, "compId": 272 }, { "type": "Image", "props": { "presetID": 42, "y": 0, "x": 0, "width": 100, "skin": "model/shark.png", "name": "character", "height": 100 }, "compId": 273 }, { "type": "Image", "props": { "presetID": 43, "y": 0, "x": 0, "width": 100, "skin": "Images/locked_item.png", "name": "question", "height": 100 }, "compId": 274 }] }, { "type": "Button", "props": { "y": 104, "x": 266, "presetID": 44, "width": 100, "var": "legendary_Rabbit", "stateNum": 1, "name": "legendary_Rabbit", "height": 100 }, "compId": 119, "child": [{ "type": "Image", "props": { "presetID": 45, "y": 0, "x": 0, "width": 100, "skin": "Images/selected_item.png", "name": "selected", "height": 100 }, "compId": 269 }, { "type": "Image", "props": { "presetID": 46, "y": 0, "x": 0, "width": 100, "skin": "model/rabbit.png", "name": "character", "height": 100 }, "compId": 270 }, { "type": "Image", "props": { "presetID": 47, "y": 0, "x": 0, "width": 100, "skin": "Images/locked_item.png", "name": "question", "height": 100 }, "compId": 271 }] }] }] }], "loadList": ["Images/customize_popup.png", "Images/x.png", "prefab/btn_unlock.prefab", "prefab/cust_panel.prefab", "model/snarglius.png"], "loadList3D": [] };
	    ui.CustomizeSceneUI = CustomizeSceneUI;
	    REG("ui.CustomizeSceneUI", CustomizeSceneUI);
	    class GameSceneUI extends Laya.Scene {
	        constructor() { super(); }
	        createChildren() {
	            super.createChildren();
	            this.createView(GameSceneUI.uiView);
	        }
	    }
	    GameSceneUI.uiView = { "type": "Scene", "props": { "width": 640, "visible": true, "runtime": "script/GameUI.ts", "height": 1024 }, "compId": 2, "child": [{ "type": "Image", "props": { "y": 158, "x": -2, "width": 641, "visible": false, "var": "failed_note", "skin": "Images/level_failed.png", "name": "failed_note", "height": 212 }, "compId": 143, "child": [{ "type": "Label", "props": { "y": 71, "x": 100, "width": 441, "text": "LEVEL FAILED!", "height": 76, "fontSize": 50, "font": "Arial", "color": "white", "align": "center" }, "compId": 144 }] }, { "type": "Image", "props": { "y": 152, "x": -1, "width": 641, "visible": false, "var": "level_note", "skin": "Images/level_completed.png", "name": "level_note", "height": 212 }, "compId": 14, "child": [{ "type": "Label", "props": { "y": 51, "x": 100, "width": 441, "text": "LEVEL\\nCOMPLETED!", "height": 96, "fontSize": 50, "font": "Arial", "color": "white", "align": "center" }, "compId": 15 }] }, { "type": "Sprite", "props": { "y": 61, "x": 216, "visible": false, "var": "game_status", "name": "game_status" }, "compId": 56, "child": [{ "type": "Sprite", "props": { "y": 59, "x": 5, "width": 204, "var": "path", "texture": "Images/path.png", "name": "path", "height": 21 }, "compId": 46 }, { "type": "Sprite", "props": { "y": 29, "x": 0, "var": "fruit", "name": "fruit" }, "compId": 51, "child": [{ "type": "Sprite", "props": { "y": 30, "x": 9, "width": 8, "var": "fruit_indr", "texture": "Images/marker_color.png", "name": "fruit_indr", "height": 20 }, "compId": 48 }, { "type": "Sprite", "props": { "width": 25, "var": "fruit_body", "texture": "Images/e1.png", "name": "fruit_body", "height": 26 }, "compId": 50 }] }, { "type": "Sprite", "props": { "y": 20, "x": 0, "var": "avatar", "name": "avatar" }, "compId": 52, "child": [{ "type": "Sprite", "props": { "y": 39, "x": 11, "width": 8, "var": "avatar_indr", "texture": "Images/marker_color.png", "name": "avatar_indr", "height": 20 }, "compId": 47 }, { "type": "Sprite", "props": { "y": 0, "x": 0, "width": 29, "var": "avatar_body", "texture": "Images/face.png", "name": "avatar_body", "height": 33 }, "compId": 49 }] }] }, { "type": "ProgressBar", "props": { "y": 145, "x": 234, "width": 159, "visible": false, "var": "fever_bar", "value": 0, "skin": "Images/progress_bar.png", "name": "fever_bar", "height": 39 }, "compId": 57, "child": [{ "type": "Label", "props": { "y": 10, "x": 42, "text": "FEVER", "fontSize": 22, "color": "#8de75a" }, "compId": 147 }] }, { "type": "Sprite", "props": { "y": 109, "x": 241, "visible": false, "var": "star_bar", "name": "star_bar" }, "compId": 61, "child": [{ "type": "Sprite", "props": { "y": 0, "x": 12 }, "compId": 58, "child": [{ "type": "Image", "props": { "width": 35, "visible": false, "var": "star1", "skin": "Images/coin_empty.png", "name": "star1", "height": 35 }, "compId": 19 }, { "type": "Image", "props": { "width": 35, "visible": false, "var": "gold_star1", "skin": "Images/token_in_button.png", "name": "gold_star1", "height": 35 }, "compId": 40 }] }, { "type": "Sprite", "props": { "x": 60 }, "compId": 59, "child": [{ "type": "Image", "props": { "width": 35, "visible": false, "var": "star2", "skin": "Images/coin_empty.png", "name": "star2", "height": 35 }, "compId": 20 }, { "type": "Image", "props": { "width": 35, "visible": false, "var": "gold_star2", "skin": "Images/token_in_button.png", "name": "gold_star2", "height": 35 }, "compId": 41 }] }, { "type": "Sprite", "props": { "y": 0, "x": 109 }, "compId": 60, "child": [{ "type": "Image", "props": { "width": 35, "visible": false, "var": "star3", "skin": "Images/coin_empty.png", "name": "star3", "height": 35 }, "compId": 21 }, { "type": "Image", "props": { "width": 35, "visible": false, "var": "gold_star3", "skin": "Images/token_in_button.png", "name": "gold_star3", "height": 35 }, "compId": 42 }] }] }, { "type": "Sprite", "props": { "y": 158, "x": 205, "width": 230, "visible": false, "var": "game_logo", "texture": "Images/jelly_shift_logo.png", "name": "game_logo", "height": 128 }, "compId": 62 }, { "type": "Sprite", "props": { "y": 83, "x": 525, "width": 104, "height": 41 }, "compId": 64, "child": [{ "type": "Image", "props": { "y": -5, "x": 53, "width": 50, "visible": false, "var": "jewel_img", "skin": "Images/big_gem.png", "name": "jewel_img", "height": 50 }, "compId": 10 }, { "type": "Label", "props": { "y": 1, "x": -7, "width": 27, "visible": false, "var": "current_jewel", "text": "0", "name": "current_jewel", "height": 34, "fontSize": 25, "font": "Arial", "color": "white" }, "compId": 11 }] }, { "type": "Sprite", "props": { "y": 421, "x": 116, "visible": false, "var": "food_ret", "name": "food_ret" }, "compId": 70, "child": [{ "type": "Image", "props": { "y": 10, "x": 0, "width": 408, "visible": true, "var": "food_bg", "skin": "Images/target_catched_background.png", "name": "food_bg", "height": 148 }, "compId": 26, "child": [{ "type": "Image", "props": { "y": 65, "x": 74, "width": 260, "skin": "Images/gem_rush_bar.png", "height": 18 }, "compId": 36 }] }, { "type": "Sprite", "props": { "y": 43, "x": 53 }, "compId": 66, "child": [{ "type": "Image", "props": { "zOrder": 5, "y": 1, "x": 0, "width": 80, "visible": true, "var": "food1", "skin": "Images/dot.png", "name": "food1", "height": 80 }, "compId": 28, "child": [{ "type": "Image", "props": { "y": 62.5, "x": 22.5, "width": 35, "var": "check1", "skin": "Images/tick.png", "height": 35 }, "compId": 37 }] }, { "type": "Image", "props": { "zOrder": 5, "y": 1, "x": 113, "width": 80, "visible": true, "var": "food2", "skin": "Images/dot.png", "name": "food2", "height": 80 }, "compId": 29, "child": [{ "type": "Image", "props": { "y": 62.5, "x": 22.5, "width": 35, "var": "check2", "skin": "Images/tick.png", "name": "check2", "height": 35 }, "compId": 38 }] }, { "type": "Image", "props": { "zOrder": 5, "y": 1, "x": 228, "width": 80, "visible": true, "var": "food3", "skin": "Images/dot.png", "name": "food3", "height": 80 }, "compId": 30, "child": [{ "type": "Image", "props": { "y": 62.5, "x": 22.5, "width": 35, "var": "check3", "skin": "Images/tick.png", "name": "check3", "height": 35 }, "compId": 39 }] }] }] }, { "type": "Sprite", "props": { "y": 508, "x": 195, "visible": false, "var": "gem_ret", "name": "gem_ret" }, "compId": 71, "child": [{ "type": "Image", "props": { "y": 126, "x": 125, "width": 250, "visible": true, "var": "shine_img", "skin": "Images/beams_gem_bright2.png", "pivotY": 125, "pivotX": 125, "name": "shine_img", "height": 250 }, "compId": 35 }, { "type": "Sprite", "props": { "y": 107, "x": 50, "width": 150, "height": 51 }, "compId": 63, "child": [{ "type": "Image", "props": { "y": 2, "x": 89, "width": 50, "visible": true, "var": "eat_jewel_img", "skin": "Images/big_gem.png", "name": "jewel_img", "height": 50 }, "compId": 23 }, { "type": "Label", "props": { "y": 0, "x": 15, "width": 65, "visible": true, "var": "eat_jewel_cnt", "text": "0", "name": "jewel_cnt", "height": 44, "fontSize": 50, "font": "Arial", "color": "#e0e029", "bold": true }, "compId": 24 }, { "type": "Label", "props": { "y": -1, "x": -15, "width": 28, "visible": true, "text": "+", "name": "jewel_cnt", "height": 44, "fontSize": 50, "font": "Arial", "color": "#e0e029", "bold": true }, "compId": 121 }] }] }, { "type": "Sprite", "props": { "y": 957, "x": 265, "width": 109, "visible": false, "var": "tut_img", "scaleY": -1, "name": "tut_img", "height": 178 }, "compId": 78, "child": [{ "type": "Sprite", "props": { "y": 147.5, "x": 95.5, "width": 55, "texture": "Images/hand.png", "rotation": 180, "height": 65 }, "compId": 74 }, { "type": "Sprite", "props": { "y": 29, "x": 55.5, "width": 6, "texture": "Images/Dotted_Line.png", "height": 127 }, "compId": 75 }, { "type": "Sprite", "props": { "y": 10, "x": 40, "width": 35, "texture": "Images/Arrow.png", "height": 15 }, "compId": 76 }, { "type": "Sprite", "props": { "y": 171, "x": 77, "width": 35, "texture": "Images/Arrow.png", "rotation": 180, "height": 15 }, "compId": 77 }] }, { "type": "Sprite", "props": { "y": 957, "x": 205, "width": 218, "visible": false, "var": "tut_bar", "texture": "Images/juostele.png", "name": "tut_bar", "height": 68 }, "compId": 85, "child": [{ "type": "Label", "props": { "y": 1, "x": -6, "width": 230, "valign": "middle", "text": "SLIDE\\nUP&DOWN", "height": 67, "fontSize": 25, "font": "Arial", "align": "center" }, "compId": 86 }] }, { "type": "Image", "props": { "y": 614, "x": 337, "width": 50, "visible": false, "var": "eat_jewel_img1", "skin": "Images/big_gem.png", "name": "jewel_img", "height": 50 }, "compId": 103 }, { "type": "Image", "props": { "y": 614, "x": 337, "width": 50, "visible": false, "var": "eat_jewel_img2", "skin": "Images/big_gem.png", "name": "jewel_img", "height": 50 }, "compId": 104 }, { "type": "Image", "props": { "y": 614, "x": 337, "width": 50, "visible": false, "var": "eat_jewel_img3", "skin": "Images/big_gem.png", "name": "jewel_img", "height": 50 }, "compId": 105 }, { "type": "Image", "props": { "y": 614, "x": 337, "width": 50, "visible": false, "var": "eat_jewel_img4", "skin": "Images/big_gem.png", "name": "jewel_img", "height": 50 }, "compId": 106 }, { "type": "Image", "props": { "y": 614, "x": 337, "width": 50, "visible": false, "var": "eat_jewel_img5", "skin": "Images/big_gem.png", "name": "jewel_img", "height": 50 }, "compId": 107 }, { "type": "Image", "props": { "y": 615, "x": 337, "width": 50, "visible": false, "var": "eat_jewel_img6", "skin": "Images/big_gem.png", "name": "jewel_img", "height": 50 }, "compId": 108 }, { "type": "Image", "props": { "y": 615, "x": 337, "width": 50, "visible": false, "var": "eat_jewel_img7", "skin": "Images/big_gem.png", "name": "jewel_img", "height": 50 }, "compId": 109 }, { "type": "Image", "props": { "y": 615, "x": 337, "width": 50, "visible": false, "var": "eat_jewel_img8", "skin": "Images/big_gem.png", "name": "jewel_img", "height": 50 }, "compId": 110 }, { "type": "Image", "props": { "y": 614, "x": 337, "width": 50, "visible": false, "var": "eat_jewel_img9", "skin": "Images/big_gem.png", "name": "jewel_img", "height": 50 }, "compId": 111 }, { "type": "Image", "props": { "y": 618, "x": 337, "width": 50, "visible": false, "var": "eat_jewel_img0", "skin": "Images/big_gem.png", "name": "jewel_img", "height": 50 }, "compId": 112 }, { "type": "Animation", "props": { "y": 339, "x": 174.5, "width": 191, "visible": false, "var": "loading_anim", "name": "loading_anim", "height": 152, "autoPlay": true }, "compId": 118 }, { "type": "Animation", "props": { "y": 1, "x": 61, "width": 170, "visible": false, "var": "eat_anim", "scaleY": 1.8, "scaleX": 1.8, "pivotY": 0, "pivotX": 0, "name": "eat_anim", "height": 183, "autoPlay": true }, "compId": 120 }, { "type": "Sprite", "props": { "y": 62, "x": 249, "visible": false, "var": "level_bar_box" }, "compId": 122, "child": [{ "type": "Label", "props": { "y": 1, "x": 0, "width": 124, "visible": true, "var": "level_str", "text": "LEVEL", "name": "level_str", "height": 52, "fontSize": 35, "font": "Arial", "color": "white", "bold": true }, "compId": 16 }, { "type": "Label", "props": { "y": 2, "x": 121, "visible": true, "var": "current_round", "text": "1", "name": "current_round", "fontSize": 35, "font": "Arial", "color": "white", "bold": true }, "compId": 18 }] }, { "type": "Sprite", "props": { "y": 812, "x": 123, "width": 393, "visible": false, "var": "btn_tuple", "height": 112 }, "compId": 123, "child": [{ "type": "Image", "props": { "y": 6, "x": 285, "width": 98, "var": "btn_customize", "skin": "Images/customize.png", "name": "btn_customize", "height": 98 }, "compId": 127, "child": [{ "type": "Label", "props": { "y": 24, "x": 14.1083984375, "text": "\\n\\n\\n\\nCUSTOMIZE", "color": "white" }, "compId": 129 }] }, { "type": "Image", "props": { "y": 6, "x": 9, "width": 98, "var": "btn_world", "skin": "Images/coming_soon_button.png", "name": "btn_world", "height": 98 }, "compId": 130, "child": [{ "type": "Label", "props": { "y": 24, "x": 22.5, "text": "\\n\\n\\n\\nWORLDS", "color": "white" }, "compId": 131 }] }] }, { "type": "Image", "props": { "y": 853, "x": 206, "width": 228, "visible": false, "var": "btn_next", "skin": "Images/button_get_vip.png", "name": "btn_next", "height": 94 }, "compId": 132, "child": [{ "type": "Label", "props": { "y": 27, "x": 63, "width": 114, "text": "NEXT", "height": 49, "fontSize": 40, "color": "white" }, "compId": 134 }] }, { "type": "Image", "props": { "y": 33, "x": 35, "width": 50, "visible": false, "var": "btn_setting", "skin": "Images/settings_button.png", "name": "btn_setting", "height": 50 }, "compId": 135 }, { "type": "Label", "props": { "y": 65, "x": 232, "width": 176, "visible": false, "var": "gem_rush_lbl", "text": "GEM_RUSH", "name": "gem_rush_lbl", "height": 36, "fontSize": 30, "font": "Arial", "color": "white", "bold": true }, "compId": 140 }, { "type": "Sprite", "props": { "y": 140, "x": 233, "visible": false, "var": "jewel_bar_box" }, "compId": 139, "child": [{ "type": "ProgressBar", "props": { "y": 6, "x": 14, "width": 159, "visible": true, "var": "jewel_bar", "value": 0, "skin": "Images/progress4jewel.png", "name": "jewel_bar", "height": 39 }, "compId": 137, "child": [{ "type": "Label", "props": { "y": 8.5, "x": 45, "var": "jewel_round_current", "text": "0", "fontSize": 22, "color": "#92ef54" }, "compId": 148 }, { "type": "Label", "props": { "y": 9, "x": 82, "text": "/", "fontSize": 22, "color": "#92ef54" }, "compId": 150 }] }, { "type": "Sprite", "props": { "y": 2, "x": 0, "width": 50, "texture": "Images/big_gem.png", "height": 50 }, "compId": 138 }, { "type": "Label", "props": { "y": 14.5, "x": 117, "var": "jewel_round_total", "text": "0", "fontSize": 22, "color": "#92ef54" }, "compId": 149 }] }, { "type": "Button", "props": { "y": 703, "x": 160, "width": 319, "visible": false, "var": "btn_continue", "name": "btn_continue", "labelSize": 30, "labelFont": "Arial", "labelColors": "blue", "labelBold": true, "label": "TAP TO CONTINUE", "height": 56 }, "compId": 145 }], "loadList": ["Images/level_failed.png", "Images/level_completed.png", "Images/path.png", "Images/marker_color.png", "Images/e1.png", "Images/face.png", "Images/progress_bar.png", "Images/coin_empty.png", "Images/token_in_button.png", "Images/jelly_shift_logo.png", "Images/big_gem.png", "Images/target_catched_background.png", "Images/gem_rush_bar.png", "Images/dot.png", "Images/tick.png", "Images/beams_gem_bright2.png", "Images/hand.png", "Images/Dotted_Line.png", "Images/Arrow.png", "Images/juostele.png", "Images/customize.png", "Images/coming_soon_button.png", "Images/button_get_vip.png", "Images/settings_button.png", "Images/progress4jewel.png"], "loadList3D": [] };
	    ui.GameSceneUI = GameSceneUI;
	    REG("ui.GameSceneUI", GameSceneUI);
	    class ProgressSceneUI extends Laya.View {
	        constructor() { super(); }
	        createChildren() {
	            super.createChildren();
	            this.createView(ProgressSceneUI.uiView);
	        }
	    }
	    ProgressSceneUI.uiView = { "type": "View", "props": { "width": 640, "runtime": "script/ProgressView.ts", "height": 1025 }, "compId": 2, "child": [{ "type": "Panel", "props": { "y": -5, "x": 0, "width": 640, "visible": false, "var": "panel", "name": "panel", "height": 1300, "bgColor": "#148be8" }, "compId": 7, "child": [{ "type": "ProgressBar", "props": { "y": 554, "x": 227, "width": 188, "visible": false, "var": "loading_prog", "value": 0, "skin": "Images/progress_bar.png", "name": "loading_prog", "height": 24 }, "compId": 5 }, { "type": "Sprite", "props": { "y": 264, "x": 122, "width": 396, "visible": false, "var": "logo", "texture": "Images/jelly_shift_logo.png", "name": "logo", "height": 247 }, "compId": 4 }] }], "loadList": ["Images/progress_bar.png", "Images/jelly_shift_logo.png"], "loadList3D": [] };
	    ui.ProgressSceneUI = ProgressSceneUI;
	    REG("ui.ProgressSceneUI", ProgressSceneUI);
	    class SettingSceneUI extends Laya.Dialog {
	        constructor() { super(); }
	        createChildren() {
	            super.createChildren();
	            this.createView(SettingSceneUI.uiView);
	        }
	    }
	    SettingSceneUI.uiView = { "type": "Dialog", "props": { "zOrder": 0, "width": 412, "runtime": "script/SettingDlg.ts", "renderType": "render", "isShowEffect": true, "isPopupCenter": true, "isModal": true, "hitTestPrior": true, "height": 732 }, "compId": 2, "child": [{ "type": "Sprite", "props": { "zOrder": -1, "y": 160, "x": 459, "width": 371, "texture": "Images/popup.png", "pivotY": 242, "pivotX": 439, "height": 504 }, "compId": 10, "child": [{ "type": "Label", "props": { "y": 114, "x": 53, "width": 119, "text": "HAPTIC", "name": "", "height": 39, "fontSize": 30, "font": "Arial" }, "compId": 16 }, { "type": "Label", "props": { "y": 194, "x": 53, "width": 115, "text": "SOUND", "name": "", "height": 36, "fontSize": 30, "font": "Arial" }, "compId": 17 }, { "type": "Button", "props": { "y": 279, "x": 43, "width": 135, "visible": false, "stateNum": 1, "skin": "Images/settings_menu_frame.png", "name": "", "labelSize": 15, "labelFont": "Arial", "label": "RESTORE\\nPURCHASES", "height": 60 }, "compId": 21 }, { "type": "Button", "props": { "y": 280, "x": 205, "width": 135, "visible": false, "stateNum": 1, "skin": "Images/settings_menu_frame.png", "name": "", "labelSize": 15, "labelFont": "Arial", "label": "WETHDRAW\\nCONSENT", "height": 60 }, "compId": 22 }, { "type": "Button", "props": { "y": 378, "x": 58, "width": 259, "stateNum": 1, "skin": "Images/ads.png", "name": "", "labelSize": 20, "labelFont": "Arial", "labelColors": "white", "label": "        REMOVE ADS", "height": 85 }, "compId": 27 }, { "type": "Label", "props": { "y": 14, "x": 113, "width": 158, "text": "SETTINGS", "name": "", "height": 37, "fontSize": 30, "font": "Arial", "color": "white" }, "compId": 18 }, { "type": "CheckBox", "props": { "y": 106, "x": 216.5, "width": 247, "var": "chk_haptic", "stateNum": 2, "selected": true, "presetID": 1, "name": "chk_haptic", "height": 94, "skin": "Images/checkbox.png", "scaleY": 0.5, "scaleX": 0.5, "isPresetRoot": true }, "compId": 31 }, { "type": "CheckBox", "props": { "y": 183, "x": 217, "width": 247, "var": "chk_sound", "stateNum": 2, "selected": true, "presetID": 1, "name": "chk_sound", "height": 99, "skin": "Images/checkbox.png", "scaleY": 0.5, "scaleX": 0.5, "isPresetRoot": true }, "compId": 32 }] }, { "type": "Button", "props": { "y": 451, "x": 91, "width": 232, "var": "btn_back", "stateNum": 1, "scaleY": 1, "scaleX": 1, "name": "close", "labelSize": 35, "labelFont": "Arial", "labelColors": "white", "height": 91 }, "compId": 11, "child": [{ "type": "Sprite", "props": { "y": 0, "x": 0, "width": 232, "texture": "Images/back.png", "height": 91 }, "compId": 28, "child": [{ "type": "Label", "props": { "y": 25.5, "x": 39.310546875, "text": "    BACK", "fontSize": 40, "font": "arial", "color": "white" }, "compId": 29 }] }] }], "loadList": ["Images/popup.png", "Images/settings_menu_frame.png", "Images/ads.png", "prefab/CheckBox.prefab", "Images/back.png"], "loadList3D": [] };
	    ui.SettingSceneUI = SettingSceneUI;
	    REG("ui.SettingSceneUI", SettingSceneUI);
	    class WorldSceneUI extends Laya.Dialog {
	        constructor() { super(); }
	        createChildren() {
	            super.createChildren();
	            this.createView(WorldSceneUI.uiView);
	        }
	    }
	    WorldSceneUI.uiView = { "type": "Dialog", "props": { "width": 640, "runtime": "script/WorldDlg.ts", "height": 1025 }, "compId": 2, "child": [{ "type": "Image", "props": { "y": 241, "x": 0, "width": 640, "skin": "Images/legendary_popup.png", "height": 976 }, "compId": 3 }, { "type": "Label", "props": { "y": 251, "x": 231, "width": 159, "text": "WORLDS", "height": 44, "fontSize": 35, "font": "Arial", "color": "white" }, "compId": 4 }, { "type": "Panel", "props": { "y": 330, "x": 1, "width": 644, "var": "cust_panel", "skewX": 0, "scaleY": 1, "scaleX": 1, "name": "cust_panel", "height": 798, "anchorX": 0 }, "compId": 17, "child": [{ "type": "Image", "props": { "y": 1, "x": 118, "width": 400, "skin": "Images/border.png", "height": 400 }, "compId": 156 }, { "type": "Image", "props": { "y": 497, "x": 347, "width": 200, "skin": "Images/saygames_logo.png", "height": 70 }, "compId": 159 }, { "type": "Image", "props": { "y": 497, "x": 102, "width": 200, "skin": "Images/estoty_logo.png", "height": 70 }, "compId": 160 }, { "type": "Image", "props": { "y": 320, "x": 100, "width": 447, "skin": "Images/coming_soon_ribbon.png", "height": 66 }, "compId": 161, "child": [{ "type": "Label", "props": { "y": 17, "x": 86, "width": 268, "text": "COMING SOON!", "height": 49, "fontSize": 35, "font": "Arial", "color": "#0c4377" }, "compId": 162 }] }, { "type": "Image", "props": { "y": 583, "x": 467, "width": 80, "skin": "Images/instagram_image_green.png", "height": 80 }, "compId": 163 }, { "type": "Image", "props": { "y": 583, "x": 102, "width": 80, "skin": "Images/facebook_image.png", "height": 80 }, "compId": 164 }, { "type": "Image", "props": { "y": 583, "x": 213, "width": 80, "skin": "Images/instagram_image.png", "height": 80 }, "compId": 165 }, { "type": "Image", "props": { "y": 583, "x": 357, "width": 80, "skin": "Images/facebook_image_green.png", "height": 80 }, "compId": 166 }, { "type": "Image", "props": { "zOrder": -1, "y": 448, "x": 0, "width": 638, "skin": "Images/darker_ribbon.png", "height": 633 }, "compId": 176 }] }, { "type": "Button", "props": { "y": 253, "x": 492, "width": 35, "stateNum": 1, "skin": "Images/x.png", "name": "close", "height": 35 }, "compId": 5 }, { "type": "Sprite", "props": { "y": 225, "x": 20, "texture": "Images/beams_gem_bright2.png" }, "compId": 183 }, { "type": "Image", "props": { "y": 362, "x": 170, "skin": "model/sloth.png" }, "compId": 185 }], "loadList": ["Images/legendary_popup.png", "Images/border.png", "Images/saygames_logo.png", "Images/estoty_logo.png", "Images/coming_soon_ribbon.png", "Images/instagram_image_green.png", "Images/facebook_image.png", "Images/instagram_image.png", "Images/facebook_image_green.png", "Images/darker_ribbon.png", "Images/x.png", "Images/beams_gem_bright2.png", "model/sloth.png"], "loadList3D": [] };
	    ui.WorldSceneUI = WorldSceneUI;
	    REG("ui.WorldSceneUI", WorldSceneUI);
	})(ui || (ui = {}));

	class GameInfo {
	    static InitGameInfo() {
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
	    static storeGameStatus() {
	        localStorage.setItem("jelly_state", GameInfo.GAME_STATE.toString());
	        localStorage.setItem("jelly_player_pass", GameInfo.curPassedLen.toString());
	        localStorage.setItem("jelly_food_pass", GameInfo.curFoodLen.toString());
	        localStorage.setItem("jelly_round", GameInfo.round.toString());
	        localStorage.setItem("jelly_jewel", GameInfo.jewelCnt.toString());
	        localStorage.setItem("jelly_coin", GameInfo.coinCnt.toString());
	        localStorage.setItem("jelly_target_food", GameInfo.targetFood.toString());
	        localStorage.setItem("jelly_models", JSON.stringify({ "data": GameInfo.models }));
	    }
	    static GetLoadLevel() {
	        let current_round = parseInt(localStorage.getItem("jelly_round"));
	        GameInfo.round = current_round + 1;
	        let current_coinCnt = parseInt(localStorage.getItem("jelly_coin"));
	        GameInfo.coinCnt = current_coinCnt + 1;
	        let current_jewelCnt = parseInt(localStorage.getItem("jelly_jewel"));
	        GameInfo.jewelCnt = current_jewelCnt;
	        if (GameInfo.targetFoodEat) {
	            let target_food = parseInt(localStorage.getItem("jelly_target_food"));
	            GameInfo.targetFood++;
	            if (GameInfo.targetFood > 15)
	                GameInfo.targetFood = 0;
	        }
	    }
	    static GetTerrainInfo() {
	        GameInfo.terrainNum = GameInfo.round % GameInfo.round_period;
	        if (GameInfo.terrainNum == 0)
	            GameInfo.terrainNum = GameInfo.round_period;
	        GameInfo.terrainCol = (GameInfo.isJewelsRound) ? Laya.Color.YELLOW : Laya.Color.GRAY;
	        var colorList = [Laya.Color.RED, Laya.Color.GREEN, Laya.Color.BLUE, Laya.Color.MAGENTA, Laya.Color.CYAN];
	        GameInfo.terrainSky = colorList[GameInfo.round % 5];
	    }
	    static GetPhisingPercent() {
	        var percent = GameInfo.curPhisingValue / GameInfo.maxPhisingValue;
	        return percent;
	    }
	    static GetPassedLevelPercent() {
	        return GameInfo.curPassedLen / GameInfo.maxLevelLen;
	    }
	    GetMaxLVLength() {
	        return GameInfo.maxLevelLen;
	    }
	    GetPassedLVLength() {
	        return GameInfo.curPassedLen;
	    }
	    static getTerrainLength(round) {
	        let terr_len_arr = [
	            100, 150, 120, 130, 150
	        ];
	        let idx = round % 5;
	        if (idx == 0)
	            idx = 5;
	        return terr_len_arr[idx - 1];
	    }
	    static GetTargetFoodIndex() {
	        if (GameInfo.round % 4 == 0)
	            return -1;
	        return GameInfo.targetFood;
	    }
	    static getFoodName() {
	        let ret = "";
	        ret = GameInfo.food_array[GameInfo.GetTargetFoodIndex()];
	        return ret;
	    }
	    static getFoodArray() {
	        if (GameInfo.isJewelsRound)
	            return [];
	        let from_idx = Math.floor(GameInfo.targetFood / 3) * 3;
	        let to_idx = Math.floor(GameInfo.targetFood / 3 + 1) * 3;
	        let ret_arr = GameInfo.food_array.slice(from_idx, to_idx);
	        let idx2 = GameInfo.targetFood % 3;
	        for (let i = 0; i < 3; i++) {
	            ret_arr[i] = ret_arr[i] + "_" + ((i > idx2) ? "disabled" : "enabled") + ".png";
	        }
	        return ret_arr;
	    }
	    static getPos(obj1, obj2) {
	        let x = Math.abs(obj1.width - obj2.width) / 2;
	        let y = Math.abs(obj1.height - obj2.height) / 2;
	        return [x, y];
	    }
	    static getRoundJewelCnt() {
	        let ret = 30;
	        if (GameInfo.round > 4)
	            ret = 40;
	        return ret;
	    }
	    static isJewelsLevel() {
	        GameInfo.isJewelsRound = (GameInfo.round % 4 == 0);
	        return GameInfo.isJewelsRound;
	    }
	    static isCurveLevel() {
	        let isCurveRound = ((GameInfo.round + 1) % 4 == 0);
	        return isCurveRound;
	    }
	    SetCoin() {
	    }
	    static GetObstacleCount() {
	        var translevel = this.scene.getChildByName("Level");
	        var obstacles = translevel.getChildByName("obstacles");
	        return obstacles.numChildren;
	    }
	    static setGroundColor(group, player) {
	        for (let i = 0; i < GameInfo.models.length; i++) {
	            if (GameInfo.models[i].category == group && GameInfo.models[i].name == player)
	                GameInfo.groundColor = GameInfo.models[i].color;
	        }
	    }
	    static getGroundColor() {
	        var temp = this.calcRGB(GameInfo.groundColor);
	        temp.w = 0.3;
	        return temp;
	    }
	    static getJewelGroundColor() {
	        var temp = this.calcRGB("#FFFF99");
	        temp.w = 0.5;
	        return temp;
	    }
	    static getSkyColor() {
	        let arr = ["#e06cff", "#00ff00", "#0000ff", "#ffff00", "#BA1FDE", "#00ffff", "#ff00ff", "#ff0000"];
	        let ret = this.calcRGB(arr[GameInfo.round % 8]);
	        return ret;
	    }
	    static calcRGB(hex) {
	        let r = GameInfo.hexToR(hex);
	        let g = GameInfo.hexToG(hex);
	        let b = GameInfo.hexToB(hex);
	        let ret = new Laya.Vector4(r / 255, g / 255, b / 255, 1);
	        return ret;
	    }
	    static hexToR(h) { return parseInt((this.cutHex(h)).substring(0, 2), 16); }
	    static hexToG(h) { return parseInt((this.cutHex(h)).substring(2, 4), 16); }
	    static hexToB(h) { return parseInt((this.cutHex(h)).substring(4, 6), 16); }
	    static cutHex(h) { return (h.charAt(0) == "#") ? h.substring(1, 7) : h; }
	}
	GameInfo.round = 0;
	GameInfo.jewelCnt = 2000;
	GameInfo.baseResPath = "https://beatstreet.digitalgalaxy.cn/jelly/";
	GameInfo.round_period = 12;
	GameInfo.jewel_unit = 5;
	GameInfo.models = [
	    { "idx": 1, "name": "blue_guy", "category": "jelly", "sub_category": "jelly", "active": true, "color": "#1b6efa", "price": 500 },
	    { "idx": 2, "name": "bright_blue_girl", "category": "jelly", "sub_category": "jelly", "active": false, "color": "#1efefd", "price": 500 },
	    { "idx": 3, "name": "green_guy", "category": "jelly", "sub_category": "jelly", "active": false, "color": "#7df81a", "price": 500 },
	    { "idx": 4, "name": "pink_girl", "category": "jelly", "sub_category": "jelly", "active": false, "color": "#e175ff", "price": 500 },
	    { "idx": 5, "name": "Snarglius", "category": "jelly", "sub_category": "jelly", "active": false, "color": "#fdb381", "price": 500 },
	    { "idx": 6, "name": "yellow_guy", "category": "jelly", "sub_category": "jelly", "active": false, "color": "#fbe21c", "price": 500 },
	    { "idx": 7, "name": "Bear", "category": "animals", "sub_category": "animals1", "active": false, "color": "#ff9e4d", "price": 1000 },
	    { "idx": 8, "name": "Cat", "category": "animals", "sub_category": "animals1", "active": false, "color": "#718ad4", "price": 1000 },
	    { "idx": 9, "name": "Cheetah", "category": "animals", "sub_category": "animals1", "active": false, "color": "#ffc83c", "price": 1000 },
	    { "idx": 10, "name": "Cock", "category": "animals", "sub_category": "animals1", "active": false, "color": "#e70503", "price": 1000 },
	    { "idx": 11, "name": "Dog", "category": "animals", "sub_category": "animals1", "active": false, "color": "#9d8674", "price": 1000 },
	    { "idx": 12, "name": "Duck", "category": "animals", "sub_category": "animals1", "active": false, "color": "#55d044", "price": 1000 },
	    { "idx": 13, "name": "Fox", "category": "animals", "sub_category": "animals2", "active": false, "color": "#ff7f04", "price": 1500 },
	    { "idx": 14, "name": "Frog", "category": "animals", "sub_category": "animals2", "active": false, "color": "#7bdb21", "price": 1500 },
	    { "idx": 15, "name": "Hippo", "category": "animals", "sub_category": "animals2", "active": false, "color": "#7fc9fb", "price": 1500 },
	    { "idx": 16, "name": "Lion", "category": "animals", "sub_category": "animals2", "active": false, "color": "#ffd83c", "price": 1500 },
	    { "idx": 17, "name": "Owl", "category": "animals", "sub_category": "animals2", "active": false, "color": "#e4aaf4", "price": 1500 },
	    { "idx": 18, "name": "Penguin", "category": "animals", "sub_category": "animals2", "active": false, "color": "#263e9a", "price": 1500 },
	    { "idx": 19, "name": "Pig", "category": "animals", "sub_category": "animals2", "active": false, "color": "#fd8ab2", "price": 1500 },
	    { "idx": 20, "name": "Racoon", "category": "animals", "sub_category": "animals2", "active": false, "color": "#475068", "price": 1500 },
	    { "idx": 21, "name": "Sheep", "category": "animals", "sub_category": "animals2", "active": false, "color": "#d4e7e6", "price": 1500 },
	    { "idx": 22, "name": "BadGuy", "category": "heroes", "sub_category": "heroes", "active": false, "color": "#6df889", "price": 2000 },
	    { "idx": 23, "name": "CaptainAmerica", "category": "heroes", "sub_category": "heroes", "active": false, "color": "#f44816", "price": 2000 },
	    { "idx": 24, "name": "Cowboy", "category": "heroes", "sub_category": "heroes", "active": false, "color": "#fcb280", "price": 2000 },
	    { "idx": 25, "name": "Deadpool", "category": "heroes", "sub_category": "heroes", "active": false, "color": "#4aa0d6", "price": 2000 },
	    { "idx": 26, "name": "IronMan", "category": "heroes", "sub_category": "heroes", "active": false, "color": "#ffff3c", "price": 2000 },
	    { "idx": 27, "name": "Magician", "category": "heroes", "sub_category": "heroes", "active": false, "color": "#fdb381", "price": 2000 },
	    { "idx": 28, "name": "PinkGuy", "category": "heroes", "sub_category": "heroes", "active": false, "color": "#fd68d3", "price": 2000 },
	    { "idx": 29, "name": "Princess", "category": "heroes", "sub_category": "heroes", "active": false, "color": "#4be9fe", "price": 2000 },
	    { "idx": 30, "name": "Robin", "category": "heroes", "sub_category": "heroes", "active": false, "color": "#7fbb61", "price": 2000 },
	    { "idx": 31, "name": "Coala", "category": "legendary", "sub_category": "legendary", "active": false, "color": "#a085a0", "price": 2500 },
	    { "idx": 32, "name": "CommandoTiger", "category": "legendary", "sub_category": "legendary", "active": false, "color": "#fa850a", "price": 2500 },
	    { "idx": 33, "name": "Cow", "category": "legendary", "sub_category": "legendary", "active": false, "color": "#979797", "price": 2500 },
	    { "idx": 34, "name": "Crock", "category": "legendary", "sub_category": "legendary", "active": false, "color": "#c3faa9", "price": 2500 },
	    { "idx": 35, "name": "Lama", "category": "legendary", "sub_category": "legendary", "active": false, "color": "#cb9258", "price": 2500 },
	    { "idx": 36, "name": "Panda", "category": "legendary", "sub_category": "legendary", "active": false, "color": "#c4bbbc", "price": 2500 },
	    { "idx": 37, "name": "Rabbit", "category": "legendary", "sub_category": "legendary", "active": false, "color": "#ffa6df", "price": 2500 },
	    { "idx": 38, "name": "Shark", "category": "legendary", "sub_category": "legendary", "active": false, "color": "#79fdfe", "price": 2500 },
	    { "idx": 39, "name": "Sloth", "category": "legendary", "sub_category": "legendary", "active": false, "color": "#ecdc91", "price": 2500 }
	];
	GameInfo.jewel_init_x = 337;
	GameInfo.jewel_init_y = 618;
	GameInfo.anim_pos_category = [
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
	GameInfo.emojis = [
	    "Angry",
	    "Emoji_All",
	    "Scarred",
	    "Smile",
	    "Tongue",
	    "Wink",
	    "Worried",
	    "Worried2"
	];
	GameInfo.food_array = [
	    "apple",
	    "banana",
	    "blackberry",
	    "cake",
	    "can",
	    "cherry",
	    "coconut",
	    "cupcake",
	    "donut",
	    "gummybear",
	    "ice_cream",
	    "lollypop",
	    "pear",
	    "slushy",
	    "strawberry",
	    "watermelon"
	];
	GameInfo.food_jewel_array = [
	    50,
	    50,
	    50,
	    50,
	    50,
	    50,
	    50,
	    50,
	    50,
	    50,
	    50,
	    50,
	    50,
	    50,
	    50,
	    50
	];
	GameInfo.particlce_info = {
	    "FireworkSky": [
	        "SphereGlow",
	        "Sparks",
	        "Smoke",
	        "FireTrail"
	    ],
	    "Rocket": [
	        "Rocket_bullet"
	    ],
	    "FireworkEndExplosion": [
	        "SphereGlow",
	        "Sparks",
	        "Smoke",
	        "FireTrail"
	    ],
	    "FireworkBall": [
	        "FireTrail",
	        "SparkTrail",
	        "SmokeTrail"
	    ],
	    "Firework": [
	        "firework",
	        "RocketMissilePurple"
	    ],
	    "Balloon": [
	        "Shark_gun_water_baloon"
	    ]
	};
	GameInfo.resArray = [
	    "res/atlas/Images.atlas",
	    "res/atlas/Images.png",
	    "res/atlas/resources/icons.atlas",
	    "unity/model/player.lh",
	    "unity/model/food.lh",
	    "unity/model/Emojis.lh",
	    "unity/model/particle.lh",
	    "unity/trail/Cube.lh",
	    { url: "res/particles/glow_jiesuan.png", type: Laya.Loader.IMAGE },
	    { url: "res/particles/Jiesuan_eff.part", type: Laya.Loader.JSON },
	    { url: "res/particles/heart.png", type: Laya.Loader.IMAGE },
	    { url: "res/particles/texture.png", type: Laya.Loader.IMAGE },
	    { url: "res/particles/RadiusMode.part", type: Laya.Loader.JSON },
	    { url: "res/particles/particleNew.part", type: Laya.Loader.JSON },
	    { url: "res/particles/GravityMode.part", type: Laya.Loader.JSON }
	];
	GameInfo.org_velocity = 0.3;
	GameInfo.GAME_STATE = 0;
	GameInfo.modelName = GameInfo.models[0].category + "_" + GameInfo.models[0].name;
	GameInfo.eatJewelCnt = 0;
	GameInfo.coinCnt = 0;
	GameInfo.targetFood = 0;
	GameInfo.targetFoodEat = false;
	GameInfo.curFoodLen = 0;
	GameInfo.curPassedLen = 0;
	GameInfo.maxLevelLen = 100;
	GameInfo.curPhisingValue = 0;
	GameInfo.maxPhisingValue = 100;
	GameInfo.deltaPhisingValue = 20;
	GameInfo.isJewelsRound = false;
	GameInfo.terrainNum = 0;
	GameInfo.groundColor = "ffffff";
	GameInfo.current_fever = 0;
	GameInfo.fever_ok = false;

	class ScrollView extends Laya.Box {
	    constructor() {
	        super();
	        this._hadRender = false;
	        this._hadInit = false;
	        this._hadInitItem = false;
	        this._isSensitive = true;
	        this._leftAlign = 0;
	        this._rightAlign = 0;
	        this.space = 0;
	        this.mouseEnabled = true;
	        this.on(Laya.Event.MOUSE_DOWN, this, this.mouseDown);
	        this.on(Laya.Event.MOUSE_UP, this, this.mouseUp, [Laya.Event.MOUSE_UP]);
	        this.on(Laya.Event.MOUSE_MOVE, this, this.mouseMove);
	        this.on(Laya.Event.MOUSE_OUT, this, this.mouseUp, [Laya.Event.MOUSE_OUT]);
	    }
	    set array(arr) {
	        this._array = arr;
	        this.init();
	    }
	    get array() {
	        return this._array;
	    }
	    set itemRender(itemRender) {
	        this._itemRender = itemRender;
	        this.init();
	    }
	    set renderHandler(hander) {
	        this._renderHandler = hander;
	        this.init();
	    }
	    set mouseHandler(hander) {
	        this._mouseHandler = hander;
	    }
	    set selectHandler(hander) {
	        this._selectHandler = hander;
	    }
	    set cellWidth(cellWidth) {
	        this._cellWidth = cellWidth;
	    }
	    get cellWidth() {
	        return this._cellWidth;
	    }
	    set cellHeight(cellHeight) {
	        this._cellHeight = cellHeight;
	    }
	    get cellHeight() {
	        return this._cellHeight;
	    }
	    set leftAlign(leftAlign) {
	        this._leftAlign = leftAlign;
	    }
	    get leftAlign() {
	        return this._leftAlign;
	    }
	    set rightAlign(rightAlign) {
	        this._rightAlign = rightAlign;
	    }
	    get rightAlign() {
	        return this._rightAlign;
	    }
	    addItem() {
	    }
	    getItemByIndex(index) {
	        return this._cells[index];
	    }
	    getItemIndex(cell) {
	        for (var i = 0; i < this._cells.length; i++) {
	            if (cell == this._cells[i]) {
	                return i;
	            }
	        }
	        return -1;
	    }
	    init() {
	        if (!this._hadInit) {
	            this.initItems();
	            this.initRender();
	            if (this._hadInitItem && this._hadRender) {
	                this._hadInit = true;
	            }
	        }
	    }
	    onCellEvent(event, cell) {
	        var index = this.getItemIndex(cell);
	        if (index == -1) {
	            return;
	        }
	        if (this._selectHandler) {
	            this._selectHandler.runWith([event, index]);
	        }
	    }
	    initItems() {
	        if (!this._hadInitItem && this._itemRender != null && this._array != null && this._array.length > 0) {
	            this._cells = new Array();
	            for (var i = 0; i < this._array.length; i++) {
	                let item = new this._itemRender(this._cellWidth, this._cellHeight);
	                this._cells.push(item);
	                this.addChild(item);
	            }
	            this._hadInitItem = true;
	            this.refreshCellsPos();
	        }
	    }
	    initRender() {
	        if (!this._hadRender && this._renderHandler != null && this._array != null && this._array.length > 0) {
	            for (var i = 0; i < this._array.length; i++) {
	                this._renderHandler.runWith([this._cells[i], i]);
	            }
	            this._hadRender = true;
	        }
	    }
	    doSingleRender(index) {
	        if (!this._hadRender) {
	            this.initRender();
	            return;
	        }
	        if (this._renderHandler != null) {
	            this._renderHandler.runWith([this._cells[index], index]);
	        }
	    }
	    refreshCellsPos() {
	        var cellCount = this._cells.length;
	        for (var i = 0; i < cellCount; i++) {
	            let cell = this._cells[i];
	            let posX = this.getCellPosByIndex(i);
	            cell.pos(posX, this.height / 2);
	        }
	        this.width = this._leftAlign + cellCount * this._cellWidth + (cellCount - 1) * this.space + this._rightAlign;
	    }
	    getCellPosByIndex(index) {
	        return this._leftAlign + (index + 0.5) * this._cellWidth + index * this.space;
	    }
	    mouseDown() {
	        if (this._mouseHandler != null) {
	            var e = new Event(Laya.Event.MOUSE_DOWN);
	            this._mouseHandler.runWith([e]);
	        }
	    }
	    mouseUp(event) {
	        if (this._mouseHandler != null) {
	            var e = new Event(Laya.Event.MOUSE_UP);
	            this._mouseHandler.runWith([e]);
	        }
	    }
	    mouseMove() {
	        if (this._mouseHandler != null) {
	            var e = new Event(Laya.Event.MOUSE_MOVE);
	            this._mouseHandler.runWith([e]);
	        }
	    }
	}

	class Sound {
	    static play(snd_path) {
	        if (!this.sound_active)
	            return;
	        Laya.SoundManager.playSound("sounds/" + snd_path + ".mp3", 1, null);
	    }
	    static playGameStartSound() {
	        this.play("GameStart");
	    }
	    static playCatchFoodSound() {
	        this.play("CatchFood");
	    }
	    static playHitObstacleSound() {
	        this.play("HitObstacle");
	    }
	    static playLevelCompleteSound() {
	        this.play("LeveCompleteUIAppear");
	    }
	    static playGemCounterSound() {
	        this.play("GemCounter");
	    }
	    static playGemRushGemSound() {
	        this.play("GemRushGem");
	    }
	    static playReachFinishSound() {
	        this.play("ReachFinish");
	    }
	    static playShapePerfectSound() {
	        this.play("ShapePerfect1");
	    }
	    static playFeverStartSound() {
	        this.play("FeverStart");
	    }
	    static playFeverLoopSound() {
	        this.play("FeverLoop");
	    }
	    static playFeverDestroySound() {
	        this.play("FereverDestroyObstacle");
	    }
	    static playFallSound() {
	        this.play("Fall");
	    }
	    static playJellyLandSound() {
	        this.play("JellyLand");
	    }
	    static playCustomizeCloseSound() {
	        this.play("CustomizeClose");
	    }
	    static playCustomizeOpenSound() {
	        this.play("CustomizeOpen");
	    }
	    static playCustomizeRandomSound() {
	        this.play("CustomizeRandomBleep");
	    }
	    static playCustomizeSelectSound() {
	        this.play("CustomizeSelect");
	    }
	}
	Sound.sound_active = true;

	class Item extends Laya.Box {
	    constructor(width, height) {
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
	        Sound.sound_active = (sound_active == "true") ? true : false;
	    }
	}
	class CustomizeDlg extends ui.CustomizeSceneUI {
	    constructor() {
	        super();
	        this.mouse_dir = "right";
	        this.prev_x = 0;
	        this.model_name = "";
	        this._mouseX = 0;
	        this._mouseDown = false;
	        this._mouseSpeed = 0;
	        this._mouseStartPosX = 0;
	        this._curMoveFrame = 0;
	        this.selected_arr = [];
	        this.repeatTimes = 0;
	        this.selectedIdx = 0;
	        Laya.timer.frameLoop(1, this, this.onUpdate);
	        this.init();
	        this.connect();
	        this.setScrollView();
	    }
	    onUpdate() {
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
	            }
	            else {
	                this._mouseSpeed = absSpeed * absSpeed * direction;
	            }
	        }
	    }
	    setScrollView() {
	        this.scrollView = new ScrollView();
	        this.addChild(this.scrollView);
	        this.initScrollView();
	        let array = [];
	        let cust_panel = this.getChildByName("cust_panel");
	        let len = cust_panel.numChildren;
	        for (var i = 0; i < len; i++) {
	            array.push(i);
	            this.scrollView.addChild(cust_panel.getChildAt(0));
	            this.scrollView.getChildAt(i).pos(640 * i, 0);
	        }
	        this.scrollView.array = array;
	        this.scrollView.mouseHandler = new Laya.Handler(this, this.onScrollMouse);
	    }
	    initScrollView() {
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
	    onScrollMouse(e) {
	        if (e.type == Laya.Event.MOUSE_DOWN) {
	            this.mouseDown();
	        }
	        else if (e.type == Laya.Event.MOUSE_UP) {
	            this.mouseUp();
	        }
	        else if (e.type == Laya.Event.MOUSE_MOVE) {
	            this.mouseMove();
	        }
	    }
	    mouseDown() {
	        if (this._mouseDown) {
	            console.error("mouse had down");
	        }
	        this._mouseDown = true;
	        this._mouseStartPosX = Laya.MouseManager.instance.mouseX;
	        this._mouseX = Laya.MouseManager.instance.mouseX;
	    }
	    mouseUp() {
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
	    mouseMove() {
	        if (this._mouseDown) {
	            var dis = Laya.MouseManager.instance.mouseX - this._mouseX;
	            this._mouseX = Laya.MouseManager.instance.mouseX;
	            this.updateScrollViewPos(dis);
	            this._curMoveFrame = Laya.timer.currFrame;
	            this._mouseSpeed = dis;
	        }
	    }
	    updateScrollViewPos(dis) {
	        var posX = dis + this.scrollView.x;
	        if (posX > 0) {
	            posX = 0;
	        }
	        if (posX < -this.scrollView.width + Laya.stage.width) {
	            posX = -this.scrollView.width + Laya.stage.width;
	        }
	        this.scrollView.pos(posX, this.scrollView.y);
	    }
	    centeringControl() {
	        var centerIndex = this.getScreenCenterCellIndex();
	        var cellPosX = this.getCellPosByIndex(centerIndex);
	        var posX = Laya.stage.width / 2 - cellPosX;
	        Laya.Tween.to(this.scrollView, { x: posX }, 500, Laya.Ease.cubicOut).update = new Laya.Handler(this, null);
	        this.showRolePrice();
	    }
	    getScreenCenterCellIndex() {
	        var distance = -this.scrollView.x;
	        var index = (distance - this.scrollView.leftAlign + this.scrollView.space + (Laya.stage.width + this.scrollView.cellWidth) / 2) / (this.scrollView.cellWidth + this.scrollView.space);
	        return Math.round(index) - 1;
	    }
	    getCellPosByIndex(index) {
	        return this.scrollView.leftAlign + (index + 0.5) * this.scrollView.cellWidth + index * this.scrollView.space;
	    }
	    showRolePrice() {
	        var centerIndex = this.getScreenCenterCellIndex();
	        let price = 500;
	        this.lbl_price.changeText((price * (centerIndex + 1)).toString());
	    }
	    init() {
	        for (let i = 0; i < GameInfo.models.length; i++) {
	            if (GameInfo.models[i].active) {
	                let group_name = GameInfo.models[i].sub_category + "_group";
	                let child_name = GameInfo.models[i].category + "_" + GameInfo.models[i].name;
	                let child = this.getChildByName("cust_panel").getChildByName(group_name).getChildByName(child_name);
	                let question = child.getChildByName("question");
	                if (question)
	                    question.visible = false;
	                let selected = child.getChildByName("selected");
	                if (selected)
	                    selected.visible = false;
	            }
	        }
	    }
	    onClosed() {
	        Sound.playCustomizeCloseSound();
	        if (this.model_name != "" && this.model_name != GameInfo.modelName) {
	            GameInfo.modelName = this.model_name;
	            this.event("select_player", GameInfo.modelName);
	        }
	        this.event("close_dlg");
	    }
	    onUnlock(e) {
	        if (e.target.name == "btn_unlock") {
	            let current_jewel_cnt = parseInt(localStorage.getItem("jelly_jewel"));
	            if (current_jewel_cnt < parseInt(this.lbl_price.text)) {
	                console.log("Not enough jewels!");
	                return;
	            }
	            let price = parseInt(this.lbl_price.text);
	            current_jewel_cnt -= price;
	            localStorage.setItem("jelly_jewel", current_jewel_cnt.toString());
	            this.event("update_jewel");
	            for (let i = 0; i < GameInfo.models.length; i++) {
	                if (GameInfo.models[i].price == price && GameInfo.models[i].active == false) {
	                    this.selected_arr.push(GameInfo.models[i]);
	                }
	            }
	            Laya.timer.loop(100, this, this.animate4select);
	        }
	    }
	    animate4select() {
	        let len = this.selected_arr.length;
	        let idx = Math.floor(Math.random() * len);
	        Sound.playCustomizeRandomSound();
	        for (let i = 0; i < this.selected_arr.length; i++) {
	            let group_name = this.selected_arr[i].sub_category + "_group";
	            let child_name = this.selected_arr[i].category + "_" + this.selected_arr[i].name;
	            let child = this.scrollView.getChildByName(group_name).getChildByName(child_name);
	            let question = child.getChildByName("question");
	            if (question)
	                question.visible = true;
	        }
	        let group_name = this.selected_arr[idx].sub_category + "_group";
	        let child_name = this.selected_arr[idx].category + "_" + this.selected_arr[idx].name;
	        let child = this.scrollView.getChildByName(group_name).getChildByName(child_name);
	        let question = child.getChildByName("question");
	        if (question)
	            question.visible = false;
	        this.repeatTimes++;
	        if (this.repeatTimes >= 20) {
	            let selected = child.getChildByName("selected");
	            if (selected)
	                selected.visible = false;
	            this.selectedIdx = idx;
	            Laya.timer.clearAll(this);
	            let jelly_models_str = localStorage.getItem("jelly_models");
	            let jelly_models_parent = JSON.parse(jelly_models_str);
	            let jelly_models = jelly_models_parent.data;
	            jelly_models[this.selected_arr[this.selectedIdx].idx - 1].active = true;
	            localStorage.setItem("jelly_models", JSON.stringify({ "data": jelly_models }));
	            GameInfo.models = jelly_models;
	            this.selected_arr = [];
	            this.selectedIdx = 0;
	            this.repeatTimes = 0;
	        }
	    }
	    selectPlayer(e) {
	        if (e.target.name.indexOf("_close") == -1) {
	            Sound.playCustomizeSelectSound();
	            if (!e.target.getChildByName("question").visible && !e.target.getChildByName("selected").visible) {
	                let t = e.target.parent;
	                for (let i = 0; i < t.numChildren; i++) {
	                    let tt = t.getChildAt(i).getChildByName("selected");
	                    if (tt)
	                        tt.visible = false;
	                }
	                e.target.getChildByName("selected").visible = true;
	                this.model_name = e.target.name;
	            }
	        }
	    }
	    connect() {
	        this.btn_unlock.on(Laya.Event.MOUSE_DOWN, this, this.onUnlock);
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

	class ShadowAnimationScript extends Laya.Script3D {
	    constructor() {
	        super();
	        this.startAnim = false;
	        this.startedTime = 0;
	    }
	    ShowPasseedParticle() {
	        this.me = this.owner;
	        this.startedTime = Laya.timer.currTimer;
	        this.startAnim = true;
	        var mat1 = this.me.getChildAt(0).meshRenderer.material;
	        mat1.albedoColor = GameInfo.getGroundColor();
	        mat1.albedoColor.w = 0.5;
	    }
	    onUpdate() {
	        if (this.startAnim && Laya.timer.currTimer - this.startedTime < 300) {
	            var lscale = this.me.transform.localScale;
	            var delta = new Laya.Vector3(lscale.x * 1.02, lscale.x * 1.09, 1);
	            this.me.transform.localScale = delta;
	        }
	        else {
	            if (this.startAnim && Laya.timer.currTimer - this.startedTime >= 600) {
	                var mat1 = this.me.getChildAt(0).meshRenderer.material;
	                mat1.albedoColorA -= 0.05;
	                if (mat1.albedoColorA <= 0) {
	                    this.me.active = false;
	                    this.startAnim = false;
	                }
	            }
	        }
	    }
	}

	class ShadowCollisionScript extends Laya.Script3D {
	    constructor() {
	        super();
	    }
	    onTriggerEnter(other) {
	        super.onTriggerEnter(other);
	        if (other.owner.name == "jelly") {
	            other.owner.getComponent(Player).SetNextCloseIndex();
	            let pillar = other.owner.getComponent(Player).pillar;
	            this.shadow_pillar = pillar.getChildByName("particle1");
	            this.shadow_pillar.active = true;
	            this.shadow_pillar.getComponent(ShadowAnimationScript).ShowPasseedParticle();
	        }
	    }
	}

	class Player extends Laya.Script3D {
	    constructor() {
	        super(...arguments);
	        this.camera = null;
	        this.scene = null;
	        this.offset = 0;
	        this.rigidbody = null;
	        this.speedArr = [];
	        this.shadow = null;
	        this.player_box = null;
	        this.pFollow = null;
	        this.player = null;
	        this.delta = 0.001;
	        this.pillar_const = 1000;
	        this.pillar = null;
	        this.distance = 0;
	        this.length = 0;
	        this.cube = null;
	        this.cubeDownside = null;
	        this.moving = true;
	        this.rotating = false;
	        this.backMoving = false;
	        this.is_start = false;
	        this.closeObjectIndex = 0;
	        this.distToPillar = 1000;
	        this.obstaclesCount = 0;
	        this.bMoveState = false;
	        this.current_dir = "z";
	        this.velocity = 0.2;
	        this.backdelta = 0.2;
	        this.fever = 0;
	        this.current_mouseX = 0;
	        this.current_mouseY = 0;
	        this.stopTime = 0;
	        this.camerastart = false;
	        this.bCustomize = false;
	        this.vdelta = new Laya.Vector3(0, 0, 0);
	        this.bEnableMouse = true;
	        this.bDownState = false;
	        this.rotate_cnt = 0;
	        this.calc_idx = 0;
	        this.pillar_mat = null;
	        this.createdPieceTime = 0;
	        this.totalCnt = 0;
	    }
	    onAwake() {
	    }
	    EnableCameraAnim(bFlag) {
	        var animator1 = this.camera.getComponent(Laya.Animator);
	        if (animator1 != null) {
	            animator1.enabled = bFlag;
	        }
	    }
	    ZoomInCamera() {
	        var animator1 = this.camera.getComponent(Laya.Animator);
	        if (animator1 != null && animator1.enabled == true) {
	            animator1.play("ZoomIn");
	        }
	    }
	    ZoomOutCamera() {
	        var animator1 = this.camera.getComponent(Laya.Animator);
	        if (animator1 != null && animator1.enabled == true) {
	            animator1.play("ZoomOut");
	        }
	    }
	    StartCamera() {
	        var animator1 = this.camera.getComponent(Laya.Animator);
	        if (animator1 != null) {
	            animator1.play("startCamera");
	        }
	    }
	    EndCamera() {
	        var animator1 = this.camera.getComponent(Laya.Animator);
	        if (animator1 != null && animator1.enabled == true) {
	            animator1.play("endCamera");
	        }
	        this.ShowEndParticle();
	        this.ShowEndParticle();
	        this.ShowEndParticle();
	    }
	    InitPlayerChilds() {
	        this.player_box.addChild(this.camera);
	        this.AddPlayerTrail();
	    }
	    updateCustomState(state) {
	        this.bCustomize = state;
	    }
	    mouseDownProc(e) {
	        this.bDownState = true;
	    }
	    mouseUpProc(e) {
	        this.bDownState = false;
	    }
	    mouseMoveProc(e) {
	        if (GameInfo.GAME_STATE >= 2 || this.bCustomize == true || !this.bDownState)
	            return;
	        if (this.bEnableMouse == false)
	            return;
	        if (this.is_start == false) {
	            this.owner.event("game_started");
	            this.player.addChild(this.cube);
	            this.player.addChild(this.cubeDownside);
	            var sky = this.scene.getChildByName("Plane");
	            var skypos = new Laya.Vector3(sky.transform.position.x, sky.transform.position.y, sky.transform.position.z);
	            var skyRot = new Laya.Vector3(sky.transform.localRotationEuler.x, sky.transform.localRotationEuler.y, sky.transform.localRotationEuler.z);
	            this.camera.addChild(sky);
	            sky.transform.position = skypos;
	            sky.transform.rotationEuler = skyRot;
	            this.obstaclesCount = GameInfo.GetObstacleCount();
	            var subModel1 = this.player.getChildAt(1);
	            var animator1 = subModel1.getComponent(Laya.Animator);
	            if (!animator1)
	                animator1 = subModel1.getChildAt(0).getComponent(Laya.Animator);
	            if (animator1) {
	                animator1.play("startCharacter");
	            }
	            this.bMoveState = true;
	            this.is_start = true;
	            this.StartCamera();
	            var temp = this.player.transform.localPosition;
	            this.initpos.setValue(0, temp.y, 0);
	            this.SetShadowScriptToParticles();
	        }
	        let offset_dir = "down";
	        let delta_y = Laya.stage.mouseY - this.current_mouseY;
	        if (delta_y < 0)
	            offset_dir = "up";
	        let val_a = 1.9, val_b = 2.1;
	        let lim_a = 0.25, lim_b = 1.95;
	        if (Math.abs(delta_y) > 2) {
	            let numY = this.player.transform.localScale.y;
	            let numX = this.player.transform.localScale.x;
	            if (offset_dir == "up") {
	                numY += 0.1;
	                if (numY > lim_b)
	                    numY = lim_b;
	            }
	            if (offset_dir == "down") {
	                numY -= 0.1;
	                if (numY < lim_a)
	                    numY = lim_a;
	            }
	            numX = (val_b - numY) * val_a / val_b;
	            this.player.transform.localScale = new Laya.Vector3(numX, numY, this.player.transform.localScale.z);
	        }
	        this.current_mouseY = Laya.stage.mouseY;
	        this.rigidbody.colliderShape.localOffset.y = this.player.transform.localScale.y / 2;
	    }
	    onUpdate() {
	        if (GameInfo.GAME_STATE == 2) {
	            return;
	        }
	        if (this.current_dir == "z" || this.current_dir == "x") {
	            this.bEnableMouse = true;
	        }
	        if (this.bEnableMouse) {
	            Laya.stage.on(Laya.Event.MOUSE_DOWN, this, this.mouseDownProc);
	            Laya.stage.on(Laya.Event.MOUSE_UP, this, this.mouseUpProc);
	            Laya.stage.on(Laya.Event.MOUSE_MOVE, this, this.mouseMoveProc);
	            this.InitPlayerRoatate();
	        }
	        if (!this.is_start) {
	            return;
	        }
	        if (this.bMoveState) {
	            if (this.current_dir == "z") {
	                this.vdelta.z = this.velocity;
	            }
	            else if (this.current_dir == "x") {
	                this.vdelta.x = (-1) * this.velocity;
	                this.vdelta.z = 0;
	                this.initpos.z = 1;
	            }
	            else {
	                if (this.camPos) {
	                    this.camera.transform.position = this.camPos.transform.position;
	                    this.camera.transform.rotation = this.camPos.transform.rotation;
	                }
	                if (this.current_dir == "r1_1") {
	                    this.bEnableMouse = false;
	                    this.vdelta.z = this.velocity * Math.sin(75 / 180 * 3.14);
	                    this.vdelta.x = (-1) * this.velocity * Math.cos(75 / 180 * 3.14);
	                    if (this.rotate_cnt == 0) {
	                        this.player.transform.rotate(new Laya.Vector3(0, -30, 0), true, false);
	                        this.rotate_cnt = 1;
	                        this.camPos = this.scene.addChild(new Laya.MeshSprite3D(Laya.PrimitiveMesh.createBox(this.delta, this.delta, this.delta)));
	                        this.camPos.meshRenderer.enable = false;
	                        this.player.addChild(this.camPos);
	                        this.camPos.transform.position = this.camera.transform.position;
	                        this.camPos.transform.rotation = this.camera.transform.rotation;
	                        this.EnableCameraAnim(false);
	                    }
	                }
	                else if (this.current_dir == "r1_2") {
	                    this.bEnableMouse = false;
	                    this.vdelta.z = this.velocity * Math.sin(45 / 180 * 3.14);
	                    this.vdelta.x = (-1) * this.velocity * Math.cos(45 / 180 * 3.14);
	                    if (this.rotate_cnt == 1) {
	                        this.player.transform.rotate(new Laya.Vector3(0, -30, 0), true, false);
	                        this.rotate_cnt = 2;
	                    }
	                }
	                else if (this.current_dir == "r1_3") {
	                    this.bEnableMouse = false;
	                    this.vdelta.z = this.velocity * Math.sin(15 / 180 * 3.14);
	                    this.vdelta.x = (-1) * this.velocity * Math.cos(15 / 180 * 3.14);
	                    if (this.rotate_cnt == 2) {
	                        this.player.transform.rotate(new Laya.Vector3(0, -30, 0), true, false);
	                        this.rotate_cnt = 3;
	                    }
	                }
	            }
	            if (GameInfo.fever_ok) {
	                let p = 0.07;
	                if (this.current_dir == "z")
	                    this.vdelta.z += p;
	            }
	            this.player_box.transform.translate(this.vdelta, true);
	        }
	        else {
	            Sound.playHitObstacleSound();
	            if (this.stopTime == 0) {
	                this.stopTime = Laya.timer.currTimer;
	                this.velocity = GameInfo.org_velocity;
	            }
	            else if (Laya.timer.currTimer - this.stopTime > 300) {
	                this.stopTime = 0;
	                this.bMoveState = true;
	            }
	            if (this.current_dir == "z")
	                this.player_box.transform.localPosition = new Laya.Vector3(this.player_box.transform.localPosition.x, this.player_box.transform.localPosition.y, this.player_box.transform.localPosition.z - this.backdelta);
	            else if (this.current_dir == "x")
	                this.player_box.transform.localPosition = new Laya.Vector3(this.player_box.transform.localPosition.x + this.backdelta, this.player_box.transform.localPosition.y, this.player_box.transform.localPosition.z);
	            return;
	        }
	        this.pillar = this.FindClosestPillar();
	        if (!this.pillar)
	            return;
	        this.distance = Laya.Vector3.distance(this.player.transform.position, this.pillar.transform.position);
	        if (this.closeObjectIndex == this.obstaclesCount - 1) {
	            if (GameInfo.GAME_STATE == 3 && this.distance < 0.5) {
	                this.SetNextCloseIndex();
	            }
	            else {
	                GameInfo.GAME_STATE = 3;
	                this.player.transform.localPosition = this.initpos;
	                if (this.cube && this.cubeDownside) {
	                    this.cube.removeSelf();
	                    this.cubeDownside.removeSelf();
	                    this.cube = null;
	                    this.cubeDownside = null;
	                }
	            }
	            return;
	        }
	        if (this.closeObjectIndex < this.obstaclesCount - 1) {
	            this.initpos.y = this.player.transform.localPosition.y;
	            this.player.transform.localPosition = this.initpos;
	        }
	        this.length = this.distance;
	        let position = new Laya.Vector3(0, 0, this.length + 0.2);
	        if (this.distance < 1000 && this.distance > 0) {
	            this.cube.transform.localPosition = position;
	            this.cubeDownside.transform.localPosition = new Laya.Vector3(0, 0, 0);
	            let x_delta = Math.abs(this.player.transform.position.x - this.pillar.transform.position.x);
	            let z_delta = Math.abs(this.player.transform.position.z - this.pillar.transform.position.z);
	            if (x_delta < 1 || this.current_dir == "x") {
	                this.cube.transform.localScale = new Laya.Vector3(1.3, 1, 0.1);
	                this.cubeDownside.transform.localScale = new Laya.Vector3(1.3, 1, this.length);
	                this.cube.active = true;
	                this.cubeDownside.active = true;
	            }
	            else {
	                this.cube.active = false;
	                this.cubeDownside.active = false;
	            }
	        }
	        else {
	            GameInfo.GAME_STATE = 2;
	        }
	        this.updateGameInfo();
	    }
	    updateDir(dir) {
	        this.current_dir = dir;
	    }
	    InitPlayerRoatate() {
	        var delta = this.player.transform.localRotationEuler;
	        var target = new Laya.Vector3(0, 0, 0);
	        if (this.current_dir == "x")
	            target.y = -90;
	        Laya.Vector3.subtract(target, delta, delta);
	        this.player.transform.rotate(delta, true, false);
	    }
	    ShowSpeedParticle() {
	        let particles = Laya.loader.getRes("unity/model/particle.lh");
	        let tmp = particles.getChildAt(2);
	        if (!tmp) {
	            return;
	        }
	        var dup = Laya.MeshSprite3D.instantiate(tmp);
	        this.player_box.addChild(dup);
	        dup.transform.localPosition = new Laya.Vector3(0, 0, 0);
	        dup.transform.localScale = new Laya.Vector3(1, 1, 1);
	        dup.transform.localPosition.y += 0.5;
	        dup.active = true;
	    }
	    HideWndParticle() {
	        var wnd = this.player_box.getChildByName("wnd");
	        if (wnd) {
	            wnd.active = false;
	            return;
	        }
	    }
	    ShowWndParticle() {
	        var wnd = this.player_box.getChildByName("wnd");
	        if (wnd) {
	            wnd.active = true;
	            return;
	        }
	        let particles = Laya.loader.getRes("unity/model/particle.lh");
	        let tmp = particles.getChildAt(4);
	        if (!tmp) {
	            return;
	        }
	        var dup = Laya.MeshSprite3D.instantiate(tmp);
	        this.player_box.addChild(dup);
	        dup.name = "wnd";
	        dup.transform.localPosition = new Laya.Vector3(0, 0, 0);
	        dup.transform.localScale = new Laya.Vector3(1, 1, 1);
	        dup.transform.localPosition.y += 1;
	        dup.active = true;
	    }
	    ShowEndParticle() {
	        let particles = Laya.loader.getRes("unity/model/particle.lh");
	        let tmp = particles.getChildAt(0);
	        if (!tmp) {
	            return;
	        }
	        var dup = Laya.MeshSprite3D.instantiate(tmp);
	        this.player.addChild(dup);
	        dup.transform.localPosition = new Laya.Vector3(0, 0, 0);
	        var delta = new Laya.Vector3(0, 0, 0);
	        Laya.Vector3.subtract(this.camera.transform.position, this.player.transform.position, delta);
	        Laya.Vector3.normalize(delta, delta);
	        Laya.Vector3.scale(delta, 5, delta);
	        Laya.Vector3.add(dup.transform.position, delta, dup.transform.position);
	        dup.transform.localScale = new Laya.Vector3(2, 2, 2);
	        dup.active = true;
	    }
	    SetShadowScriptToParticles() {
	        var translevel = this.scene.getChildByName("Level");
	        var obstacles = translevel.getChildByName("obstacles");
	        var subObj = obstacles.getChildAt(this.closeObjectIndex);
	        var particleObj = subObj.getChildByName("particle1");
	        particleObj.addComponent(ShadowAnimationScript);
	    }
	    AddPlayerTrail() {
	        let trailCube = Laya.loader.getRes("unity/trail/Cube.lh");
	        let tcube = Laya.Sprite3D.instantiate(trailCube);
	        tcube.transform.position = this.player.transform.position;
	        tcube.transform.position.y += 0.8;
	        this.player_box.addChild(tcube);
	        tcube.name = "trail";
	        tcube.getChildAt(0).meshRenderer.enable = false;
	        tcube.getChildAt(0).getChildAt(0).trailRenderer.material.color = new Laya.Vector4(0, 0.5, 0, 0.1);
	        tcube.active = false;
	    }
	    ShowTrail(flag) {
	        this.player_box.getChildByName("trail").active = flag;
	    }
	    updateGameInfo() {
	        let maxlen = GameInfo.getTerrainLength(GameInfo.round);
	        if (GameInfo.curPassedLen > maxlen)
	            GameInfo.curPassedLen = maxlen;
	        else
	            GameInfo.curPassedLen += this.velocity;
	        this.owner.event("update_path", GameInfo.curPassedLen / maxlen);
	    }
	    startFollow(sprite, cam, dz) {
	        this.rotate_cnt = 0;
	        this.scene = sprite;
	        this.camera = cam;
	        this.offset = dz;
	        this.player = this.owner;
	        this.rigidbody = this.owner.getComponent(Laya.Rigidbody3D);
	        this.initpos = new Laya.Vector3(0, 0, 0);
	        this.cube = this.scene.getChildByName("Cube");
	        if (!this.cube.getChildAt(0).getComponent(ShadowCollisionScript))
	            this.cube.getChildAt(0).addComponent(ShadowCollisionScript);
	        this.cubeDownside = this.scene.getChildByName("Cube Down Side");
	        var tmp = this.scene.getChildByName("jellyBox");
	        if (tmp == null)
	            this.player_box = this.scene.addChild(new Laya.MeshSprite3D(Laya.PrimitiveMesh.createBox(this.delta, this.delta, this.delta)));
	        else
	            this.player_box = tmp;
	        this.player_box.name = "jellyBox";
	        this.player_box.addChild(this.player);
	        this.InitPlayerChilds();
	        let sound_active = localStorage.getItem("jelly_sound");
	        Sound.sound_active = (sound_active == "true") ? true : false;
	    }
	    onDestroy() {
	    }
	    ShowParticle() {
	        var clone = Laya.Sprite3D.instantiate(this.particlePrefab);
	        this.player.addChild(clone);
	        clone.transform.localPosition = new Laya.Vector3(0, 0, 0);
	        clone.active = true;
	    }
	    onCollisionEnter(collision) {
	    }
	    FindClosestPillar() {
	        var translevel = this.scene.getChildByName("Level");
	        var obstacles = translevel.getChildByName("obstacles");
	        var subObj = obstacles.getChildAt(this.closeObjectIndex);
	        return subObj;
	    }
	    ExplodePillar() {
	        if (!GameInfo.fever_ok)
	            return;
	        let translevel = this.scene.getChildByName("Level");
	        let obstacles = translevel.getChildByName("obstacles");
	        let subObj = obstacles.getChildAt(this.closeObjectIndex - 1);
	        let tmp = subObj.getChildAt(0).meshRenderer;
	        if (!tmp) {
	            return;
	        }
	        this.pillar_mat = tmp.material;
	        this.pieceArray = new Array(subObj.numChildren);
	        for (var i = 0; i < subObj.numChildren - 1; i++) {
	            var trigger = subObj.getChildAt(i).getComponent(TriggerCollisionScript);
	            trigger.onTriggerEnter(this.player.getComponent(Laya.PhysicsComponent));
	        }
	        this.createdPieceTime = Laya.timer.currTimer;
	        this.explosionRadiusCenter = this.player.transform.position;
	    }
	    disablePillarsCollider() {
	        if (!GameInfo.fever_ok)
	            return;
	        var subObj = this.FindClosestPillar();
	        for (var i = 0; i < subObj.numChildren - 1; i++) {
	            var col = subObj.getChildAt(i).getComponent(Laya.PhysicsCollider);
	            col.colliderShape.localOffset.y = -1;
	            col.colliderShape.updateLocalTransformations();
	        }
	    }
	    SetNextCloseIndex() {
	        this.distToPillar = 1000;
	        this.closeObjectIndex++;
	        this.ShowSpeedParticle();
	        if (this.closeObjectIndex >= this.obstaclesCount) {
	            GameInfo.GAME_STATE = 2;
	            this.rigidbody.enabled = false;
	            this.player.transform.localPosition = this.initpos;
	            this.InitPlayerRoatate();
	            this.player.transform.localScale = new Laya.Vector3(1, 1, 1);
	            var subModel = this.player.getChildAt(1);
	            var self = this;
	            Laya.timer.once(100, this, function () {
	                var animator = subModel.getComponent(Laya.Animator);
	                if (animator != null) {
	                    animator.play("endCharacter");
	                }
	                this.EndCamera();
	                self.owner.event("game_ended");
	                this.HideWndParticle();
	            });
	            return;
	        }
	        this.owner.event("update_pass");
	        if (this.closeObjectIndex < this.obstaclesCount - 1) {
	            this.SetShadowScriptToParticles();
	            Sound.playFeverDestroySound();
	        }
	        else
	            this.distToPillar = 1000;
	        return;
	    }
	    onTriggerStay(other) {
	        if (GameInfo.GAME_STATE == 4)
	            return;
	        if (other.owner == null)
	            return;
	        if (other.owner.name != "Check")
	            return;
	        if (this.player.transform.localScaleY < 0.9)
	            return;
	        GameInfo.GAME_STATE = 4;
	        this.is_start = false;
	        var force = new Laya.Vector3(0, -10, 0);
	        this.rigidbody.applyForce(force);
	        this.owner.event("game_failed");
	        this.HideWndParticle();
	    }
	}
	class AnimatorStateScriptDemo extends Laya.AnimatorStateScript {
	    constructor() {
	        super();
	    }
	    onStateEnter() {
	    }
	    onStateUpdate() {
	    }
	    onStateExit() {
	    }
	}

	class TriggerCollisionScript extends Laya.Script3D {
	    constructor() {
	        super();
	        this.pillar_mat = null;
	        this.createdPieceTime = 0;
	    }
	    TriggerCollisionScript() {
	    }
	    onTriggerEnter(other) {
	        if (this.pillar_mat == null)
	            this.pillar_mat = this.owner.meshRenderer.material;
	        if (other.owner.name == "jelly") {
	            this.playerBody = other.owner;
	            if (!GameInfo.fever_ok) {
	                this.playerBody.getComponent(Player).bMoveState = false;
	                this.owner.event("trigger", this.owner.parent.numChildren / 2);
	            }
	            this.explode();
	        }
	    }
	    createPiece(tmp, pillar_mat) {
	        var cubeSize = 0.2;
	        var piece = Laya.stage.getChildAt(0).addChild(new Laya.MeshSprite3D(Laya.PrimitiveMesh.createBox(cubeSize, cubeSize, cubeSize)));
	        piece.meshRenderer.material = pillar_mat;
	        piece.transform.position = tmp;
	        var rigidbd = piece.addComponent(Laya.Rigidbody3D);
	        var boxShape = new Laya.BoxColliderShape(cubeSize, cubeSize, cubeSize);
	        rigidbd.colliderShape = boxShape;
	        rigidbd.mass = cubeSize;
	        rigidbd.isTrigger = false;
	        return piece;
	    }
	    explode() {
	        var tmp = this.owner;
	        var pos = tmp.transform.position;
	        this.pieceArray = new Laya.MeshSprite3D();
	        this.pieceArray = this.createPiece(pos, this.pillar_mat);
	        var force = new Laya.Vector3(10, 10, 10);
	        this.createdPieceTime = Laya.timer.currTimer;
	        this.explosionRadiusCenter = this.playerBody.transform.position;
	        tmp.meshRenderer.enable = false;
	        tmp.getComponent(Laya.PhysicsCollider).enabled = false;
	    }
	    onUpdate() {
	        var explosionRadius = 2;
	        var explosionForce = 5;
	        if (GameInfo.fever_ok) {
	            explosionRadius = 5;
	            explosionForce = 5;
	        }
	        if (this.createdPieceTime > 0) {
	            if (Laya.Vector3.distance(this.pieceArray.transform.position, this.explosionRadiusCenter) <= explosionRadius) {
	                var force = new Laya.Vector3(0, 0, 0);
	                Laya.Vector3.subtract(this.pieceArray.transform.position, this.explosionRadiusCenter, force);
	                var rbd = this.pieceArray.getComponent(Laya.Rigidbody3D);
	                Laya.Vector3.scale(force, (explosionForce), force);
	                var rnd = new Laya.Rand(this.pieceArray.transform.position.x * this.pieceArray.transform.position.y * 1000);
	                var delta = rnd.getUint() % 5;
	                force.z -= delta / 10;
	                force.y += delta;
	                rbd.applyForce(force);
	            }
	        }
	        if (this.createdPieceTime > 0 && Laya.timer.currTimer - this.createdPieceTime > 1500) {
	            this.pieceArray.active = false;
	            this.pieceArray.meshRenderer.enable = false;
	            this.pieceArray.destroy();
	            this.pieceArray = null;
	            this.createdPieceTime = 0;
	            this.owner.destroy();
	        }
	    }
	    onTriggerStay(other) {
	    }
	    onTriggerExit(other) {
	    }
	    onCollisionEnter(collision) {
	    }
	    onCollisionStay(collision) {
	    }
	    onCollisionExit(collision) {
	    }
	}

	class TriggerCollisionScript4Jewel extends Laya.Script3D {
	    constructor() {
	        super();
	    }
	    TriggerCollisionScript4Jewel() {
	    }
	    onTriggerEnter(other) {
	        if (other.owner.name == "jelly") {
	            this.owner.event("trigger");
	            this.owner.destroy();
	            this.owner = null;
	        }
	    }
	    onUpdate() {
	    }
	    onTriggerStay(other) {
	    }
	    onTriggerExit(other) {
	    }
	    onCollisionEnter(collision) {
	    }
	    onCollisionStay(collision) {
	    }
	    onCollisionExit(collision) {
	    }
	}

	class SettingDlg extends ui.SettingSceneUI {
	    constructor() {
	        super();
	        this.chk_haptic.on("change", this, this.onHapticChange);
	        this.chk_sound.on("change", this, this.onSoundChange);
	    }
	    onOpened() {
	        let sound_active = localStorage.getItem("jelly_sound");
	        let haptic_active = localStorage.getItem("jelly_haptic");
	        Sound.sound_active = (sound_active == "true") ? true : false;
	        this.chk_sound.selected = sound_active == "false" ? false : true;
	        this.chk_haptic.selected = haptic_active == "false" ? false : true;
	    }
	    onHapticChange() {
	        let selected = this.chk_haptic.selected;
	        localStorage.setItem("jelly_haptic", selected.toString());
	        this.event("haptic_changed");
	    }
	    onSoundChange() {
	        let selected = this.chk_sound.selected;
	        localStorage.setItem("jelly_sound", selected.toString());
	        this.event("sound_changed");
	    }
	    onClosed() {
	        Sound.playCustomizeCloseSound();
	        this.event("close_dlg");
	    }
	}

	class ProgressView extends ui.ProgressSceneUI {
	    constructor() {
	        super();
	        this.splashObj = null;
	        Laya.URL.basePath = GameInfo.baseResPath;
	        this.splashObj = new Laya.Sprite();
	        let logo_img = new Laya.Image("Images/saygames.png");
	        Laya.URL.basePath = GameInfo.baseResPath;
	        logo_img.width = 428;
	        logo_img.height = 441;
	        let pos_arr = GameInfo.getPos(Laya.stage, logo_img);
	        logo_img.pos(pos_arr[0], pos_arr[1] - 80);
	        this.splashObj.addChild(logo_img);
	        Laya.stage.addChild(this.splashObj);
	        Laya.timer.once(1500, this, this.splashLoop);
	    }
	    splashLoop() {
	        Laya.timer.clearAll(this);
	        Laya.stage.removeChild(this.splashObj);
	        this.logo.visible = true;
	        this.loading_prog.visible = true;
	        this.panel.visible = true;
	        this.event("splash_finish");
	    }
	    onLoadComplete() {
	        this.loading_prog.changeHandler = new Laya.Handler(this, this.onChange);
	        Laya.timer.loop(100, this, this.changeValue);
	    }
	    changeValue() {
	        if (this.loading_prog.value >= 1) {
	            Laya.timer.clearAll(this);
	            this.event("load_finish");
	            this.removeSelf();
	        }
	        this.loading_prog.value += 0.05;
	    }
	    onChange(value) {
	    }
	}

	class CustomizeDlg$1 extends ui.WorldSceneUI {
	    constructor() {
	        super();
	        let sound_active = localStorage.getItem("jelly_sound");
	        Sound.sound_active = (sound_active == "true") ? true : false;
	    }
	    onClosed() {
	        Sound.playCustomizeCloseSound();
	        this.event("close_dlg");
	    }
	}

	class GameInfo$1 {
	    static InitGameInfo() {
	        GameInfo$1.GAME_STATE = 0;
	        GameInfo$1.curPassedLen = 0;
	        GameInfo$1.curFoodLen = 0;
	        GameInfo$1.fever_ok = false;
	        GameInfo$1.storeGameStatus();
	        GameInfo$1.GetLoadLevel();
	        GameInfo$1.GetTargetFoodIndex();
	        GameInfo$1.isJewelsLevel();
	        GameInfo$1.GetTerrainInfo();
	        GameInfo$1.eatJewelCnt = 0;
	    }
	    static storeGameStatus() {
	        localStorage.setItem("jelly_state", GameInfo$1.GAME_STATE.toString());
	        localStorage.setItem("jelly_player_pass", GameInfo$1.curPassedLen.toString());
	        localStorage.setItem("jelly_food_pass", GameInfo$1.curFoodLen.toString());
	        localStorage.setItem("jelly_round", GameInfo$1.round.toString());
	        localStorage.setItem("jelly_jewel", GameInfo$1.jewelCnt.toString());
	        localStorage.setItem("jelly_coin", GameInfo$1.coinCnt.toString());
	        localStorage.setItem("jelly_target_food", GameInfo$1.targetFood.toString());
	        localStorage.setItem("jelly_models", JSON.stringify({ "data": GameInfo$1.models }));
	    }
	    static GetLoadLevel() {
	        let current_round = parseInt(localStorage.getItem("jelly_round"));
	        GameInfo$1.round = current_round + 1;
	        let current_coinCnt = parseInt(localStorage.getItem("jelly_coin"));
	        GameInfo$1.coinCnt = current_coinCnt + 1;
	        let current_jewelCnt = parseInt(localStorage.getItem("jelly_jewel"));
	        GameInfo$1.jewelCnt = current_jewelCnt;
	        if (GameInfo$1.targetFoodEat) {
	            let target_food = parseInt(localStorage.getItem("jelly_target_food"));
	            GameInfo$1.targetFood++;
	            if (GameInfo$1.targetFood > 15)
	                GameInfo$1.targetFood = 0;
	        }
	    }
	    static GetTerrainInfo() {
	        GameInfo$1.terrainNum = GameInfo$1.round % GameInfo$1.round_period;
	        if (GameInfo$1.terrainNum == 0)
	            GameInfo$1.terrainNum = GameInfo$1.round_period;
	        GameInfo$1.terrainCol = (GameInfo$1.isJewelsRound) ? Laya.Color.YELLOW : Laya.Color.GRAY;
	        var colorList = [Laya.Color.RED, Laya.Color.GREEN, Laya.Color.BLUE, Laya.Color.MAGENTA, Laya.Color.CYAN];
	        GameInfo$1.terrainSky = colorList[GameInfo$1.round % 5];
	    }
	    static GetPhisingPercent() {
	        var percent = GameInfo$1.curPhisingValue / GameInfo$1.maxPhisingValue;
	        return percent;
	    }
	    static GetPassedLevelPercent() {
	        return GameInfo$1.curPassedLen / GameInfo$1.maxLevelLen;
	    }
	    GetMaxLVLength() {
	        return GameInfo$1.maxLevelLen;
	    }
	    GetPassedLVLength() {
	        return GameInfo$1.curPassedLen;
	    }
	    static getTerrainLength(round) {
	        let terr_len_arr = [
	            100, 150, 120, 130, 150
	        ];
	        let idx = round % 5;
	        if (idx == 0)
	            idx = 5;
	        return terr_len_arr[idx - 1];
	    }
	    static GetTargetFoodIndex() {
	        if (GameInfo$1.round % 4 == 0)
	            return -1;
	        return GameInfo$1.targetFood;
	    }
	    static getFoodName() {
	        let ret = "";
	        ret = GameInfo$1.food_array[GameInfo$1.GetTargetFoodIndex()];
	        return ret;
	    }
	    static getFoodArray() {
	        if (GameInfo$1.isJewelsRound)
	            return [];
	        let from_idx = Math.floor(GameInfo$1.targetFood / 3) * 3;
	        let to_idx = Math.floor(GameInfo$1.targetFood / 3 + 1) * 3;
	        let ret_arr = GameInfo$1.food_array.slice(from_idx, to_idx);
	        let idx2 = GameInfo$1.targetFood % 3;
	        for (let i = 0; i < 3; i++) {
	            ret_arr[i] = ret_arr[i] + "_" + ((i > idx2) ? "disabled" : "enabled") + ".png";
	        }
	        return ret_arr;
	    }
	    static getPos(obj1, obj2) {
	        let x = Math.abs(obj1.width - obj2.width) / 2;
	        let y = Math.abs(obj1.height - obj2.height) / 2;
	        return [x, y];
	    }
	    static getRoundJewelCnt() {
	        let ret = 30;
	        if (GameInfo$1.round > 4)
	            ret = 40;
	        return ret;
	    }
	    static isJewelsLevel() {
	        GameInfo$1.isJewelsRound = (GameInfo$1.round % 4 == 0);
	        return GameInfo$1.isJewelsRound;
	    }
	    static isCurveLevel() {
	        let isCurveRound = ((GameInfo$1.round + 1) % 4 == 0);
	        return isCurveRound;
	    }
	    SetCoin() {
	    }
	    static GetObstacleCount() {
	        var translevel = this.scene.getChildByName("Level");
	        var obstacles = translevel.getChildByName("obstacles");
	        return obstacles.numChildren;
	    }
	    static setGroundColor(group, player) {
	        for (let i = 0; i < GameInfo$1.models.length; i++) {
	            if (GameInfo$1.models[i].category == group && GameInfo$1.models[i].name == player)
	                GameInfo$1.groundColor = GameInfo$1.models[i].color;
	        }
	    }
	    static getGroundColor() {
	        var temp = this.calcRGB(GameInfo$1.groundColor);
	        temp.w = 0.3;
	        return temp;
	    }
	    static getJewelGroundColor() {
	        var temp = this.calcRGB("#FFFF99");
	        temp.w = 0.5;
	        return temp;
	    }
	    static getSkyColor() {
	        let arr = ["#e06cff", "#00ff00", "#0000ff", "#ffff00", "#BA1FDE", "#00ffff", "#ff00ff", "#ff0000"];
	        let ret = this.calcRGB(arr[GameInfo$1.round % 8]);
	        return ret;
	    }
	    static calcRGB(hex) {
	        let r = GameInfo$1.hexToR(hex);
	        let g = GameInfo$1.hexToG(hex);
	        let b = GameInfo$1.hexToB(hex);
	        let ret = new Laya.Vector4(r / 255, g / 255, b / 255, 1);
	        return ret;
	    }
	    static hexToR(h) { return parseInt((this.cutHex(h)).substring(0, 2), 16); }
	    static hexToG(h) { return parseInt((this.cutHex(h)).substring(2, 4), 16); }
	    static hexToB(h) { return parseInt((this.cutHex(h)).substring(4, 6), 16); }
	    static cutHex(h) { return (h.charAt(0) == "#") ? h.substring(1, 7) : h; }
	}
	GameInfo$1.round = 0;
	GameInfo$1.jewelCnt = 2000;
	GameInfo$1.baseResPath = "https://beatstreet.digitalgalaxy.cn/jelly/";
	GameInfo$1.round_period = 12;
	GameInfo$1.jewel_unit = 5;
	GameInfo$1.models = [
	    { "idx": 1, "name": "blue_guy", "category": "jelly", "sub_category": "jelly", "active": true, "color": "#1b6efa", "price": 500 },
	    { "idx": 2, "name": "bright_blue_girl", "category": "jelly", "sub_category": "jelly", "active": false, "color": "#1efefd", "price": 500 },
	    { "idx": 3, "name": "green_guy", "category": "jelly", "sub_category": "jelly", "active": false, "color": "#7df81a", "price": 500 },
	    { "idx": 4, "name": "pink_girl", "category": "jelly", "sub_category": "jelly", "active": false, "color": "#e175ff", "price": 500 },
	    { "idx": 5, "name": "Snarglius", "category": "jelly", "sub_category": "jelly", "active": false, "color": "#fdb381", "price": 500 },
	    { "idx": 6, "name": "yellow_guy", "category": "jelly", "sub_category": "jelly", "active": false, "color": "#fbe21c", "price": 500 },
	    { "idx": 7, "name": "Bear", "category": "animals", "sub_category": "animals1", "active": false, "color": "#ff9e4d", "price": 1000 },
	    { "idx": 8, "name": "Cat", "category": "animals", "sub_category": "animals1", "active": false, "color": "#718ad4", "price": 1000 },
	    { "idx": 9, "name": "Cheetah", "category": "animals", "sub_category": "animals1", "active": false, "color": "#ffc83c", "price": 1000 },
	    { "idx": 10, "name": "Cock", "category": "animals", "sub_category": "animals1", "active": false, "color": "#e70503", "price": 1000 },
	    { "idx": 11, "name": "Dog", "category": "animals", "sub_category": "animals1", "active": false, "color": "#9d8674", "price": 1000 },
	    { "idx": 12, "name": "Duck", "category": "animals", "sub_category": "animals1", "active": false, "color": "#55d044", "price": 1000 },
	    { "idx": 13, "name": "Fox", "category": "animals", "sub_category": "animals2", "active": false, "color": "#ff7f04", "price": 1500 },
	    { "idx": 14, "name": "Frog", "category": "animals", "sub_category": "animals2", "active": false, "color": "#7bdb21", "price": 1500 },
	    { "idx": 15, "name": "Hippo", "category": "animals", "sub_category": "animals2", "active": false, "color": "#7fc9fb", "price": 1500 },
	    { "idx": 16, "name": "Lion", "category": "animals", "sub_category": "animals2", "active": false, "color": "#ffd83c", "price": 1500 },
	    { "idx": 17, "name": "Owl", "category": "animals", "sub_category": "animals2", "active": false, "color": "#e4aaf4", "price": 1500 },
	    { "idx": 18, "name": "Penguin", "category": "animals", "sub_category": "animals2", "active": false, "color": "#263e9a", "price": 1500 },
	    { "idx": 19, "name": "Pig", "category": "animals", "sub_category": "animals2", "active": false, "color": "#fd8ab2", "price": 1500 },
	    { "idx": 20, "name": "Racoon", "category": "animals", "sub_category": "animals2", "active": false, "color": "#475068", "price": 1500 },
	    { "idx": 21, "name": "Sheep", "category": "animals", "sub_category": "animals2", "active": false, "color": "#d4e7e6", "price": 1500 },
	    { "idx": 22, "name": "BadGuy", "category": "heroes", "sub_category": "heroes", "active": false, "color": "#6df889", "price": 2000 },
	    { "idx": 23, "name": "CaptainAmerica", "category": "heroes", "sub_category": "heroes", "active": false, "color": "#f44816", "price": 2000 },
	    { "idx": 24, "name": "Cowboy", "category": "heroes", "sub_category": "heroes", "active": false, "color": "#fcb280", "price": 2000 },
	    { "idx": 25, "name": "Deadpool", "category": "heroes", "sub_category": "heroes", "active": false, "color": "#4aa0d6", "price": 2000 },
	    { "idx": 26, "name": "IronMan", "category": "heroes", "sub_category": "heroes", "active": false, "color": "#ffff3c", "price": 2000 },
	    { "idx": 27, "name": "Magician", "category": "heroes", "sub_category": "heroes", "active": false, "color": "#fdb381", "price": 2000 },
	    { "idx": 28, "name": "PinkGuy", "category": "heroes", "sub_category": "heroes", "active": false, "color": "#fd68d3", "price": 2000 },
	    { "idx": 29, "name": "Princess", "category": "heroes", "sub_category": "heroes", "active": false, "color": "#4be9fe", "price": 2000 },
	    { "idx": 30, "name": "Robin", "category": "heroes", "sub_category": "heroes", "active": false, "color": "#7fbb61", "price": 2000 },
	    { "idx": 31, "name": "Coala", "category": "legendary", "sub_category": "legendary", "active": false, "color": "#a085a0", "price": 2500 },
	    { "idx": 32, "name": "CommandoTiger", "category": "legendary", "sub_category": "legendary", "active": false, "color": "#fa850a", "price": 2500 },
	    { "idx": 33, "name": "Cow", "category": "legendary", "sub_category": "legendary", "active": false, "color": "#979797", "price": 2500 },
	    { "idx": 34, "name": "Crock", "category": "legendary", "sub_category": "legendary", "active": false, "color": "#c3faa9", "price": 2500 },
	    { "idx": 35, "name": "Lama", "category": "legendary", "sub_category": "legendary", "active": false, "color": "#cb9258", "price": 2500 },
	    { "idx": 36, "name": "Panda", "category": "legendary", "sub_category": "legendary", "active": false, "color": "#c4bbbc", "price": 2500 },
	    { "idx": 37, "name": "Rabbit", "category": "legendary", "sub_category": "legendary", "active": false, "color": "#ffa6df", "price": 2500 },
	    { "idx": 38, "name": "Shark", "category": "legendary", "sub_category": "legendary", "active": false, "color": "#79fdfe", "price": 2500 },
	    { "idx": 39, "name": "Sloth", "category": "legendary", "sub_category": "legendary", "active": false, "color": "#ecdc91", "price": 2500 }
	];
	GameInfo$1.jewel_init_x = 337;
	GameInfo$1.jewel_init_y = 618;
	GameInfo$1.anim_pos_category = [
	    [
	        [GameInfo$1.jewel_init_x, GameInfo$1.jewel_init_y],
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
	        [GameInfo$1.jewel_init_x, GameInfo$1.jewel_init_y],
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
	        [GameInfo$1.jewel_init_x, GameInfo$1.jewel_init_y],
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
	GameInfo$1.emojis = [
	    "Angry",
	    "Emoji_All",
	    "Scarred",
	    "Smile",
	    "Tongue",
	    "Wink",
	    "Worried",
	    "Worried2"
	];
	GameInfo$1.food_array = [
	    "apple",
	    "banana",
	    "blackberry",
	    "cake",
	    "can",
	    "cherry",
	    "coconut",
	    "cupcake",
	    "donut",
	    "gummybear",
	    "ice_cream",
	    "lollypop",
	    "pear",
	    "slushy",
	    "strawberry",
	    "watermelon"
	];
	GameInfo$1.food_jewel_array = [
	    50,
	    50,
	    50,
	    50,
	    50,
	    50,
	    50,
	    50,
	    50,
	    50,
	    50,
	    50,
	    50,
	    50,
	    50,
	    50
	];
	GameInfo$1.particlce_info = {
	    "FireworkSky": [
	        "SphereGlow",
	        "Sparks",
	        "Smoke",
	        "FireTrail"
	    ],
	    "Rocket": [
	        "Rocket_bullet"
	    ],
	    "FireworkEndExplosion": [
	        "SphereGlow",
	        "Sparks",
	        "Smoke",
	        "FireTrail"
	    ],
	    "FireworkBall": [
	        "FireTrail",
	        "SparkTrail",
	        "SmokeTrail"
	    ],
	    "Firework": [
	        "firework",
	        "RocketMissilePurple"
	    ],
	    "Balloon": [
	        "Shark_gun_water_baloon"
	    ]
	};
	GameInfo$1.resArray = [
	    "res/atlas/Images.atlas",
	    "res/atlas/Images.png",
	    "res/atlas/resources/icons.atlas",
	    "unity/model/player.lh",
	    "unity/model/food.lh",
	    "unity/model/Emojis.lh",
	    "unity/model/particle.lh",
	    "unity/trail/Cube.lh",
	    { url: "res/particles/glow_jiesuan.png", type: Laya.Loader.IMAGE },
	    { url: "res/particles/Jiesuan_eff.part", type: Laya.Loader.JSON },
	    { url: "res/particles/heart.png", type: Laya.Loader.IMAGE },
	    { url: "res/particles/texture.png", type: Laya.Loader.IMAGE },
	    { url: "res/particles/RadiusMode.part", type: Laya.Loader.JSON },
	    { url: "res/particles/particleNew.part", type: Laya.Loader.JSON },
	    { url: "res/particles/GravityMode.part", type: Laya.Loader.JSON }
	];
	GameInfo$1.org_velocity = 0.3;
	GameInfo$1.GAME_STATE = 0;
	GameInfo$1.modelName = GameInfo$1.models[0].category + "_" + GameInfo$1.models[0].name;
	GameInfo$1.eatJewelCnt = 0;
	GameInfo$1.coinCnt = 0;
	GameInfo$1.targetFood = 0;
	GameInfo$1.targetFoodEat = false;
	GameInfo$1.curFoodLen = 0;
	GameInfo$1.curPassedLen = 0;
	GameInfo$1.maxLevelLen = 100;
	GameInfo$1.curPhisingValue = 0;
	GameInfo$1.maxPhisingValue = 100;
	GameInfo$1.deltaPhisingValue = 20;
	GameInfo$1.isJewelsRound = false;
	GameInfo$1.terrainNum = 0;
	GameInfo$1.groundColor = "ffffff";
	GameInfo$1.current_fever = 0;
	GameInfo$1.fever_ok = false;

	class Food extends Laya.Script3D {
	    constructor() {
	        super(...arguments);
	        this.scene = null;
	        this.model = null;
	        this.is_start = false;
	        this.velocity = 0.5;
	        this.camera = null;
	        this.curr_round = 0;
	        this.y_delta = 2.5;
	        this.bCustomize = false;
	        this.current_dir = "z";
	    }
	    onAwake() {
	        this.model = this.owner;
	        this.curr_round = parseInt(localStorage.getItem("jelly_round")) + 1;
	        let planeStaticCollider = this.model.addComponent(Laya.PhysicsCollider);
	        planeStaticCollider.colliderShape = new Laya.BoxColliderShape(3, 3, 3);
	        planeStaticCollider.friction = 2;
	        planeStaticCollider.restitution = 0.3;
	        planeStaticCollider.isTrigger = false;
	    }
	    isCurveLevel() {
	        let ret = false;
	        if (this.curr_round > 3)
	            ret = ((this.curr_round + 1) % 4 == 0);
	        return ret;
	    }
	    startFollow(sprite, cam) {
	        this.scene = sprite;
	        this.camera = cam;
	    }
	    updateGameState(game_state) {
	        GameInfo$1.GAME_STATE = game_state;
	    }
	    updatePassLen(pass_len) {
	        GameInfo$1.curFoodLen = pass_len;
	    }
	    start() {
	        this.is_start = true;
	    }
	    updateCustomState(state) {
	        this.bCustomize = state;
	    }
	    onUpdate() {
	        if (GameInfo$1.GAME_STATE == 2 || this.bCustomize) {
	            return;
	        }
	        if (!this.is_start)
	            return;
	        if (GameInfo$1.curFoodLen > 10) {
	            this.velocity = 0.205;
	            if (this.y_delta != 0.8) {
	                this.y_delta -= 0.01;
	                if (this.y_delta < 0.8)
	                    this.y_delta = 0.8;
	            }
	        }
	        else {
	            this.velocity = 0.4;
	        }
	        if (this.isCurveLevel()) ;
	        let y_pos = this.y_delta + Math.sin(this.model.transform.localPositionZ / 2) * 0.2;
	        if (this.current_dir == "z") {
	            this.model.transform.localPosition = new Laya.Vector3(this.model.transform.localPositionX, y_pos, this.model.transform.localPositionZ + this.velocity);
	        }
	        else if (this.current_dir == "x") {
	            this.model.transform.localPosition = new Laya.Vector3(this.model.transform.localPositionX - this.velocity, y_pos, this.model.transform.localPositionZ);
	        }
	        this.updateGameInfo();
	    }
	    updateGameInfo() {
	        let maxlen = GameInfo$1.getTerrainLength(this.curr_round);
	        if (GameInfo$1.curFoodLen > maxlen)
	            GameInfo$1.curFoodLen = maxlen;
	        else
	            GameInfo$1.curFoodLen += this.velocity;
	        let cur_per = GameInfo$1.curFoodLen / maxlen;
	        if (cur_per > 0.3)
	            this.velocity = 0.09;
	        this.owner.event("update_path", cur_per);
	    }
	    onDestroy() {
	    }
	    onCollisionEnter(collision) {
	        if (collision.other.owner.name == "jelly") {
	            this.owner.event("food_destroy");
	            this.model.destroy();
	        }
	    }
	    onTriggerEnter(other) {
	        if (other.owner == null)
	            return;
	    }
	    ShowEatParticle(model) {
	        let particles = Laya.loader.getRes("unity/model/particle.lh");
	        let tmp = particles.getChildAt(1);
	        if (!tmp) {
	            return;
	        }
	        var dup = Laya.MeshSprite3D.instantiate(tmp);
	        this.model.addChild(dup);
	        dup.transform.localPosition = new Laya.Vector3(0, 0, 0);
	        var delta = new Laya.Vector3(0, 0, 0);
	        Laya.Vector3.subtract(this.camera.transform.position, model.transform.position, delta);
	        Laya.Vector3.normalize(delta, delta);
	        Laya.Vector3.scale(delta, 5, delta);
	        Laya.Vector3.add(dup.transform.position, delta, dup.transform.position);
	        dup.transform.localScale = new Laya.Vector3(2, 2, 2);
	        dup.active = true;
	    }
	    ShowEndParticle() {
	        let particles = Laya.loader.getRes("unity/model/particle.lh");
	        let tmp = particles.getChildAt(0);
	        if (!tmp) {
	            return;
	        }
	        var dup = Laya.MeshSprite3D.instantiate(tmp);
	        this.model.addChild(dup);
	        dup.transform.localPosition = new Laya.Vector3(0, 0, 0);
	        var delta = new Laya.Vector3(0, 0, 0);
	        Laya.Vector3.subtract(this.camera.transform.position, this.model.transform.position, delta);
	        Laya.Vector3.normalize(delta, delta);
	        Laya.Vector3.scale(delta, 5, delta);
	        Laya.Vector3.add(dup.transform.position, delta, dup.transform.position);
	        dup.transform.localScale = new Laya.Vector3(2, 2, 2);
	        dup.active = true;
	    }
	    ShowRibonParticle(model) {
	        let particles = Laya.loader.getRes("unity/model/particle.lh");
	        let tmp = particles.getChildAt(0);
	        if (!tmp) {
	            return;
	        }
	        var dup = Laya.MeshSprite3D.instantiate(tmp);
	        model.addChild(dup);
	        dup.transform.localPosition = new Laya.Vector3(0, 0, 0);
	        dup.transform.localPosition.y += 0.5;
	        Laya.timer.once(1500, this, function () {
	            model.removeChild(dup);
	        });
	    }
	}

	class TriggerCollisionScript4Round extends Laya.Script3D {
	    constructor() {
	        super();
	    }
	    TriggerCollisionScript4Round() {
	    }
	    onTriggerEnter(other) {
	        if (other.owner.name == "jelly") {
	            this.owner.event("trigger", this.owner.name);
	        }
	    }
	    onUpdate() {
	    }
	    onTriggerStay(other) {
	    }
	    onTriggerExit(other) {
	    }
	    onCollisionEnter(collision) {
	    }
	    onCollisionStay(collision) {
	    }
	    onCollisionExit(collision) {
	    }
	}

	class GameUI extends ui.GameSceneUI {
	    constructor() {
	        super();
	        this.settingDlg = null;
	        this.customizeDlg = null;
	        this.worldDlg = null;
	        this.initial_avatar_x = this.avatar.x;
	        this.initial_food_x = this.fruit.x;
	        this.path_right_x = this.path.x + this.path.width;
	        this.anim_pos_array = [];
	        this.jewel_img_arr = [];
	        this.jewel_desc_delta = 0;
	        this.jewel_anim_order = 0;
	        this.arr_idx_arr = [];
	        this._quaternion = new Laya.Quaternion();
	        this._direction = new Laya.Vector3();
	        this.jewel_arr = [];
	        this.jewel_expand = true;
	        this.orgSky = new Laya.Vector4();
	        this.bSkyChange = false;
	        this.skyMat = null;
	        this.haptic_active = true;
	        this.tut_expand = false;
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
	    connect() {
	        this.btn_setting.on(Laya.Event.MOUSE_DOWN, this, this.showSettingDlg);
	        this.btn_customize.on(Laya.Event.MOUSE_DOWN, this, this.showCustomizeDlg);
	        this.btn_world.on(Laya.Event.MOUSE_DOWN, this, this.showWorldDlg);
	        this.btn_next.on(Laya.Event.MOUSE_DOWN, this, this.nextRound);
	        this.btn_continue.on(Laya.Event.MOUSE_DOWN, this, this.restartRound);
	    }
	    displaySplash() {
	        GameUI.progressView = new ProgressView();
	        GameUI.progressView.on("splash_finish", this, this.startResourceLoading);
	        Laya.stage.addChild(GameUI.progressView);
	    }
	    startResourceLoading() {
	        localStorage.setItem("jelly_sound", "true");
	        GameUI.progressView.off("splash_finish", this, this.startResourceLoading);
	        GameUI.progressView.on("load_finish", this, this.enterRound);
	        Laya.loader.create(GameInfo.resArray, Laya.Handler.create(GameUI.progressView, GameUI.progressView.onLoadComplete, null, false));
	        Laya.URL.basePath = GameInfo.baseResPath;
	    }
	    initGameInfo4Food() {
	        if (!this.food_pointer)
	            return;
	        this.food_pointer.updateGameState(GameInfo.GAME_STATE);
	        this.food_pointer.updatePassLen(GameInfo.curFoodLen);
	    }
	    nextRound() {
	        Sound.playLevelCompleteSound();
	        if (parseInt(this.eat_jewel_cnt.text) > 0) {
	            if (GameInfo.isJewelsLevel()) {
	                let cj = parseInt(this.current_jewel.text);
	                let ej = parseInt(this.eat_jewel_cnt.text);
	                cj += ej;
	                this.current_jewel.text = cj.toString();
	                this.calcJewelAndGoNext();
	            }
	            else {
	                for (let i = 0; i < this.jewel_img_arr.length; i++) {
	                    this.arr_idx_arr[i] = Math.floor(Math.random() * 3);
	                }
	                Laya.timer.loop(100, this, this.animate4Jewel);
	            }
	        }
	        else {
	            this.calcJewelAndGoNext();
	        }
	    }
	    animate4Jewel() {
	        this.jewel_anim_order++;
	        if (parseInt(this.eat_jewel_cnt.text) > 0) {
	            Sound.playGemRushGemSound();
	            this.eat_jewel_cnt.text = (parseInt(this.eat_jewel_cnt.text) - this.jewel_desc_delta).toString();
	            this.current_jewel.text = (parseInt(this.current_jewel.text) + this.jewel_desc_delta).toString();
	            for (let i = 0; i < this.jewel_img_arr.length; i++) {
	                this.anim_pos_array = GameInfo.anim_pos_category[this.arr_idx_arr[i]];
	                if (i >= this.jewel_anim_order)
	                    continue;
	                let tmp = this.jewel_img_arr[i];
	                let img_pos_indr = -1;
	                for (let j = 0; j < this.anim_pos_array.length; j++) {
	                    if (this.anim_pos_array[j][0] == tmp.x && this.anim_pos_array[j][1] == tmp.y)
	                        img_pos_indr = j;
	                }
	                if (img_pos_indr > -1 && img_pos_indr < this.anim_pos_array.length - 1) {
	                    tmp.x = this.anim_pos_array[img_pos_indr + 1][0];
	                    tmp.y = this.anim_pos_array[img_pos_indr + 1][1];
	                }
	            }
	        }
	        else {
	            Laya.timer.clearAll(this);
	            this.calcJewelAndGoNext();
	        }
	    }
	    calcJewelAndGoNext() {
	        GameInfo.jewelCnt = parseInt(this.current_jewel.text);
	        localStorage.setItem("jelly_jewel", this.current_jewel.text);
	        this.eat_jewel_cnt.text = "0";
	        this.jewel_round_current.text = "0";
	        this.enterRound();
	    }
	    restartRound() {
	        GameInfo.round--;
	        localStorage.setItem("jelly_round", GameInfo.round.toString());
	        this.enterRound();
	    }
	    changeHaptic() {
	        let haptic = localStorage.getItem("jelly_haptic");
	        this.haptic_active = (haptic == "true") ? true : false;
	    }
	    changeSound() {
	        let sound = localStorage.getItem("jelly_sound");
	        Sound.sound_active = (sound == "true") ? true : false;
	    }
	    initDlgs() {
	        this.settingDlg = new SettingDlg();
	        this.settingDlg.on("close_dlg", this, this.closeDlg);
	        this.settingDlg.on("haptic_changed", this, this.changeHaptic);
	        this.settingDlg.on("sound_changed", this, this.changeSound);
	        this.customizeDlg = new CustomizeDlg();
	        this.customizeDlg.on("select_player", this, this.initPlayer);
	        this.customizeDlg.on("close_dlg", this, this.closeDlg);
	        this.customizeDlg.on("update_jewel", this, this.updateJewel);
	        this.worldDlg = new CustomizeDlg$1();
	        this.worldDlg.on("close_dlg", this, this.closeDlg);
	    }
	    enterRound() {
	        this.initDlgs();
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
	        ], Laya.Handler.create(null, function () {
	            self.initScene();
	        }));
	        Laya.URL.basePath = GameInfo.baseResPath;
	    }
	    initScene() {
	        var self = this;
	        this.loading_anim.visible = true;
	        Laya.Scene3D.load("unity/round/terrain" + GameInfo.terrainNum + ".ls", Laya.Handler.create(null, function (scene) {
	            self.initSceneImpl(scene);
	        }));
	        Laya.URL.basePath = GameInfo.baseResPath;
	    }
	    onLoadingAnimLoaded() {
	    }
	    showFoodEatPtcl() {
	        this.eat_anim.visible = true;
	    }
	    hideFoodEatPtcl() {
	        this.eat_anim.visible = false;
	    }
	    initSceneImpl(scene) {
	        this.loading_anim.visible = false;
	        this.btn_tuple.visible = true;
	        this.curScene = scene;
	        this.curScene.name = "jelly_scene";
	        Laya.stage.addChild(this.curScene);
	        Laya.stage.setChildIndex(this.curScene, 0);
	        this.curCamera = this.curScene.getChildByName("Main Camera");
	        this.curCamera.farPlane = 500;
	        this.curCamera.transform.position = new Laya.Vector3(this.curCamera.transform.position.x, this.curCamera.transform.position.y, this.curCamera.transform.position.z - 1);
	        GameInfo.scene = this.curScene;
	        var dlight = this.curScene.getChildByName("Directional light");
	        if (GameInfo.isCurveLevel()) {
	            try {
	                this.curve_proc();
	            }
	            catch (e) {
	                console.log("curve level init...", e.toString);
	            }
	        }
	        this.pillar_proc();
	        if (GameInfo.isJewelsLevel()) {
	            this.jewel_proc();
	        }
	        this.SetSkyInfo();
	        this.initPlayer();
	        this.initFood();
	        this.initUiInfo();
	        if (!GameInfo.isJewelsLevel())
	            return;
	    }
	    initPlayer() {
	        let model_name_arr = GameInfo.modelName.split('_');
	        let group_name = model_name_arr[0];
	        let player_name = model_name_arr[1];
	        if (model_name_arr[2])
	            player_name = player_name += "_" + model_name_arr[2];
	        if (model_name_arr[3])
	            player_name = player_name += "_" + model_name_arr[3];
	        let pos_vtr;
	        let tmp = this.curScene.getChildByName("jelly");
	        if (tmp == null) {
	            tmp = this.curScene.getChildByName("jellyBox").getChildByName("jelly");
	        }
	        if (tmp) {
	            pos_vtr = tmp.transform.position;
	            pos_vtr.y = 0.258;
	            tmp.destroy();
	            tmp = null;
	        }
	        let player_list;
	        if (!player_list)
	            player_list = Laya.loader.getRes("unity/model/player.lh");
	        if (player_name == "Snarglius")
	            group_name = "heroes";
	        let player_group = player_list.getChildByName(group_name);
	        let player_body_org = player_group.getChildByName(player_name);
	        this.player_body = Laya.MeshSprite3D.instantiate(player_body_org);
	        this.player_body.active = true;
	        this.player_body.name = "jelly";
	        var rigidBody = this.player_body.addComponent(Laya.Rigidbody3D);
	        this.player_body.getChildAt(0).getChildAt(0).active = false;
	        rigidBody.colliderShape = new Laya.BoxColliderShape(1.3, 1, 1);
	        this.player_body.getChildAt(1).name = "jelly";
	        rigidBody.colliderShape.localOffset.y = 0.5;
	        rigidBody.mass = 100;
	        rigidBody.friction = 0;
	        rigidBody.rollingFriction = 0;
	        this.player_body.transform.position = pos_vtr;
	        this.player_body.on("update_path", this, this.updateAvatarPath);
	        this.player_body.on("update_pass", this, this.updateFeverUp);
	        this.player_body.on("game_started", this, this.startRound);
	        this.player_body.on("game_failed", this, this.stopRound);
	        this.player_body.on("game_ended", this, this.endRound);
	        this.player_pointer = this.player_body.addComponent(Player);
	        this.player_pointer.startFollow(this.curScene, this.curCamera, 0.2);
	        this.setRoundColors(group_name, player_name);
	    }
	    initFood() {
	        let food_idx = GameInfo.GetTargetFoodIndex();
	        let food_list = Laya.loader.getRes("unity/model/food.lh");
	        let food_tmp = food_list.getChildAt(food_idx);
	        if (!food_tmp) {
	            return;
	        }
	        this.food_model = Laya.MeshSprite3D.instantiate(food_tmp);
	        this.food_model.name = GameInfo.getFoodName();
	        this.food_model.active = true;
	        this.food_model.meshRenderer.castShadow = true;
	        this.curScene.addChild(this.food_model);
	        this.food_model.transform.position = new Laya.Vector3(this.player_body.transform.position.x, this.player_body.transform.position.y + 1, this.player_body.transform.position.z - 3);
	        this.food_model.on("update_path", this, this.updateFoodPath);
	        this.food_model.on("food_destroy", this, this.destroyFood);
	        this.food_pointer = this.food_model.addComponent(Food);
	        this.food_pointer.startFollow(this.curScene, this.curCamera);
	    }
	    setRoundColors(group_name, player_name) {
	        GameInfo.setGroundColor(group_name, player_name);
	        let cube = this.curScene.getChildByName("Cube").getChildByName("Cube (1)");
	        cube.meshRenderer.sharedMaterial.albedoColor = GameInfo.getGroundColor();
	        let cube_down_side = this.curScene.getChildByName("Cube Down Side").getChildByName("Cube (1)");
	        cube_down_side.meshRenderer.sharedMaterial.albedoColor = GameInfo.getGroundColor();
	        let shader_obs_list = this.curScene.getChildByName("Level").getChildByName("obstacles");
	        for (let i = 0; i < shader_obs_list.numChildren - 1; i++) {
	            let shader_obs_tmp = shader_obs_list.getChildAt(i);
	            if (shader_obs_tmp) {
	                let shader_obs = shader_obs_tmp.getChildByName("particle1");
	                if (shader_obs)
	                    for (let j = 0; j < shader_obs.numChildren; j++) {
	                        let final_shader = shader_obs.getChildAt(j);
	                        if (final_shader)
	                            final_shader.meshRenderer.sharedMaterial.albedoColor = GameInfo.getGroundColor();
	                    }
	            }
	        }
	        if (!GameInfo.isJewelsLevel())
	            return;
	        let ground_list = this.curScene.getChildByName("Level").getChildByName("1");
	        for (let i = 0; i < ground_list.numChildren - 1; i++) {
	            let ground_tmp = ground_list.getChildAt(i);
	            if (ground_tmp) {
	                try {
	                    ground_tmp.meshRenderer.sharedMaterial.albedoColor = GameInfo.getJewelGroundColor();
	                }
	                catch (e) {
	                }
	            }
	        }
	        let jewel_group_list = this.curScene.getChildByName("Level").getChildByName("jewels");
	        for (let i = 0; i < jewel_group_list.numChildren - 1; i++) {
	            let jewel_group = jewel_group_list.getChildAt(i);
	            if (jewel_group)
	                for (let j = 0; j < jewel_group.numChildren; j++) {
	                    let jewel_item = jewel_group.getChildAt(j);
	                    if (jewel_item) {
	                        this.jewel_arr.push(jewel_item);
	                    }
	                }
	        }
	        Laya.timer.loop(100, this, this.animate4JewelArr);
	    }
	    animate4JewelArr() {
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
	            }
	            else {
	                current_scale -= 0.2;
	                if (Math.abs(current_scale) < 0.5) {
	                    this.jewel_expand = true;
	                    current_scale = 0.5;
	                }
	            }
	        }
	        for (let i = 0; i < this.jewel_arr.length; i++) {
	            if (!this.jewel_arr[i])
	                continue;
	            if (!this.jewel_arr[i].transform)
	                continue;
	            this.jewel_arr[i].transform.localScaleX = current_scale;
	            this.jewel_arr[i].transform.localScaleY = current_scale;
	            this.jewel_arr[i].transform.localScaleZ = current_scale;
	        }
	    }
	    SetSkyInfo() {
	        if (this.curCamera) {
	            this.curCamera.clearFlag = Laya.BaseCamera.CLEARFLAG_SKY;
	            this.curCamera.fieldOfView = 60;
	            this.StartSkyProc();
	        }
	    }
	    closeDlg() {
	        this.updateCustomState(false);
	    }
	    updateJewel(custom_state) {
	        let current_jewel_cnt = localStorage.getItem("jelly_jewel");
	        GameInfo.jewelCnt = parseInt(current_jewel_cnt);
	        this.current_jewel.text = current_jewel_cnt;
	    }
	    updateAvatarPath(cur_per) {
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
	    destroyFood() {
	        this.food_model.active = false;
	        this.food_model.destroy();
	        this.food_model = null;
	        this.fruit.visible = false;
	        GameInfo.targetFoodEat = true;
	        let eat_jewel = 50;
	        this.jewel_desc_delta = 2;
	        if (GameInfo.targetFood % 3 == 2) {
	            eat_jewel = 100;
	            this.jewel_desc_delta = 4;
	        }
	        this.eat_jewel_cnt.text = eat_jewel.toString();
	        GameInfo.eatJewelCnt = eat_jewel;
	        Sound.playCatchFoodSound();
	        this.showFoodEatPtcl();
	        Laya.timer.once(900, this, function () {
	            this.hideFoodEatPtcl();
	        });
	    }
	    updateFoodPath(cur_per) {
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
	    updateCustomState(state) {
	        if (this.player_pointer)
	            this.player_pointer.updateCustomState(state);
	        if (this.food_pointer)
	            this.food_pointer.updateCustomState(state);
	    }
	    showCustomizeDlg() {
	        this.customizeDlg.show();
	        this.updateCustomState(true);
	        Sound.playCustomizeOpenSound();
	    }
	    showWorldDlg() {
	        this.worldDlg.show();
	        this.updateCustomState(true);
	        Sound.playCustomizeOpenSound();
	    }
	    showSettingDlg() {
	        this.settingDlg.show();
	        this.updateCustomState(true);
	        Sound.playCustomizeOpenSound();
	    }
	    pillar_proc() {
	        var translevel = this.curScene.getChildByName("Level");
	        var obstacles = translevel.getChildByName("obstacles");
	        for (var i = 0; i < obstacles.numChildren; i++) {
	            var subObj = obstacles.getChildAt(i);
	            for (var j = 0; j < subObj.numChildren - 1; j++) {
	                subObj.getChildAt(j).on("trigger", this, this.updateFeverDown);
	                subObj.getChildAt(j).addComponent(TriggerCollisionScript);
	            }
	        }
	    }
	    curve_proc() {
	        var translevel = this.curScene.getChildByName("Level");
	        var rd_cols = translevel.getChildByName("corner_to_right");
	        for (var i = 0; i < rd_cols.numChildren; i++) {
	            var subObj = rd_cols.getChildAt(i);
	            subObj.on("trigger", this, this.updatePlayerDir);
	            subObj.addComponent(TriggerCollisionScript4Round);
	        }
	    }
	    updatePlayerDir(dir) {
	        this.player_pointer.updateDir(dir);
	    }
	    jewel_proc() {
	        var translevel = this.curScene.getChildByName("Level");
	        var jewel_groups = translevel.getChildByName("jewels");
	        for (var i = 0; i < jewel_groups.numChildren; i++) {
	            var subObj = jewel_groups.getChildAt(i);
	            for (var j = 0; j < subObj.numChildren; j++) {
	                if (!subObj.getChildAt(j))
	                    continue;
	                subObj.getChildAt(j).on("trigger", this, this.updateJewelBar);
	                subObj.getChildAt(j).addComponent(TriggerCollisionScript4Jewel);
	            }
	        }
	    }
	    StartSkyProc() {
	        let initial_plane_pos = this.curScene.getChildByName("Plane").transform.position;
	        this.curScene.getChildByName("Plane").transform.position = new Laya.Vector3(initial_plane_pos.x + 10, initial_plane_pos.y - 5, initial_plane_pos.z + 5);
	        this.skyMat = this.curScene.getChildByName("Plane").meshRenderer.material;
	        this.skyMat.albedoColor = GameInfo.getSkyColor();
	        this.orgSky = GameInfo.getSkyColor();
	        this.bSkyChange = false;
	        Laya.timer.frameLoop(100, this, this.SkyUpdate);
	    }
	    SkyUpdate() {
	        if (!this.bSkyChange)
	            return;
	        var deltaColor = new Laya.Vector4();
	        Laya.Vector4.subtract(this.targetSkyColor, this.skyMat.albedoColor, deltaColor);
	        try {
	            this.skyMat.albedoColorR += (deltaColor.x / this.targetSkyStep);
	            this.skyMat.albedoColorG += (deltaColor.y / this.targetSkyStep);
	            this.skyMat.albedoColorB += (deltaColor.z / this.targetSkyStep);
	        }
	        catch (e) {
	            console.log("this.skyMat...", e.toString());
	        }
	        this.targetSkyStep--;
	        if (this.targetSkyStep == 0)
	            this.bSkyChange = false;
	    }
	    SetTargetSky(color, step) {
	        this.targetSkyColor = color;
	        this.targetSkyStep = step;
	        this.bSkyChange = true;
	    }
	    setDarkSky() {
	        var gray = new Laya.Vector4(0, 0, 0, 1);
	        this.skyMat.albedoColor = gray;
	    }
	    setGraySky() {
	        var gray = new Laya.Vector4(0, 0, 0, 1);
	        this.SetTargetSky(gray, 20);
	    }
	    setFeverSky() {
	        var dlight = this.curScene.getChildByName("Directional light");
	        dlight.color = new Laya.Vector3(0.8, 1, 0.8);
	        dlight.intensity = 0.5;
	        var fever = new Laya.Vector4(0, 1, 0, 1);
	        this.SetTargetSky(fever, 3);
	    }
	    setOrgSky() {
	        var dlight = this.curScene.getChildByName("Directional light");
	        dlight.color = new Laya.Vector3(1, 1, 1);
	        dlight.intensity = 1;
	        this.SetTargetSky(this.orgSky, 3);
	    }
	    vibration() {
	        if (!this.haptic_active)
	            return;
	        try {
	            window.navigator.vibrate(100);
	        }
	        catch (e) {
	            console.log("navigator exp...", e.toString());
	        }
	    }
	    updateFeverUp() {
	        this.vibration();
	        let tot_cnt = GameInfo.GetObstacleCount();
	        if (GameInfo.fever_ok) {
	            GameInfo.current_fever--;
	            this.player_body.getComponent(Player).ExplodePillar();
	            if (GameInfo.current_fever <= 0) {
	                GameInfo.fever_ok = false;
	                this.setOrgSky();
	                this.player_body.getComponent(Player).ZoomInCamera();
	            }
	            else {
	                Sound.playFeverLoopSound();
	            }
	        }
	        else {
	            GameInfo.current_fever++;
	            this.player_body.getComponent(Player).ShowTrail(true);
	            if (GameInfo.current_fever > 1)
	                this.setGraySky();
	            if (GameInfo.current_fever >= tot_cnt / 3) {
	                GameInfo.fever_ok = true;
	                this.setFeverSky();
	                Sound.playFeverStartSound();
	                this.player_body.getComponent(Player).ExplodePillar();
	                this.player_body.getComponent(Player).ZoomOutCamera();
	            }
	        }
	        this.fever_bar.value = GameInfo.current_fever / (tot_cnt / 3);
	    }
	    updateFeverDown(block_cnt) {
	        GameInfo.current_fever = 0;
	        GameInfo.fever_ok = false;
	        this.fever_bar.value = 0;
	        this.player_body.getComponent(Player).ShowTrail(false);
	        this.setOrgSky();
	    }
	    updateJewelBar() {
	        Sound.playGemRushGemSound();
	        this.jewel_bar.value = GameInfo.eatJewelCnt / parseInt(this.jewel_round_total.text);
	        GameInfo.eatJewelCnt += 5;
	        this.eat_jewel_cnt.text = GameInfo.eatJewelCnt.toString();
	        this.jewel_round_current.text = GameInfo.eatJewelCnt.toString();
	        this.player_pointer.ShowSpeedParticle();
	    }
	    startRound() {
	        this.updateUI4Start();
	        Sound.playGameStartSound();
	        if (!GameInfo.isJewelsLevel()) {
	            this.food_pointer.start();
	        }
	    }
	    stopRound() {
	        Laya.timer.once(700, this, function () {
	            this.updateUI4Stop();
	            Sound.playFallSound();
	        });
	    }
	    updateUI4Stop() {
	        this.failed_note.visible = true;
	        this.btn_continue.visible = true;
	        this.game_status.visible = false;
	        this.fever_bar.visible = false;
	        this.jewel_bar_box.visible = false;
	    }
	    updateUI4Start() {
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
	    endRound() {
	        this.setDarkSky();
	        this.updateUI4End();
	        this.pillar_end_proc();
	        Sound.playReachFinishSound();
	        this.showFoodEatPtcl();
	        Laya.timer.once(1000, this, function () {
	            this.hideFoodEatPtcl();
	        });
	        Laya.timer.loop(50, this, this.animate4shine);
	    }
	    animate4shine() {
	        this.shine_img.rotation -= 2;
	    }
	    updateUI4End() {
	        if (!GameInfo.isJewelsLevel())
	            this.star_bar.visible = true;
	        this.btn_next.visible = true;
	        this.level_note.visible = true;
	        if (parseInt(this.eat_jewel_cnt.text) > 0) {
	            this.gem_ret.visible = true;
	            this.showJewels();
	        }
	        else {
	            this.hideJewels();
	        }
	        if (GameInfo.targetFoodEat)
	            this.food_ret.visible = true;
	        this.game_status.visible = false;
	        this.fever_bar.visible = false;
	        this.jewel_bar_box.visible = false;
	    }
	    showJewels() {
	        for (let i = 0; i < this.jewel_img_arr.length; i++) {
	            this.jewel_img_arr[i].visible = true;
	        }
	    }
	    hideJewels() {
	        for (let i = 0; i < this.jewel_img_arr.length; i++) {
	            this.jewel_img_arr[i].visible = false;
	        }
	    }
	    resetUI() {
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
	        if (!GameInfo.isJewelsRound)
	            this.fruit.visible = true;
	        this.avatar.x = this.initial_avatar_x;
	        this.fruit.x = this.initial_food_x;
	        this.hideJewels();
	        let xv = GameInfo.jewel_init_x;
	        let yv = GameInfo.jewel_init_y;
	        for (let i = 0; i < this.jewel_img_arr.length; i++) {
	            this.jewel_img_arr[i].pos(xv, yv);
	        }
	        this.jewel_anim_order = 0;
	        this.jewel_bar.value = 0;
	        GameInfo.targetFoodEat = false;
	    }
	    renderLevelLbl(state) {
	        let appl_state = GameInfo.isJewelsLevel() ? state : !state;
	        this.gem_rush_lbl.visible = appl_state;
	        this.level_bar_box.visible = !appl_state;
	    }
	    renderLevelBar(state) {
	        let appl_state = GameInfo.isJewelsLevel() ? state : !state;
	        this.jewel_bar_box.visible = appl_state;
	        this.fever_bar.visible = !appl_state;
	        this.game_status.visible = !appl_state;
	    }
	    initUiInfo() {
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
	        }
	        else if (coin == 2) {
	            this.gold_star1.visible = true;
	            this.gold_star2.visible = true;
	            this.gold_star3.visible = false;
	            this.star1.visible = false;
	            this.star2.visible = false;
	            this.star3.visible = true;
	        }
	        else if (coin == 1) {
	            this.gold_star1.visible = true;
	            this.gold_star2.visible = false;
	            this.gold_star3.visible = false;
	            this.star1.visible = false;
	            this.star2.visible = true;
	            this.star3.visible = true;
	        }
	        if (GameInfo.isJewelsRound) {
	            this.jewel_round_total.text = (GameInfo.getRoundJewelCnt() * GameInfo.jewel_unit).toString();
	        }
	        else {
	            this.renderTargetFoodUI();
	        }
	        this.renderLevelLbl(true);
	        GameInfo.current_fever = 0;
	        Laya.timer.loop(150, this, this.animate4tut);
	    }
	    renderTargetFoodUI() {
	        let food_arr = GameInfo.getFoodArray();
	        let img = [];
	        for (let i = 0; i < 3; i++) {
	            img[i] = new Laya.Image("resources/icons/" + food_arr[i]);
	            Laya.URL.basePath = GameInfo.baseResPath;
	            img[i].width = 60;
	            img[i].height = 60;
	            img[i].x = 10;
	            img[i].y = 10;
	            img[i].name = "target_food";
	        }
	        this.check1.visible = (food_arr[0].indexOf("disabled") != -1) ? false : true;
	        this.check2.visible = (food_arr[1].indexOf("disabled") != -1) ? false : true;
	        this.check3.visible = (food_arr[2].indexOf("disabled") != -1) ? false : true;
	        this.food1.removeChildByName("target_food");
	        this.food2.removeChildByName("target_food");
	        this.food3.removeChildByName("target_food");
	        this.food1.addChild(img[0]);
	        this.food2.addChild(img[1]);
	        this.food3.addChild(img[2]);
	        let targetFood = GameInfo.getFoodName();
	        let targetIconPath = "resources/icons/" + targetFood + "_enabled.png";
	        this.fruit.removeChildByName("fruit_body");
	        let targetImg = new Laya.Image(targetIconPath);
	        Laya.URL.basePath = GameInfo.baseResPath;
	        targetImg.width = 30;
	        targetImg.height = 28;
	        this.fruit.addChild(targetImg);
	    }
	    animate4tut() {
	        if (Math.abs(this.tut_img.scaleY) >= 0.7) {
	            if (this.tut_expand) {
	                this.tut_img.scaleY -= 0.1;
	                if (Math.abs(this.tut_img.scaleY) > 1)
	                    this.tut_expand = false;
	            }
	            else {
	                this.tut_img.scaleY += 0.1;
	                if (Math.abs(this.tut_img.scaleY) < 0.7) {
	                    this.tut_expand = true;
	                    this.tut_img.scaleY = -0.7;
	                }
	            }
	        }
	    }
	    pillar_end_proc() {
	        var translevel = this.curScene.getChildByName("Level");
	        var obstacles = translevel.getChildByName("obstacles");
	        for (var i = 0; i < obstacles.numChildren; i++) {
	            var subObj = obstacles.getChildAt(i);
	            for (var j = 0; j < subObj.numChildren - 1; j++) {
	                subObj.getChildAt(j).off("trigger", this, this.updateFeverDown);
	            }
	        }
	    }
	}
	GameUI.progressView = null;

	class GameConfig {
	    constructor() { }
	    static init() {
	        var reg = Laya.ClassUtils.regClass;
	        reg("script/CustomizeDlg.ts", CustomizeDlg);
	        reg("script/GameUI.ts", GameUI);
	        reg("script/ProgressView.ts", ProgressView);
	        reg("script/SettingDlg.ts", SettingDlg);
	        reg("script/WorldDlg.ts", CustomizeDlg$1);
	    }
	}
	GameConfig.width = 640;
	GameConfig.height = 960;
	GameConfig.scaleMode = "showall";
	GameConfig.screenMode = "none";
	GameConfig.alignV = "middle";
	GameConfig.alignH = "center";
	GameConfig.startScene = "GameScene.scene";
	GameConfig.sceneRoot = "";
	GameConfig.debug = false;
	GameConfig.stat = false;
	GameConfig.physicsDebug = false;
	GameConfig.exportSceneToJson = true;
	GameConfig.init();

	class Main {
	    constructor() {
	        if (window["Laya3D"])
	            Laya3D.init(GameConfig.width, GameConfig.height);
	        else
	            Laya.init(GameConfig.width, GameConfig.height, Laya["WebGL"]);
	        Laya["Physics"] && Laya["Physics"].enable();
	        Laya["DebugPanel"] && Laya["DebugPanel"].enable();
	        Laya.stage.scaleMode = GameConfig.scaleMode;
	        Laya.stage.screenMode = GameConfig.screenMode;
	        Laya.stage.alignV = GameConfig.alignV;
	        Laya.stage.alignH = GameConfig.alignH;
	        Laya.stage.bgColor = "#148be8";
	        Laya.URL.exportSceneToJson = GameConfig.exportSceneToJson;
	        if (GameConfig.debug || Laya.Utils.getQueryString("debug") == "true")
	            Laya.enableDebugPanel();
	        if (GameConfig.physicsDebug && Laya["PhysicsDebugDraw"])
	            Laya["PhysicsDebugDraw"].enable();
	        if (GameConfig.stat)
	            Laya.Stat.show();
	        Laya.alertGlobalError = true;
	        Laya.ResourceVersion.enable("version.json", Laya.Handler.create(this, this.onVersionLoaded), Laya.ResourceVersion.FILENAME_VERSION);
	    }
	    onVersionLoaded() {
	        Laya.AtlasInfoManager.enable("fileconfig.json", Laya.Handler.create(this, this.onConfigLoaded));
	    }
	    onConfigLoaded() {
	        GameConfig.startScene && Laya.Scene.open(GameConfig.startScene);
	    }
	}
	new Main();

}());
