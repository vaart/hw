$(document).ready(function(){
		var dt 				= new Date();
		var hh 				= dt.getHours();
		var mm 				= dt.getMinutes();
		var ss 				= dt.getSeconds();
		function clock(){
			setTimeout(function(){
				dt=new Date();
				hh=dt.getHours();
				mm=dt.getMinutes();
				ss=dt.getSeconds();

				if(ss<10 ){
					ss="0"+ss;
				}
				if(mm<10){
					mm="0"+mm;
				}
				if(hh<10){
					hh="0"+hh;
				}
					$("#ss").html( ss );
					$("#mm").html( mm );
					$("#hh").html( hh );


					
					clock();
			}, 1000);
		}
		clock();
	$("#lightBoxTrigger").click(function(){
		$("#clocks").fadeIn(500);
		if( hh>19 ){
					$("body").css("background", "black");
					alert("Good Night!")
				}else{
					$("body").css("background", "orange");
					alert("Good Afternoon!")
				}
		$("#lightBoxTrigger").fadeOut(100);
		// $("#lightBoxTrigger").fadeOut(100);
	});
	$("#closeBtn").click(function(){
		$("#clocks").fadeOut(500);
		$("#lightBoxTrigger").fadeIn(100);
	});
});