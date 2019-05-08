var path = require("path");

module.exports = function(app) {
    //route to the survey
	app.get("/survey", function(req, res) {
		res.sendFile(path.join(__dirname, "../public/survey.html"));
	});

	// route to homepage
	app.use(function(req, res) {
		res.sendFile(path.join(__dirname, "../public/home.html"));
	});
};






//var app = require("app")

/*module.exports = function(app) {
app.get('/survey', function(req, res){
    res.sendFile(path.join(__dirname, "../public/survey.html"))
})
app.get("*", function(req, res){
    res.sendFile(path.join(__dirname, "../public/home.html"))
})
}*/