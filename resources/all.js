import fs from "fs";
import {
  addComments,
  createElementFromHTML,
  insertAfter,
} from "../utils/dom.js";

const reviewName = "전체 리뷰";

export const all = async (buildDir, dom, installCode) => {
  const document = dom.window.document;
  const newElement = createElementFromHTML(installCode.custom, dom);

  const referenceNode = document.querySelector("[module='board_title_4']");

  if (referenceNode === null) {
    return console.error(`[${reviewName}] 자동 설치를 진행할 수 없습니다.`);
  }

  insertAfter(referenceNode, newElement);

  addComments(reviewName, newElement, dom);

  fs.writeFile(buildDir, dom.serialize(), (err) => {
    if (err) throw err;
  });
};
