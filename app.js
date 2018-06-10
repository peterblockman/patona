var express = require('express'),
	app = express()
	// bodyParser = require('body-parser'),

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));	


app.get("/", (req, res) => {
	 res.render('index-2')
})

app.get("/index", (req, res) => {
	 res.render('index')
})
var port = process.env.PORT || 3002;
app.listen(port, () => {
  console.log(`server has started on ${port}`);
})