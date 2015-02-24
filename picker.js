$(document).ready(function(){
	$('#start').datepicker();
	$('#end').datepicker();
	$('button').click(function(){
		var selected = $('#dropdown option:selected').text();
		var start = $('#start').val();
		var end = $('#end').val();
		if (start === "" || end === "" ){
			alert("When do you want to eat blueberries!");
		} 
		else {
			confirm("You would like to go to " + selected + " on " + start + 
				" and return on " + end + " while eating blueberries");
		}

	});

});
