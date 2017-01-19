$(document).ready(function(){
	//ex1
	$('tr:gt(2)>td').css("background-color","blue");
	$('tr:lt(2)>td').css("background-color","red");

	//ex2
	$('p:contains("eu")').css("background-color","red");

	//ex3
	$('td:empty').css("background-color","yellow");

	//ex4
	$('.focus').click(function(){
		$('textarea').focus();
	});
	$('.focusout').click(function(){
		$('textarea').focusout();
	});

	//ex5
	$('div>p').click(function(){
		$('div>p').css("color","blue");
	});

	//ex6
	var i=10;
	var cont=0;
	$('p').click(function(){
		if(cont<2){
			i+=4;
			$('p').css('font-size',`${i}px`);
			cont++;
		}else{
			i=10;
			cont=0;
			$('p').css('font-size',`${i}px`);
		}
	});

	//ex7
	$('.animated').click(function(){
		$('#div').animate({
    		color: "green",
    		backgroundColor: "brown"
  		}, 1200);
  		$('#div').animate({
    		color: "blue",
    		backgroundColor: "green"
  		}, 1200);
  		$('#div').animate({
    		color: "red",
    		backgroundColor: "blue"
  		}, 1200);
  		$('#div').animate({
    		color: "yellow",
    		backgroundColor: "black"
  		}, 1200);
	});
	$('.nonanimated').click(function(){
		  $('#div').clearQueue();
      $('#div').stop();
	});

	//ex8
    $("button").click(function(){
        $("#div1").fadeIn("slow");
        $("#div2").fadeIn("fast");
        $("#div3").fadeIn(800);
        $("#div4").fadeIn(2000);
        $("#div5").fadeIn(4000);
    });

	//ex9
    $("#start").click(function(){
        $("#div1").animate({marginLeft:'0px',backgroundColor: "blue"},1000);
        $("#div1").animate({opacity:0,marginTop:'10px'},1000);
    });
    $('#stop').click(function(){
    	$('#div1').clearQueue();
    	$('#div1').stop();
    });

	//ex10
	var check;
    $('.password').keyup(function(){
    	if($('.password').val().length < 5){
    		check="No segura";
    	}else if($('.password').val().length >= 5 && 
    		$('.password').val().length < 8){
    		check="Medianamente segura";
    	}else{
    		check="Segura";
    	}
    	$('.check').html(check);
    });

	//ex11
	$('a').tooltip();
	
	//ex12
	$('#div').hover(function(){
		$('div').toggle(1000);		
	});
	
});