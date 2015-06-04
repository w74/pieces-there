var feat = Object.create(Mason);
var picks = Object.create(Mason);

window.onload = function(){
	feat.setPanel(document.querySelector('#featured'));
	feat.loadTiles();

	picks.setPanel(document.querySelector('#staff-picks'));
	picks.loadTiles();
};

$('button[data-link="featured"]').click(function(){
	feat.addTiles();
});

$('button[data-link="staff-picks"]').click(function(){
	picks.addTiles();
});