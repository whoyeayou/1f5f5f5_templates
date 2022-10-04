$(function() {

    $(".control--select").on("click", function(event) {
        event.preventDefault();

        $(this).children(".control--select--list").toggleClass("opened");
    });

    $(".control--select--list--item").on("click", function(event) {
        event.preventDefault();
        
        $(this).children(".control--select--list--item-inner").toggleClass("selected");
        $(this).toggleClass("selected");
    });

});

