"use strict";

var inquirer = require('inquirer');

var game = require('./game.source');


function ifYouDare(node){
	if(node.connections.length === 0){
		console.log(node.title);
		console.log(node.text);
		return
	}

	inquirer.prompt([
  	{
   		type: 'list',
    	name: 'choice',
    	message: node.text,
    	choices: node.connections,

  	}
	]).then(function (answer) {
  		ifYouDare(answer.choice);
});
}

ifYouDare(game.startingPoint)

// function play(node) {

//   	if (!node.connections.length) {
//    	 	console.log(node.text);
//    	 	return Promise.resolve({node});
//   	} else {  
//   		return inquirer.prompt({
//     	name: 'node',
//     	message: node.text,
//     	type: 'list',
//     	choices: node.connections,
//   	}).then(answer => play(answer.node));  
// }

// play(game.startingPoint).then(last => console.log('Game over.'));

// }
