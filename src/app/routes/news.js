const dbConnection = require('../../config/connection.js');

module.exports = app =>{
	const connection = dbConnection();

	app.get('/', (req, res) =>{
		connection.query('select * from news', (err, result)=>{
			//console.log(result)
			res.render('../view/news/news', {
				news:result
			});
		});
	});

	app.post('/news', (req, res) =>{
		//console.log(req.body);
		const {title, news} = req.body;
		connection.query('insert into news SET?', {
			title,
			news
		},(err, result)=>{
			//console.log(result)
			res.redirect('/')
		});
	});
}

