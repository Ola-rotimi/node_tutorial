const { readFile, writeFile } = require("fs");

readFile("./fs_text.txt", "utf8", (err, data) => {
  if (err) throw err;
  console.log(data);
});

writeFile(
  "./fs_text_async.txt",
  "Hello, this is a test attempt",
  "utf8",
  (err, data) => {
    if (err) throw err;
    console.log(data);
  }
);

readFile("./fs_text_async.txt", "utf8", (err, data) => {
  if (err) throw err;
  console.log(data);
});
