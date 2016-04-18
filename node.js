var Connection = require('./connection');

var Node = function(title, text) {

	this.title = title;
	this.text = text;

	this.connections = [];

};


Node.prototype.connect = function (nextNode, condition){

	 for(var i = 0; i < this.connections.length; i++){
		if(condition === this.connections[i].getCondition()){
			throw new Error("Condition already exists!");
	  	}
	  }

	var nextConnection = new Connection(nextNode, condition);
	this.connections.push(nextConnection);
	
}

module.exports = Node;
