const fs = require("fs");
const base = fs.readFileSync(`${__dirname}/drawingCloudFly5.png`);

var htmlTextStart;
var htmlTextEnd;

const initPic = '<img src="data:image/jpeg;base64,';
const convPic = Buffer.from(base).toString("base64");
const endPic = '" height="80" width="80"/>';

var htmlText1 = `

<!DOCTYPE html>
<html lang="en">

 <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Real Time Gliding Weather</title>
    <style>
        body {
            /*height: 100vh;*/
            height: 1500px;
            padding: 20px;
            background: linear-gradient(to bottom, #d6d3d1, #f9fafc);
        }
        
        .content {
            max-width: 1000px;
            margin: 0 auto;
        }
        
        .header {
            background-color: #d6d3d1;
            /*margin-bottom: 15px;*/
            border-radius: 15px;
            display: flex;
            align-items: center;
            justify-content: space-between;
        }
        
        .logo {
            /*background-color: blue*/
            margin-left: 10px;
            display: flex;
            align-items: center;
        }
        
        .glob-button {
            background: linear-gradient(to bottom, #f9fafc, #d6d3d1);
            font-family: "Calibri", sans-serif;
            font-size: 20px;
            margin-right: 10px;
            padding: 5px 10px 5px;
            border-radius: 15px;
            border: none;
            cursor: pointer;
        }
        
        h1 {
            font-size: 25px;
            line-height: 1;
            text-align: center;
            font-family: "Calibri", sans-serif;
            color: #1c1917;
            /*margin-bottom: 140px;*/
        }

        .share-form {
            /*background-color: blue;*/
            margin-top: 15px;
            margin-bottom: 20px;
            font-size: 20px;
            margin-left: 5px;
            margin-right: 5px;
            font-family: "Calibri", sans-serif;
            /*height: 70px;*/
            line-height: 30px;
            color: #1c1917;
            padding: 5px 5px;
            text-align: center;
            /*display: flex;
            align-items: normal;
            /*padding: 5px 5px;*/
          }

          .hidden {
            display: none !important;
          }

          .submit-button {
            background-color: #a8a29e;
            /*margin-left: 100px;
            margin-right: 100px;*/
            padding: 20px;
            border: 12px;
            font-size: 30px;
            border-radius: 10px;
          }
          
          .select {
            background: linear-gradient(to bottom, #f9fafc, #d6d3d1);
            color: #1c1917;
            font-size: 20px;
            border: none;
            border-radius: 10px;
            padding: 5px 5px;
            cursor: pointer;
          }

          .weather {
            font-size: 20px;
            font-weight: bold;
          }

          .weatherTable {
            background: linear-gradient(to right, #d6d3d1, #f9fafc);
            color: #1c1917;
            font-size: 20px;
            border-radius: 15px;
            margin: 5px;
            padding: 20px;
            display: grid;
            grid-template-columns: 1fr 1fr 1fr 1fr;
            column-gap: 5px;
            row-gap: 10px;
          }
          
    </style>
 </head>
 <body>
   <div class="content">
      <header class="header">
        <div class="logo">`;

var htmlText2 = initPic + convPic + endPic;

var htmlText3 = `
          
          <h1>Real Time Gliding Weather</h1>
        </div>
        <button class="glob-button">Share Your Weather</button>
      </header>
      <form class="share-form hidden" method="post" action="./">
      <label class="weather">Your Current Weather: </label>
      <br /><br />
      <select class="select" name="locations" id="loc">
        <option value="00" disabled selected hidden>Area...</option>
        <option value="01">BYW - Bay. Wald</option>
        <option value="02">DOE - Don.tal East</option>
        <option value="03">DOM - Don.tal Mid</option>
        <option value="04">DOW - Don.tal West</option>
        <option value="05">ERZ - Erzgebirge</option>
        <option value="06">FAN - Fränk.Alb North</option>
        <option value="07">FAS - Fränk.Alb South</option>
        <option value="08">FIG - Fichtelgebirge</option>
        <option value="09">FRW - Fränk. Wald</option>
        <option value="10">KJG - Koch.Jagst</option>
        <option value="11">KRA - Kraichgau</option>
        <option value="12">MIF - Mittelfranken</option>
        <option value="13">MUV - Mühlviertel</option>
        <option value="14">NEK - Neckarraum</option>
        <option value="15">OBF - Oberfranken</option>
        <option value="16">ODW - Odenwald</option>
        <option value="17">OPW - Oberpf.Wald</option>
        <option value="18">RHO - Rhön</option>
        <option value="19">SAN - Schwäb.Alb North</option>
        <option value="20">SAS - Schwäb.Alb South</option>
        <option value="21">SHW - Schwarzwald</option>
        <option value="22">THW - Thüring.Wald</option>
        <option value="23">UNF - Unterfranken</option>
      </select>
      <br /><br />
      <select class="select" name="CloudBase" id="cb">
        <option value="00" disabled selected hidden>CloudBase...</option>
        <option value="01">500m MSL</option>
        <option value="02">600m MSL</option>
        <option value="03">700m MSL</option>
        <option value="04">800m MSL</option>
        <option value="05">900m MSL</option>
        <option value="06">1000m MSL</option>
        <option value="07">1100m MSL</option>
        <option value="08">1200m MSL</option>
        <option value="09">1300m MSL</option>
        <option value="10">1400m MSL</option>
        <option value="11">1500m MSL</option>
        <option value="12">1600m MSL</option>
        <option value="13">1700m MSL</option>
        <option value="14">1800m MSL</option>
        <option value="15">1900m MSL</option>
        <option value="16">2000m MSL</option>
        <option value="17">2100m MSL</option>
        <option value="18">2200m MSL</option>
        <option value="19">2300m MSL</option>
        <option value="20">2400m MSL</option>
        <option value="21">2500m MSL</option>
        <option value="22">2600m MSL</option>
        <option value="23">2700m MSL</option>
        <option value="24">2800m MSL</option>
        <option value="25">2900m MSL</option>
        <option value="26">3000m MSL</option>
      </select>
      <br /><br />
      <select class="select" name="ClimbRate" id="">
        <option value="00" disabled selected hidden>ClimbRate...</option>
        <option value="01">0.5 m/s</option>
        <option value="02">1 m/s</option>
        <option value="03">1.5 m/s</option>
        <option value="04">2.0 m/s</option>
        <option value="05">2.5 m/s</option>
        <option value="06">3.5 m/s</option>
        <option value="07">4.0 m/s</option>
        <option value="08">4.5 m/s</option>
        <option value="09">5.0 m/s</option>
      </select>
      <br /><br />
      <select class="select" name="CloudCoverage" id="">
        <option value="00">CloudCoverage...</option>
        <option value="01">0/8 clear</option>
        <option value="02">1/8 few</option>
        <option value="03">2/8 few</option>
        <option value="04">3/8 sct</option>
        <option value="05">4/8 sct</option>
        <option value="06">5/8 bkn</option>
        <option value="07">6/8 bkn</option>
        <option value="08">7/8 bkn</option>
        <option value="09">8/8 ovc</option>
      </select>
      <br /><br />
      <div class="submit-button">
        <button class="select" id="sub">Submit</button>
      </div>
    </form>
    <div class="weatherTable">
          <p class="weatherLegend">Weather Area</p>
          <p class="weatherLegend">Cloud Base</p>
          <p class="weatherLegend">Average Climb Rate</p>
          <p class="weatherLegend">Cloud Coverage</p>
          <p class="weatherLegend">[#] Reports</p>
          <p class="weatherLegend">[m] MSL</p>
          <p class="weatherLegend">[m/s]</p>
          <p class="weatherLegend">1/8</p>
    </div>`;
var htmlText5 = `  
      
   </div>    
 </body>
  <script>
    const gbtn = document.querySelector(".glob-button");
    const shareform = document.querySelector(".share-form");
    const subbtn = document.getElementById("sub");

    var loc = document.getElementById("loc");
    var locValue = loc.value;
    var textLoc = loc.options[loc.selectedIndex].text;

    gbtn.addEventListener("click", function () {
        if (shareform.classList.contains("hidden")) {
          shareform.classList.remove("hidden");
          gbtn.textContent = "Close";
        } else {
          shareform.classList.add("hidden");
          gbtn.textContent = "Share Your Weather";
        }
    });

    subbtn.addEventListener("click", function () {
        locValue = loc.value;
        textLoc = loc.options[loc.selectedIndex].text;
      
        console.log(textLoc);
        console.log(locValue);
    });

    setTimeout(() => {document.location.reload();},120000);


  </script>
</html>
`;

htmlTextStart = htmlText1 + htmlText2 + htmlText3;
htmlTextEnd = htmlText5;

module.exports = { htmlTextStart, htmlTextEnd };
