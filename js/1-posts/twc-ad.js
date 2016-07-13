(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
lib.webFontTxtFilters = {}; 

// library properties:
lib.properties = {
	width: 300,
	height: 250,
	fps: 24,
	color: "#FFFFFF",
	webfonts: {},
	manifest: []
};



lib.webfontAvailable = function(family) { 
	lib.properties.webfonts[family] = true;
	var txtFilters = lib.webFontTxtFilters && lib.webFontTxtFilters[family] || [];
	for(var f = 0; f < txtFilters.length; ++f) {
		txtFilters[f].updateCache();
	}
};
// symbols:



(lib.Bitmap12 = function() {
	this.spriteSheet = ss["twc_ad_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.bundleicon = function() {
	this.spriteSheet = ss["twc_ad_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.exploreinternet1 = function() {
	this.spriteSheet = ss["twc_ad_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.explorephone = function() {
	this.spriteSheet = ss["twc_ad_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.exploretv = function() {
	this.spriteSheet = ss["twc_ad_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.youraccount = function() {
	this.spriteSheet = ss["twc_ad_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.youveBeenMissingOut = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("You've been", "normal 300 35px tk-alwyn-new-rounded-web", "#0093D0");
	this.text.lineHeight = 43;
	this.text.lineWidth = 210;

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,214,45.2);


(lib.webIcon = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.exploreinternet1();
	this.instance.setTransform(0,0,0.477,0.477);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,48.2,49.2);


(lib.tvIcon = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.exploretv();
	this.instance.setTransform(0,0,0.477,0.477);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,48.2,49.2);


(lib.servicesIcon = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.youraccount();
	this.instance.setTransform(0,0,0.477,0.477);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,48.2,49.2);


(lib.phoneIcon = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.explorephone();
	this.instance.setTransform(0,0,0.477,0.477);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,48.2,49.2);


(lib.packagesicon = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.bundleicon();
	this.instance.setTransform(0,0,0.477,0.477);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,48.2,49.2);


(lib.Findapackage = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("find a package", "normal 300 15px tk-alwyn-new-rounded-web", "#999999");
	this.text.textAlign = "center";
	this.text.lineHeight = 19;
	this.text.lineWidth = 106;
	this.text.setTransform(-3.2,-10.7);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#0093D0").ss(2,1,1).p("AsGCWIAAkrIYNAA");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0093D0").s().p("AsFCWIAAkrIYLAAIAAErg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text,p:{color:"#999999"}}]}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.text,p:{color:"#FFFFFF"}}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-78.5,-16,157,32);


(lib.Contactarep = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("contact a rep", "normal 300 15px tk-alwyn-new-rounded-web", "#999999");
	this.text.textAlign = "center";
	this.text.lineHeight = 19;
	this.text.lineWidth = 106;
	this.text.setTransform(-3.2,-10.7);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#0093D0").ss(2,1,1).p("AsGiVIYNAAIAAEr");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0093D0").s().p("AsFCWIAAkrIYLAAIAAErg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text,p:{color:"#999999"}}]}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.text,p:{color:"#FFFFFF"}}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-78.5,-16,157,32);


(lib.back = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#0093D0").ss(5,1,1).p("ABCCFIiDiFICDiE");
	this.shape.setTransform(-2.4,-0.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").ss(5,1,1).p("ABCCFIiDiFICDiE");
	this.shape_1.setTransform(-2.4,-0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).wait(1));

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#0093D0").ss(5,1,1).p("AD1gBQAABkhIBHQhIBIhlAAQhkAAhIhIQhIhHAAhkQAAhmBIhIQBIhHBkAAQBlAABIBHQBIBIAABmgAEOAAQAABwhPBPQhPBPhwAAQhvAAhPhPQhPhPAAhwQAAhvBPhPQBPhPBvAAQBwAABPBPQBPBPAABvg");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#0093D0").ss(5,1,1).p("AEOAAQAABwhPBPQhPBPhwAAQhvAAhPhPQhPhPAAhwQAAhvBPhPQBPhPBvAAQBwAABPBPQBPBPAABvg");

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#0093D0").s().p("AisCsQhHhHAAhlQAAhkBHhIQBIhHBkAAQBlAABHBHQBJBIgBBkQABBlhJBHQhHBJhlgBQhkABhIhJg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2}]}).to({state:[{t:this.shape_4},{t:this.shape_3}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-29.5,-29.5,59,59);


// stage content:
(lib.twcad = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.button_1.addEventListener("click", fl_ClickToGoToWebPage);
		
		function fl_ClickToGoToWebPage() {
			window.open("http://www.timewarnercable.com/en/support/contact-us.html", "_blank");
		}
		
		
		
		this.button_2.addEventListener("click", fl_ClickToGoToAndStopAtFrame.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame()
		{
			this.gotoAndPlay(61);
		}
	}
	this.frame_19 = function() {
		this.button_1.addEventListener("click", fl_ClickToGoToWebPage);
		
		function fl_ClickToGoToWebPage() {
			window.open("http://www.timewarnercable.com/en/support/contact-us.html", "_blank");
		}
		
		
		this.webicon1.addEventListener("click", fl_ClickToGoToWebPage_2);
		
		function fl_ClickToGoToWebPage_2() {
			window.open("http://www.timewarnercable.com/en/internet/internet-service.html", "_blank");
		}
		
		
		this.tvicon1.addEventListener("click", fl_ClickToGoToWebPage_4);
		
		function fl_ClickToGoToWebPage_4() {
			window.open("http://www.timewarnercable.com/en/tv/tv-service.html", "_blank");
		}
		
		this.servicesicon1.addEventListener("click", fl_ClickToGoToWebPage_5);
		
		function fl_ClickToGoToWebPage_5() {
			window.open("http://www.timewarnercable.com/en/discover-twc/service.html", "_blank");
		}
		
		this.phoneicon1.addEventListener("click", fl_ClickToGoToWebPage_6);
		
		function fl_ClickToGoToWebPage_6() {
			window.open("http://www.timewarnercable.com/en/phone/phone-service.html", "_blank");
		}
		
		this.packagesicon1.addEventListener("click", fl_ClickToGoToWebPage_8);
		
		function fl_ClickToGoToWebPage_8() {
			window.open("http://www.timewarnercable.com/en/plans-packages/cable-internet.html?iid=hptextlinks:default:packages:tv-internet-deals", "_blank");
		}
	}
	this.frame_59 = function() {
		this.gotoAndPlay(20);
	}
	this.frame_60 = function() {
		this.button_3.addEventListener("click", fl_ClickToGoToAndPlayFromFrame.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame()
		{
			this.gotoAndPlay(1);
		}
	}
	this.frame_69 = function() {
		this.stop();
		
		this.button_3.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_2.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_2()
		{
			this.gotoAndPlay(1);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(19).call(this.frame_19).wait(40).call(this.frame_59).wait(1).call(this.frame_60).wait(9).call(this.frame_69).wait(1));

	// Layer 4
	this.button_3 = new lib.back();
	this.button_3.setTransform(16.3,16.3,0.25,0.25);
	new cjs.ButtonHelper(this.button_3, 0, 1, 1);

	this.text = new cjs.Text("Find a Package", "normal 600 18px tk-alwyn-new-rounded-web", "#0093D0");
	this.text.lineHeight = 23;
	this.text.lineWidth = 126;
	this.text.setTransform(8.5,28.8);

	this.text_1 = new cjs.Text("Fill out the form to the right \nto have an associate contact \nyou with information on the \nbest deals in your area.", "normal 600 10px tk-alwyn-new-rounded-web", "#999999");
	this.text_1.lineHeight = 14;
	this.text_1.lineWidth = 127;
	this.text_1.setTransform(8.5,58);

	this.text_2 = new cjs.Text("zip", "normal 600 10px tk-alwyn-new-rounded-web", "#999999");
	this.text_2.lineHeight = 14;
	this.text_2.lineWidth = 75;
	this.text_2.setTransform(149.6,152.3);

	this.text_3 = new cjs.Text("phone", "normal 600 10px tk-alwyn-new-rounded-web", "#999999");
	this.text_3.lineHeight = 14;
	this.text_3.lineWidth = 75;
	this.text_3.setTransform(149.6,110.8);

	this.text_4 = new cjs.Text("email", "normal 600 10px tk-alwyn-new-rounded-web", "#999999");
	this.text_4.lineHeight = 14;
	this.text_4.lineWidth = 75;
	this.text_4.setTransform(149.6,70.3);

	this.text_5 = new cjs.Text("name", "normal 600 10px tk-alwyn-new-rounded-web", "#999999");
	this.text_5.lineHeight = 14;
	this.text_5.lineWidth = 75;
	this.text_5.setTransform(149.6,28.8);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#0093D0").ss(1,1,1).p("Ap/rFIT/AAIAAC5Iz/AAgAp/BuIT/AAIAAC5Iz/AAgAp/INIT/AAIAAC5Iz/AAgAp/kmIT/AAIAAC5Iz/AAg");
	this.shape.setTransform(213.6,115.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape},{t:this.text_5},{t:this.text_4},{t:this.text_3},{t:this.text_2},{t:this.text_1},{t:this.text},{t:this.button_3}]},60).wait(10));

	// clickToLearnMore
	this.text_6 = new cjs.Text("(click to learn more)", "normal 600 10px tk-alwyn-new-rounded-web", "#999999");
	this.text_6.lineHeight = 14;
	this.text_6.lineWidth = 251;
	this.text_6.setTransform(-184.6,121.6);
	this.text_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.text_6).wait(2).to({_off:false},0).wait(1).to({x:-167.8},0).wait(1).to({x:-151.1},0).wait(1).to({x:-134.3},0).wait(1).to({x:-117.5},0).wait(1).to({x:-100.8},0).wait(1).to({x:-84},0).wait(1).to({x:-67.3},0).wait(1).to({x:-50.5},0).wait(1).to({x:-33.7},0).wait(1).to({x:-17},0).wait(1).to({x:-0.2},0).wait(1).to({x:16.6},0).wait(45).to({_off:true},1).wait(10));

	// 6TimesBetter
	this.text_7 = new cjs.Text("6X BETTER THAN THE COMPETITION", "normal 600 15px tk-alwyn-new-rounded-web");
	this.text_7.lineHeight = 19;
	this.text_7.lineWidth = 261;
	this.text_7.setTransform(-245.4,102.4);
	this.text_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.text_7).wait(2).to({_off:false},0).wait(1).to({x:-225.3,y:102.3},0).wait(1).to({x:-205.1,y:102.2},0).wait(1).to({x:-185},0).wait(1).to({x:-164.8,y:102.1},0).wait(1).to({x:-144.7,y:102},0).wait(1).to({x:-124.5},0).wait(1).to({x:-104.4,y:101.9},0).wait(1).to({x:-84.2},0).wait(1).to({x:-64.1,y:101.8},0).wait(1).to({x:-43.9,y:101.7},0).wait(1).to({x:-23.8},0).wait(1).to({x:-3.6,y:101.6},0).wait(1).to({x:16.6},0).wait(44).to({_off:true},1).wait(10));

	// packages
	this.packagesicon1 = new lib.packagesicon();
	this.packagesicon1.setTransform(234.4,112.8,0.021,0.02,0,0,0,24.1,24.6);
	this.packagesicon1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.packagesicon1).wait(12).to({_off:false},0).wait(1).to({scaleX:0.27,scaleY:0.27,x:240.2,y:118.7},0).wait(1).to({scaleX:0.51,scaleY:0.51,x:246.1,y:124.8},0).wait(1).to({scaleX:0.76,scaleY:0.76,x:252,y:130.8},0).wait(1).to({scaleX:1,scaleY:1,x:257.9,y:136.8},0).wait(1).to({y:148.5},0).wait(1).to({y:160.1},0).wait(1).to({y:171.8},0).wait(17).to({y:169.3},0).wait(1).to({y:166.8},0).wait(1).to({y:164.3},0).wait(1).to({y:161.8},0).wait(1).to({y:164.3},0).wait(1).to({y:166.8},0).wait(1).to({y:169.3},0).wait(1).to({y:171.8},0).wait(16).to({_off:true},1).wait(10));

	// phone
	this.phoneicon1 = new lib.phoneIcon();
	this.phoneicon1.setTransform(180.3,112.8,0.021,0.02,0,0,0,24.1,24.6);
	this.phoneicon1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.phoneicon1).wait(10).to({_off:false},0).wait(1).to({scaleX:0.27,scaleY:0.27,x:186.2,y:118.7},0).wait(1).to({scaleX:0.51,scaleY:0.51,x:192.1,y:124.8},0).wait(1).to({scaleX:0.76,scaleY:0.76,x:198,y:130.8},0).wait(1).to({scaleX:1,scaleY:1,x:203.9,y:136.8},0).wait(1).to({y:143.8},0).wait(1).to({y:150.8},0).wait(1).to({y:157.8},0).wait(1).to({y:164.8},0).wait(1).to({y:171.8},0).wait(15).to({y:169.3},0).wait(1).to({y:166.8},0).wait(1).to({y:164.3},0).wait(1).to({y:161.8},0).wait(1).to({y:164.3},0).wait(1).to({y:166.8},0).wait(1).to({y:169.3},0).wait(1).to({y:171.8},0).wait(18).to({_off:true},1).wait(10));

	// service
	this.servicesicon1 = new lib.servicesIcon();
	this.servicesicon1.setTransform(126,112.8,0.021,0.02,0,0,0,24.1,24.6);
	this.servicesicon1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.servicesicon1).wait(8).to({_off:false},0).wait(1).to({scaleX:0.27,scaleY:0.27,x:131.9,y:118.7},0).wait(1).to({scaleX:0.51,scaleY:0.51,x:137.8,y:124.8},0).wait(1).to({scaleX:0.76,scaleY:0.76,x:143.7,y:130.8},0).wait(1).to({scaleX:1,scaleY:1,x:149.6,y:136.8},0).wait(1).to({y:141.8},0).wait(1).to({y:146.8},0).wait(1).to({y:151.8},0).wait(1).to({y:156.8},0).wait(1).to({y:161.8},0).wait(1).to({y:166.8},0).wait(1).to({y:171.8},0).wait(13).to({y:169.3},0).wait(1).to({y:166.8},0).wait(1).to({y:164.3},0).wait(1).to({y:161.8},0).wait(1).to({y:164.3},0).wait(1).to({y:166.8},0).wait(1).to({y:169.3},0).wait(1).to({y:171.8},0).wait(20).to({_off:true},1).wait(10));

	// tv
	this.tvicon1 = new lib.tvIcon();
	this.tvicon1.setTransform(71.3,112.8,0.021,0.02,0,0,0,24.1,24.6);
	this.tvicon1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.tvicon1).wait(6).to({_off:false},0).wait(1).to({scaleX:0.27,scaleY:0.27,x:77.2,y:118.7},0).wait(1).to({scaleX:0.51,scaleY:0.51,x:83.1,y:124.7},0).wait(1).to({scaleX:0.76,scaleY:0.76,x:89,y:130.7},0).wait(1).to({scaleX:1,scaleY:1,x:94.9,y:136.7},0).wait(1).to({y:140.6},0).wait(1).to({y:144.5},0).wait(1).to({y:148.4},0).wait(1).to({y:152.3},0).wait(1).to({y:156.1},0).wait(1).to({y:160},0).wait(1).to({y:163.9},0).wait(1).to({y:167.8},0).wait(1).to({y:171.7},0).wait(11).to({x:95.2,y:169.2},0).wait(1).to({x:95.4,y:166.7},0).wait(1).to({x:95.7,y:164.2},0).wait(1).to({x:95.9,y:161.7},0).wait(1).to({x:95.7,y:164.2},0).wait(1).to({x:95.4,y:166.7},0).wait(1).to({x:95.2,y:169.2},0).wait(1).to({x:94.9,y:171.7},0).wait(22).to({_off:true},1).wait(10));

	// Layer 1
	this.text_8 = new cjs.Text("Packages", "normal 600 10px tk-alwyn-new-rounded-web", "#0093D0");
	this.text_8.textAlign = "center";
	this.text_8.lineHeight = 14;
	this.text_8.lineWidth = 46;
	this.text_8.setTransform(256.7,196.4);

	this.text_9 = new cjs.Text("Phone", "normal 600 10px tk-alwyn-new-rounded-web", "#0093D0");
	this.text_9.textAlign = "center";
	this.text_9.lineHeight = 14;
	this.text_9.lineWidth = 44;
	this.text_9.setTransform(201.9,196.4);

	this.text_10 = new cjs.Text("Services", "normal 600 10px tk-alwyn-new-rounded-web", "#0093D0");
	this.text_10.textAlign = "center";
	this.text_10.lineHeight = 14;
	this.text_10.lineWidth = 44;
	this.text_10.setTransform(147.6,196.4);

	this.text_11 = new cjs.Text("TV", "normal 600 10px tk-alwyn-new-rounded-web", "#0093D0");
	this.text_11.textAlign = "center";
	this.text_11.lineHeight = 14;
	this.text_11.lineWidth = 44;
	this.text_11.setTransform(92.9,196.4);

	this.text_12 = new cjs.Text("Internet", "normal 600 10px tk-alwyn-new-rounded-web", "#0093D0");
	this.text_12.textAlign = "center";
	this.text_12.lineHeight = 14;
	this.text_12.lineWidth = 44;
	this.text_12.setTransform(38.1,196.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text_12},{t:this.text_11},{t:this.text_10},{t:this.text_9},{t:this.text_8}]}).to({state:[]},60).wait(10));

	// web
	this.webicon1 = new lib.webIcon();
	this.webicon1.setTransform(16,112.3,0.021,0.02);
	this.webicon1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.webicon1).wait(4).to({_off:false},0).wait(1).to({regX:24.1,regY:24.6,scaleX:0.27,scaleY:0.27,x:22.4,y:121.1},0).wait(1).to({scaleX:0.51,scaleY:0.51,x:28.3,y:129.5},0).wait(1).to({scaleX:0.76,scaleY:0.76,x:34.2,y:137.8},0).wait(1).to({scaleX:1,scaleY:1,x:40.1,y:146.2},0).wait(1).to({y:148.5},0).wait(1).to({y:150.9},0).wait(1).to({y:153.2},0).wait(1).to({y:155.5},0).wait(1).to({y:157.9},0).wait(1).to({y:160.2},0).wait(1).to({y:162.5},0).wait(1).to({y:164.9},0).wait(1).to({y:167.2},0).wait(1).to({y:169.5},0).wait(1).to({y:171.9},0).wait(8).to({y:169.4},0).wait(1).to({y:166.9},0).wait(1).to({y:164.4},0).wait(1).to({y:161.9},0).wait(1).to({y:164.4},0).wait(1).to({y:166.9},0).wait(1).to({y:169.4},0).wait(1).to({y:171.9},0).wait(25).to({_off:true},1).wait(10));

	// You've been
	this.instance = new lib.youveBeenMissingOut();
	this.instance.setTransform(-107,38.6,1,1,0,0,0,107,22.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({x:-65.7},0).wait(1).to({x:-25.4},0).wait(1).to({x:13.8},0).wait(1).to({x:52},0).wait(1).to({x:89.2},0).wait(1).to({x:123},0).wait(53).to({_off:true},1).wait(10));

	// Missing Out
	this.text_13 = new cjs.Text("missing out", "normal 300 35px tk-alwyn-new-rounded-web", "#0093D0");
	this.text_13.lineHeight = 43;
	this.text_13.lineWidth = 210;
	this.text_13.setTransform(-191.2,54.4);

	this.timeline.addTween(cjs.Tween.get(this.text_13).wait(3).to({x:-154.4},0).wait(1).to({x:-116.6},0).wait(1).to({x:-79.7},0).wait(1).to({x:-43.8},0).wait(1).to({x:-8.8},0).wait(1).to({x:16},0).wait(51).to({_off:true},1).wait(10));

	// find a package
	this.button_2 = new lib.Findapackage();
	this.button_2.setTransform(227.1,240);
	new cjs.ButtonHelper(this.button_2, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.button_2).wait(70));

	// contact a rep
	this.button_1 = new lib.Contactarep();
	this.button_1.setTransform(72.1,240);
	new cjs.ButtonHelper(this.button_1, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.button_1).wait(70));

	// Layer 2
	this.instance_1 = new lib.Bitmap12();
	this.instance_1.setTransform(230,16,0.044,0.045);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(59).to({_off:true},1).wait(10));

	// LOGO
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,147,208,0.098)").s().p("AC+OBQiwgViKg/Qk6iMiSkcQg9h3gSiOQgdjjBti4QCNjqEShGQBngbBkAJQFJAeCOEVQAqBQAFBrQAGBsg7BmIgHANIAFAFIBCguQAngbAZgUQCPhtB1ifQAFgHAAgEQAAgFgEgGQj0lIlbh+Qitg+irAIQkDAMjdCLQj1CYiYELQgWAlggADQglADgUgfQgVghAUgfIA3hWQAggzAaghQDFkDEih8QCNg9CDgOQBngNBFABQC7ABC/BNQEaBzDdDzQBUBdBHBxIgxBEQgeAogWAbQiRCvi0B3Qi1B2izAjQhZAShJgEQhWgEhIghQi3hRgqixQgeh8BAhoQBAhnB7gaQBzgZBfBAQBfBAATB0QAEAWgOAUQgPAVgVADQgcAGgVgOQgVgNgFgbQgVhhhegVQg9gOg7AmQg6AngNBBQgVBnBRBWQBFBKBwARQB7ASBphOQBkhLAXhuQAah6hBh0QhiirjCgkQkxg5jTDsQhqB3gPCeQgWD8ClDVQCvDkEuBMQAbAHAmAGIBCAJQAWAEARATQAQATgCAWQgCAcgVARQgQAOgWAAIgJAAg");
	this.shape_1.setTransform(211.4,81.8);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(59).to({_off:true},1).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-64,117,530,264);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;