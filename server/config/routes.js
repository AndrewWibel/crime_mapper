var crimes = require('./../controllers/crimes.js')

module.exports = function(app){
	app.get('/sf_crimes', function(req, res){
		crimes.sf_crimes(req, res);
	})
	app.get('/miami_crimes', function(req, res){
		crimes.miami_crimes(req, res);
	})
	app.get('/la_crimes', function(req, res){
		crimes.la_crimes(req, res);
	})
	app.get('/no_crimes', function(req, res){
		crimes.no_crimes(req, res);
	})
}