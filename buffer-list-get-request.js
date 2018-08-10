var http = require('http')
var bl = require('bl');

http.get(process.argv[2], response => {
	response.pipe(bl(function(err, data) {
		if(err) return console.error(err);
		console.log(data.toString().length);
		console.log(data.toString());
	}));
});
