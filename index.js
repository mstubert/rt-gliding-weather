const http = require("http");
const { htmlTextStart, htmlTextEnd } = require("./htmlMod");
const { checkBody, transformBody, setBodyData } = require("./manageBody");
const {
  addNewLocItem,
  updateTimeLocData,
  updateAverageLocData,
  presentWeatherData,
} = require("./manageWeather");

var tempString = "";
var htmlData = "";
var htmlTextData = ``;

var curInp = "";

const server = http.createServer((req, res) => {
  console.log("Incoming message");
  console.log(`${__dirname}`);
  /*var body = "";*/

  if (req.method == "GET") {
    console.log(req.method);
    res.writeHeader(200, { "Content-Type": "text/html" });
    //manageWeatherData
    updateTimeLocData();
    console.log("presented Data: ");
    console.log(updateAverageLocData());
    htmlData = presentWeatherData();
    htmlTextData = htmlTextStart + htmlData + htmlTextEnd;
    output = htmlTextData;
    res.end(output);
  }

  if (req.method == "POST") {
    console.log(req.method);
    req.on("data", function (data) {
      body = data;
      console.log(body);
    });
    req.on("end", function () {
      console.log("Body: " + body);
      curInp = "" + body + "";
      console.log(curInp);
      //checkInput
      console.log(checkBody(curInp));
      if (checkBody(curInp) == true) {
        //console.log(setBodyData(transformBody(curInp)));
        addNewLocItem(setBodyData(transformBody(curInp)));
      }

      //manageWeatherData
      updateTimeLocData();
      console.log("presented Data: ");
      console.log(updateAverageLocData());
      //present Weather Data as HTML
      //console.log(presentWeatherData());
      htmlData = presentWeatherData();
      htmlTextData = htmlTextStart + htmlData + htmlTextEnd;
      res.writeHeader(200, { "Content-Type": "text/html" });
      res.end(htmlTextData);
    });
  }
});

const port = process.env.PORT || 8000;
server.listen(port, () => {
  console.log("Listen to requests on port: ");
  console.log(port);
});
