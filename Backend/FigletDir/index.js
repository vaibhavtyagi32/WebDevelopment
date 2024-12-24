const fig=require("figlet");
var figlet = require("figlet");

figlet("Vaibhav Tyagi", function (err, data) {
  if (err) {
    console.log("Something went wrong...");
    console.dir(err);
    return;
  }
  console.log(data);
});