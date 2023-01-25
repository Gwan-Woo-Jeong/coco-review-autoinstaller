import fs from "fs";
import constants from "./constants.js";

const pageDir = "./pages";
const layoutDir = `${pageDir}/layouts`;
if (!fs.existsSync("memo.txt")) {
  fs.writeFile("memo.txt", "", (err) => {
    if (err) throw err;
  });
}

if (!fs.existsSync(pageDir)) {
  fs.promises
    .mkdir(layoutDir, { recursive: true })
    .then(() => {
      for (let review in constants["reviews"]) {
        fs.writeFile(
          `${pageDir}/${constants["reviews"][review]["html"]}`,
          "",
          (err) => {
            if (err) throw err;
          }
        );
      }
    })
    .then(() => {
      for (let layout in constants["layouts"]) {
        fs.writeFile(
          `${pageDir}/layouts/${constants["layouts"][layout]["html"]}`,
          "",
          (err) => {
            if (err) throw err;
          }
        );
      }
    });
}
