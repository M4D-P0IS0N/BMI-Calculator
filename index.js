const express = require("express");
const bodyParser = require("body-parser");

const port = 3000;

const app = express();
app.use(bodyParser.urlencoded({
  extended: true
}))

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/bmiCalculator.html")
})

app.post("/bmiCalculator", function(req, res) {

  var weight = parseFloat(req.body.weight);
  var height = parseFloat(req.body.height);

  var bmi = weight / (height * height);

  res.send("Your BMI is: " + bmi);
})

app.get("/bmicalculator", function(req, res) {
  res.sendFile(__dirname + "/bmiCalculator.html");
})

app.listen(port, function() {
  console.log("Server is running in port 3000.")
});