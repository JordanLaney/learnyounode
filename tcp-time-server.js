let net = require('net');
let port = process.argv[2];
let timeWizard = new Date();

function zeroFillTwoIntegers(data) {
	if(data.length === 1) return 0 + data;
	return data;
}

let server = net.createServer(socket => {
	let month = (timeWizard.getMonth() + 1).toString();
	let day = timeWizard.getDate().toString();
	let hour = timeWizard.getHours().toString();
	let minutes = timeWizard.getMinutes().toString();
	socket.write(
		timeWizard.getFullYear().toString()
		+ '-' + zeroFillTwoIntegers(month)
		+ '-' + zeroFillTwoIntegers(day)
		+ ' ' + zeroFillTwoIntegers(hour)
		+ ':' + zeroFillTwoIntegers(minutes)
		+ '\n'
	);
	socket.end();
});

server.listen(port);
