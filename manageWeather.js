//global variables
var locData = {
  BYW: [],
  DOE: [],
  DOM: [],
  DOW: [],
  ERZ: [],
  FAN: [],
  FAS: [],
  FIG: [],
  FRW: [],
  KJG: [],
  KRA: [],
  MIF: [],
  MUV: [],
  NEK: [],
  OBF: [],
  ODW: [],
  OPW: [],
  RHO: [],
  SAN: [],
  SAS: [],
  SHW: [],
  THW: [],
  UFN: [],
};
var tempLength;
var locItemTime;
var key;
var i;
var j;

var presentAvData = [];
var cbSum;
var crSum;
var ccSum;

function addNewLocItem(data) {
  locData[data[0]].push(data);
  console.log(locData);
}

function updateTimeLocData() {
  for (key in locData) {
    tempLength = locData[key].length;
    const curDate = new Date();
    for (i = 0; i < tempLength; i++) {
      locItemTime = locData[key][i][4];
      timeDiff = curDate - locItemTime;
      console.log(timeDiff);

      if (parseFloat(timeDiff.toString()) > 1800000) {
        console.log(locData[key]);
        locData[key].splice(i, 1);
        tempLength = tempLength - 1; //length of array gets smaller by one
        i = i - 1; //run index also smaller by one
        console.log("LocItem removed");
      }
    }
  }
}

function updateAverageLocData() {
  presentAvData.splice(0, presentAvData.length);

  console.log("Start with Update");

  for (key in locData) {
    cbSum = 0;
    crSum = 0;
    ccSum = 0;

    console.log("tempLength");
    tempLength = locData[key].length;
    console.log(tempLength);
    if (tempLength == 0) {
      continue;
    }

    if (tempLength == 1) {
      console.log(locData[key]);
      console.log(locData[key][0][1]);
      cbSum = parseFloat(locData[key][0][1]);
      crSum = parseFloat(locData[key][0][2]);
      ccSum = parseFloat(locData[key][0][3]);
    }

    if (tempLength > 1) {
      for (i = 0; i < tempLength; i++) {
        cbSum = cbSum + parseFloat(locData[key][i][1]);
        crSum = crSum + parseFloat(locData[key][i][2]);
        ccSum = ccSum + parseFloat(locData[key][i][3]);
      }
    }

    cbSum = Math.round(cbSum / tempLength);
    crSum = Math.round((crSum * 10) / tempLength) / 10;
    ccSum = Math.round(ccSum / tempLength);

    presentAvData.push([
      key,
      cbSum.toString(),
      crSum.toString(),
      ccSum.toString(),
      tempLength.toString(),
    ]);
  }

  return presentAvData;
}

function presentWeatherData() {
  let tempHTML = "";
  let tempStr = "";
  tempLength = presentAvData.length;
  if (tempLength == 0) {
    tempHTML = "";
  } else {
    tempHTML = `<div class="weatherTable">`;
    for (j = 0; j < tempLength; j++) {
      for (i = 0; i < 4; i++) {
        if (i == 0) {
          tempStr = presentAvData[j][i] + `(` + presentAvData[j][4] + `)`;
          tempHTML = tempHTML + `<p class="weatherLegend">` + tempStr + `</p>`;
        } else {
          tempStr = presentAvData[j][i];
          tempHTML = tempHTML + `<p class="weatherLegend">` + tempStr + `</p>`;
        }
      }
    }
    tempHTML = tempHTML + `</div>`;
  }

  const cuDate = new Date();
  //tempHTML =
  //tempHTML + `<p>` + "\tLast update at: " + cuDate.toString() + `</p>`;

  tempHTML =
    tempHTML +
    `<b style="color:orange;">` +
    "\tLast update at: " +
    cuDate.toString() +
    `</b>`;

  return tempHTML;
}

//export
module.exports = {
  addNewLocItem,
  updateTimeLocData,
  updateAverageLocData,
  presentWeatherData,
};
