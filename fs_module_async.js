const { readFile, writeFile } = require("fs");

const fsModule = () => {
  readFile("./content/fs_text.txt", "utf8", (err, data) => {
    if (err) throw err;
    console.log(data);
  });

  writeFile(
    "./content/fs_text_async.txt",
    "Hello, this is a test attempt",
    "utf8",
    (err, data) => {
      if (err) throw err;
      console.log(data);
    }
  );

  readFile("./content/fs_text_async.txt", "utf8", (err, data) => {
    if (err) throw err;
    console.log(data);
  });
};

module.exports = fsModule;
