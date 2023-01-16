const prompts = require("prompts");
const envfile = require("envfile");
const fs = require("fs");
const sourcePath = ".env";

const questions = [
  {
    type: "text",
    name: "id",
    message:
      "코코리뷰 쇼핑몰 아이디를 입력해주세요 (공백일 경우, 기존 아이디 사용)",
  },
  {
    type: "multiselect",
    name: "reviews",
    message: "설치할 리뷰를 선택해주세요",
    choices: [
      {
        title: "리뷰 작성 폼",
        value: "form",
      },
      {
        title: "전체 리뷰",
        value: "all",
      },
      {
        title: "베스트 리뷰",
        value: "best",
      },
      {
        title: "상품 상세 리뷰",
        value: "detail",
      },
      {
        title: "리뷰 수 표시",
        value: "count",
      },
      {
        title: "상품 목록 별점",
        value: "stars",
      },
      {
        title: "리뷰 작성 팝업",
        value: "popUp",
      },
    ],
    hint: "- 스페이스바로 선택한 후, 엔터로 제출합니다",
    instructions: false,
    min: 1,
  },
];

(async () => {
  const response = await prompts(questions);

  if (response.id) {
    let parsedFile = envfile.parse(sourcePath);
    parsedFile.COCO_REVIEW_SHOP_ID = response.id;
    fs.writeFileSync("./.env", envfile.stringify(parsedFile));
  }

  if (response.reviews) {
    response.reviews.forEach((review) =>
      fs.readFile(`./resources/${review}.js`, (_, data) =>
        eval(data.toString("utf-8"))
      )
    );
  }
})();
