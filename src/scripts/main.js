$(document).ready(function () {
  carousel();

  // $(".donate-tilt").tilt();
  // $(".slogan-tilt").tilt();

  // scroll 回到頂端按鈕
  $(".btn-goTop").on("click", (e) => {
    e.preventDefault();

    $("html, body").animate({ scrollTop: 0 }, 1000);
  });

  // scroll 到斗內
  scrollToDonate(".btn-goDonate");
  scrollToDonate(".nav-donate");

  function scrollToDonate(elementName) {
    $(elementName).on("click", (e) => {
      e.preventDefault();
      const scrollTop = $(".section-donate").offset().top - 100;

      $("html, body").animate({ scrollTop }, 1000);
    });
  }

  // scroll 快速連結
  function scrollToSectionEvent(elementName, sectionName) {
    $(elementName).on("click", (e) => {
      e.preventDefault();
      const scrollTop = $(sectionName).offset().top - 100;

      $("html, body").animate({ scrollTop }, 0);
    });
  }

  scrollToSectionEvent(".link-policy", ".section-policy");
  scrollToSectionEvent(".link-news", ".section-news");
  scrollToSectionEvent(".link-donate", ".section-donate");

  // donate 彈出視窗
  const main = $("main");
  const popout = $(".popout");
  const btnClose = $(".btn-close");
  const btnNext = $(".btn-next");
  const btnSubmit = $(".btn-submit");
  const popoutRule = $(".donate-rule");
  const form = $(".donate-form");

  $(".btn-donate").on("click", (e) => {
    const dollar = e.target.getAttribute("dollar");

    $("html, body").css("overflow", "hidden");
    main.css("filter", "blur(5px)");
    popout.removeClass("hidden").addClass("flex");

    btnNext.on("click", () => {
      popoutRule.removeClass("flex").addClass("hidden");
      form.removeClass("hidden").addClass("flex");
      form.find('input[name="dollar"]').val(dollar);
    });

    closePopout(btnClose);
    closePopout(btnSubmit);
  });

  function closePopout(element) {
    element.on("click", () => {
      popout.removeClass("flex").addClass("hidden");
      main.css("filter", "blur(0)");

      $("html, body").css("overflow", "auto");
      form.removeClass("flex").addClass("hidden");
      popoutRule.removeClass("hidden").addClass("flex");
    });
  }
});

function carousel() {
  const prev = $(".carousel-prev");
  const next = $(".carousel-next");
  const item = $(".carousel-item");
  const pages = $(".carousel-pagination li");
  const policyNumber = $(".policy-number");
  const policyContent = $(".policy-content");

  let currentIndex = 0;

  next.on("click", () => {
    if (currentIndex >= 2) return;
    currentIndex++;
    carouselStyleChange();
  });

  prev.on("click", () => {
    if (currentIndex <= 0) return;
    currentIndex--;
    carouselStyleChange();
  });

  function carouselStyleChange() {
    policyNumber.fadeOut(10);
    policyNumber.fadeIn(600);
    policyNumber.text(`0${currentIndex + 1}`);

    policyContent.fadeOut(10);
    policyContent.html(policyContentText[currentIndex]);
    policyContent.fadeIn(1000);

    item.css("transform", `translateX(-${100 * currentIndex}%) scale(0.925)`);
    item.removeClass("policy-mainItem");

    $(`.carousel-item-${currentIndex + 1}`)
      .addClass("policy-mainItem")
      .css("transform", `translateX(-${100 * currentIndex}%)`);

    pages.removeClass("bg-black");
    $(`.carousel-pagination-${currentIndex + 1}`).addClass("bg-black");
  }
}

const policyContentText = [
  `
    <h3 class="hidden xl:block text-black text-2xl font-bold">
      為毛孩子謀福利！推動寵物醫療保障方案
    </h3>
    <h3 class="xl:hidden mt-2 md:m-0 text-black text-sm md:text-base">
      為毛孩子謀福利！<br />
      推動寵物醫療保障方案
    </h3>
    <div
      class="flex flex-col gap-1 md:gap-3 mt-4 md:mt-6 xl:mt-0 xl:-ml-3 text-[10px] md:text-sm xl:text-base"
    >
      <p class="flex items-center gap-1 xl:gap-x-2 text-gray">
        <img
          class="w-5 h-5 xl:w-6 xl:h-6 -rotate-45"
          src="./src/images/logo-paw.svg"
          alt="paw"
        />
        設立
        <span class="text-pink-mid">100,000,000</span>
        醫療基金
      </p>
      <p class="flex items-center gap-1 xl:gap-x-2 text-gray">
        <img
          class="w-5 h-5 xl:w-6 xl:h-6 -rotate-45"
          src="./src/images/logo-paw.svg"
          alt="paw"
        />
        提供 <span class="text-pink-mid">20,000</span> 醫療補助
      </p>
      <p class="flex items-center gap-1 xl:gap-x-2 text-gray">
        <img
          class="w-5 h-5 xl:w-6 xl:h-6 -rotate-45"
          src="./src/images/logo-paw.svg"
          alt="paw"
        />
        合作
        <span class="text-pink-mid">200+</span> 動物醫院
      </p>
    </div>`,
  `
    <h3 class="hidden xl:block text-black text-2xl font-bold">
      打造休閒天堂！推廣寵物休閒與娛樂場所
    </h3>
    <h3 class="xl:hidden mt-2 md:m-0 text-black text-sm md:text-base">
      打造休閒天堂！<br />
      推廣寵物休閒與娛樂場所
    </h3>
    <div
      class="flex flex-col gap-1 md:gap-3 mt-4 md:mt-6 xl:mt-0xl:-ml-3 text-[10px] md:text-sm xl:text-base"
    >
      <p class="flex items-center gap-1 xl:gap-x-2 text-gray">
        <img
          class="w-5 h-5 xl:w-6 xl:h-6 -rotate-45"
          src="./src/images/logo-paw.svg"
          alt="paw"
        />
        撥款
        <span class="text-pink-mid">500,000,000</span
        >建立公園
      </p>
      <p class="flex items-center gap-1 xl:gap-x-2 text-gray">
        <img
          class="w-5 h-5 xl:w-6 xl:h-6 -rotate-45"
          src="./src/images/logo-paw.svg"
          alt="paw"
        />
        合作
        <span class="text-pink-mid">500+</span>
        寵物友善店家
      </p>
      <p class="flex items-center gap-1 xl:gap-x-2 text-gray">
        <img
          class="w-5 h-5 xl:w-6 xl:h-6 -rotate-45"
          src="./src/images/logo-paw.svg"
          alt="paw"
        />
        每年舉辦
        <span class="text-pink-mid">5+ </span> 大型寵物活動
      </p>
    </div>`,
  `
  <h3 class="hidden xl:block text-black text-2xl font-bold">
    推廣寵物飼養教育，讓愛更加專業
  </h3>
  <h3 class="xl:hidden mt-2 md:m-0 text-black text-sm md:text-base">
    推廣寵物飼養教育<br />
    讓愛更加專業
  </h3>
  <div
    class="flex flex-col gap-1 md:gap-3 mt-4 md:mt-6 xl:mt-0 xl:-ml-3 text-[10px] md:text-sm xl:text-base"
  >
    <p class="flex items-center gap-1 xl:gap-x-2 text-gray">
      <img
        class="w-5 h-5 xl:w-6 xl:h-6 -rotate-45"
        src="./src/images/logo-paw.svg"
        alt="paw"
      />
      建立<span class="text-pink-mid">5</span
      >大城市飼養教育中心
    </p>
    <p class="flex items-center gap-1 xl:gap-x-2 text-gray">
      <img
        class="w-5 h-5 xl:w-6 xl:h-6 -rotate-45"
        src="./src/images/logo-paw.svg"
        alt="paw"
      />
      提供
      <span class="text-pink-mid">10,000+</span>
      市民免費課程
    </p>
    <p class="flex items-center gap-1 xl:gap-x-2 text-gray">
      <img
        class="w-5 h-5 xl:w-6 xl:h-6 -rotate-45"
        src="./src/images/logo-paw.svg"
        alt="paw"
      />
      製作寵物教育手冊及課程
    </p>
  </div>`,
];
