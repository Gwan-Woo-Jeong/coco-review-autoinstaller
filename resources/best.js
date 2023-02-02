import fs from "fs";
import {
  addComments,
  createElementFromHTML,
  insertAfter,
  trimHTML,
} from "../utils/dom.js";

const reviewName = "베스트 리뷰";

export const best = async (buildDir, dom, installCode) => {
  const document = dom.window.document;
  const newElement = createElementFromHTML(installCode.custom, dom);

  const referenceNode = document.querySelector("[module='board_title_4']");

  if (referenceNode === null) {
    return console.error(`[${reviewName}] 자동 설치를 진행할 수 없습니다.`);
  }

  insertAfter(referenceNode, newElement);

  addComments(reviewName, newElement, dom);

  fs.writeFile(buildDir, trimHTML(dom.serialize(), dom), (err) => {
    if (err) throw err;
  });
};
