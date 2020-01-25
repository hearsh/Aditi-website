const data = require('./MainData.json');

function dataAccess () {
	this.data = {
		'results': null,
	};
}

dataAccess.prototype.getAllData = function () {
	return data;
}

module.exports = new dataAccess();