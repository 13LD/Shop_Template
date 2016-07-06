var http = require('http');
var static = require('node-static');
var file = new static.Server('app', {
	cache: 0
});




function accept(req, res) {
	res.setHeader("Access-Control-Allow-Origin", '*');
	file.serve(req, res);
}

// ------ запустить сервер -------

if (!module.parent) {
	http.createServer(accept).listen(8081);
	console.log('Yay! The server is started.');
} else {
	exports.accept = accept;
}
