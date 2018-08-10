var dirPath = process.argv[2];
var fileExt = process.argv[3];

let listModule = require('./module-list-files-ext.js');
function listFiles(err, list) {
	if(err) throw err;
	for(let i = 0; i < list.length; i++) {
		console.log(list[i]);
	}
}
listModule(dirPath, fileExt, listFiles);
