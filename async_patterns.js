const { readFile, writeFile } = require("fs");
const util = require('util');

const readFilePromise = util.promisify(readFile);
const writeFilePromise = util.promisify(writeFile)

const asyncPatterns = async () => {
  try {
    const first =  await readFilePromise('./content/fs_text_async.txt', 'utf8');
    const second = await readFilePromise('./content/fs_text.txt', 'utf8')
    console.log(first);
    console.log(second);
    await writeFilePromise('./content/fs_text_async.txt', "This is an updated massage", 'utf8');
    await writeFilePromise('./content/fs_text.txt', "Second message update", 'utf8');
    
  } catch (error) {
    console.log(error)
  }
};

module.exports = asyncPatterns;

// return new Promise((resolve, reject) => {
//   readFile(path, 'utf8', (err, data) => {
//     if(err){
//       reject(err)
//     } else {
//       resolve(data)
//     }
//   })
// });