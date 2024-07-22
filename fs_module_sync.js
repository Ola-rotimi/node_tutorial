const { readFileSync, writeFileSync } = require("fs");

writeFileSync("./fs_text.txt", `The addition of 2 & 4 is: ${2 + 4}`);

const textFile = readFileSync("./fs_text.txt", "utf8");

console.log(textFile);
