$(function() {

    $(".head_inner nav ul li.switch").on("click", function(e) {
        $("body").toggleClass("switchMode");
        e.preventDefault();

    });
});