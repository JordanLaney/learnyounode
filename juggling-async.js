var http = require('http');
var bl = require('bl');
var responses = [];

processCommandArguments();

function processCommandArguments() {
  for(let i = 2; i < process.argv.length; i++) {
    requestWrapper(process.argv[i]);
  }
}

function requestWrapper(url) {
  http.get(url, response => {
    response.pipe(bl(function(err, data) {
      if(err) return console.err(err);
      handleResponse(url, data.toString());
    }));
  });
}

function handleResponse(url, data) {
  responses.push(generateAndReturnResponseObject(url, data));
  if(responses.length == process.argv.length - 2) {
    logResponsesInOrder();
  }
}

function generateAndReturnResponseObject(url, data) {
  let response = {
    responseUrl: url,
    responseData: data
  }
  return response;
}

function logResponsesInOrder() {
  for(let i = 2; i < process.argv.length; i++) {
    for(let j = 0; j < responses.length; j++) {
      if(process.argv[i] === responses[j].responseUrl) {
        console.log(responses[j].responseData);
      }
    }
  }
}
