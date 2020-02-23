const data = require('./MainData.json');
const fs = require('fs');
const imageGrid = `${__dirname}/../../public/img/Labfun/grid-images`;

function dataAccess () {
	this.data = {
		'results': null,
	};
}

dataAccess.prototype.getAllData = function () {
	return data;
}

dataAccess.prototype.getLabFun = async function () {
	return new Promise((resolve, reject) => {
		fs.readdir(imageGrid, (err, files) => {
			if (err) {
				console.log(`Error: ${err}`);
				reject(null);
			}
			resolve({
				images: files,
			})
		});
	});
}

dataAccess.prototype.getPublications = function () {
	return data.publications;
}

dataAccess.prototype.getNews = function () {
	return data.news;
}

module.exports = new dataAccess();