// Read CSV file
/***
* Usage: 
* 
* var readCrimes = require('./readCrimes');
* var timeTaken = readCrimes(function(line){
* 	// called once per line. Line is a JS Object
* }, function(){
* 	// called on end
* })
*/ 

var fs = require('fs'),
	path = require('path'),
	csv = require('csv-parser'),
	filePath = path.join(__dirname, '../server/data/OPD_140722_1.csv');

module.exports = function(perLine, onEnd){
	var startTime = new Date().getTime()/1000;

	var readableCrimes = fs.createReadStream(filePath);

	readableCrimes
		.pipe(csv())
		.on('data', perLine)
		.on('end', onEnd);

	var totalTime = new Date().getTime()/1000 - startTime;
	return totalTime;
};

