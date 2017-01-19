$(document).ready(function(){
	$(".btn1").click(function(){
		$(".intro").hide();
		$(".p2").hide();
		$(".btn1").hide();
		$(".l1").hide();
 	});

 	$(".btn2").click(function(){
 		alert("Header text: " + $("header").html());
 	});

 	$(".btn3").click(function(){
 		alert("Body text: " + $("body").html());
 	});
});

$(document).ready(function(){
	alert("Document is load");

	$(".container>p").click(function(){
		alert($(this).html());
	});

	$(".container>p:last").click(function(){
		$(this).hide(2000);
	});

	$(".btn4").click(function(){
		$(".list>li").prepend("#");
	});


	$(".list>li").click(function(){
		$(this).hide(2000);
	});

	$(".btn5").click(function(){
		$('a').html("link");
	});

	$('.table1 tr>td').on("click", function(){
		$(this).css('background-color', 'red');
	});

	$('.table2 tr>td').on("click", function(){
		$(this).hide(1000);
	});
});

$(document).ready(function(){

});

