const fs = require('fs');

// Get file content
const sourceMap = require('source-map');
const readFile = function (filePath) {
  return new Promise(function (resolve, reject) {
    fs.readFile(filePath, {encoding:'utf-8'}, function(error, data) {
      if (error) {
        console.log(error)
        return reject(error);
      }
      resolve(JSON.parse(data));
    });
  });
};

// Find the source location
async function searchSource(filePath, line, column) {
  const rawSourceMap = await readFile(filePath)
  const consumer = await new sourceMap.SourceMapConsumer(rawSourceMap);
  const res = consumer.originalPositionFor({
    'line' : line,
    'column' : column
   });
   consumer.destroy()
  return res
}


module.exports = searchSource
