$(document).ready(function(){

	// try uncommenting (deleting the // before a line) to see its effects

	// $('.fill').addClass('shrink');	


	$('#column2').click(function() {
		$('#column2 .triangle-left').toggleClass('circle');
	
		$('#column2 .triangle-right').toggleClass('circle');
	
		$('#column2 .triangle-left-nofill').toggleClass('circle');

		$('#column2 .triangle-right-nofill').toggleClass('circle');
	});	



	 $('.circle').click(function() {
	 	$('.triangle-left').toggleClass('rotate');
	 });	

	// $('#letter').click(function() {
	// 	var letter = $('#letter').clone();
	// 	$('body').append(letter);
	// });	


	// random backgrounds over time
	// setInterval(function(){
	// 	$redValue = Math.floor(Math.random()*255);
	// 	$greenValue = Math.floor(Math.random()*255);
	// 	$blueValue = Math.floor(Math.random()*255);	
	// 	$('.fill').css(
	// 		'background', 'rgba('+$redValue+','+$blueValue+','+$greenValue+', 1)'
	// 	);
	// },500);
	

});