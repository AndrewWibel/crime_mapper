var unirest = require('unirest');

module.exports = (function(){
	return{
		sf_crimes: function(req, res){
			unirest.get("https://jgentes-Crime-Data-v1.p.mashape.com/crime?enddate=4%2F1%2F2016&lat=37.773972&long=-122.431297&startdate=3%2F21%2F2016")
			.header("X-Mashape-Key", "r9U5i0EoKSmshuSEqshbJGT2ylxzp11GjI1jsnBJ9alSNQMNbU")
			.header("Accept", "application/json")
			.end(function (result) {
			  console.log(result.status, result.headers, result.body);
			  res.json(result);
			});
		},
		miami_crimes: function(req, res){
			unirest.get("https://jgentes-Crime-Data-v1.p.mashape.com/crime?enddate=4%2F1%2F2016&lat=25.768641&long=-80.192558&startdate=3%2F21%2F2016")
			.header("X-Mashape-Key", "r9U5i0EoKSmshuSEqshbJGT2ylxzp11GjI1jsnBJ9alSNQMNbU")
			.header("Accept", "application/json")
			.end(function (result) {
			  console.log(result.status, result.headers, result.body);
			  res.json(result);
			});
		},
		la_crimes: function(req, res){
			unirest.get("https://jgentes-Crime-Data-v1.p.mashape.com/crime?enddate=4%2F1%2F2016&lat=34.033837&long=-118.237364&startdate=3%2F21%2F2016")
			.header("X-Mashape-Key", "r9U5i0EoKSmshuSEqshbJGT2ylxzp11GjI1jsnBJ9alSNQMNbU")
			.header("Accept", "application/json")
			.end(function (result) {
			  console.log(result.status, result.headers, result.body);
			  res.json(result);
			});
		},
		no_crimes: function(req, res){
			unirest.get("https://jgentes-Crime-Data-v1.p.mashape.com/crime?enddate=4%2F1%2F2016&lat=30.017714&long=-89.972090&startdate=3%2F21%2F2016")
			.header("X-Mashape-Key", "r9U5i0EoKSmshuSEqshbJGT2ylxzp11GjI1jsnBJ9alSNQMNbU")
			.header("Accept", "application/json")
			.end(function (result) {
			  console.log(result.status, result.headers, result.body);
			  res.json(result);
			});
		}
	}
})();