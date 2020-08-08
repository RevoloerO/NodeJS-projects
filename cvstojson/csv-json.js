const fs = require('fs')
const csvtojsonV2=require("csvtojson");

const pathFile = 'customer-data.xls'
const data  = fs.readFileSync(pathFile,{encoding:'utf8',flag:'r'})

const rawData = data.split('\r\n')
for(let i = 0; i<rawData.length;i++){
  rawData[i] = rawData[i].split(",")
}

csvtojsonV2()
.fromFile(pathFile)
.then((jsonObj)=>{
    //console.log(jsonObj);
    var json = JSON.stringify(jsonObj);
    fs.writeFile("customer-data.json", json, (err) => {
      if (err)
        console.log(err);
      else {
        console.log("File written successfully\n");
      }
    });
})
