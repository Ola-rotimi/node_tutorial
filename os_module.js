const os = require("os");

const user = os.userInfo();

console.log(user);

console.log(`The system Uptime is ${os.uptime() / 3600} hours`);

const currentOS = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
  other: os.version(),
};

console.log(currentOS);
