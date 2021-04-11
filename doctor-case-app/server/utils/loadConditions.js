var fs = require('fs');
const csv = require('csv-parser');

const loadConditions = () => {
    const results = [];
    return new Promise((resolve, reject) => {
        fs.createReadStream('./data/conditions.csv')
        .on('error', error => {
            reject(error);
        })
        .pipe(csv({ separator: '\t' }))
        .on('data', (row) => {
            results.push({code: row["ICD_10"], description: row["ICD_10_Description"]});
        })
        .on('end', () => {
            resolve(results);
        });
    });
}

module.exports = loadConditions