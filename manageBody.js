var sepInput;
var validInpStatus = false;
var lastItemTime = new Date();
var i = 0;
var j = 0;

//index to weather area assignment
var locData = {
  "01": "BYW",
  "02": "DOE",
  "03": "DOM",
  "04": "DOW",
  "05": "ERZ",
  "06": "FAN",
  "07": "FAS",
  "08": "FIG",
  "09": "FRW",
  10: "KJG",
  11: "KRA",
  12: "MIF",
  13: "MUV",
  14: "NEK",
  15: "OBF",
  16: "ODW",
  17: "OPW",
  18: "RHO",
  19: "SAN",
  20: "SAS",
  21: "SHW",
  22: "THW",
  23: "UFN",
};
//index to cloud base assignment
var cbData = {
  "01": "500",
  "02": "600",
  "03": "700",
  "04": "800",
  "05": "900",
  "06": "1000",
  "07": "1100",
  "08": "1200",
  "09": "1300",
  10: "1400",
  11: "1500",
  12: "1600",
  13: "1700",
  14: "1800",
  15: "1900",
  16: "2000",
  17: "2100",
  18: "2200",
  19: "2300",
  20: "2400",
  21: "2500",
  22: "2600",
  23: "2700",
  24: "2800",
  25: "2900",
  26: "3000",
};
//index to climb rate assignment
var crData = {
  "01": "0.5",
  "02": "1.0",
  "03": "1.5",
  "04": "2.0",
  "05": "2.5",
  "06": "3.0",
  "07": "3.5",
  "08": "4.0",
  "09": "4.5",
};
//index to cloud coverage assignment
var ccData = {
  "01": "0",
  "02": "1",
  "03": "2",
  "04": "3",
  "05": "4",
  "06": "5",
  "07": "6",
  "08": "7",
  "09": "8",
};

//check if new weather data input is valid
//check if request comes from user submit or from automatic client request triggered by update
//only user submits are valid weather data input
function checkBody(dataString) {
  const currentDate = new Date();
  let timeDi = currentDate - lastItemTime;
  let arrBody = [];
  arrBody = dataString.split("&", 4);
  let tempLength = arrBody.length;

  validInpStatus = true;
  const substring = "00";
  let selectStatus = true;
  let sameStatus = false;

  if (dataString.includes(substring)) {
    selectStatus = false;
  }

  if (
    tempLength == 4 &&
    selectStatus == true &&
    timeDi.toString() % 120000 > 4000
  ) {
    validInpStatus = true;
  } else {
    validInpStatus = false;
    lastItemTime = new Date();
  }
  return validInpStatus;
}

//format weather input data for internal usage in data arrays
function transformBody(dataString) {
  let arrBody = [];
  arrBody = dataString.split("&", 4);
  let tempLength = arrBody.length;
  let elementLength;
  let numbStr = "";
  let numbArr = [];
  for (i = 0; i < tempLength; i++) {
    numbStr = "";
    elementLength = arrBody[i].length;
    for (j = elementLength - 2; j < elementLength; j++) {
      numbStr = numbStr + arrBody[i][j];
      //console.log(arrBody[i][j]);
    }
    numbArr.push(numbStr);
  }
  console.log(numbArr);

  return numbArr;
}

//format and add time stamp to input weather data
function setBodyData(nuArr) {
  let tempEntry;
  let presArr = [];
  for (i = 0; i < nuArr.length; i++) {
    if (i == 0) {
      presArr.push(locData[nuArr[i]]);
    }
    if (i == 1) {
      presArr.push(cbData[nuArr[i]]);
    }
    if (i == 2) {
      presArr.push(crData[nuArr[i]]);
    }
    if (i == 3) {
      presArr.push(ccData[nuArr[i]]);
    }
  }
  const curDate = new Date();
  lastItemTime = curDate;
  presArr.push(curDate);
  return presArr;
}

module.exports = { checkBody, transformBody, setBodyData };
