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

    mega_view.mouseenter(function () {
      meta_card.removeClass("top-100").addClass("-top-100");
    });

    mega_view.mouseleave(function () {
      meta_card.mouseenter(function () {
        meta_card.removeClass("top-100").addClass("-top-100");
      });

      meta_card.mouseleave(function () {
        meta_card.addClass("top-100").removeClass("-top-100");
      });
      meta_card.addClass("top-100").removeClass("-top-100");
    });
});
