var server = require("./12server");
var router = require("./12router");
 
server.start(router.route);