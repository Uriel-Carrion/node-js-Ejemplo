const app = require('./config/server.js');

require("./app/routes/news.js")(app);

//Inicia el servidor
app.listen(app.get('port'), () => {
	console.log("server corriendo en el puerto", app.get('port'));
})
