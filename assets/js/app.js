$(function () {
  // hero section hover effect
  let self_shape = $(".self_shape");
  let self_details = $(".self_details");
  let self_name = $(".self_name");

  self_shape.mouseenter(function () {
    self_details.removeClass("invisible opacity-0");
    self_name.addClass("invisible opacity-0");
  });

  self_shape.mouseleave(function () {
    self_details.mouseenter(function () {
      self_details.removeClass("invisible opacity-0");
      self_name.addClass("invisible opacity-0");
    });

    self_details.mouseleave(function () {
      self_details.addClass("invisible opacity-0");
      self_name.removeClass("invisible opacity-0");
    });

    self_details.addClass("invisible opacity-0");
    self_name.removeClass("invisible opacity-0");
  });

  // on hover show mega card
  let mega_view = $(".mega_view");
  let meta_card = $(".meta_card");
  let deviceWidth = $(window).width();

  if (deviceWidth < 992) {
    let isOpen = false; 

    // Toggle dropdown on tap
    mega_view.off("click touchstart").on("click touchstart", function (e) {
      e.preventDefault();
      e.stopPropagation(); 

      if (!isOpen) {
        // Show dropdown
        meta_card
          .removeClass("top-100 invisible opacity-0")
          .addClass("-top-100 visible opacity-100");
        isOpen = true;
      } else {
        // Hide dropdown
        meta_card
          .addClass("top-100 invisible opacity-0")
          .removeClass("-top-100 visible opacity-100");
        isOpen = false;
      }
    });

    // Hide dropdown when tapping outside
    $(document)
      .off("click touchstart")
      .on("click touchstart", function (e) {
        if (!$(e.target).closest(".mega_view, .meta_card").length && isOpen) {
          meta_card
            .addClass("top-100 invisible opacity-0")
            .removeClass("-top-100 visible opacity-100");
          isOpen = false;
        }
      });
  }
});
