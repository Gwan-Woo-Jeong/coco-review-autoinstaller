import prompts from "prompts";
import fs from "fs";
import constants from "./constants.js";
import resources from "./resources.js";
import { dirname } from "path";
import { fileURLToPath } from "url";
import { createRequire } from "module";
import { generateInstallCode } from "./generateInstallCode.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const require = createRequire(import.meta.url);
const { JSDOM } = require("jsdom");

const memo = fs.readFileSync("memo.txt", "utf8").toString();

const buildDir = "./build";
const installCodeFileName = "설치_코드.html";

(async () => {
  const response = await prompts([
    {
      type: "text",
      name: "serviceKey",
      message: "코코리뷰 쇼핑몰 서비스키를 입력해주세요",
      initial: memo.split("/")[0] || "",
    },
    {
      type: "text",
      name: "shopNo",
      message: "코코리뷰를 설치할 쇼핑몰 번호를 입력해주세요",
      initial: memo.split("/")[1] || "",
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
  ]);

  if (response.serviceKey && response.shopNo) {
    fs.writeFile(
      "memo.txt",
      response.serviceKey + "/" + response.shopNo,
      (err) => {
        if (err) throw err;
      }
    );
  }

  if (response.reviews) {
    if (!fs.existsSync(buildDir)) {
      fs.mkdirSync(buildDir);
    }

    const pad2 = (n) => (n < 10 ? "0" + n : n);
    const now = new Date();
    const nowDate = `${now.getFullYear().toString()}-${pad2(
      now.getMonth() + 1
    )}-${pad2(now.getDate())}_${now.getHours()}:${pad2(
      now.getMinutes()
    )}:${pad2(now.getSeconds())}`;

    const currentBuildDir = `build/${nowDate}`;
    fs.mkdirSync(`./${currentBuildDir}/origin`, { recursive: true });
    fs.mkdirSync(`./${currentBuildDir}/new`, { recursive: true });

    fs.writeFile(`${buildDir}/${nowDate}/${installCodeFileName}`, "", (err) => {
      if (err) throw err;
    });

    response.reviews.forEach(async (review) => {
      const reviewType = constants[review];
      // origin 복사
      fs.copyFile(
        reviewType.htmlPath,
        `${`${__dirname}/build/${nowDate}/origin`}/${reviewType.html}`,
        (err) => {
          if (err) throw err;
        }
      );

      // 설치 코드
      fs.appendFileSync(
        `${__dirname}/build/${nowDate}/${installCodeFileName}`,
        generateInstallCode(review, response.serviceKey, response.shopNo, true)
      );

      // 자동 설치 실행
      const dom = await JSDOM.fromFile(reviewType.htmlPath);
      resources[review](
        currentBuildDir,
        dom,
        review,
        response.serviceKey,
        response.shopNo
      );
    });
  }
})();
