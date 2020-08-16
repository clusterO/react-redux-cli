const exec = require("child_process").exec;

if (process.platform === "linux")
  exec("script sh", (error, _, __) => {
    if (error !== null) {
      console.log(`exec error: ${error}`);
    }
  });

if (process.platform === "win32")
  exec("bin.bat", (error, _, __) => {
    if (error !== null) {
      console.log(`exec error: ${error}`);
    }
  });
