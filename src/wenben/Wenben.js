var wenben=wenben||{};
wenben.Wenben=function(){
	var s = this;
	F2xContainer.call(s);
	s.initUI();
	var input=document.createElement("input");
	input.type="file";
	input.id="v_file";
	input.accept="video/*";
    input.capture="camcorder";
	input.style.width="527px";
	input.style.height="58px";
	input.onchange=s.play.bind(s);
	var f=new annie.FloatDisplay();
	f.init(input);
	s.addChild(f);
	f.x=152;
	f.y=465;

};
F2xExtend(wenben.Wenben,F2xContainer);
wenben.Wenben.prototype.play=function(evt){
	var s=this;
	var file=evt.target.files[0];
    var reader = new FileReader();
    reader.onload = function(e){
        var videoSrc=e.target.result;
		var video=new annie.Video("");
		video.media.src=videoSrc;
		video.play();
        // var video=document.createElement("video");
        // video.src=videoSrc;
        // // video.type="video/webm";
        // video.style.width="300px";
        // video.style.height="400px";
        // video.preload="auto";
        // video.controls="controls";
    	var f=new annie.FloatDisplay();
    	f.init(video);
    	s.addChild(f);
    	f.x=200;
    	f.y=500;
};
    reader.readAsDataURL(file);
};
wenben.Wenben.prototype.initUI=function(){
	var s = this;
	//f2x_auto_created_init_start
	var _d0=Flash2x.s({type:0,data:"EgpKgEhMBSVAAAIAAJDMhSVAAAg"},null,{type:0,color:"#000000",lineWidth:1,caps:"round",joints:"round",miter:"10"});
	Flash2x.d(_d0,{x:415.5,y:494});
	s.addChild(_d0);
	//f2x_auto_created_init_end
	
};
