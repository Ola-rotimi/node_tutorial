const { readFileSync, writeFileSync } = require("fs");

const fsSyncModule = () => {
  writeFileSync("./content/fs_text.txt", `The addition of 2 & 4 is: ${2 + 4}`);

  const textFile = readFileSync("./content/fs_text.txt", "utf8");

  console.log(textFile);
};

module.exports = fsSyncModule;
