var Mason = {
	panel: null,
	itemList: null,
	displayIndex: 0,

	setPanel: function(p){
		this.panel = p;
	},
	loadTiles: function(){
		var ref = this;
		$.ajax({
			url: "./json/" + this.panel.id + ".json",
			dataType: "json",
			success: function(data){
				ref.itemList = data.items;
				ref.addTiles();
			}
		});
	},
	addTiles: function(){
		var html = "<div class='container-fluid'><div class='row'>" + Handlebars.templates["tile.hbs"](this.itemList[this.displayIndex]) + Handlebars.templates["tile.hbs"](this.itemList[this.displayIndex+1]) + Handlebars.templates["tile.hbs"](this.itemList[this.displayIndex+2]) + Handlebars.templates["tile.hbs"](this.itemList[this.displayIndex+3]) +
			"</div></div>";
		document.querySelector("#"+this.panel.id).insertAdjacentHTML('beforeend', html);
		this.displayIndex += 4;
		if(this.displayIndex >= this.itemList.length)
			document.querySelector("button[data-link=\"" + this.panel.id + "\"]").style.display = "none";
	}
};