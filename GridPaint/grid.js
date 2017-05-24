$(document).ready(function(){
	
	for(var i =0; i < 16; i++){
		for (var j =0; j < 16; j++){
			var new_div = $('<div class="unit"></div>');
			$('.container').append(new_div);
		}
	}


	$('#reset_button').on('click',function(){
		$('.unit').css("background-color", "white");
	});

	$('#erase_button').on('click',function(){
		color = "white";
	});


	var color = "black";


	$('.black').on('click',function(){
		color = "black";
	});

	$('.red').on('click',function(){
		color = "red";
	});

	$('.orange').on('click',function(){
		color = "orange";
	});

	$('.yellow').on('click',function(){
		color = "yellow";
	});

	$('.green').on('click',function(){
		color = "green";
	});

	$('.blue').on('click',function(){
		color = "blue";
	});

	$('.purple').on('click',function(){
		color = "purple";
	});

	$('.unit').on('mouseenter', function(){
		$(this).css("background-color", color);
	});

});

function moveUp(){

}

function moveRight(){

}

function moveDown(){

}

function moveLeft(){

}