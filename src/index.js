const fs = require('fs');
var sourceMap = require('source-map');
const readFile = function (fileName) {
  return new Promise(function (resolve, reject) {
    fs.readFile(fileName, {encoding:'utf-8'},function(error, data) {
      if (error) {
        console.log(error)
        return reject(error);
      }
      resolve(JSON.parse(data));
    });
  });
};
async function searchSource(filePath, line, column) {
  var rawSourceMap = await readFile(filePath)
  var consumer = await new sourceMap.SourceMapConsumer(rawSourceMap);
  var res = consumer.originalPositionFor({
    'line' : line,
    'column' : column
   });
  return res
}


module.exports = searchSource
