

$(document).ready(function(){
	
	var score = $('.indicator').data('score');
	var fillWidth = ((score-60)/40)*100


	$('.fill').width(fillWidth + '%');

	$('#invite').click(function(){
		console.log('clicked!');
		window.location.href = 'thegrade://browse';
	});



});
