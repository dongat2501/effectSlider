




$(document).ready(function () {
    // Handler for .ready() called.
    var currentPage = 0;
    $(".book")
        .on("click", ".active", nextPage)
        .on("click", ".flipped", prevPage);

    $(".image")
        .hammer()
        .on("swipeleft", nextPage);
    $(".image")
        .hammer()
        .on("swiperight", prevPage);

    function prevPage() {
        $('.flipped')
            .last()
            .removeClass('flipped')
            .addClass('active')
            .siblings('.page')
            .removeClass('active');
    }
    function nextPage() {
        console.log('nextPage')
        $('.active')
            .removeClass('active')
            .addClass('flipped')
            .next('.page')
            .addClass('active')
            .siblings();
    }

});