const express = require('express');
const app = express();
const fs = require('fs');
const bodyParser = require('body-parser');
require('dotenv').config({ path: './.env'})
const port = process.env.PORT || 6600;

app.use(bodyParser.json())
app.route('/number')
.get(function(req, res){
	fs.readFile('data/number-store.txt','utf-8', function (err,data){
		if (err){
			res.send(err);
		}
		res.set('Access-Control-Allow-Origin', '*');
		res.json({"number": data});
	});
})
.post(function(req, res){
	const newNumber = req.body.num;
	fs.writeFile('data/number-store.txt', newNumber, err => {
		if (err) {
		  console.error(err)
		  res.json({"response": "error"});
		  return
		}
		res.set('Access-Control-Allow-Origin', '*');
		res.json({"response": "success"})
	  });
});


app.listen(port, () => {
	console.log("Server is Running on port " + port);
});