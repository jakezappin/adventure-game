var Node = require('./node');

var Game = function() {
	this.nodes = {};
	this.startingPoint = null;
};

Game.prototype.addNode = function(title, text){

	for(var key in this.nodes){
		if(key === title){
			throw new Error();
		}
	}

	var newNode = new Node(title, text);
	this.nodes[title] = newNode;

	if(this.startingPoint === null){
		this.startingPoint = this.nodes[title];
	}

	return this.nodes[title];

}

Game.prototype.getNode = function(name){
	for(var key in this.nodes){
		if(key === name){
			return this.nodes[key];
		}
	}
}

Game.prototype.connect = function(node1, node2, condition){

	if(!node1 in this.nodes){
		throw new Error();
	} else if (!node2 in this.nodes){
		throw new Error();
	} else {
		this.nodes[node1].connect(this.nodes[node2], condition);
	}

}

module.exports = Game;
