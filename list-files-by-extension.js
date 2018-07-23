let dirPath = process.argv[2];
let fileExt = process.argv[3];
let fs = require('fs');

fs.readdir(dirPath,function(err, list) {
	if(err) throw err;
	for(let i = 0; i < list.length; i++) {
		if(fileExt === list[i].split('.').pop() && list[i].includes('.')) {
			console.log(list[i]);
		}
	}
});
