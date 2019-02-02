(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
// symbols:



(lib.fb0d2a3766a182705864778c6e79c491_photocliptreefreetreepngclipart_28564000 = function() {
	this.initialize(img.fb0d2a3766a182705864778c6e79c491_photocliptreefreetreepngclipart_28564000);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2856,4000);


(lib.firebogvinerope2400px = function() {
	this.initialize(img.firebogvinerope2400px);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,187,2400);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
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


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.firebogvinerope2400px();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.401,0.112);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(0,0,75,268.2), null);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AAAlEIAAKJ");
	this.shape.setTransform(0,32.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("AiClEQCRBLBABcQA0BKAABTQAAC9kFCIg");
	this.shape_1.setTransform(13.1,32.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(-1,-1,27.2,67), null);


(lib.schorpioenlichaam = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1D1D1C").s().p("AlyLWQicg8hji7Qj4nXJJldQDFh1FHh8QCyhDEehoQgqCsg/FeQhAE1hZC9QhLCfiJB9QiLB/iZAxQhTAbhMAAQhOAAhHgcg");
	this.shape.setTransform(165,155.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1D1D1C").s().p("AphEbQALjPAih+QAtikBnh4QB0iHDRhnQDDhgC4gEQD4gFBHDCQAcBOgPBCQgNA1guA5QgbAhg+BCQg3A+gYAzQhrCuiVAuQiOAtjEhEQBWgGA4hjQA1hbgGhlQgGhthJgfQhXgliVBdQiNBYhIE8QgVBcgaClQgZChgMA0QAKkNAFh5g");
	this.shape_1.setTransform(62.5,143.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#1D1D1C").s().p("AnMJLQClgZBcgVQE9hHBYiNQBdiVglhXQgfhJhsgHQhmgGhbA1QhiA5gHBWQhEjEAtiPQAviVCuhqQAzgZA+g3QBCg+AigaQA5guA1gMQBBgQBOAdQDCBHgFD4QgEC4hhDDQhoDQiHB0Qh4BnikAsQh+AjjPAJQj6AHiMAIQAzgMCigZg");
	this.shape_2.setTransform(195.1,252.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#1D1D1C").s().p("AgeATQh/hChCAgQCChaCjgKQBcgGA/ARIhwDdQhBg4hOgqg");
	this.shape_3.setTransform(227.7,51.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#1D1D1C").s().p("AgfAYQgWgygig3IgeguIDnhbIAEArQACA3gJA5QgYChhjB5QAkg/g3iEg");
	this.shape_4.setTransform(320,171);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#1D1D1C").s().p("AhaBFQiohUhdAmQDsiGC0gxQD7hEAkCLIkIEQQhQhAhigyg");
	this.shape_5.setTransform(245.2,18.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#1D1D1C").s().p("Ag3BhQgig8gxg9IgpgzIECkXQCNAdg3D/QgnC1h6DzQAhhehcijg");
	this.shape_6.setTransform(361.3,151.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#1D1D1C").s().p("Ap8KmQhVgNAVkeQAOjPBBkwQAlixC0ioQAvgtBdhSQBMhGAhg4QAXAiByAUQA1AJC6ATQCkARBNASQBzAbAYAtQCPEQg1EPQgxD9jJDAQjHC9kYBBQh/AeiAAAQirAAisg1g");
	this.shape_7.setTransform(305.5,82.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.schorpioenlichaam, new cjs.Rectangle(0,0,379.4,315), null);


(lib.ring = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#1D1D1C").ss(5).p("AFHAAQAACHhgBgQhgBgiHAAQiHAAhfhgQhghgAAiHQAAiGBghgQBfhgCHAAQCHAABgBgQBgBgAACGg");
	this.shape.setTransform(32.7,32.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ring, new cjs.Rectangle(-9.8,-2.5,77.6,70.4), null);


(lib.puntstaart = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1D1D1C").s().p("AguGlQikiwgSgxQhHjAAciPQAYh8B+jDQBUiCBVAGQBJAFA+BkQA3BZAbB+QAaB8gSBRQgNA6hFBoQhEBngNA3QgUBSAKBRQAPB/AAAeIgBAAQgJAAiXiig");
	this.shape.setTransform(28,58.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.puntstaart, new cjs.Rectangle(0,0,56,116.7), null);


(lib.middenstaart = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1D1D1C").s().p("Ag7FyQgygMg/gyQhphTgPgKQhSg2higXQBRhSCdh6QDGiZCbhRQDHhoBZAqQBrAzhCEGQgUBQh+CTQiACThLAbQg/AXgyAAQgYAAgVgFg");
	this.shape.setTransform(47.3,37.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.middenstaart, new cjs.Rectangle(0,0,94.6,75), null);


(lib.button_xbox = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ABzDmQgLAAgGgGIgKgMIhbihIgGAMIhWCVIgKAMQgGAGgKAAIhjAAICTjrIiNjfIBqAAIAPACIAJAJIBaCbIAEgIIAEgHIBQiKQAIgNAOAAIBmAAIiQDaICTDwg");
	this.shape.setTransform(209,79.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhgDYQgtgRgfggQgfgfgRgrQgRgsAAgxQAAgxARgrQARgrAfgfQAfgfAtgTQAsgSA0AAQA2ABAsASQAsASAfAgQAfAeARArQARArAAAxQAAAxgRAsQgRArgfAfQgfAggsARQgsATg2gBQg0ABgsgTgAg1iIQgZALgQASQgRAUgJAbQgJAbAAAhQAAAiAJAbQAJAcARASQAQAUAZAKQAYAJAdABQAfgBAYgJQAYgKAQgUQARgSAJgcQAJgbAAgiQAAghgJgbQgJgbgRgUQgQgSgYgLQgYgKgfAAQgdAAgYAKg");
	this.shape_1.setTransform(162.4,79.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AixDmIAAnKICpAAQAvgBAhAKQAhAIAWARQAVAPAJAYQAKAWAAAdQAAAPgFAOQgEAPgKANQgJAMgOAKQgQAKgUAIQAtAKAWAYQAVAZABAnQAAAdgMAaQgLAZgWASQgWATggALQggALgpAAgAhGCVIBKAAQAUAAAOgGQANgEAIgJQAIgIADgLIADgWIgEgWQgDgKgJgIQgHgGgOgEQgNgEgUAAIhJAAgAhGgkIA3AAIAfgCQAOgCAKgHQAKgGAFgLQAGgLAAgRQAAgQgFgLQgEgKgIgIQgJgGgNgDIgegDIg+AAg");
	this.shape_2.setTransform(117.4,79.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("ABzDmQgLAAgGgGIgKgMIhbihIgGAMIhWCVIgKAMQgGAGgKAAIhjAAICTjrIiNjfIBqAAIAPACIAJAJIBaCbIAEgIIAEgHIBQiKQAIgNAOAAIBmAAIiQDaICTDwg");
	this.shape_3.setTransform(73.4,79.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#00CC00").ss(1,1,1).p("AVEAAQAACrhfCTQhjCYjJB+QmLD3ouAAQotAAmLj3QmLj3AAldQAAlcGLj3QAQgKARgKQBdg3BngqQE/iCGUAAQGVAAE/CCQB4AyBtBDQGLD3AAFcg");
	this.shape_4.setTransform(134.8,84.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#00FF00").s().p("Au4JUQmLj3AAldQAAlbGLj4IAhgUQBdg3BngqQE/iBGUgBQGVABE/CBQB4AyBtBDQGLD4AAFbQAACrhfCTQhjCYjJB+QmLD3ougBQotABmLj3g");
	this.shape_5.setTransform(134.8,84.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("Au4JUQmLj3AAldQAAlbGLj4IAhgUQBdg3BngqQE/iBGUgBQGVABE/CBQB4AyBtBDQGLD4AAFbQAACrhfCTQhjCYjJB+QmLD3ougBQotABmLj3g");
	this.shape_6.setTransform(134.8,84.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_6},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_6},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_6},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,271.6,170.5);


(lib.button = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAsDmIAAhqIi3AAQgKAAgHgFQgHgHgCgIIgKgwIDTkdIBdAAIAAEYIAvAAIAAA3QAAAHgEAGQgFAFgJAAIgdAAIAABqgAhJAzIB1AAIAAh2IABgZIACgag");
	this.shape.setTransform(172.1,81.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AguDmQgWgEgVgIQgVgIgSgLQgSgMgOgNIAggyIAJgJIAOgDQAJgBAJAHIAXANIAcANQAPAGAVAAQAdAAAQgNQAQgNAAgbQAAgQgJgKQgJgLgPgGIgfgMIgmgLIglgPQgSgJgOgNQgPgPgJgWQgJgWABggQgBgaALgZQAKgYAVgTQATgUAegLQAdgMAlAAIApAEIAmAKIAhAPQAQAJAMALIgaAxIgKAMQgFAEgIAAQgHAAgJgFIgTgKIgYgKQgNgFgRABQgeAAgOAMQgPANAAAVQAAAOAJAKQAJAIAOAHIAgANIAlAMIAmAQQASAIAPAPQAPANAIAUQAJAVAAAdQAAAfgLAcQgMAbgUAWQgVAUgfALQgfANglAAQgWAAgWgFg");
	this.shape_1.setTransform(136.8,81.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AisDmIAAnLIChAAQAwAAAjAMQAjALAWAVQAXAUAKAbQALAbAAAhQAAAigLAdQgLAbgWAUQgXAVgjAMQgiALgwAAIg3AAIAACagAhCgEIA3AAQApABATgUQASgUAAgjQAAgRgFgNQgFgMgJgJQgKgKgPgFQgOgFgUAAIg3AAg");
	this.shape_2.setTransform(101.2,81.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000066").ss(1,1,1).p("AVLAAQAAFemND4QmND3oxAAQoxAAmNj3QmMj4AAleQAAldGMj4QGNj3IxAAQIxAAGND3QGND4AAFdg");
	this.shape_3.setTransform(135.5,84.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#0033FF").s().p("Au+JWQmMj4AAleQAAldGMj3QGOj4IwAAQIxAAGND4QGND3AAFdQAAFemND4QmND3oxAAQowAAmOj3g");
	this.shape_4.setTransform(135.5,84.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#444444").ss(1,1,1).p("AVLAAQAAFemND4QmND3oxAAQoxAAmNj3QmMj4AAleQAAldGMj4QGNj3IxAAQIxAAGND3QGND4AAFdg");
	this.shape_5.setTransform(135.5,84.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("Au+JWQmMj4AAleQAAldGMj3QGOj4IwAAQIxAAGND4QGND3AAFdQAAFemND4QmND3oxAAQowAAmOj3g");
	this.shape_6.setTransform(135.5,84.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("Ag0CdQgegLgWgWQgXgWgNghQgNghAAgqQAAghALgdQAMgeAUgWQAVgWAegMQAegNAkAAQAgAAAcAJQAbALATATQATATALAcQALAcAAAjIgBASIgDAKIgIAGIgKABIi8AAQAFApAVATQATASAgAAQAQAAANgEIAVgJIASgJQAIgEAJAAQALAAAGAIIAdAjQgPARgRALQgSALgSAGIgmAJIgiACQgiAAgegLgABDgmIgEgXQgDgLgGgJQgHgIgLgGQgLgFgQAAQgbAAgQAQQgQAQgFAeIB6AAg");
	this.shape_7.setTransform(210.4,102.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("ACKCmIAAjPQAAgzgrAAQgTAAgNAOQgNAMgBAZIAADPIhhAAIAAjPQABgcgMgLQgKgMgWAAQgNAAgLAHQgNAFgKALIAADrIhiAAIAAlGIA8AAQAKAAAGAEQAGAEADAIIAFASIARgPIATgNIAXgIIAZgDQAdAAAUAPQATAQAJAZQAJgPAMgLQALgKAOgHQAOgHAPgDIAegDQAcAAAXAIQAVAJAPAQQAPAPAHAYQAHAXABAdIAADPg");
	this.shape_8.setTransform(166.6,101.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AhDCcQgegLgXgWQgWgWgMggQgMgfAAgmQAAgmAMggQAMgfAWgVQAXgWAegMQAfgLAlAAQAlAAAeALQAfAMAWAWQAWAVAMAfQAMAgAAAmQAAAmgMAfQgMAggWAWQgWAWgfALQgeAMglAAQglAAgfgMgAgxhHQgQAXAAAwQAAAwAQAYQAQAYAiAAQAhAAAQgYQAQgYAAgwQAAgwgQgXQgQgYghAAQgiAAgQAYg");
	this.shape_9.setTransform(120.9,102.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("ABdDmIAAjDIi5AAIAADDIhrAAIAAnKIBrAAIAADAIC5AAIAAjAIBrAAIAAHKg");
	this.shape_10.setTransform(78.9,95.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#999999").s().p("AAsDmIAAhqIi3AAQgKAAgHgFQgHgHgCgIIgKgwIDTkdIBdAAIAAEYIAvAAIAAA3QAAAHgEAGQgFAFgJAAIgdAAIAABqgAhJAzIB1AAIAAh2IABgZIACgag");
	this.shape_11.setTransform(175.1,81.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#999999").s().p("AguDmQgXgEgUgIQgVgIgSgLQgSgMgOgNIAggyIAJgJIAOgDQAJgBAKAHIAVANIAcANQAQAGAVAAQAcAAAQgNQAQgNABgbQgBgQgIgKQgJgLgPgGIgfgMIglgLIgmgPQgSgJgOgNQgPgPgJgWQgIgWgBggQAAgaALgZQAKgYAVgTQATgUAegLQAegMAkAAIApAEIAmAKIAhAPQAQAJAMALIgaAxIgKAMQgFAEgIAAQgIAAgIgFIgTgKIgYgKQgOgFgQABQgeAAgOAMQgPANAAAVQAAAOAJAKQAJAIAOAHIAgANIAmAMIAlAQQATAIAOAPQAOANAJAUQAJAVAAAdQAAAfgLAcQgLAbgVAWQgVAUgfALQgeANgmAAQgWAAgWgFg");
	this.shape_12.setTransform(139.8,81.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#999999").s().p("AisDmIAAnLIChAAQAwAAAjAMQAjALAWAVQAXAUALAbQAKAbAAAhQAAAigLAdQgLAbgXAUQgWAVgjAMQgiALgwAAIg3AAIAACagAhCgEIA3AAQApABASgUQATgUAAgjQAAgRgFgNQgFgMgJgJQgKgKgPgFQgOgFgUAAIg3AAg");
	this.shape_13.setTransform(104.2,81.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#FF0000").ss(1,1,1).p("AVLAAQAAFemND4QmND3oxAAQoxAAmNj3QmMj4AAleQAAldGMj4QGNj3IxAAQIxAAGND3QGND4AAFdg");
	this.shape_14.setTransform(135.5,84.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("Au+JWQmMj4AAleQAAldGMj3QGOj4IwAAQIxAAGND4QGND3AAFdQAAFemND4QmND3oxAAQowAAmOj3g");
	this.shape_15.setTransform(135.5,84.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#FF0000").ss(1,1,1).p("AVLAAQAAFemND4QmND3oxAAQoxAAmNj3QmMj4AAleQAAldGMj4QGNj3IxAAQIxAAGND3QGND4AAFdg");
	this.shape_16.setTransform(135.5,84.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("Au+JWQmMj4AAleQAAldGMj3QGOj4IwAAQIxAAGND4QGND3AAFdQAAFemND4QmND3oxAAQowAAmOj3g");
	this.shape_17.setTransform(135.5,84.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#999999").s().p("AAsDmIAAhqIi3AAQgKAAgHgFQgHgHgCgIIgKgwIDTkcIBdAAIAAEXIAvAAIAAA3QAAAHgEAGQgFAFgJAAIgdAAIAABqgAhJAzIB1AAIAAh2IABgZIACgag");
	this.shape_18.setTransform(175.1,80.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#999999").s().p("AguDmQgXgEgUgIQgVgIgSgMQgSgKgOgOIAggyIAJgJIAOgDQAJAAAKAFIAVAOIAcANQAQAGAVAAQAcAAAQgNQAQgMABgcQgBgQgIgKQgJgLgPgGIgfgMIglgLIgmgPQgSgJgOgNQgPgPgJgWQgIgWgBggQAAgaALgYQAKgZAVgTQATgUAegLQAegMAkAAIApAEIAmAKIAhAPQAQAJAMALIgaAxIgKAMQgFAEgIAAQgIAAgIgFIgTgKIgYgKQgOgFgQABQgeAAgOAMQgPANAAAWQAAAOAJAIQAJAKAOAGIAgANIAmAMIAlAQQATAIAOAPQAOANAJAUQAJAVAAAdQAAAfgLAcQgLAcgVAVQgVAUgfALQgeAMgmAAQgWABgWgFg");
	this.shape_19.setTransform(139.8,80.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#999999").s().p("AisDmIAAnKIChAAQAwAAAjALQAjAMAWAUQAXAUALAbQAKAbAAAhQAAAigLAdQgLAbgXAUQgWAVgjAMQgiALgwAAIg3AAIAACagAhCgDIA3AAQApAAASgUQATgUAAgjQAAgRgFgNQgFgMgJgJQgKgKgPgFQgOgFgUAAIg3AAg");
	this.shape_20.setTransform(104.2,80.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5}]},1).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11}]},1).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,273,171);


(lib.achterstaart = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1D1D1C").s().p("APmHuQhmgPhegbQhbgagfgVQhFgug6hYIhcigQg2hgg0gwQhGhDhigWQhhgVh0AeQguAMigA9QiBAwhWALQh8AOh0gtQhmgpjXiBQi5hwiUgpQHeihFngLQGEgMG5CYQBjAiCxBcQDOBrCmByQHLE7h9CrQgfArh0AAQhEAAhigPg");
	this.shape.setTransform(133.8,50.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.achterstaart, new cjs.Rectangle(0,0,267.6,101.9), null);


(lib.rodeknop = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol1();
	this.instance.parent = this;
	this.instance.setTransform(12.8,32.5,1,1,0,0,0,12.8,32.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.rodeknop, new cjs.Rectangle(-0.5,-0.5,26.7,66), null);


// stage content:
(lib.animatiemm4 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* Click to Go to Web Page
		Clicking on the specified symbol instance loads the URL in a new browser window.
		
		Instructions:
		1. Replace http://www.adobe.com with the desired URL address.
		   Keep the quotation marks ("").
		*/
		
		this.button_2.addEventListener("click", fl_ClickToGoToWebPage_3);
		
		function fl_ClickToGoToWebPage_3() {
			window.open("ps4.html", "_self");
		}
		this.button_3.addEventListener("click", fl_ClickToGoToWebPage_4);
		
		function fl_ClickToGoToWebPage_4() {
			window.open("xbox.html", "_self");
		}
	}
	this.frame_143 = function() {
		/* Stop at This Frame
		The  timeline will stop/pause at the frame where you insert this code.
		Can also be used to stop/pause the timeline of movieclips.
		*/
		
		this.stop();
		
		/* Click to Go to Web Page
		Clicking on the specified symbol instance loads the URL in a new browser window.
		
		Instructions:
		1. Replace http://www.adobe.com with the desired URL address.
		   Keep the quotation marks ("").
		*/
		
		this.button_1.addEventListener("click", fl_ClickToGoToWebPage);
		
		function fl_ClickToGoToWebPage() {
			window.open("ps4.html", "_self");
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(143).call(this.frame_143).wait(2));

	// button_xbox
	this.button_3 = new lib.button_xbox();
	this.button_3.parent = this;
	this.button_3.setTransform(832,-93.7,1,1,0,0,0,134.8,84.2);
	new cjs.ButtonHelper(this.button_3, 0, 1, 2, false, new lib.button_xbox(), 3);

	this.timeline.addTween(cjs.Tween.get(this.button_3).wait(120).to({x:831.2,y:-81.6},0).wait(1).to({x:830.5,y:-69.4},0).wait(1).to({x:829.7,y:-57.3},0).wait(1).to({x:829,y:-45.1},0).wait(1).to({x:828.2,y:-33},0).wait(1).to({x:827.4,y:-20.8},0).wait(1).to({x:826.7,y:-8.7},0).wait(1).to({x:825.9,y:3.5},0).wait(1).to({x:825.2,y:15.6},0).wait(1).to({x:824.4,y:27.8},0).wait(1).to({x:823.6,y:39.9},0).wait(1).to({x:822.9,y:52.1},0).wait(1).to({x:822.1,y:64.2},0).wait(1).to({x:821.4,y:76.4},0).wait(1).to({x:820.6,y:88.5},0).wait(1).to({x:819.8,y:100.7},0).wait(1).to({x:819.1,y:112.8},0).wait(1).to({x:818.3,y:125},0).wait(1).to({x:817.6,y:137.1},0).wait(1).to({x:816.8,y:149.3},0).wait(1).to({x:816,y:161.4},0).wait(1).to({x:815.3,y:173.6},0).wait(1).to({x:814.5,y:185.7},0).wait(1).to({x:813.8,y:197.9},0).wait(1).to({x:813,y:210},0).wait(1));

	// button_ps4
	this.button_2 = new lib.button();
	this.button_2.parent = this;
	this.button_2.setTransform(588.9,-93.4,1,1,0,0,0,135.5,84.5);
	new cjs.ButtonHelper(this.button_2, 0, 1, 2, false, new lib.button(), 3);

	this.timeline.addTween(cjs.Tween.get(this.button_2).wait(119).to({x:459.4,y:-86.2},0).wait(1).to({x:459.5,y:-73.8},0).wait(1).to({x:459.7,y:-61.5},0).wait(1).to({x:459.8,y:-49.2},0).wait(1).to({x:459.9,y:-36.8},0).wait(1).to({x:460,y:-24.5},0).wait(1).to({x:460.2,y:-12.2},0).wait(1).to({x:460.3,y:0.2},0).wait(1).to({y:12.5},0).wait(1).to({x:460.4,y:24.8},0).wait(1).to({x:460.5,y:37.2},0).wait(1).to({x:460.6,y:49.5},0).wait(1).to({x:460.7,y:61.8},0).wait(1).to({y:74.2},0).wait(1).to({x:460.8,y:86.5},0).wait(1).to({y:98.8},0).wait(1).to({x:460.9,y:111.1},0).wait(1).to({y:123.5},0).wait(1).to({x:461,y:135.8},0).wait(1).to({y:148.1},0).wait(1).to({x:461.1,y:160.5},0).wait(1).to({y:172.8},0).wait(1).to({x:461.2,y:185.1},0).wait(1).to({y:197.5},0).wait(1).to({y:209.8},0).wait(2));

	// touw
	this.instance = new lib.Symbol2();
	this.instance.parent = this;
	this.instance.setTransform(814.5,-121.9,1,1,0,0,0,37.5,134.1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(119).to({_off:false},0).wait(1).to({x:814.3,y:-111.4},0).wait(1).to({x:814.2,y:-100.9},0).wait(1).to({x:814,y:-90.4},0).wait(1).to({x:813.9,y:-79.9},0).wait(1).to({x:813.7,y:-69.4},0).wait(1).to({x:813.6,y:-58.9},0).wait(1).to({x:813.5,y:-48.4},0).wait(1).to({x:813.3,y:-37.9},0).wait(1).to({x:813.2,y:-27.4},0).wait(1).to({x:813,y:-16.9},0).wait(1).to({x:812.9,y:-6.4},0).wait(1).to({x:812.7,y:4.1},0).wait(1).to({x:812.6,y:14.6},0).wait(1).to({x:812.5,y:25.1},0).wait(1).to({y:28.4},0).wait(1).to({y:31.6},0).wait(1).to({y:34.9},0).wait(1).to({y:38.1},0).wait(8));

	// touw
	this.instance_1 = new lib.Symbol2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(468.5,-134.9,1,1,0,0,0,37.5,134.1);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(119).to({_off:false},0).wait(1).to({x:468.4,y:-124.4},0).wait(1).to({x:468.2,y:-113.9},0).wait(1).to({x:468.1,y:-103.4},0).wait(1).to({x:467.9,y:-92.9},0).wait(1).to({x:467.8,y:-82.4},0).wait(1).to({x:467.6,y:-71.9},0).wait(1).to({x:467.5,y:-61.4},0).wait(1).to({x:467.4,y:-50.9},0).wait(1).to({x:467.2,y:-40.4},0).wait(1).to({x:467.1,y:-29.9},0).wait(1).to({x:466.9,y:-19.4},0).wait(1).to({x:466.8,y:-8.9},0).wait(1).to({x:466.6,y:1.6},0).wait(1).to({x:466.5,y:12.1},0).wait(1).to({y:15.4},0).wait(1).to({y:18.6},0).wait(1).to({y:21.9},0).wait(1).to({y:25.1},0).wait(8));

	// zwarte balk
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AuNo+IcbAAIAAR9I8bAAg");
	this.shape.setTransform(7,147.6,0.146,1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AuNI/IAAx9IcbAAIAAR9g");
	this.shape_1.setTransform(7,147.6,0.146,1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_1},{t:this.shape}]},144).wait(1));

	// linkerknop
	this.instance_2 = new lib.rodeknop();
	this.instance_2.parent = this;
	this.instance_2.setTransform(33.9,145.4,1,1,0,0,0,12.8,32.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({x:33.8,y:145.3},0).wait(6).to({y:145.2},0).wait(6).to({y:145.1},0).wait(1).to({x:33.7},0).wait(6).to({y:145},0).wait(6).to({y:144.9},0).wait(2).to({x:33.6},0).wait(4).to({y:144.8},0).wait(7).to({y:144.7},0).wait(2).to({x:33.5},0).wait(4).to({y:144.6},0).wait(7).to({y:144.5},0).wait(3).to({x:33.4},0).wait(3).to({y:144.4},0).wait(6).to({y:144.3},0).wait(4).to({x:33.3},0).wait(3).to({y:144.2},0).wait(6).to({y:144.1},0).wait(5).to({x:33.2},0).wait(2).to({y:144},0).wait(6).to({y:143.9},0).wait(5).to({x:33.1},0).wait(1).to({y:143.8},0).wait(7).to({y:143.7},0).wait(6).to({x:33,y:143.6},0).wait(7).to({x:29,y:144.1},0).wait(1).to({x:24.9,y:144.7},0).wait(1).to({x:20.9,y:145.2},0).wait(1).to({x:16.8,y:145.8},0).wait(26));

	// tekst Desing
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#1D1D1C").s().p("ABLD1IAAkyQAAgjgRgUQgQgUggAAQgXAAgUALQgVAKgTARIAAFXIiQAAIAAniIBZAAQANAAAJAGQAJAHAEAMIAJAcIAcgYIAggTIAkgNIArgEQAnAAAfAOQAeANAVAZQAVAZALAhQAKAiAAAnIAAEyg");
	this.shape_2.setTransform(289.6,245.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#1D1D1C").s().p("AhyE+QgqgLgagSQgcgRgNgXQgNgXAAgYQAAggAUgXQATgWAigMQgQgLgKgQQgKgRAAgaIAEgWIAMgXIAUgVIAdgSQgmgUgWghQgVghAAgsQAAgkAPgdQAPgdAbgUQAbgUAkgLQAkgLArAAQAdAAAcAGQAbAGAXALICSAAIAAA1QAAALgHAIQgHAHgQADIgkAIQAHAVAAAWQAAAlgPAcQgPAdgbAUQgaAVgjALQgkALgoAAIgrgDQgQAJAAALQAAANANAFIAiAIIAvACIA2ACIA3AJQAbAGAVANQAVAOANAXQANAWAAAjQAAAhgQAfQgQAfgfAYQgeAZgtAOQgsAPg5AAQg5AAgpgKgAhmCdQgJAMAAAOIAEATQAFAIALAGIAeAKIAwADIAxgEIAhgKQAMgHAEgJIAFgUQAAgMgIgHIgTgLIgdgHIgjgCIgnAAIgpgEgAhEjVQgQAQAAAeIAEAZIAMAVQAIAIANAFQANAFASAAQAjAAAQgSQAQgSAAgcQAAgegQgQQgQgRgjAAQgkAAgQARg");
	this.shape_3.setTransform(237.9,253.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#1D1D1C").s().p("AhIFeIAAniICPAAIAAHigAghi7QgPgHgMgLQgMgLgHgQQgHgPAAgRQAAgRAHgPQAHgQAMgMQAMgLAPgHQAQgGARgBQARABAQAGQAQAHANALQALAMAIAQQAGAPAAARQAAARgGAPQgIAQgLALQgNALgQAHQgQAHgRAAQgRAAgQgHg");
	this.shape_4.setTransform(200.5,234.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#1D1D1C").s().p("Ag/D0IgwgNIgrgTIghgXIAhg1IAPgPQAIgFAOAAQAMAAAKAGIAWALIAbANQAQAFAXAAIAcgDIASgJIALgOIADgPQAAgPgKgJIgagQIgigNIgqgNIgpgSQgUgKgQgQQgQgPgJgYQgKgXAAghQAAgfALgcQANgbAXgVQAYgVAkgNQAkgMAuABIAzAEIAuANIAnAUIAfAZIghAyIgLANIgQADIgVgDIgWgKIgbgJIgigGQgaAAgPALQgPALAAATQAAANAKAIIAZAQIAjANIApAOIApARQAUAKAQAOQAQAOAJAVQAKAVAAAeQAAAjgNAeQgNAegaAWQgaAWgmANQgmAMgwgBg");
	this.shape_5.setTransform(166,245.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#1D1D1C").s().p("AhNDoQgsgQghghQgighgTgwQgUgwABhAQAAgwARgsQAQgqAfghQAeghAsgSQAtgTA2AAQAvAAAoAOQAoAPAdAcQAdAdAPApQAQApAAA0IgBAaIgFAQIgKAIIgQADIkVAAQAHA8AeAbQAdAbAvAAQAYABASgHIAhgNIAagOQAMgFANAAQARAAAIAMIArA0QgXAZgZARQgaAQgbAIIg3ANIg0ADQgyAAgsgQgABig5IgEgiQgFgQgKgNQgKgMgQgIQgQgIgXAAQgoAAgYAYQgXAWgIAtICzAAg");
	this.shape_6.setTransform(120.8,245.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#1D1D1C").s().p("AkyFTIAAqlIEHAAQBOAABAAaQBBAaAvAtQAuAsAZA/QAZA+AABIQAABJgZA+QgZA/guAtQgvAthBAZQhAAahOAAgAiUDaIBpAAQAsAAAjgPQAjgPAZgdQAYgcAOgoQAMgpAAgyQAAgxgMgpQgOgogYgcQgZgdgjgPQgjgPgsAAIhpAAg");
	this.shape_7.setTransform(62.9,235.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#1D1D1C").s().p("AhIFeIAAniICPAAIAAHigAghi7QgPgHgNgLQgLgLgHgQQgHgPAAgRQAAgRAHgPQAHgQALgMQANgLAPgHQAPgGASgBQARABAQAGQAQAHANALQALAMAIAQQAGAPAAARQAAARgGAPQgIAQgLALQgNALgQAHQgQAHgRAAQgSAAgPgHg");
	this.shape_8.setTransform(200.8,237.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#1D1D1C").s().p("AhNDoQgsgQgighQghghgTgwQgUgwAAhAQABgwAQgsQAQgqAfghQAfghAtgSQArgTA3AAQAvAAAoAOQAoAPAcAcQAdAdAQApQARApAAA0IgCAaIgFAQIgKAIIgQADIkVAAQAHA8AeAbQAdAbAvAAQAYABATgHIAggNIAagOQAMgFANAAQARAAAJAMIAqA0QgXAZgaARQgZAQgcAIIg2ANIg0ADQgxAAgtgQgABig5IgEgiQgEgQgLgNQgJgMgRgIQgQgIgXAAQgoAAgYAYQgXAWgIAtICzAAg");
	this.shape_9.setTransform(121.1,248);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7,p:{x:62.9,y:235.9}},{t:this.shape_6},{t:this.shape_5,p:{x:166,y:245.7}},{t:this.shape_4},{t:this.shape_3,p:{x:237.9,y:253.6}},{t:this.shape_2,p:{x:289.6,y:245.3}}]}).to({state:[{t:this.shape_7,p:{x:63.2,y:238.2}},{t:this.shape_9},{t:this.shape_5,p:{x:166.3,y:248}},{t:this.shape_8},{t:this.shape_3,p:{x:238.2,y:255.8}},{t:this.shape_2,p:{x:289.9,y:247.6}}]},119).to({state:[{t:this.shape_7,p:{x:63.2,y:238.2}},{t:this.shape_9},{t:this.shape_5,p:{x:166.3,y:248}},{t:this.shape_8},{t:this.shape_3,p:{x:238.2,y:255.8}},{t:this.shape_2,p:{x:289.9,y:247.6}}]},25).wait(1));

	// tekst epic
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#1D1D1C").s().p("AhJDoQgogRgeggQgfgggSguQgSgvAAg7QAAgzAQgtQAQguAeghQAfghAsgUQAtgSA6AAQA5AAArARQArATAiAjIgmAyIgNANQgGAFgLgBQgKAAgJgEIgUgMIgZgMQgOgEgVAAQgbgBgSALQgTAJgNASQgNASgGAbQgGAaAAAgQAABFAbAlQAbAmAugBQAZABAPgHIAYgOIATgOQAJgGANAAQARAAAJAMIAqAzQgXAagYARQgZAQgaAIQgZAKgbADIgyADQgsAAgogQg");
	this.shape_10.setTransform(291,163.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#1D1D1C").s().p("AhIFeIAAniICPAAIAAHigAghi7QgPgGgNgMQgLgLgHgQQgHgPAAgRQAAgRAHgQQAHgPALgMQANgLAPgHQAPgGASgBQARABAQAGQAQAHAMALQANAMAGAPQAHAQAAARQAAARgHAPQgGAQgNALQgMAMgQAGQgQAHgRAAQgSAAgPgHg");
	this.shape_11.setTransform(254.4,153.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#1D1D1C").s().p("AjlFCIAAp6IBZAAQANAAAJAGQAJAGAEAMIALAjIAegbIAigWIAngOQAVgFAZAAQAmAAAgAQQAgARAXAgQAXAgANAtQAOAuAAA6QAAA3gPAtQgPAugcAiQgbAhgmATQgmAUguAAQgkAAgagLQgagLgUgSIAAC5gAgXjQIgXAJIgVAOIgSAUIAADLQAQASATAHQATAIAVAAQATAAARgIQARgIAMgRQAMgSAHgbQAHgcAAgoQAAgmgFgaQgGgagKgQQgKgQgOgHQgOgHgRAAg");
	this.shape_12.setTransform(215.9,171.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#1D1D1C").s().p("AjZFTIAAqlIGzAAIAAB5IkVAAIAACeIDUAAIAABzIjUAAIAACiIEVAAIAAB5g");
	this.shape_13.setTransform(162.2,154.1);

	this.text = new cjs.Text("Epic", "bold 93px 'Lato Black'", "#1D1D1C");
	this.text.lineHeight = 114;
	this.text.lineWidth = 336;
	this.text.parent = this;
	this.text.setTransform(134.8,96.2);
	this.text._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10}]}).to({state:[{t:this.text}]},72).to({state:[{t:this.text}]},1).to({state:[{t:this.text}]},1).to({state:[{t:this.text}]},1).to({state:[{t:this.text}]},1).to({state:[{t:this.text}]},1).to({state:[{t:this.text}]},1).to({state:[{t:this.text}]},1).to({state:[{t:this.text}]},1).to({state:[{t:this.text}]},1).to({state:[{t:this.text}]},1).to({state:[{t:this.text}]},1).to({state:[{t:this.text}]},1).to({state:[{t:this.text}]},1).to({state:[{t:this.text}]},1).to({state:[{t:this.text}]},1).to({state:[{t:this.text}]},1).to({state:[{t:this.text}]},1).to({state:[{t:this.text}]},1).to({state:[{t:this.text}]},1).to({state:[{t:this.text}]},1).to({state:[{t:this.text}]},1).to({state:[{t:this.text}]},1).to({state:[{t:this.text}]},1).to({state:[{t:this.text}]},1).to({state:[{t:this.text}]},1).to({state:[{t:this.text}]},1).to({state:[{t:this.text}]},1).to({state:[{t:this.text}]},1).to({state:[{t:this.text}]},1).to({state:[{t:this.text}]},1).to({state:[{t:this.text}]},1).to({state:[{t:this.text}]},1).to({state:[{t:this.text}]},1).to({state:[{t:this.text}]},1).to({state:[{t:this.text}]},1).to({state:[{t:this.text}]},1).to({state:[{t:this.text}]},1).to({state:[{t:this.text}]},1).to({state:[{t:this.text}]},1).to({state:[{t:this.text}]},1).to({state:[{t:this.text}]},1).to({state:[{t:this.text}]},1).to({state:[{t:this.text}]},1).to({state:[{t:this.text}]},1).to({state:[{t:this.text}]},1).to({state:[{t:this.text}]},1).to({state:[{t:this.text}]},1).to({state:[{t:this.text}]},1).to({state:[{t:this.text}]},1).to({state:[{t:this.text}]},1).to({state:[{t:this.text}]},1).to({state:[{t:this.text}]},1).to({state:[{t:this.text}]},1).to({state:[{t:this.text}]},1).to({state:[{t:this.text}]},1).to({state:[{t:this.text}]},1).to({state:[{t:this.text}]},1).to({state:[{t:this.text}]},1).to({state:[{t:this.text}]},1).to({state:[{t:this.text}]},1).to({state:[{t:this.text}]},1).to({state:[{t:this.text}]},1).to({state:[{t:this.text}]},1).to({state:[{t:this.text}]},1).to({state:[{t:this.text}]},1).to({state:[{t:this.text}]},1).to({state:[{t:this.text}]},1).to({state:[{t:this.text}]},1).to({state:[{t:this.text}]},1).to({state:[{t:this.text}]},1).to({state:[{t:this.text}]},1).to({state:[{t:this.text}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.text).wait(72).to({_off:false},0).wait(1).to({x:132.2},0).wait(1).to({x:129.6},0).wait(1).to({x:127},0).wait(1).to({x:124.5},0).wait(1).to({x:121.9},0).wait(1).to({x:119.3},0).wait(1).to({x:116.8},0).wait(1).to({x:114.2},0).wait(1).to({x:111.6},0).wait(1).to({x:109.1},0).wait(1).to({x:106.5},0).wait(1).to({x:103.9},0).wait(1).to({x:101.4},0).wait(1).to({x:98.8},0).wait(1).to({x:96.2},0).wait(1).to({x:93.7},0).wait(1).to({x:91.1},0).wait(1).to({x:88.5},0).wait(1).to({x:86},0).wait(1).to({x:83.4},0).wait(1).to({x:80.8},0).wait(1).to({x:78.3},0).wait(1).to({x:75.7},0).wait(1).to({x:73.1},0).wait(1).to({x:70.6},0).wait(1).to({x:68},0).wait(1).to({x:65.4},0).wait(1).to({x:62.9},0).wait(1).to({x:60.3},0).wait(1).to({x:57.7},0).wait(1).to({x:55.1},0).wait(1).to({x:52.6},0).wait(1).to({x:50},0).wait(1).to({x:47.4},0).wait(1).to({x:44.9},0).wait(1).to({x:42.3},0).wait(1).to({x:39.7},0).wait(1).to({x:37.2},0).wait(1).to({x:34.6},0).wait(1).to({x:32},0).wait(1).to({x:29.5},0).wait(1).to({x:26.9},0).wait(31));

	// achter staart
	this.instance_3 = new lib.achterstaart();
	this.instance_3.parent = this;
	this.instance_3.setTransform(609.9,386.8,0.632,0.632,23.1,0,0,131.2,50.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({regX:133.8,scaleX:0.63,scaleY:0.63,rotation:25.9,x:613.9,y:387.6},0).wait(1).to({rotation:28.6,x:616.5,y:387.8},0).wait(1).to({rotation:31.2,x:619,y:388},0).wait(1).to({rotation:33.9,x:621.6,y:388.2},0).wait(1).to({rotation:36.6,x:624.1,y:388.4},0).wait(1).to({rotation:39.3,x:626.7,y:388.6},0).wait(1).to({rotation:42,x:629.2,y:388.8},0).wait(1).to({rotation:44.7,x:631.7,y:389},0).wait(1).to({rotation:47.3,x:634.3,y:389.1},0).wait(1).to({rotation:50,x:636.8,y:389.3},0).wait(1).to({rotation:52.7,x:639.4,y:389.5},0).wait(1).to({rotation:55.4,x:641.9,y:389.7},0).wait(1).to({rotation:58.1,x:644.4,y:389.9},0).wait(1).to({rotation:60.8,x:647,y:390},0).wait(1).to({rotation:63.4,x:649.5,y:390.2},0).wait(1).to({rotation:66.1,x:652,y:390.3},0).wait(1).to({rotation:68.8,x:654.6,y:390.5},0).wait(1).to({rotation:71.5,x:657,y:390.6},0).wait(1).to({rotation:74.2,x:659.6,y:390.8},0).wait(1).to({rotation:76.9,x:662.1,y:390.9},0).wait(1).to({rotation:79.5,x:664.6,y:391.1},0).wait(1).to({rotation:82.2,x:667.1,y:391.2},0).wait(1).to({rotation:84.9,x:669.7,y:391.3},0).wait(1).to({rotation:87.6,x:672.2,y:391.5},0).wait(1).to({rotation:90.3,x:674.7,y:391.6},0).wait(1).to({rotation:93,x:677.2,y:391.8},0).wait(1).to({rotation:95.7,x:679.7,y:391.9},0).wait(1).to({rotation:98.3,x:682.2,y:392},0).wait(1).to({rotation:101,x:684.7,y:392.1},0).wait(1).to({rotation:103.7,x:687.2,y:392.2},0).wait(1).to({rotation:106.4,x:689.7,y:392.3},0).wait(1).to({rotation:109.1,x:692.3,y:392.4},0).wait(1).to({rotation:111.8,x:694.8,y:392.5},0).wait(1).to({rotation:114.4,x:697.4,y:392.6},0).wait(1).to({rotation:117.1,x:699.9,y:392.7},0).wait(1).to({rotation:119.8,x:702.4,y:392.8},0).wait(1).to({rotation:122.5,x:704.9,y:392.9},0).wait(1).to({rotation:125.2,x:707.5,y:393},0).wait(1).to({rotation:127.9,x:710,y:393.1},0).wait(1).to({rotation:130.5,x:712.5},0).wait(1).to({rotation:133.2,x:715.1,y:393.2},0).wait(1).to({rotation:135.9,x:717.6},0).wait(1).to({rotation:138.6,x:720.1,y:393.3},0).wait(1).to({rotation:141,x:721.8,y:398.2},0).wait(1).to({rotation:143.4,x:723.5,y:403.1},0).wait(1).to({rotation:145.9,x:725.2,y:408.1},0).wait(1).to({rotation:142.6,x:722.5,y:406.2},0).wait(1).to({rotation:139.3,x:719.9,y:404.4},0).wait(1).to({rotation:136.1,x:717.2,y:402.6},0).wait(1).to({rotation:132.8,x:714.6,y:400.7},0).wait(1).to({rotation:129.5,x:712,y:398.9},0).wait(1).to({rotation:126.3,x:709.3,y:397.1},0).wait(1).to({rotation:123,x:706.7,y:395.2},0).wait(1).to({rotation:119.7,x:704.1,y:393.4},0).wait(1).to({rotation:116.5,x:701.4,y:391.6},0).wait(1).to({rotation:113.2,x:698.8,y:389.7},0).wait(1).to({rotation:109.9,x:696.2,y:387.9},0).wait(1).to({rotation:106.7,x:693.6,y:386},0).wait(1).to({rotation:103.4,x:690.9,y:384.1},0).wait(1).to({rotation:100.1,x:688.3,y:382.3},0).wait(1).to({rotation:96.9,x:685.7,y:380.4},0).wait(1).to({rotation:93.6,x:683.1,y:378.5},0).wait(1).to({rotation:90.3,x:680.4,y:376.6},0).wait(1).to({rotation:87.1,x:677.9,y:374.7},0).wait(1).to({rotation:83.8,x:675.2,y:372.8},0).wait(1).to({rotation:80.5,x:672.6,y:370.9},0).wait(1).to({rotation:77.3,x:670,y:368.9},0).wait(1).to({rotation:74,x:667.4,y:367.1},0).wait(1).to({rotation:70.7,x:664.7,y:365.1},0).wait(1).to({rotation:67.5,x:662.1,y:363.2},0).wait(1).to({rotation:64.2,x:659.5,y:361.2},0).wait(1).to({rotation:63.6,x:658.8,y:361.7},0).wait(1).to({rotation:62.9,x:658,y:362.1},0).wait(1).to({rotation:62.3,x:657.3,y:362.4},0).wait(1).to({rotation:61.7,x:656.6,y:362.8},0).wait(1).to({rotation:61.1,x:655.8,y:363.2},0).wait(1).to({rotation:60.4,x:655.1,y:363.6},0).wait(1).to({rotation:59.8,x:654.3,y:364},0).wait(1).to({rotation:59.2,x:653.6,y:364.4},0).wait(1).to({rotation:58.6,x:652.9,y:364.7},0).wait(1).to({rotation:57.9,x:652.2,y:365.2},0).wait(1).to({rotation:57.3,x:651.4,y:365.5},0).wait(1).to({rotation:56.7,x:650.7,y:365.9},0).wait(1).to({rotation:56.1,x:650,y:366.3},0).wait(1).to({rotation:55.4,x:649.2,y:366.7},0).wait(1).to({rotation:54.8,x:648.5,y:367.1},0).wait(1).to({rotation:54.2,x:647.8,y:367.5},0).wait(1).to({rotation:53.6,x:647,y:367.8},0).wait(1).to({rotation:52.9,x:646.3,y:368.2},0).wait(1).to({rotation:52.3,x:645.5,y:368.6},0).wait(1).to({rotation:51.7,x:644.8,y:369},0).wait(1).to({rotation:51.1,x:644.1,y:369.4},0).wait(1).to({rotation:50.4,x:643.3,y:369.7},0).wait(1).to({rotation:49.8,x:642.6,y:370.1},0).wait(1).to({rotation:49.2,x:641.9,y:370.5},0).wait(1).to({rotation:48.6,x:641.1,y:370.9},0).wait(1).to({rotation:47.9,x:640.4,y:371.3},0).wait(1).to({rotation:47.3,x:639.7,y:371.7},0).wait(1).to({rotation:46.7,x:638.9,y:372.1},0).wait(1).to({rotation:46.1,x:638.2,y:372.4},0).wait(1).to({rotation:45.4,x:637.5,y:372.8},0).wait(1).to({rotation:44.8,x:636.7,y:373.2},0).wait(1).to({rotation:44.2,x:636,y:373.6},0).wait(1).to({rotation:43.6,x:635.3,y:374},0).wait(1).to({rotation:42.9,x:634.5,y:374.3},0).wait(1).to({rotation:42.3,x:633.8,y:374.7},0).wait(1).to({rotation:41.7,x:633,y:375.1},0).wait(1).to({rotation:41.1,x:632.3,y:375.5},0).wait(1).to({rotation:40.4,x:631.5,y:375.9},0).wait(1).to({rotation:39.8,x:630.8,y:376.3},0).wait(1).to({rotation:39.2,x:630.1,y:376.7},0).wait(1).to({rotation:38.6,x:629.3,y:377.1},0).wait(1).to({rotation:37.9,x:628.6,y:377.4},0).wait(1).to({rotation:37.3,x:627.9,y:377.8},0).wait(1).to({rotation:36.7,x:627.1,y:378.2},0).wait(1).to({rotation:36.1,x:626.4,y:378.6},0).wait(1).to({rotation:35.4,x:625.6,y:379},0).wait(1).to({rotation:34.8,x:624.9,y:379.4},0).wait(1).to({rotation:34.2,x:624.2,y:379.7},0).wait(26));

	// midden staart
	this.instance_4 = new lib.middenstaart();
	this.instance_4.parent = this;
	this.instance_4.setTransform(512.1,354.6,0.614,0.614,14.8,0,0,43.4,34);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({regX:47.3,regY:37.5,rotation:15.8,x:519.1,y:355.2},0).wait(1).to({rotation:16.6,x:524.2,y:353},0).wait(1).to({rotation:17.4,x:529.3,y:350.8},0).wait(1).to({rotation:18.2,x:534.5,y:348.5},0).wait(1).to({rotation:19,x:539.6,y:346.3},0).wait(1).to({rotation:19.8,x:544.8,y:344.2},0).wait(1).to({rotation:20.6,x:550.1,y:342.3},0).wait(1).to({rotation:21.4,x:555.5,y:340.7},0).wait(1).to({rotation:24.5,x:560.9,y:337.9},0).wait(1).to({rotation:27.6,x:565.2,y:333.5},0).wait(1).to({rotation:30.7,x:568.9,y:328.6},0).wait(1).to({rotation:33.8,x:572.6,y:323.7},0).wait(1).to({rotation:36.9,x:577.1,y:319.5},0).wait(1).to({rotation:40,x:582.7,y:317.2},0).wait(1).to({rotation:43.2,x:590.1,y:314.3},0).wait(1).to({rotation:46.3,x:597.1,y:310.6},0).wait(1).to({rotation:49.4,x:604.2,y:307},0).wait(1).to({rotation:52.5,x:611.9,y:304.7},0).wait(1).to({rotation:55.6,x:619.1,y:303.4},0).wait(1).to({rotation:58.7,x:626.3,y:301.6},0).wait(1).to({rotation:61.8,x:633.4,y:299.3},0).wait(1).to({rotation:65,x:640.5,y:297.1},0).wait(1).to({rotation:68.1,x:647.6,y:295},0).wait(1).to({rotation:71.2,x:654.8,y:293.3},0).wait(1).to({rotation:74.3,x:662.2,y:292.2},0).wait(1).to({rotation:77.4,x:669.6,y:292.1},0).wait(1).to({rotation:80.5,x:676.5,y:292.3},0).wait(1).to({rotation:83.6,x:684,y:292.7},0).wait(1).to({rotation:86.8,x:691.4,y:293.4},0).wait(1).to({rotation:89.9,x:698.6,y:294.1},0).wait(1).to({rotation:93,x:705.9,y:295},0).wait(1).to({rotation:96.1,x:713.2,y:296.1},0).wait(1).to({rotation:99.2,x:719.9,y:297.4},0).wait(1).to({rotation:102.3,x:727.3,y:299.2},0).wait(1).to({rotation:105.4,x:734.4,y:301},0).wait(1).to({rotation:108.5,x:741.5,y:303},0).wait(1).to({rotation:111.7,x:748.6,y:305.2},0).wait(1).to({rotation:114.8,x:755.6,y:307.7},0).wait(1).to({rotation:117.9,x:762,y:310.5},0).wait(1).to({rotation:121,x:768.9,y:313.1},0).wait(1).to({rotation:124.1,x:776,y:315.3},0).wait(1).to({rotation:127.2,x:783.2,y:317.2},0).wait(1).to({rotation:130.3,x:790.3,y:318.6},0).wait(1).to({rotation:137.8,x:795.9,y:327},0).wait(1).to({rotation:145.3,x:801.6,y:335.3},0).wait(1).to({rotation:152.8,x:807.1,y:343.9},0).wait(1).to({rotation:160.4,x:804.2,y:345.5},0).wait(1).to({rotation:155.9,x:800.4,y:336.5},0).wait(1).to({rotation:151.5,x:795,y:328.3},0).wait(1).to({rotation:147.1,x:788.2,y:321.1},0).wait(1).to({rotation:142.7,x:780.2,y:315.5},0).wait(1).to({rotation:138.3,x:771.1,y:311.5},0).wait(1).to({rotation:133.9,x:764,y:306.8},0).wait(1).to({rotation:129.5,x:755.8,y:302.3},0).wait(1).to({rotation:125.1,x:746.3,y:297.4},0).wait(1).to({rotation:120.7,x:737.4,y:293},0).wait(1).to({rotation:116.3,x:728.7,y:288.7},0).wait(1).to({rotation:111.9,x:720.7,y:284.7},0).wait(1).to({rotation:107.5,x:711.1,y:281.3},0).wait(1).to({rotation:103.1,x:701,y:279.1},0).wait(1).to({rotation:98.7,x:693.4,y:280},0).wait(1).to({rotation:94.3,x:683.7,y:275.7},0).wait(1).to({rotation:92.6,x:688.8,y:282.8},0).wait(1).to({rotation:90.8,x:678.1,y:282.2},0).wait(1).to({rotation:89.1,x:668,y:281.6},0).wait(1).to({rotation:87.4,x:658.2,y:280.9},0).wait(1).to({rotation:85.6,x:648.1,y:280},0).wait(1).to({rotation:83.9,x:638.2,y:279},0).wait(1).to({rotation:82.2,x:628.2,y:277.9},0).wait(1).to({rotation:80.5,x:618.1,y:276.4},0).wait(1).to({rotation:78.7,x:608.9,y:274.1},0).wait(1).to({rotation:77.8,x:607.4,y:275.3},0).wait(1).to({rotation:76.8,x:605.8,y:276.5},0).wait(1).to({rotation:75.9,x:604.3,y:277.7},0).wait(1).to({rotation:75,x:602.8,y:278.8},0).wait(1).to({rotation:74,x:601.3,y:280.1},0).wait(1).to({rotation:73.1,x:599.8,y:281.3},0).wait(1).to({rotation:72.1,x:598.3,y:282.4},0).wait(1).to({rotation:71.2,x:596.7,y:283.6},0).wait(1).to({rotation:70.3,x:595.2,y:284.8},0).wait(1).to({rotation:69.3,x:593.7,y:286},0).wait(1).to({rotation:68.4,x:592.2,y:287.2},0).wait(1).to({rotation:67.5,x:590.7,y:288.4},0).wait(1).to({rotation:66.5,x:589.2,y:289.6},0).wait(1).to({rotation:65.6,x:587.6,y:290.7},0).wait(1).to({rotation:64.6,x:586.1,y:291.9},0).wait(1).to({rotation:63.7,x:584.5,y:293.1},0).wait(1).to({rotation:62.8,x:583,y:294.3},0).wait(1).to({rotation:61.8,x:581.5,y:295.4},0).wait(1).to({rotation:60.9,x:580,y:296.7},0).wait(1).to({rotation:59.9,x:578.4,y:297.8},0).wait(1).to({rotation:59,x:576.9,y:299},0).wait(1).to({rotation:58.1,x:575.4,y:300.2},0).wait(1).to({rotation:57.1,x:573.9,y:301.4},0).wait(1).to({rotation:56.2,x:572.4,y:302.5},0).wait(1).to({rotation:55.3,x:570.9,y:303.7},0).wait(1).to({rotation:54.3,x:569.4,y:304.9},0).wait(1).to({rotation:53.4,x:567.8,y:306.1},0).wait(1).to({rotation:52.4,x:566.3,y:307.3},0).wait(1).to({rotation:51.5,x:564.8,y:308.4},0).wait(1).to({rotation:50.6,x:563.3,y:309.6},0).wait(1).to({rotation:49.6,x:561.7,y:310.7},0).wait(1).to({rotation:48.7,x:560.3,y:311.9},0).wait(1).to({rotation:47.7,x:558.7,y:313.1},0).wait(1).to({rotation:46.8,x:557.2,y:314.3},0).wait(1).to({rotation:45.9,x:555.7,y:315.4},0).wait(1).to({rotation:44.9,x:554.2,y:316.6},0).wait(1).to({rotation:44,x:552.7,y:317.8},0).wait(1).to({rotation:43.1,x:551.2,y:319},0).wait(1).to({rotation:42.1,x:549.6,y:320.1},0).wait(1).to({rotation:41.2,x:548.1,y:321.3},0).wait(1).to({rotation:40.2,x:546.6,y:322.4},0).wait(1).to({rotation:39.3,x:545.1,y:323.6},0).wait(1).to({rotation:38.4,x:543.6,y:324.8},0).wait(1).to({rotation:37.4,x:542,y:325.9},0).wait(1).to({rotation:36.5,x:540.5,y:327.1},0).wait(1).to({rotation:35.5,x:539,y:328.3},0).wait(1).to({rotation:34.6,x:537.5,y:329.4},0).wait(1).to({rotation:33.7,x:536.1,y:330.6},0).wait(3).to({x:536},0).wait(6).to({x:535.9},0).wait(8).to({x:536},0).wait(8).to({x:536.1},0).wait(1));

	// punt staart
	this.instance_5 = new lib.puntstaart();
	this.instance_5.parent = this;
	this.instance_5.setTransform(451.7,388.3,0.591,0.591,29.8,0,0,28.1,58);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1).to({regX:28,regY:58.3,scaleX:0.59,scaleY:0.59,rotation:31.2,x:456.7,y:384.7},0).wait(1).to({rotation:32.5,x:461.9,y:380.9},0).wait(1).to({rotation:33.8,x:467,y:377.2},0).wait(1).to({rotation:35.1,x:472.1,y:373.5},0).wait(1).to({rotation:36.4,x:477.3,y:369.8},0).wait(1).to({rotation:37.7,x:482.4,y:366},0).wait(1).to({rotation:39,x:487.7,y:364.1},0).wait(1).to({rotation:40.3,x:492.9,y:362},0).wait(1).to({rotation:41.6,x:498.1,y:360},0).wait(1).to({rotation:42.9,x:503.2,y:358},0).wait(1).to({rotation:44.2,x:509.8,y:352.5},0).wait(1).to({rotation:45.5,x:516.2,y:346.9},0).wait(1).to({rotation:46.8,x:522.7,y:341.4},0).wait(1).to({rotation:48.1,x:529.2,y:335.9},0).wait(1).to({rotation:49.4,x:535.8,y:330.3},0).wait(1).to({rotation:50.7,x:542.2,y:324.8},0).wait(1).to({rotation:52,x:548.4,y:320.2},0).wait(1).to({rotation:53.3,x:554.5,y:315.6},0).wait(1).to({rotation:54.6,x:560.6,y:311},0).wait(1).to({rotation:55.9,x:566.8,y:306.5},0).wait(1).to({rotation:57.2,x:572.9,y:301.9},0).wait(1).to({rotation:58.5,x:579.1,y:297.3},0).wait(1).to({rotation:59.8,x:585.2,y:292.7},0).wait(1).to({rotation:63.6,x:594,y:288.1},0).wait(1).to({rotation:67.4,x:602.7,y:283.6},0).wait(1).to({rotation:71.1,x:611.4,y:279},0).wait(1).to({rotation:74.9,x:620.2,y:274.4},0).wait(1).to({rotation:78.7,x:628.4,y:273.2},0).wait(1).to({rotation:82.4,x:636.6,y:272},0).wait(1).to({rotation:86.2,x:644.8,y:270.8},0).wait(1).to({rotation:89.9,x:653,y:269.6},0).wait(1).to({rotation:93.7,x:661.2,y:268.5},0).wait(1).to({rotation:97.4,x:669.5,y:267.3},0).wait(1).to({rotation:101.2,x:677.7,y:266},0).wait(1).to({rotation:104.9,x:685.9,y:264.9},0).wait(1).to({rotation:108.7,x:694.1,y:263.7},0).wait(1).to({rotation:112.5,x:702.3,y:262.5},0).wait(1).to({rotation:116.2,x:710.6,y:261.3},0).wait(1).to({rotation:120,x:718.7,y:260.1},0).wait(1).to({rotation:128.5,x:732.8,y:263},0).wait(1).to({rotation:137.1,x:746.8,y:266.1},0).wait(1).to({rotation:145.6,x:760.9,y:269},0).wait(1).to({rotation:154.2,x:775,y:272},0).wait(1).to({rotation:162.7,x:789,y:274.9},0).wait(1).to({rotation:171.3,x:803.1,y:277.9},0).wait(1).to({rotation:179.8,x:817.2,y:280.9},0).wait(1).to({rotation:174.2,x:810.9,y:276.8},0).wait(1).to({rotation:168.6,x:804.6,y:272.8},0).wait(1).to({rotation:163,x:798.3,y:268.9},0).wait(1).to({rotation:157.4,x:783.8,y:264.3},0).wait(1).to({rotation:151.8,x:769.2,y:259.7},0).wait(1).to({rotation:146.2,x:754.6,y:255.1},0).wait(1).to({rotation:140.6,x:740,y:250.5},0).wait(1).to({rotation:135,x:725.5,y:245.9},0).wait(1).to({rotation:132.8,x:713.7,y:245.2},0).wait(1).to({rotation:130.7,x:702,y:244.6},0).wait(1).to({rotation:128.5,x:690.3,y:243.9},0).wait(1).to({rotation:126.4,x:678.6,y:243.3},0).wait(1).to({rotation:124.2,x:666.8,y:242.6},0).wait(1).to({rotation:122,x:655.1,y:242},0).wait(1).to({rotation:119.9,x:643.4,y:241.3},0).wait(1).to({rotation:116.6,x:637.4,y:241.4},0).wait(1).to({rotation:113.2,x:631.4},0).wait(1).to({rotation:109.9,x:625.4},0).wait(1).to({rotation:106.5,x:613.9,y:243.8},0).wait(1).to({rotation:103.2,x:602.3,y:246.2},0).wait(1).to({rotation:99.9,x:590.8,y:248.7},0).wait(1).to({rotation:96.5,x:579.3,y:251.1},0).wait(1).to({rotation:93.2,x:567.9,y:253.5},0).wait(1).to({rotation:89.8,x:556.3,y:255.9},0).wait(1).to({rotation:88.9,x:554.8,y:258.1},0).wait(1).to({rotation:88,x:553.3,y:260.4},0).wait(1).to({rotation:87.1,x:551.8,y:262.6},0).wait(1).to({rotation:86.2,x:550.2,y:264.8},0).wait(1).to({rotation:85.3,x:548.6,y:267},0).wait(1).to({rotation:84.3,x:547.2,y:269.3},0).wait(1).to({rotation:83.4,x:545.6,y:271.5},0).wait(1).to({rotation:82.5,x:544.1,y:273.8},0).wait(1).to({rotation:81.6,x:542.5,y:276},0).wait(1).to({rotation:80.7,x:541,y:278.2},0).wait(1).to({rotation:79.8,x:539.5,y:280.4},0).wait(1).to({rotation:78.8,x:538,y:282.6},0).wait(1).to({rotation:77.9,x:536.4,y:284.8},0).wait(1).to({rotation:77,x:534.9,y:287.1},0).wait(1).to({rotation:76.1,x:533.4,y:289.3},0).wait(1).to({rotation:75.2,x:531.9,y:291.5},0).wait(1).to({rotation:74.3,x:530.3,y:293.7},0).wait(1).to({rotation:73.3,x:528.8,y:296},0).wait(1).to({rotation:72.4,x:527.2,y:298.2},0).wait(1).to({rotation:71.5,x:525.7,y:300.4},0).wait(1).to({rotation:70.6,x:524.2,y:302.7},0).wait(1).to({rotation:69.7,x:522.7,y:304.9},0).wait(1).to({rotation:68.8,x:521.1,y:307.1},0).wait(1).to({rotation:67.9,x:519.6,y:309.3},0).wait(1).to({rotation:66.9,x:518.1,y:311.5},0).wait(1).to({rotation:66,x:516.5,y:313.8},0).wait(1).to({rotation:65.1,x:515,y:316},0).wait(1).to({rotation:64.2,x:513.5,y:318.2},0).wait(1).to({rotation:63.3,x:512,y:320.4},0).wait(1).to({rotation:62.4,x:510.4,y:322.7},0).wait(1).to({rotation:61.4,x:508.9,y:324.9},0).wait(1).to({rotation:60.5,x:507.3,y:327.2},0).wait(1).to({rotation:59.6,x:505.9,y:329.3},0).wait(1).to({rotation:58.7,x:504.3,y:331.6},0).wait(1).to({rotation:57.8,x:502.8,y:333.8},0).wait(1).to({rotation:56.9,x:501.2,y:336},0).wait(1).to({rotation:55.9,x:499.7,y:338.2},0).wait(1).to({rotation:55,x:498.2,y:340.5},0).wait(1).to({rotation:54.1,x:496.6,y:342.7},0).wait(1).to({rotation:53.2,x:495.1,y:344.9},0).wait(1).to({rotation:52.3,x:493.6,y:347.1},0).wait(1).to({rotation:51.4,x:492.1,y:349.4},0).wait(1).to({rotation:50.5,x:490.5,y:351.6},0).wait(1).to({rotation:49.5,x:489,y:353.8},0).wait(1).to({rotation:48.6,x:487.5,y:356},0).wait(1).to({rotation:47.7,x:485.9,y:358.2},0).wait(1).to({rotation:46.8,x:484.4,y:360.5},0).wait(1).to({rotation:45.9,x:482.9,y:362.7},0).wait(1).to({rotation:45,x:481.4,y:364.9},0).wait(26));

	// lichaam
	this.instance_6 = new lib.schorpioenlichaam();
	this.instance_6.parent = this;
	this.instance_6.setTransform(540.1,491.8,0.633,0.633,22.7,0,0,189.7,157.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(145));

	// ring
	this.instance_7 = new lib.ring();
	this.instance_7.parent = this;
	this.instance_7.setTransform(441.3,405.9,0.361,0.361,0,0,0,28.9,32.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1).to({regX:32.7,regY:32.7,x:447.2,y:403.3},0).wait(1).to({x:451.8,y:400.6},0).wait(1).to({x:456.4,y:397.9},0).wait(1).to({x:461,y:395.2},0).wait(1).to({x:465.2,y:392.1},0).wait(1).to({x:469.4,y:388.9},0).wait(1).to({x:473.6,y:385.8},0).wait(1).to({x:477.9,y:382.6},0).wait(1).to({x:484.3,y:376.2},0).wait(1).to({x:490.8,y:369.9},0).wait(1).to({x:497.2,y:363.5},0).wait(1).to({x:503.7,y:357.1},0).wait(1).to({x:510.1,y:350.8},0).wait(1).to({x:516.6,y:344.4},0).wait(1).to({x:538.2,y:344.6},0).wait(1).to({x:540.6,y:336.6},0).wait(1).to({x:542.9,y:328.5},0).wait(1).to({x:545.3,y:320.4},0).wait(1).to({x:547.7,y:312.3},0).wait(1).to({x:554.6,y:308.7},0).wait(1).to({x:561.6,y:305.1},0).wait(1).to({x:568.6,y:301.5},0).wait(1).to({x:575.5,y:297.9},0).wait(1).to({x:582.5,y:294.2},0).wait(1).to({x:589.5,y:290.6},0).wait(1).to({x:596.4,y:287},0).wait(1).to({x:603.4,y:283.4},0).wait(1).to({x:610.3,y:279.8},0).wait(1).to({x:619.9,y:276.6},0).wait(1).to({x:629.5,y:273.5},0).wait(1).to({x:639,y:270.4},0).wait(1).to({x:648.6,y:267.3},0).wait(1).to({x:658.1,y:264.2},0).wait(1).to({x:667.7,y:261},0).wait(1).to({x:679.7,y:260.8},0).wait(1).to({x:691.8,y:260.5},0).wait(1).to({x:703.9,y:260.3},0).wait(1).to({x:715.9,y:260},0).wait(1).to({x:728,y:259.8},0).wait(1).to({x:740,y:259.5},0).wait(1).to({x:752.1,y:259.3},0).wait(1).to({x:764.2,y:259},0).wait(1).to({x:776.2,y:258.8},0).wait(1).to({x:788.3,y:258.5},0).wait(1).to({x:800.3,y:258.3},0).wait(1).to({x:812.4,y:258},0).wait(1).to({x:814,y:255.2},0).wait(1).to({x:800.6,y:251.9},0).wait(1).to({x:787.1,y:248.5},0).wait(1).to({x:773.7,y:245.2},0).wait(1).to({x:760.2,y:241.8},0).wait(1).to({x:738.5,y:240.2},0).wait(1).to({x:728.3,y:238.9},0).wait(1).to({x:718.2,y:237.6},0).wait(1).to({x:708,y:236.2},0).wait(1).to({x:676.8,y:229.8},0).wait(1).to({x:663.8,y:226.6},0).wait(1).to({x:650.7,y:223.3},0).wait(1).to({x:637.7,y:220.1},0).wait(1).to({x:624.7,y:216.8},0).wait(1).to({x:586.2,y:210.3},0).wait(1).to({x:547.7,y:203.8},0).wait(1).to({x:532.1,y:198.5},0).wait(1).to({x:516.4,y:193.3},0).wait(1).to({x:500.7,y:188},0).wait(1).to({x:470.9,y:186.3},0).wait(1).to({x:441.1,y:184.7},0).wait(1).to({x:411.2,y:183},0).wait(1).to({x:381.4,y:181.3},0).wait(1).to({x:351.6,y:179.7},0).wait(1).to({x:321.7,y:178},0).wait(1).to({y:184.1},0).wait(1).to({x:321.6,y:190.1},0).wait(1).to({x:321.5,y:196.2},0).wait(1).to({x:321.4,y:202.3},0).wait(1).to({y:208.4},0).wait(1).to({x:321.3,y:214.4},0).wait(1).to({x:321.2,y:220.5},0).wait(1).to({x:321.1,y:226.6},0).wait(1).to({y:232.7},0).wait(1).to({x:321,y:238.7},0).wait(1).to({x:320.9,y:244.8},0).wait(1).to({x:320.8,y:250.9},0).wait(1).to({x:320.7,y:256.9},0).wait(1).to({x:322.3,y:289},0).wait(1).to({x:323.8,y:321.1},0).wait(1).to({x:325.3,y:353.2},0).wait(1).to({x:326.8,y:385.3},0).wait(1).to({x:328.3,y:417.3},0).wait(1).to({x:329.8,y:449.4},0).wait(1).to({x:331.3,y:481.5},0).wait(1).to({x:332.8,y:513.6},0).wait(1).to({x:334.4,y:545.6},0).wait(1).to({x:335.9,y:577.7},0).wait(1).to({x:337.4,y:609.8},0).wait(1).to({x:338.9,y:641.9},0).wait(1).to({x:338.8},0).wait(1).to({x:338.6},0).wait(1).to({x:338.5},0).wait(1).to({x:338.3},0).wait(1).to({x:338.2},0).wait(1).to({x:338.1},0).wait(1).to({x:337.9},0).wait(1).to({x:337.8},0).wait(1).to({x:337.7},0).wait(1).to({x:337.5},0).wait(1).to({x:337.4},0).wait(1).to({x:337.3},0).wait(1).to({x:337.1},0).wait(1).to({x:337},0).wait(1).to({x:336.8},0).wait(1).to({x:336.7},0).wait(1).to({x:336.6},0).wait(1).to({x:336.4},0).wait(1).to({x:336.3},0).wait(1).to({x:336.2},0).wait(1).to({x:336},0).wait(1).to({x:335.9},0).wait(1).to({x:335.7},0).wait(26));

	// gras
	this.instance_8 = new lib.fb0d2a3766a182705864778c6e79c491_photocliptreefreetreepngclipart_28564000();
	this.instance_8.parent = this;
	this.instance_8.setTransform(689,-9,0.151,0.131);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#01CB01").ss(1,1,1).p("AnqhRQgBhSgOhSQAGBBAJBjQAIBeAMB+AB8gjQArgEAsgBQgsgIgrANQgRAFgQAJQg7AegZA5QgUAuAIAzQAAAFABAFAC6C0QAJgIAIgJQBOhPBGhZQggAugOA4QgIAhgBAhQAAAXADAXQARgYAPgWQBLhvApg7QgDBWAQBUQAGAeAIAdQAygRAkgqQAMgNALgRQApg9AHhLQAFhBgPhPQgKgzgchZQBeDXAJDrQABAXAAAXQA6gQA0geQAigTAfgYQA3grAog2APegbQAAAAABAAQAAACAAACAAdD8QAPAVAWAPQAPgMAPgNAoICvQACgGACgGQACgIACgJQAXhygBhxAnQDUQACAQABAQQAKgJAJgKAmVDAQARgPASgOQBjhMB2gzQCIg4CNgPArtCIQAagrAMgzQAPhGgRhEIBaEDIAfBYQACAAADgBAscBlQAEALAEALAveAZQALgUAJgU");
	this.shape_14.setTransform(99.7,395.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.rf(["#33FF00","#009900"],[0,1],0,0,0,0,0,5.3).s().p("AgVApQgFgCgDgDQgGgIAAgQQAAgMADgEQAEgHAPgJIAJgMQAFgHAGABIABgCQAMAAAIAFQAJAIgCAKQgBAFgGAIIgDAKQgCAFgDADIgLAHQgCACgEAGQgDAGgCACQgEACgJACIgDAAIgDAAg");
	this.shape_15.setTransform(885.8,437.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.rf(["#33FF00","#009900"],[0,1],-3.2,0,0,-3.2,0,519.3).s().p("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");
	this.shape_16.setTransform(499,480.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#00CC00").s().p("Ag5AaQAUAMAkgBIAKAAIgdAZQgVgPgQgVgArGg+IAPAAQgDAHAAAJQAAAQALAXQAFAKAEAEIAEACIAAABIAAAPIgFAAgAongMIAFAEQAIAIAKAAIAAAAIgUASIgDgegAF2g+IBkAAQglAqgyARQgIgdgFgegAJXg+IBvAAQg0Aeg6AQIgBgugADSg+IAiAAIggAuQgDgWABgYgAnigtQAIgKACgGIAAgBIAQAAIgjAdIAJgMgABjgwIAAgBIAKgLIACgCIAFAAIgQARIgBgDgApjg+IAIAAIgDANIgFgNgAhcg+IADAAIgCAKIgBgKg");
	this.shape_17.setTransform(108.4,417.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.instance_8}]}).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_17},{t:this.shape_14},{t:this.instance_8}]},144).wait(1));

	// sky
	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.lf(["#FFFFFF","#63E3E8","#00C5EE"],[0.31,0.565,1],0,302.2,0,-302.1).s().p("EhOhAvOMAAAhebMCdCAAAMAAAA/kIgGACQgLgHgPgFQgXgGgnAAI1aAHQhaAAgVAsIgCAIIgmgTQhPgmg9gEQghgCgrAHIhLAOQjYAqk1gQQlhgdixgJQiugIjbADQiNABhTAGQh7AIhiAYIg0APQgFgUgRgLQgMgJgUgDQgMgCgWAAI02gFQkHgBh2AGIjVAPQiAAJhVAAQheAAh+gJIjcgUQi7gQjmgJQibgHkGgHQg6gCgcALQgVAJgOARQgOATABAUQAAAKAEAJQkpg4i5AZQhKAJgPAoQgIAZAQAZQAPAYAaAKQAWAJAeAAQAQAAAmgDQC5gOE0BDID0A1QCMAbBsAGQCBAHCogTQA6gHDwgjQC2gcBygGQCigICEAXQA1AKBGATIB6AhQFpBhFZACQF4ACFFhuICXg2QBbghA+gQQB+ggDFgIQDkgJHiAgQHRAgD0gNQB1gHBKgTIApgLQAYgFATABQAXABAeAOQAKAFAmAWQBcA1B5AhQBeAaCDASQFwA0FxgZQCKgKBjgVQB9gaBhg0IAWgMIAAbqgEhHJAQ1IgPADQgHACgFADQgJAHAAAQQAAAQALAYQAFALAEAEIAEACIAAABIAAASQACALAHAEQAGACAOgCQACAAACgCIAEgDQAIgLAAgOIAHgCQAHgEAGgOQAHgWgDgTQgFgXgRgLQgGgEgHgBQgEAAgSAIgEg8BAPeQgKAAgKAEQgXAKgLAZIgDAHIgFAEIgEAEQgkADgRAQQgVASgCAiQgBATAJARQAHASAPAKQAUAOApAAQAqAAAUgPQAIgFAGgHQAGgGAGgIQAQgVgDgYIAAgBIAKgLQAQgVgDgZQgCgYgUgSQgTgSgZAAQgCABgFAAgEhFTAQjQgHACgEAGQgFAHAAAOQgBAVABAKQADARALALQAIAIAKAAQAPABAMgSQALgUAIgJQAIgKACgFQAEgNgMgHQgJgHgNABQgJACgEgBQgEgBgEgEIgIgEQgDgCgEAAIgGABgEhKTAQXQgJACgFAIQgDAGAAAIQABAKACAEQACAHAHAEQAGADAHgBQAOgBAFgPQAEgJgEgKQgEgKgHgEQgFgDgGAAIgFABg");
	this.shape_18.setTransform(497.5,302.2);

	this.timeline.addTween(cjs.Tween.get(this.shape_18).wait(145));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(492.7,121.1,1126.5,783.3);
// library properties:
lib.properties = {
	width: 1000,
	height: 600,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/fb0d2a3766a182705864778c6e79c491_photocliptreefreetreepngclipart_28564000.png", id:"fb0d2a3766a182705864778c6e79c491_photocliptreefreetreepngclipart_28564000"},
		{src:"images/firebogvinerope2400px.png", id:"firebogvinerope2400px"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;