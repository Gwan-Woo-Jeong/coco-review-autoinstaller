import { dirname } from "path";
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default {
  form: {
    type: "form",
    html: "리뷰_작성_폼.html",
    htmlPath: `${__dirname}/pages/리뷰_작성_폼.html`,
    js: "form.js",
    jsPath: `${__dirname}/resources/form.js`,
  },
  all: {
    type: "all",
    html: "전체_리뷰.html",
    htmlPath: `${__dirname}/pages/전체_리뷰.html`,
    js: "all.js",
    jsPath: `${__dirname}/resources/all.js`,
  },
  best: {
    type: "best",
    html: "베스트_리뷰.html",
    htmlPath: `${__dirname}/pages/베스트_리뷰.html`,
    js: "best.js",
    jsPath: `${__dirname}/resources/best.js`,
  },
  count: {
    type: "count",
    html: "리뷰_수_표시.html",
    htmlPath: `${__dirname}/pages/리뷰_수_표시.html`,
    js: "count.js",
    jsPath: `${__dirname}/resources/count.js`,
  },
  detail: {
    type: "detail",
    html: "상품_상세_리뷰.html",
    htmlPath: `${__dirname}/pages/상품_상세_리뷰.html`,
    js: "detail.js",
    jsPath: `${__dirname}/resources/detail.js`,
  },
  stars: {
    type: "stars",
    html: "상품_목록_별점.html",
    htmlPath: `${__dirname}/pages/상품_목록_별점.html`,
    js: "stars.js",
    jsPath: `${__dirname}/resources/stars.js`,
  },
  popUp: {
    type: "popUp",
    html: "리뷰_작성_팝업.html",
    htmlPath: `${__dirname}/pages/리뷰_작성_팝업.html`,
    js: "popUp.js",
    jsPath: `${__dirname}/resources/popUp.js`,
  },
};
