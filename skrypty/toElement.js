$("#toTheElement").click(function () {
    $("html, body").animate({ scrollTop: $("#myMap").offset().top }, 500);
    return true;
});