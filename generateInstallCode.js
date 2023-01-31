import constants from "./constants.js";

export const generateInstallCode = (
  reviewType,
  serviceKey,
  shopNo,
  isRefrence
) => {
  if (reviewType === constants.reviews.form.type) {
    if (isRefrence) {
      return `

      <!--
      [리뷰 작성 폼]

      설치 파일 경로:
       1. 상품후기 쓰기(board/product/write.html)
      -->

      <!-- * 코코리뷰 [리뷰 작성 폼] start -->
        <div>
            <iframe id="cocoWriteIframe" style="width:100%; height: 0px;" frameBorder="0"></iframe>
            <script id="cocoWrite" type="text/javascript" data-service="coco-write" src="https://co-co.co.kr/dist/v3-write-js.js?serviceKey=${serviceKey}&shopNo=${shopNo}}"></script>
        </div>
      <!-- * end -->
      `;
    }

    return {
      script: null,
      custom: `
        <div>
            <iframe id="cocoWriteIframe" style="width:100%; height: 0px;" frameBorder="0"></iframe>
            <script id="cocoWrite" type="text/javascript" data-service="coco-write" src="https://co-co.co.kr/dist/v3-write-js.js?serviceKey=${serviceKey}&shopNo=${shopNo}}"></script>
        </div>
      `,
    };
  }

  if (reviewType === constants.reviews.all.type) {
    if (isRefrence) {
      return `

      <!--
      [전체 리뷰 위젯]

      설치 파일 경로:
       1. 상품후기 목록(board/product/list.html)
      -->

      <!-- * 코코리뷰 [전체 리뷰 위젯] start -->
      <div>
          <iframe id="cocoTotalListIframe" style="width:100%; height: 0px;" frameBorder="0"></iframe>
          <script id="cocoTotalList" type="text/javascript" data-service="coco-total-list" src="https://co-co.co.kr/dist/v3-total-list-js.js?serviceKey=${serviceKey}&shopNo=${shopNo}"></script>
      </div>
      <!-- * end -->
      `;
    }

    return {
      script: null,
      custom: `
    <div>
        <iframe id="cocoTotalListIframe" style="width:100%; height: 0px;" frameBorder="0"></iframe>
        <script id="cocoTotalList" type="text/javascript" data-service="coco-total-list" src="https://co-co.co.kr/dist/v3-total-list-js.js?serviceKey=${serviceKey}&shopNo=${shopNo}"></script>
    </div>
    `,
    };
  }

  if (reviewType === constants.reviews.best.type) {
    if (isRefrence) {
      return `

      <!--
      [베스트 리뷰 위젯]

      설치 파일 경로:
      1. 메인화면 index.html
      2. 상품후기 목록: board/product/list.html
      -->

      <!-- * 코코리뷰 [베스트 리뷰 위젯] start -->
      <div>
          <iframe id="cocoBestIframe" style="width:100%; height: 0px;" frameBorder="0"></iframe>
          <script id="cocoBest" type="text/javascript" data-service="coco-best" src="https://co-co.co.kr/dist/v3-best-js.js?serviceKey=${serviceKey}&shopNo=${shopNo}"></script>
      </div>
      <!-- // end -->
      `;
    }

    return {
      script: null,
      custom: `
    <div>
        <iframe id="cocoBestIframe" style="width:100%; height: 0px;" frameBorder="0"></iframe>
        <script id="cocoBest" type="text/javascript" data-service="coco-best" src="https://co-co.co.kr/dist/v3-best-js.js?serviceKey=${serviceKey}&shopNo=${shopNo}"></script>
    </div>
    `,
    };
  }

  if (reviewType === constants.reviews.allBest.type) {
    if (isRefrence) {
      return `

      <!--
      [베스트 리뷰 + 전체 리뷰 위젯]

      설치 파일 경로:
      1. 메인화면 index.html
      2. 상품후기 목록: board/product/list.html
      -->

      <!-- * 코코리뷰 [베스트 리뷰 위젯] start -->
      <div>
          <iframe id="cocoBestIframe" style="width:100%; height: 0px;" frameBorder="0"></iframe>
          <script id="cocoBest" type="text/javascript" data-service="coco-best" src="https://co-co.co.kr/dist/v3-best-js.js?serviceKey=${serviceKey}&shopNo=${shopNo}"></script>
      </div>
      <!-- // end -->


      <!-- * 코코리뷰 [전체 리뷰 위젯] start -->
      <div>
          <iframe id="cocoTotalListIframe" style="width:100%; height: 0px;" frameBorder="0"></iframe>
          <script id="cocoTotalList" type="text/javascript" data-service="coco-total-list" src="https://co-co.co.kr/dist/v3-total-list-js.js?serviceKey=${serviceKey}&shopNo=${shopNo}"></script>
      </div>
      <!-- * end -->
      `;
    }

    return {
      script: null,
      custom: `
    <div>
      <div>
          <iframe id="cocoBestIframe" style="width:100%; height: 0px;" frameBorder="0"></iframe>
          <script id="cocoBest" type="text/javascript" data-service="coco-best" src="https://co-co.co.kr/dist/v3-best-js.js?serviceKey=${serviceKey}&shopNo=${shopNo}"></script>
      </div>
      <div>
          <iframe id="cocoTotalListIframe" style="width:100%; height: 0px;" frameBorder="0"></iframe>
          <script id="cocoTotalList" type="text/javascript" data-service="coco-total-list" src="https://co-co.co.kr/dist/v3-total-list-js.js?serviceKey=${serviceKey}&shopNo=${shopNo}"></script>
      </div>
    </div>
    `,
    };
  }

  if (reviewType === constants.reviews.detail.type) {
    if (isRefrence) {
      return `

      <!--
      [상품 상세 위젯]

      설치 파일 경로:
      1. 상품상세(product/detail.html)
      -->

      <!-- * 코코리뷰 [상품 상세 위젯] start -->
      <div>
          <iframe id="cocoListIframe" style="width:100%; height: 100%;" frameBorder="0"></iframe>
          <script id="cocoList" type="text/javascript" src="https://co-co.co.kr/dist/v3-list-js.js?serviceKey=${serviceKey}&shopNo=${shopNo}"></script>
      </div>
      <!-- * end -->

      <!--
      [리뷰 수 표시]

      설치 파일 경로:
      1. 상품상세(product/detail.html)
      -->

      <!-- * 코코리뷰 [리뷰 수 표시] : 스크립트 코드 start --><script type="text/javascript" id="cocoReviewCount" data-service="coco" src="https://co-co.co.kr/dist/v3-review-count-js.js?serviceKey=${serviceKey}&shopNo=${shopNo}"></script> <!-- * end -->
      
      <!-- * 코코리뷰 [리뷰 수 표시] : 커스텀 코드 start --> <span class="coco-review-count" data-product-no="{$product_no}"></span> <!-- * end -->

`;
    }

    return {
      detail: {
        script: null,
        custom: `
    <div>
        <iframe id="cocoListIframe" style="width:100%; height: 100%;" frameBorder="0"></iframe>
        <script id="cocoList" type="text/javascript" src="https://co-co.co.kr/dist/v3-list-js.js?serviceKey=${serviceKey}&shopNo=${shopNo}"></script>
    </div>
`,
      },
      count: {
        script: `<script type="text/javascript" id="cocoReviewCount" data-service="coco" src="https://co-co.co.kr/dist/v3-review-count-js.js?serviceKey=${serviceKey}&shopNo=${shopNo}"></script>`,
        custom: `<span class="coco-review-count" data-product-no="{$product_no}"></span>`,
      },
    };
  }

  if (reviewType === constants.reviews.stars.type) {
    if (isRefrence) {
      return `
      
      <!--
      [상품 목록 별점]

      설치 파일 경로:
      1. 메인화면 index.html
      2-1. 상품 리스트: product/list.html 
      2-2. 상품 리스트(썸네일): product/list_thumb.html
      2-3. 상품 리스트(갤러리): product/list_gallery.html
      3. 상품 검색: product/search.html
      -->

      <!-- * 코코리뷰 [상품 목록 별점] : 스크립트 코드 start --> <script type="text/javascript" id="cocoProductRate" data-service="coco" src="https://co-co.co.kr/dist/v3-product-rate-js.js?serviceKey=${serviceKey}&shopNo=${shopNo}"></script> <!-- * end -->
      
      <!-- * 코코리뷰 [상품 목록 별점] : 커스텀 코드 start --> <i class="coco-product-point" data-product-no="{$product_no}"></i> <!-- * end -->`;
    }

    return {
      script: `<script type="text/javascript" id="cocoProductRate" data-service="coco" src="https://co-co.co.kr/dist/v3-product-rate-js.js?serviceKey=${serviceKey}&shopNo=${shopNo}"></script>`,
      custom: `<i class="coco-product-point" data-product-no="{$product_no}"></i>`,
    };
  }

  if (reviewType === constants.reviews.popUp.type) {
    if (isRefrence) {
      return `

      <!--
      [리뷰 작성 팝업]

      설치 파일 경로:
      1. 메인화면:
      index.html
      2. 주문내역조회:
      마이쇼핑(myshop) / 나의 주문내역(order) / 주문내역조회(list.html)
      -->
      
      <!-- * 코코리뷰 [리뷰작성 팝업] start --> <script id="cocoPopupOrderList" type="text/javascript" data-service="coco" src="https://co-co.co.kr/dist/v3-popup-order-list-js.js?serviceKey=${serviceKey}&shopNo=${shopNo}"></script> <!-- * end -->`;
    }

    return {
      script: `<script id="cocoPopupOrderList" type="text/javascript" data-service="coco" src="https://co-co.co.kr/dist/v3-popup-order-list-js.js?serviceKey=${serviceKey}&shopNo=${shopNo}"></script>`,
      custom: null,
    };
  }
};
