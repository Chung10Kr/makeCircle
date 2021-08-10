
/*
 * 설정
 */
			   
var property = require("./property"); 
module.exports = {
	server_port: property.server_port,
	route_info:[
			{file:'../src/routes/main', path:'/', method:'main', type:'get'},


			
	]
}
