

$(document).ready(function(){
	
	var score = $('.indicator').data('score');
	var fillWidth = ((score-60)/40)*100
	console.log(fillWidth);

	$('.fill').width(fillWidth + '%');
	
});
