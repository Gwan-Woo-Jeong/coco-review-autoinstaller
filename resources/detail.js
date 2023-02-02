import fs from "fs";
import {
  addComments,
  createElementFromHTML,
  DOMtoString,
  trimHTML,
} from "../utils/dom.js";

const reviewName = "상품 상세 위젯";
const reviewName2 = "리뷰 수 표시";

export const detail = (buildDir, dom, installCode) => {
  const document = dom.window.document;
  const detailReview = createElementFromHTML(installCode.detail.custom, dom);

  const prdReviewNode = document.querySelector("#prdReview .board");

  if (prdReviewNode === null) {
    return console.error(
      `[${reviewName}] id=prdReview class=board인 요소를 찾을 수 없습니다.`
    );
  }

  prdReviewNode.replaceChildren(detailReview);
  addComments(reviewName, detailReview, dom);

  const allTags = document.getElementsByTagName("*");

  const reviewCounts = [];

  for (let i = 0; i < allTags.length; i++) {
    if (allTags[i].textContent === "{$review_count}") {
      reviewCounts.push(allTags[i]);
    }
  }

  const appendCountCustom = (arr) => {
    for (let i = 0; i < arr.length; i++) {
      arr[i].textContent = "";
      const countReviewCustom = createElementFromHTML(
        installCode.count.custom,
        dom
      );

      arr[i].appendChild(countReviewCustom);
      addComments(reviewName2, countReviewCustom, dom, true);
    }
  };

  if (reviewCounts.length > 0) {
    appendCountCustom(reviewCounts);
  } else {
    const useReviews = document.querySelectorAll(
      "[href='#prdReview'], [name='use_review']"
    );

    if (useReviews.length === 0) {
      return console.error(
        `[${reviewName2}] 리뷰 수를 표시할 요소를 찾을 수 없습니다.`
      );
    }

    appendCountCustom(useReviews);
  }

  const countReviewScript = createElementFromHTML(
    installCode.count.script,
    dom
  );

  const body = document.querySelector("body");

  if (body) {
    body.appendChild(countReviewScript);
    addComments(reviewName2, countReviewScript, dom, false, true);
    fs.writeFile(buildDir, trimHTML(dom.serialize(), dom), (err) => {
      if (err) throw err;
    });
  } else {
    fs.writeFile(
      buildDir,
      trimHTML(
        dom.serialize() +
          addComments(
            reviewName2,
            DOMtoString(countReviewScript),
            dom,
            false,
            true
          ),
        dom
      ),
      (err) => {
        if (err) throw err;
      }
    );
  }
};
