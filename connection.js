var Connection = function(nextNode, condition) {
	this.value = nextNode;
	this.name = condition;
	this.short = condition;
};

Connection.prototype.getCondition = function (){
	return this.name;
}

module.exports = Connection;
