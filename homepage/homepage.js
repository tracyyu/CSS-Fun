$(document).ready(function(){
	$(".fade-me").hide().each(function(i) {
  	$(this).delay(i*1000).fadeIn(1000);
		});
	$("#welcome p" ).on('mouseenter',function(){
		$("#welcome p").css({"border": "#f9ef91 double 14px", "color": "#f9ef91"});
	});
	$("#welcome p").on('mouseleave',function(){
		$("#welcome p").css({"border": "#FFFFFF double 10px", "color":"white"});
	});

	$("#objective p" ).on('mouseenter',function(){
		$("#objective p").css({"border": "#f9ef91 double 14px", "color": "#f9ef91"});
	});
	$("#objective p").on('mouseleave',function(){
		$("#objective p").css({"border": "#FFFFFF double 10px", "color":"white"});
	});	

	$("#food").on("mouseenter",function(){
		$("#food").find("#letter").css({ "font-weight":"bold"});
	});	

	$("#food").on("mouseleave",function(){
		$("#food").find("#letter").css({"font-weight":"normal"});
	});	
	$("#travel").on("mouseenter",function(){
		$("#travel").find("#letter").css({ "font-weight":"bold"});
	});	

	$("#travel").on("mouseleave",function(){
		$("#travel").find("#letter").css({"font-weight":"normal"});
	});
	$("#tech").on("mouseenter",function(){
		$("#tech").find("#letter").css({ "font-weight":"bold"});
	});	

	$("#tech").on("mouseleave",function(){
		$("#tech").find("#letter").css({"font-weight":"normal"});
	});
});