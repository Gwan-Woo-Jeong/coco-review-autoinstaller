import { createRequire } from "module";
const require = createRequire(import.meta.url);
const beautify_html = require("js-beautify").html;

const insertBefore = (referenceNode, newNode) => {
  referenceNode.parentNode.insertBefore(newNode, referenceNode);
};

const insertAfter = (referenceNode, newNode) => {
  referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
};

const createElementFromHTML = (htmlString, dom) => {
  const document = dom.window.document;
  const element = document.createElement("div");
  element.innerHTML = htmlString.trim();
  return element.firstChild;
};

const DOMtoString = (element, dom) => {
  const document = dom.window.document;
  const temp = document.createElement("div");
  temp.appendChild(element);
  return temp.innerHTML;
};

const addComments = (reviewName, target, dom, isCustom, isScript) => {
  if (typeof target === "string") {
    const start = `<!-- * 코코리뷰 [${reviewName}]${
      isCustom ? " : 커스텀 코드" : isScript ? " : 스크립트 코드" : ""
    } start -->`;
    const end = "<!-- * end  -->";

    return start + target + end;
  } else {
    const start = dom.window.document.createComment(
      ` * 코코리뷰 [${reviewName}]${
        isCustom ? " : 커스텀 코드" : isScript ? " : 스크립트 코드" : ""
      } start `
    );
    const end = dom.window.document.createComment(" * end ");

    insertBefore(target, start);
    insertAfter(target, end);
  }
};

const trimHTML = (htmlString, dom) => {
  // remove unnecessary HTML tags
  let html = false;
  let head = false;
  let body = false;

  htmlString = htmlString.replace("<html>", () => {
    html = true;
    return "";
  });
  if (html) {
    htmlString = htmlString.replace("</html>", "");
  }

  htmlString = htmlString.replace("<head>", () => {
    head = true;
    return "";
  });
  if (head) {
    htmlString = htmlString.replace("</head>", "");
  }

  htmlString = htmlString.replace("<body>", () => {
    body = true;
    return "";
  });
  if (body) {
    htmlString = htmlString.replace("</body>", "");
  }

  // decode HTML entities
  var txt = dom.window.document.createElement("textarea");
  txt.innerHTML = htmlString;

  return beautify_html(txt.value);
};

export {
  insertBefore,
  insertAfter,
  createElementFromHTML,
  addComments,
  trimHTML,
  DOMtoString,
};

export default {
  insertBefore,
  insertAfter,
  createElementFromHTML,
  addComments,
  trimHTML,
  DOMtoString,
};
