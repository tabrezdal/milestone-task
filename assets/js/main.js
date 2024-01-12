$(document).ready(function () {
    // console.log("Hello World!");

    $("#search-icon").click(function () {
        $(".search-icon .navbar-icon.search").toggleClass("show hide");
        $(".search-icon .navbar-icon.cross").toggleClass("hide show");
        $(".search-bar").toggleClass("showFlex hide");
      });

      $("#cross-icon").click(function () {
        $(".search-icon .navbar-icon.cross").toggleClass("show hide");
        $(".search-icon .navbar-icon.search").toggleClass("hide show");
        $(".search-bar").toggleClass("hide showFlex");
      });

      $(".read-more-button").click(function () {
        $(".about-section .section-description").toggleClass("unsetClippedText clipText");
        $(".plus-btn").toggleClass("show hide");
        $(".minus-btn").toggleClass("hide show")
      });
  });