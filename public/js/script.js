$(document).ready(function () {
  $(".burger-nav").on("click", function () {
    $(".container nav ul").toggleClass("open");
  });

  /*Navbar link scrolling*/
  $(".js--scroll-to-home").click(function () {
    $("html, body").animate(
      { scrollTop: $(".js--sections-home").offset().top },
      1000
    );
  });

  $(".js--scroll-to-about").click(function () {
    $("html, body").animate(
      { scrollTop: $(".js--sections-about").offset().top },
      1000
    );
  });

  $(".js--scroll-to-skills").click(function () {
    $("html, body").animate(
      { scrollTop: $(".js--sections-skills").offset().top },
      1000
    );
  });

  $(".js--scroll-to-projects").click(function () {
    $("html, body").animate(
      { scrollTop: $(".js--sections-projects").offset().top },
      1000
    );
  });

  $(".js--scroll-to-contact").click(function () {
    $("html, body").animate(
      { scrollTop: $(".js--sections-contact").offset().top },
      1000
    );
  });

  /*Adds black background to navbar when scrolling detected*/
  $(document).scroll(function () {
    var $nav = $("#mainnavbar");
    $nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height());
  });
});
