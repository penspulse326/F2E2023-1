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

  // scroll 快速連結
  function scrollToSectionEvent(elementName, sectionName) {
    $(elementName).on("click", (e) => {
      e.preventDefault();

      $("html, body").animate(
        {
          scrollTop: $(sectionName).offset().top - 100,
        },
        1000
      );
    });
  }

  scrollToSectionEvent(".link-policy", ".section-policy");
  scrollToSectionEvent(".link-news", ".section-news");
  scrollToSectionEvent(".link-donate", ".section-donate");

  // donate 彈出視窗
  $(".btn-donate").on("click", () => {
    const body = $("body");
    const main = $("main");
    const popout = $(".popout");
    const btnClose = $(".btn-close");
    const btnNext = $(".btn-next");
    const btnSubmit = $(".btn-submit");

    body.css("overflow", "hidden");
    main.css("filter", "blur(5px)");
    popout.removeClass("hidden").addClass("flex");

    btnClose.on("click", () => {
      popout.removeClass("flex").addClass("hidden");
    });
  });
});
