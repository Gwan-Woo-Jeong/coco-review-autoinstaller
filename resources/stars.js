import fs from "fs";
import {
  addComments,
  createElementFromHTML,
  insertAfter,
  trimHTML,
} from "../utils/dom.js";

const reviewName = "상품 목록 별점";

export const stars = async (buildDir, dom, installCode) => {
  const document = dom.window.document;

  const specTags = document.querySelectorAll(".spec");

  if (specTags.length === 0) {
    return console.error(
      `[${reviewName}] class=spec인 요소를 찾을 수 없습니다.`
    );
  }

  for (let i = 0; i < specTags.length; i++) {
    const starsCustomCode = createElementFromHTML(installCode.custom, dom);
    insertAfter(specTags[i], starsCustomCode);
    addComments(reviewName, starsCustomCode, dom, true);
  }

  fs.writeFile(buildDir, trimHTML(dom.serialize(), dom), (err) => {
    if (err) throw err;
  });
};
