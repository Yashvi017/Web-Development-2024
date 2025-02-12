var http = require("http");
var url = require("url");

var server = http.createServer(function (request, response) {
    var query = url.parse(request.url, true).query;

    var num1 = parseFloat(query.num1);
    var num2 = parseFloat(query.num2);

    var pathname = url.parse(request.url, true).pathname;

    response.writeHead(200, { "Content-Type": "text/html" });
    // response.write(`<h1>${pathname}</h1>`)
    // response.write(`<h1>${num1}</h1>`)
    // response.write(`<h1>${num2}</h1>`)
    // response.write(`<h1>${num1+num2}</h1>`)

    if(pathname === '/add'){
        response.write(`<h1>Num 1 = ${num1}</h1><br><h1>Num 2 = ${num2}</h1><br><h1>Addition = ${num1+num2}</h1>`); 
    }
    else if(pathname === '/sub'){
        response.write(`<h1>Num 1 = ${num1}</h1><br><h1>Num 2 = ${num2}</h1><br><h1>Subtraction = ${num1-num2}</h1>`); 
    }
    else if(pathname === '/multiply'){
        response.write(`<h1>Num 1 = ${num1}</h1><br><h1>Num 2 = ${num2}</h1><br><h1>Multiplication = ${num1*num2}</h1>`); 
    }
    else if(pathname === '/div'){
        response.write(`<h1>Num 1 = ${num1}</h1><br><h1>Num 2 = ${num2}</h1><br><h1>Division = ${num1/num2}</h1>`); 
    }
    else{
        response.write(`<h1>Operation not found...!!</h1>`)
    }

    response.end();
});

server.listen(5000)
