var fs = require('fs');

module.exports = function(dirPath, fileExt, callback) {
	fs.readdir(dirPath,function(err, list) {
		if(err) return callback(err);
			let subList = [];
			for(let i = 0; i < list.length; i++) {
				if(fileExt === list[i].split('.').pop() && list[i].includes('.')) {
					subList.push(list[i]);
				}
			}
			callback(null, subList);
	});
}
