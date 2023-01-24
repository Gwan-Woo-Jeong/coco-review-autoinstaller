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

const addComments = (reviewName, target, dom, isCustom, isScript) => {
  const start = dom.window.document.createComment(
    ` * 코코리뷰 [${reviewName}]${
      isCustom ? " : 커스텀 코드" : isScript ? " : 스크립트 코드" : ""
    } start `
  );
  const end = dom.window.document.createComment(" * end ");

  insertBefore(target, start);
  insertAfter(target, end);
};

const unwrapHTML = (htmlString) => {
  htmlString = htmlString.replace("<html>", "");
  htmlString = htmlString.replace("</html>", "");
  htmlString = htmlString.replace("<head>", "");
  htmlString = htmlString.replace("</head>", "");
  htmlString = htmlString.replace("<body>", "");
  htmlString = htmlString.replace("</body>", "");
  return htmlString;
};

export {
  insertBefore,
  insertAfter,
  createElementFromHTML,
  addComments,
  unwrapHTML,
};

export default {
  insertBefore,
  insertAfter,
  createElementFromHTML,
  addComments,
  unwrapHTML,
};
