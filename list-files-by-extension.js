var fs = require('fs');

fs.readdir(process.argv[2], (err, list) => {
  if(err) throw err;
  for(let i = 0; i < list.length; i++) {
    if(process.argv[3] === list[i].split('.').pop() && list[i].includes('.')) {
      console.log(list[i]);
    }
  }
});
