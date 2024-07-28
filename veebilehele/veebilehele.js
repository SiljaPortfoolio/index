(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"veebilehele_atlas_1", frames: [[0,0,1297,1298]]},
		{name:"veebilehele_atlas_2", frames: [[0,0,1417,977]]},
		{name:"veebilehele_atlas_3", frames: [[0,0,1036,1097]]},
		{name:"veebilehele_atlas_4", frames: [[729,1067,500,500],[1231,0,500,500],[1063,502,500,500],[1231,1004,500,500],[1231,1506,500,500],[0,1067,727,730],[0,0,1061,1065]]},
		{name:"veebilehele_atlas_5", frames: [[0,0,500,500],[502,0,268,253],[502,255,268,253]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.CachedBmp_8 = function() {
	this.initialize(ss["veebilehele_atlas_4"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_7 = function() {
	this.initialize(ss["veebilehele_atlas_4"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_6 = function() {
	this.initialize(ss["veebilehele_atlas_4"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_5 = function() {
	this.initialize(ss["veebilehele_atlas_4"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_4 = function() {
	this.initialize(ss["veebilehele_atlas_4"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_3 = function() {
	this.initialize(ss["veebilehele_atlas_5"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_2 = function() {
	this.initialize(ss["veebilehele_atlas_5"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1 = function() {
	this.initialize(ss["veebilehele_atlas_5"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.Image = function() {
	this.initialize(ss["veebilehele_atlas_3"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Image_1 = function() {
	this.initialize(ss["veebilehele_atlas_4"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.Image_2 = function() {
	this.initialize(img.Image_2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,4000,2666);


(lib.Image_3 = function() {
	this.initialize(ss["veebilehele_atlas_2"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Image_4 = function() {
	this.initialize(ss["veebilehele_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Image_5 = function() {
	this.initialize(img.Image_5);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,8433,8433);


(lib.Image_6 = function() {
	this.initialize(img.Image_6);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2049,2049);


(lib.Image_7 = function() {
	this.initialize(ss["veebilehele_atlas_4"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.Image_8 = function() {
	this.initialize(img.Image_8);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3508,2480);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.ClipGroup = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AzhTiMAAAgjHQAAhoBKhKQBKhKBpAAMAjGAAAMAAAAnDg");
	mask.setTransform(131.6,142.9);

	// Layer_3
	this.instance = new lib.Image();
	this.instance.setTransform(0,0,0.2522,0.2522);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup, new cjs.Rectangle(6.6,17.9,250.00000000000003,249.99999999999997), null);


(lib.ClipGroup_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("AzhTiMAAAgnDMAgzAAAQCmAAB1B1QB1B2AAClMAAAAgzg");
	mask_1.setTransform(129.5,129.95);

	// Layer_3
	this.instance_1 = new lib.Image_1();
	this.instance_1.setTransform(0,0,0.3563,0.3563);

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_1, new cjs.Rectangle(4.5,5,250,250), null);


(lib.ClipGroup_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	mask_2.graphics.p("AvkTiQhpAAhKhKQhKhKAAhpMAAAgjGMAnDAAAMAAAAnDg");
	mask_2.setTransform(184.05,126.9);

	// Layer_3
	this.instance_2 = new lib.Image_2();
	this.instance_2.setTransform(0,0,0.0952,0.0952);

	var maskedShapeInstanceList = [this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_2, new cjs.Rectangle(59.1,1.9,250.00000000000003,250), null);


(lib.ClipGroup_3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	mask_3.graphics.p("AzhTiMAAAgnDMAnDAAAMAAAAgzQAAClh1B2Qh1B1imAAg");
	mask_3.setTransform(145.65,160.05);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("A4DZIMAAAgyQMAwGAAAMAAAAyQg");
	this.shape.setTransform(153.95,160.85);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_3, new cjs.Rectangle(20.7,35.1,250,250.00000000000003), null);


(lib.ClipGroup_4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_4 = new cjs.Shape();
	mask_4._off = true;
	mask_4.graphics.p("AzhTiMAAAgjGQAAhpBKhKQBKhKBpAAMAjGAAAMAAAAnDg");
	mask_4.setTransform(125.2,125);

	// Layer_3
	this.instance_3 = new lib.Image_4();
	this.instance_3.setTransform(0,0,0.198,0.198);

	var maskedShapeInstanceList = [this.instance_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_4;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AzhTiMAAAgjGQAAhpBKhKQBKhKBpAAMAjGAAAMAAAAnDg");
	this.shape_1.setTransform(125.2,125);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_4, new cjs.Rectangle(0.2,0,250,250), null);


(lib.ClipGroup_5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_5 = new cjs.Shape();
	mask_5._off = true;
	mask_5.graphics.p("AzhTiMAAAgnDMAgzAAAQCmAAB1B1QB1B1AACmMAAAAgzg");
	mask_5.setTransform(125.35,125.2);

	// Layer_3
	this.instance_4 = new lib.Image_5();
	this.instance_4.setTransform(0,0,0.0297,0.0297);

	var maskedShapeInstanceList = [this.instance_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_5;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	// Layer_1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AzhTiMAAAgnDMAgzAAAQCmAAB1B1QB1B1AACmMAAAAgzg");
	this.shape_2.setTransform(125.35,125.2);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_5, new cjs.Rectangle(0.4,0.2,250,250), null);


(lib.ClipGroup_6 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_6 = new cjs.Shape();
	mask_6._off = true;
	mask_6.graphics.p("AzhTiMAAAgnDMAnDAAAMAAAAgzQAAClh1B2Qh1B1imAAg");
	mask_6.setTransform(125,129.1);

	// Layer_3
	this.instance_5 = new lib.Image_6();
	this.instance_5.setTransform(0,0,0.1247,0.1247);

	var maskedShapeInstanceList = [this.instance_5];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_6;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_6, new cjs.Rectangle(0,4.1,250,250), null);


(lib.ClipGroup_7 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_7 = new cjs.Shape();
	mask_7._off = true;
	mask_7.graphics.p("AvkTiQhpAAhKhKQhKhLAAhoMAAAgjGMAnDAAAMAAAAnDg");
	mask_7.setTransform(128.05,129.05);

	// Layer_3
	this.instance_6 = new lib.Image_7();
	this.instance_6.setTransform(0,0,0.2415,0.2415);

	var maskedShapeInstanceList = [this.instance_6];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_7;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_7, new cjs.Rectangle(3.1,4.1,250,250), null);


(lib.ClipGroup_8 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_8 = new cjs.Shape();
	mask_8._off = true;
	mask_8.graphics.p("AzhTiMAAAgjHQAAhoBKhKQBKhKBoAAMAjHAAAMAAAAnDg");
	mask_8.setTransform(199.3,140.9);

	// Layer_3
	this.instance_7 = new lib.Image_8();
	this.instance_7.setTransform(0,0,0.1136,0.1136);

	var maskedShapeInstanceList = [this.instance_7];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_8;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1));

	// Layer_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AzhTiMAAAgjHQAAhoBKhKQBKhKBoAAMAjHAAAMAAAAnDg");
	this.shape_3.setTransform(199.3,140.9);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_8, new cjs.Rectangle(74.3,15.9,250,249.99999999999997), null);


(lib.ClipGroup_9 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_9 = new cjs.Shape();
	mask_9._off = true;
	mask_9.graphics.p("AzhTiMAAAgnDMAnDAAAMAAAAgzQAAClh1B2Qh2B1ilAAg");
	mask_9.setTransform(145.65,160.05);

	// Layer_3
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#1C1C1A").s().p("A4DZIMAAAgyQMAwGAAAMAAAAyQg");
	this.shape_4.setTransform(153.95,160.85);

	var maskedShapeInstanceList = [this.shape_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_9;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_9, new cjs.Rectangle(20.7,35.1,250,250.00000000000003), null);


// stage content:
(lib.veebilehele = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.instance = new lib.CachedBmp_1();
	this.instance.setTransform(313.35,319.25,0.5,0.5);

	this.instance_1 = new lib.ClipGroup_9();
	this.instance_1.setTransform(383.35,375.75,1,1,0,0,0,154,160.8);

	this.instance_2 = new lib.CachedBmp_2();
	this.instance_2.setTransform(313.35,319.25,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).to({state:[]},78).to({state:[{t:this.instance_1},{t:this.instance_2}]},81).wait(81));

	// Layer_3
	this.instance_3 = new lib.CachedBmp_3();
	this.instance_3.setTransform(0,250,0.5,0.5);

	this.instance_4 = new lib.CachedBmp_4();
	this.instance_4.setTransform(0,250,0.5,0.5);

	this.instance_5 = new lib.CachedBmp_5();
	this.instance_5.setTransform(0,250,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3}]}).to({state:[]},36).to({state:[{t:this.instance_4}]},136).to({state:[{t:this.instance_5}]},56).wait(12));

	// Layer_4
	this.instance_6 = new lib.CachedBmp_6();
	this.instance_6.setTransform(250.35,0.8,0.5,0.5);

	this.instance_7 = new lib.CachedBmp_7();
	this.instance_7.setTransform(250.35,0.8,0.5,0.5);

	this.instance_8 = new lib.CachedBmp_8();
	this.instance_8.setTransform(250.35,0.8,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_6}]}).to({state:[{t:this.instance_7}]},20).to({state:[]},1).to({state:[{t:this.instance_8}]},167).wait(52));

	// Layer_5
	this.instance_9 = new lib.ClipGroup_8();
	this.instance_9.setTransform(125,125,1,1,0,0,0,199.3,140.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({_off:true},62).wait(144).to({_off:false},0).wait(34));

	// Layer_6
	this.instance_10 = new lib.ClipGroup_7();
	this.instance_10.setTransform(125.2,374.55,1,1,0,0,0,128.1,128.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(140).to({_off:true},3).wait(97));

	// Layer_7
	this.instance_11 = new lib.ClipGroup_6();
	this.instance_11.setTransform(377.85,373.6,1,1,0,0,0,127.7,127.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(115).to({_off:true},11).wait(114));

	// Layer_8
	this.instance_12 = new lib.ClipGroup_5();
	this.instance_12.setTransform(375.35,125.8,1,1,0,0,0,125.2,125.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).to({_off:true},95).wait(145));

	// Layer_9
	this.instance_13 = new lib.ClipGroup_4();
	this.instance_13.setTransform(128.25,128.4,1,1,0,0,0,128.3,128.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(106).to({_off:true},1).wait(133));

	// Layer_10
	this.instance_14 = new lib.Image_3();
	this.instance_14.setTransform(287.4,306.1,0.126,0.126);

	this.instance_15 = new lib.ClipGroup_3();
	this.instance_15.setTransform(383.7,375.75,1,1,0,0,0,154,160.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_15},{t:this.instance_14}]}).to({state:[{t:this.instance_15},{t:this.instance_14}]},185).to({state:[]},1).wait(54));

	// Layer_11
	this.instance_16 = new lib.ClipGroup_2();
	this.instance_16.setTransform(131.6,375,1,1,0,0,0,190.3,126.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_16).to({_off:true},194).wait(46));

	// Layer_12
	this.instance_17 = new lib.ClipGroup_1();
	this.instance_17.setTransform(375.7,125.95,1,1,0,0,0,129.5,130.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_17).to({_off:true},199).wait(41));

	// Layer_13
	this.instance_18 = new lib.ClipGroup();
	this.instance_18.setTransform(124.45,120.4,1,1,0,0,0,130.7,138.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_18).to({_off:true},207).wait(33));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1,1,1).p("AgEBZIAAixIAJAA");
	this.shape.setTransform(-0.5,22.475);

	this.timeline.addTween(cjs.Tween.get(this.shape).to({_off:true},1).wait(239));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(175.7,232.1,361.90000000000003,304.6);
// library properties:
lib.properties = {
	id: 'BF41B005F4925B499CA08CA8CCDD92BA',
	width: 500,
	height: 500,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/Image_2.png", id:"Image_2"},
		{src:"images/Image_5.png", id:"Image_5"},
		{src:"images/Image_6.png", id:"Image_6"},
		{src:"images/Image_8.png", id:"Image_8"},
		{src:"images/veebilehele_atlas_1.png", id:"veebilehele_atlas_1"},
		{src:"images/veebilehele_atlas_2.png", id:"veebilehele_atlas_2"},
		{src:"images/veebilehele_atlas_3.png", id:"veebilehele_atlas_3"},
		{src:"images/veebilehele_atlas_4.png", id:"veebilehele_atlas_4"},
		{src:"images/veebilehele_atlas_5.png", id:"veebilehele_atlas_5"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['BF41B005F4925B499CA08CA8CCDD92BA'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;