$(document).ready(function () {
  $(".donate-tilt").tilt();
  $(".slogan-tilt").tilt();

  // scroll 回到頂端按鈕
  $(".btn-goTop").on("click", (e) => {
    e.preventDefault();

    $("html, body").animate({ scrollTop: 0 }, 1000);
  });

  // scroll 到斗內
  function scrollToDonate(elementName) {
    $(elementName).on("click", (e) => {
      e.preventDefault();
      const scrollTop = $(".section-donate").offset().top - 100;

      $("html, body").animate({ scrollTop }, 1000);
    });
  }

  scrollToDonate(".btn-goDonate");
  scrollToDonate(".nav-donate");

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
  const popoutDonate = $(".popout-donate");
  const donateRule = $(".popout-donate-rule");
  const donateForm = $(".popout-donate-form");
  const donateHint = $(".popout-donate-hint");
  const btnClose = $(".btn-close");
  const btnSubmit = $(".btn-submit");

  $(".btn-donate").on("click", (e) => {
    stopScroll();

    const dollar = e.target.getAttribute("dollar");
    popoutDonate.removeClass("hidden").addClass("flex");

    $(".btn-next").on("click", () => {
      donateRule.removeClass("flex").addClass("hidden");
      donateForm.removeClass("hidden").addClass("flex");
      donateForm.find('input[name="dollar"]').val(dollar);
    });

    $(".btn-submit").on("click", () => {
      donateForm.removeClass("flex").addClass("hidden");
      donateHint.removeClass("hidden").addClass("flex");
    });

    closePopout(btnClose, popoutDonate, donateRule, donateHint);
  });

  // mail 彈出視窗
  const popoutMail = $(".popout-mail");
  const mailForm = $(".popout-mail-form");
  const mailHint = $(".popout-mail-hint");

  $(".btn-mail").on("click", () => {
    stopScroll();

    popoutMail.removeClass("hidden").addClass("flex");

    btnSubmit.on("click", () => {
      mailForm.removeClass("flex").addClass("hidden");
      mailHint.removeClass("hidden").addClass("flex");
    });

    closePopout(btnClose, popoutMail, mailForm, mailHint);
  });

  function closePopout(btn, block, dialog_1, dialog_2) {
    btn.on("click", () => {
      recoverScroll();

      block.removeClass("flex").addClass("hidden");
      dialog_2.removeClass("flex").addClass("hidden");
      dialog_1.removeClass("hidden").addClass("flex");
    });
  }

  // mail 送出
  $(".btn-mail-submit").on("click", () => {
    stopScroll();
    $("body").append(mailPopoutElement);

    $(".btn-close-hint").on("click", () => {
      $(".mail-hint").remove();
      recoverScroll();
    });
  });

  carousel();

  function eventStopper(e) {
    e.preventDefault();
  }

  // 禁止滾動
  function stopScroll() {
    main.css("filter", "blur(5px)");
    window.addEventListener("wheel", eventStopper, { passive: false });
    window.addEventListener("keydown", eventStopper);
  }
  // 恢復滾動
  function recoverScroll() {
    main.css("filter", "blur(0)");
    window.removeEventListener("wheel", eventStopper, { passive: false });
    window.removeEventListener("keydown", eventStopper);
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

const mailPopoutElement = `
  <div class="mail-hint fixed top-0 z-50 flex justify-center items-center px-4 w-full h-full bg-[rgba(50,50,50,0.25)]">
    <div class="flex flex-col p-6 max-w-[600px] bg-white border-[1px] border-slate-light rounded-md">
      <button class="btn-close-hint self-end">
        <img src="./src/images/btn-close.svg" alt="button-close" />
      </button>
      <p class="text-pink text-xl font-bold text-center">感謝您填寫服務信箱</p>
      <p class="mt-4 mb-4 text-black text-lg text-center">
        我們已成功收到您的訊息，請靜待回覆。
      </p>
    </div>
  </div>`;
