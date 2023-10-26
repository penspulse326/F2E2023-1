$(document).ready(function () {
  // scroll 回到頂端按鈕
  $(".btn-goTop").on("click", (e) => {
    e.preventDefault();

    $("html, body").animate(
      {
        scrollTop: 0,
      },
      1000
    );
  });

  // scroll 到斗內
  $(".btn-goDonate").on("click", (e) => {
    e.preventDefault();

    $("html, body").animate(
      {
        scrollTop: $(".section-donate").offset().top - 100,
      },
      1000
    );
  });

  // scroll 快速連結
  function scrollToSectionEvent(elementName, sectionName) {
    $(elementName).on("click", (e) => {
      e.preventDefault();

      $("html, body").animate(
        {
          scrollTop: $(sectionName).offset().top - 100,
        },
        10
      );
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

  $(".btn-donate").on("click", () => {
    $("html, body").css("overflow", "hidden");
    main.css("filter", "blur(5px)");
    popout.removeClass("hidden").addClass("flex");

    btnNext.on("click", () => {
      popoutRule.removeClass("flex").addClass("hidden");
      form.removeClass("hidden").addClass("flex");
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
