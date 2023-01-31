import fs from "fs";
import {
  addComments,
  createElementFromHTML,
  DOMtoString,
  unwrapHTML,
} from "../utils/dom.js";

const reviewName = "리뷰 작성 팝업";

export const popUp = async (buildDir, dom, installCode) => {
  const document = dom.window.document;

  const script = createElementFromHTML(installCode.script, dom);

  const body = document.querySelector("body");

  if (body) {
    body.appendChild(script);
    addComments(reviewName, script, dom, false, true);
    fs.writeFile(buildDir, unwrapHTML(dom.serialize()), (err) => {
      if (err) throw err;
    });
  } else {
    fs.writeFile(
      buildDir,
      unwrapHTML(
        dom.serialize() +
          addComments(reviewName, DOMtoString(script), dom, false, true)
      ),
      (err) => {
        if (err) throw err;
      }
    );
  }
};
