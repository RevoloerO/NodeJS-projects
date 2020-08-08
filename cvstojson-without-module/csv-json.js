const fs = require('fs')

const pathFile = 'customer-data.xls'
const data  = fs.readFileSync(pathFile,{encoding:'utf8',flag:'r'})

const rawData = data.split('\r\n')
for(let i = 0; i<rawData.length;i++){
  rawData[i] = rawData[i].split(",")
}


let jsonString = "["
for(let i = 1; i<rawData.length;i++){
  jsonString += "{"
  jsonString += "\"" + rawData[0][0] +"\":\""+rawData[i][0]+"\""
  for(let j =1; j<rawData[0].length;j++){
    jsonString += ",\"" + rawData[0][j] +"\":\""+rawData[i][j]+"\""
  }
  jsonString +="},"
}
jsonString += "]"

fs.writeFile("customer-data.json", jsonString, (err) => {
  if (err)
    console.log(err);
  else {
    console.log("File written successfully\n");
  }
})
