$(function () {
    $(".navbar-toggle").on("click", function () {
        $(".navbar-header").toggleClass("close-nav");
    });

    $(window).on("scroll", function () {
        if ($(window).scrollTop() > 50) {
            $(".navbar").addClass("scroll");
        } else {
            $(".navbar").removeClass("scroll");
        }
    })
});