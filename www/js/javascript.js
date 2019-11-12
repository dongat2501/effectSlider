




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
        $('.item-flipped')
            .last()
            .removeClass('item-flipped')
            .addClass('item-active')
            .siblings('.page-process__item')
            .removeClass('item-active');
    }
    function nextPage() {
        console.log('nextPage')
        $('.active')
            .removeClass('active')
            .addClass('flipped')
            .next('.page')
            .addClass('active')
            .siblings();

        $('.item-active')
            .removeClass('item-active')
            .addClass('item-flipped')
            .next('.page-process__item')
            .addClass('item-active')
            .siblings();
    }

});