import fs from "fs";

const reviewTypes = [
  "리뷰_작성_폼",
  "전체_리뷰",
  "전체_리뷰+베스트_리뷰",
  "상품_상세_리뷰",
  "상품_목록_별점",
  "베스트_리뷰",
  "리뷰_작성_팝업",
];

const layoutTypes = ["메인_레이아웃", "공통_레이아웃"];

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
    .then(() =>
      reviewTypes.forEach((review) =>
        fs.writeFile(`${pageDir}/${review}.html`, "", (err) => {
          if (err) throw err;
        })
      )
    )
    .then(() => {
      layoutTypes.forEach((layout) =>
        fs.writeFile(`${layoutDir}/${layout}.html`, "", (err) => {
          if (err) throw err;
        })
      );
    });
}
