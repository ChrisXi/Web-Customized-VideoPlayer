








$("#videomutebtn").on('click', function(){
	var muted =  $('#video').get(0).muted;
	if(muted){
		$("#volumeslider").css("background", "linear-gradient(to right, #469948 100%, gray 0%)" );
	}else{
		$("#volumeslider").css("background", "linear-gradient(to right, #469948 0%, gray 0%)" );
	}
});

$("#video").on('timeupdate', function(){
	var currentTime = $('#video').get(0).currentTime;
	var duration = $('#video').get(0).duration;
	var currentPos = currentTime * 100 / duration;

	$("#seekslider").css("background", "linear-gradient(to right, #469948 "+currentPos+"%, black 0%)" );
});

$("#volumeslider").on('input',function(){
	$("#volumeslider").css("background", "linear-gradient(to right, #469948 "+$("#volumeslider").val()+"%, gray 0%)" );
	//$('#videomutebtn').hide();
});

$("#seekslider").on('input',function(){
	$("#seekslider").css("background", "linear-gradient(to right, #469948 "+$("#seekslider").val()+"%, black 0%)" );
	//$('#videomutebtn').hide();
});
