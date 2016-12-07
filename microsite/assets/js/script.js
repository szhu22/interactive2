$(document).ready(function(){

	// try uncommenting (deleting the // before a line) to see its effects

	// $('.fill').addClass('shrink');	

	// $('#circle2').click(function() {
	// 	$('#line1').toggle();
	// });
	// $('#circle3').click(function() {
	// 	$('#line2').toggle();
	// });	

	b5 = 0;
	b4 = 0;
	b3 = 0;
	b2 = 0;
	b1 = 0;

	$('#blue5').click(function() {
		b5++;
		console.log(b5);
		if (b5 > 0 && b2 > 0 ) { 
			$('#line2-5').addClass('show');
	
		}
		if (b5 > 0 && b1 > 0) { 
			$('#line1-5').addClass('show');
	
		}
		if (b5 > 0 && b4 > 0 ) { 
			$('#line4-5').addClass('show');
	
		}
		if (b5 > 0 && b3 > 0 ) { 
			$('#line3-5').addClass('show');
	
		}

		if (b5 > 0 && b4 > 0 && b3 == 0 && b2 > 0 && b1 > 0) { 
			
			window.location.href = "link1,2,4,5.html";
		}
		if (b5 > 0 && b4 == 0 && b3 > 0 && b2 > 0 && b1 > 0) { 
			
			window.location.href = "link1,2,3,5.html";
		}
		if (b5 > 0 && b4 > 0 && b3 > 0 && b2 > 0 && b1 == 0) { 
			
			window.location.href = "link2,3,4,5.html";
		}
		if (b5 > 0 && b4 > 0 && b3 > 0 && b2 == 0 && b1 > 0) { 
			
			window.location.href = "link1,3,4,5.html";
		}
	});
	$('#blue4').click(function() {
		b4++;
		console.log(b4);
		if (b4 > 0 && b2 > 0 ) { 
			$('#line2-4').addClass('show');
	
		}
		if (b4 > 0 && b1 > 0) { 
			$('#line1-4').addClass('show');
	
		}
		if (b4 > 0 && b3 > 0 ) { 
			$('#line3-4').addClass('show');
	
		}
		if (b5 > 0 && b4 > 0 ) { 
			$('#line4-5').addClass('show');
	
		}

		if (b5 == 0 && b4 > 0 && b3 > 0 && b2 > 0 && b1 > 0) { 
			
			window.location.href = "link1,2,3,4.html";
		}
		if (b5 > 0 && b4 > 0 && b3 == 0 && b2 > 0 && b1 > 0) { 
			
			window.location.href = "link1,2,4,5.html";
		}
		if (b5 > 0 && b4 > 0 && b3 > 0 && b2 > 0 && b1 == 0) { 
			
			window.location.href = "link2,3,4,5.html";
		}
		if (b5 > 0 && b4 > 0 && b3 > 0 && b2 == 0 && b1 > 0) { 
			
			window.location.href = "link1,3,4,5.html";
		}
	});
	$('#blue3').click(function() {
		b3++;
		console.log(b3);
		if (b3 > 0 && b2 > 0) { 
			$('#line2-3').addClass('show');
	
		}
		if (b3 > 0 && b1 > 0) { 
			$('#line1-3').addClass('show');
	
		}
		if (b4 > 0 && b3 > 0 ) { 
			$('#line3-4').addClass('show');
	
		}
		if (b5 > 0 && b3 > 0 ) { 
			$('#line3-5').addClass('show');
	
		}

		if (b5 == 0 && b4 > 0 && b3 > 0 && b2 > 0 && b1 > 0) { 
			
			window.location.href = "link1,2,3,4.html";
		}
		if (b5 > 0 && b4 == 0 && b3 > 0 && b2 > 0 && b1 > 0) { 
			
			window.location.href = "link1,2,3,5.html";
		}
		if (b5 > 0 && b4 > 0 && b3 > 0 && b2 > 0 && b1 == 0) { 
			
			window.location.href = "link2,3,4,5.html";
		}
		if (b5 > 0 && b4 > 0 && b3 > 0 && b2 == 0 && b1 > 0) { 
			
			window.location.href = "link1,3,4,5.html";
		}
	});

	$('#blue2').click(function() {
		b2++;
		console.log(b2);
		if (b2 > 0 && b1 > 0) { 
			$('#line1-2').addClass('show');
	
		}
		if (b3 > 0 && b2 > 0 ) { 
			$('#line2-3').addClass('show');
	
		}
		if (b4 > 0 && b2 > 0 ) { 
			$('#line2-4').addClass('show');
	
		}
		if (b5 > 0 && b2 > 0 ) { 
			$('#line2-5').addClass('show');
	
		}

		if (b5 == 0 && b4 > 0 && b3 > 0 && b2 > 0 && b1 > 0) { 
			
			window.location.href = "link1,2,3,4.html";
		}
		if (b5 > 0 && b4 == 0 && b3 > 0 && b2 > 0 && b1 > 0) { 
			
			window.location.href = "link1,2,3,5.html";
		}
		if (b5 > 0 && b4 > 0 && b3 == 0 && b2 > 0 && b1 > 0) { 
			
			window.location.href = "link1,2,4,5.html";
		}
		if (b5 > 0 && b4 > 0 && b3 > 0 && b2 > 0 && b1 == 0) { 
			
			window.location.href = "link2,3,4,5.html";
		}
	});
	$('#blue1').click(function() {
		b1++;
		console.log(b1);
		if ( b2 > 0 && b1 > 0) { 
			$('#line1-2').addClass('show');
	
		}

		// if (b5 == 0 && b4 == 0 && b3 > 0 && b2 > 0 && b1 > 0) { 
		// 	$('#line2-3').addClass('show');
	
		// }
		// if (b5 == 0 && b4 > 0 && b3 > 0 && b2 > 0 && b1 > 0) { 
		// 	window.location.href = "link1,2,3,4.html";
	
		// }
		// if (b5 > 0 && b4 == 0 && b3 > 0 && b2 > 0 && b1 > 0) { 
		// 	window.location.href = "link1,2,3,5.html";
	
		// }
		// if (b5 == 0 && b4 > 0 && b3 == 0 && b2 > 0 && b1 > 0) { 
		// 	$('#line2-4').addClass('show');
	
		// }
		// if (b5 > 0 && b4 > 0 && b3 == 0 && b2 > 0 && b1 > 0) { 
		// 	window.location.href = "link1,2,4,5.html";
	
		// }

		if ( b3 > 0 && b1 > 0) { 
			$('#line1-3').addClass('show');
	
		}
		// if (b5 == 0 && b4 == 0 && b3 > 0 && b2 > 0 && b1 > 0) { 
		// 	$('#line2-3').addClass('show');
	
		// }
		// if (b5 == 0 && b4 > 0 && b3 > 0 && b2 > 0 && b1 > 0) { 
		// 	window.location.href = "link1,2,3,4.html";
	
		// }
		// if (b5 > 0 && b4 == 0 && b3 > 0 && b2 > 0 && b1 > 0) { 
		// 	window.location.href = "link1,2,3,5.html";
	
		// }
		// if (b5 == 0 && b4 > 0 && b3 > 0 && b2 == 0 && b1 > 0) { 
		// 	$('#line3-4').addClass('show');
		// }
		// if (b5 > 0 && b4 > 0 && b3 > 0 && b2 == 0 && b1 > 0) { 
		// 	window.location.href = "link1,3,4,5.html";
		// }
	
		if ( b4 > 0 && b1 > 0) { 
			$('#line1-4').addClass('show');
	
		}

		// if (b5 == 0 && b4 > 0 && b3 == 0 && b2 > 0 && b1 > 0) { 
		// 	$('#line2-4').addClass('show');
	
		// }
		// if (b5 == 0 && b4 > 0 && b3 > 0 && b2 > 0 && b1 > 0) { 
		// 	window.location.href = "link1,2,3,4.html";
	
		// }
		// if (b5 > 0 && b4 > 0 && b3 == 0 && b2 > 0 && b1 > 0) { 
		// 	window.location.href = "link1,2,4,5.html";
	
		// }
		if (b5 > 0 && b1 > 0) { 
			$('#line1-5').addClass('show');
	
		}


		// if (b5 == 0 && b4 == 0 && b3 > 0 && b2 > 0 && b1 > 0) { 
		// 	$('#line2-3').addClass('show');
	
		// }
		// if (b5 == 0 && b4 > 0 && b3 > 0 && b2 > 0 && b1 > 0) { 
		// 	$('#line3-4').addClass('show');
	
		// }
		



		if (b5 == 0 && b4 > 0 && b3 > 0 && b2 > 0 && b1 > 0) { 
			
			window.location.href = "link1,2,3,4.html";
		}
		if (b5 > 0 && b4 == 0 && b3 > 0 && b2 > 0 && b1 > 0) { 
			
			window.location.href = "link1,2,3,5.html";
		}
		if (b5 > 0 && b4 > 0 && b3 == 0 && b2 > 0 && b1 > 0) { 
			
			window.location.href = "link1,2,4,5.html";
		}
		if (b5 > 0 && b4 > 0 && b3 > 0 && b2 == 0 && b1 > 0) { 
			
			window.location.href = "link1,3,4,5.html";
		}
	});

	$('#pink1-1').hover(
		function() {
   			$('#first-p').toggleClass("move");
  		}, function() {
			$('#first-p').toggleClass("move");
  		}
	);
	$('#pink1-2').hover(
		function() {
   			$('#first-p').toggleClass("move");
  		}, function() {
			$('#first-p').toggleClass("move");
  		}
	);
	$('#pink1-3').hover(
		function() {
   			$('#first-p').toggleClass("move");
  		}, function() {
			$('#first-p').toggleClass("move");
  		}
	);
	$('#pink2-1').hover(
		function() {
   			$('#second-p').toggleClass("move");
  		}, function() {
			$('#second-p').toggleClass("move");
  		}
	);
	$('#pink2-2').hover(
		function() {
   			$('#second-p').toggleClass("move");
  		}, function() {
			$('#second-p').toggleClass("move");
  		}
	);
	$('#pink2-3').hover(
		function() {
   			$('#second-p').toggleClass("move");
  		}, function() {
			$('#second-p').toggleClass("move");
  		}
	);
	$('#pink3-1').hover(
		function() {
   			$('#thrid-p').toggleClass("move");
  		}, function() {
			$('#thrid-p').toggleClass("move");
  		}
	);
	$('#pink3-2').hover(
		function() {
   			$('#thrid-p').toggleClass("move");
  		}, function() {
			$('#thrid-p').toggleClass("move");
  		}
	);
	$('#pink3-3').hover(
		function() {
   			$('#thrid-p').toggleClass("move");
  		}, function() {
			$('#thrid-p').toggleClass("move");
  		}
	);
	$('#img1').hover(
		function() {
   			$('#first-p').toggleClass("move");
  		}, function() {
			$('#first-p').toggleClass("move");
  		}
	);
	$('#img2').hover(
		function() {
   			$('#first-p').toggleClass("move");
  		}, function() {
			$('#first-p').toggleClass("move");
  		}
	);
	$('#img3').hover(
		function() {
   			$('#second-p').toggleClass("move");
  		}, function() {
			$('#second-p').toggleClass("move");
  		}
	);
	$('#img4').hover(
		function() {
   			$('#second-p').toggleClass("move");
  		}, function() {
			$('#second-p').toggleClass("move");
  		}
	);
	$('#img5').hover(
		function() {
   			$('#second-p').toggleClass("move");
  		}, function() {
			$('#second-p').toggleClass("move");
  		}
	);
	$('#img6').hover(
		function() {
   			$('#thrid-p').toggleClass("move");
  		}, function() {
			$('#thrid-p').toggleClass("move");
  		}
	);
	$('#img7').hover(
		function() {
   			$('#thrid-p').toggleClass("move");
  		}, function() {
			$('#thrid-p').toggleClass("move");
  		}
	);
	$('#img8').hover(
		function() {
   			$('#thrid-p').toggleClass("move");
  		}, function() {
			$('#thrid-p').toggleClass("move");
  		}
	);

	$('a').click(function(){
    	$('html, body').animate({
        scrollTop: $( $(this).attr('href') ).offset().top
    	}, 500);
    	return false;
	});



	

	

});