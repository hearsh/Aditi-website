const data = require('./MainData.json');
const fs = require('fs');
const util = require('util');
const imageGrid = `${__dirname}/../../public/img/Labfun/grid-images`;
const readdir = util.promisify(fs.readdir);
const imageformats = {
	'jpg': true,
	'png': true,
	'jpeg': true
}


function searchFiles (files, dir) {
	return files[dir] !== undefined;
}
function dataAccess () {
	this.data = {
		'results': null,
	};
}

function checkForImg (img) {
	const splitImg = img.split('.');
	if (splitImg.length === 2) {
		 return imageformats[splitImg[1].toLowerCase()];
	}
	return false
}

function createJson (array) {
	let json = {};
	for (let i = 0; i < array.length; i++) {
		json[array[i]] = true;
	}
	return json;
}

dataAccess.prototype.getAllData = function () {
	return data;
}

dataAccess.prototype.getPages = function () {
	return data.pages;
}

dataAccess.prototype.getLabFun = async function () {
	const returnData = [];
	const files = await readdir(imageGrid);
	const fileJson = createJson(files);
	for(let i = 0; i < data.labFun.length; i++) {
		if (searchFiles(fileJson, data.labFun[i].img)) {
			const innerFiles = await readdir(`${imageGrid}/${data.labFun[i].img}`);
			const finalImages = [];
			for (let j = 0; j < innerFiles.length; j++) {
				if (checkForImg(innerFiles[j])) {
					finalImages.push(innerFiles[j]);
				}
			}
			returnData.push({
				title: data.labFun[i].title,
				images: finalImages,
				dir: data.labFun[i].img
			});
		}
	}
	return {
		labFun: returnData,
		testimonials: data.testimonials
	};
};

dataAccess.prototype.getPublications = function () {
	return data.publications;
}

dataAccess.prototype.getNews = function () {
	return data.news;
}

module.exports = new dataAccess();