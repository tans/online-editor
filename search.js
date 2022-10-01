$(function () {
    $("#search-box input").on("focus", function () {
        $("#search-box .w-3").hide();
    });

    $("#search-box input").on("blur", function () {
        $("#search-box .w-3").show();
    });
});
