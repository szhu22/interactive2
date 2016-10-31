$(window).load( function() {   

	$("#container").contents().clone().appendTo("#container");


	$(window).scroll(function(){
		canvasWidth = $('#container').width()/2;

		var scrollWindowPos = $(window).scrollLeft();

		console.log(scrollWindowPos);
		if(scrollWindowPos >= canvasWidth) { 
			$(window).scrollLeft(0);
		}  

		if(scrollWindowPos <= 0 ) {
			$(window).scrollLeft(canvasWidth);
		}       

	})

});