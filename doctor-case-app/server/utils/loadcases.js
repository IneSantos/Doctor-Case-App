var fs = require('fs/promises');
const path = require('path');
const directoryPath =  path.join(__dirname, '../data/cases/');

const loadCases = () => 
    fs.readdir(directoryPath)
      .then((files) => {
        const filesP = files.map((filePath) => fs.readFile("./data/cases/" + filePath))
        return Promise.all(filesP).then((files) => files.map((content, index) => ({id: index, description: content.toString()})))
      })
      .catch((err)=> {
        console.log('Unable to scan directory: ' + err);
        throw err;
      });

module.exports = loadCases