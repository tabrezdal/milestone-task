$(document).ready(function () {

    // Search Icon Toggle
    $("#search-icon").click(function () {
        $(".search-icon .navbar-icon.search").toggleClass("show hide");
        $(".search-icon .navbar-icon.cross").toggleClass("hide show");
        $(".search-bar").toggleClass("showFlex hide");
        if($(".mega-menu").hasClass("showFlex")){
            $(".mega-menu").toggleClass("showFlex hide");
            $("#hamberger-btn").toggleClass("show hide");
            $("#hamburger-cross-icon").toggleClass("hide show");
        }
    });

    // Cross Icon Toggle
    $("#cross-icon").click(function () {
        $(".search-icon .navbar-icon.cross").toggleClass("show hide");
        $(".search-icon .navbar-icon.search").toggleClass("hide show");
        $(".search-bar").toggleClass("hide showFlex");
    });

    // Read more Icon Toggle
    $(".read-more-button").click(function () {
        $(".about-section .section-description").toggleClass("unsetClippedText clipText");
        $(".plus-btn").toggleClass("show hide");
        $(".minus-btn").toggleClass("hide show")
    });

    // MegaMenu toggle
    $("#hamberger-btn").click(function () {
        $(".mega-menu").toggleClass("showFlex hide");
        $("#hamberger-btn").toggleClass("show hide");
        $("#hamburger-cross-icon").toggleClass("hide show");
        if($(".search-bar").hasClass("showFlex")){
            $(".search-icon .navbar-icon.search").toggleClass("show hide");
            $(".search-icon .navbar-icon.cross").toggleClass("hide show");
            $(".search-bar").toggleClass("showFlex hide");
        }
    });

    $("#hamburger-cross-icon").click(function () {
        $(".mega-menu").toggleClass("hide showFlex");
        $("#hamberger-btn").toggleClass("hide show");
        $("#hamburger-cross-icon").toggleClass("show hide");
    });
    

    // MegaMenu Links Toggle
    $(".mega-menu-link").click(function () {
        $(".mega-menu-link").removeClass("active");
        $(this).toggleClass("active");
        $(".context").addClass("hide");
        $(".context").removeClass("showFlex");
        $(".mega-menu-submenu-links").toggleClass("showFlex");
        $(".mega-menu-submenu-links").removeClass("hide");      
    });

});