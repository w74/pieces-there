var p = Object.create(Mason);

window.onload = function(){
	p.setPanel(document.querySelector('#birmingham'));
	p.loadTiles();

	document.querySelector('.jumbotron .nav-pills li:first-child a').focus();
};

$('button[data-link="birmingham"]').click(function(){
	p.addTiles();
});