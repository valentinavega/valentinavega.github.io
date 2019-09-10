//Scroll to top button on Case Study pages

var btn = $('#scroll-to-top');

$(window).scroll(function() {
    if ($(window).scrollTop() > 600) {
        btn.addClass('show');
    } else {
        btn.removeClass('show');
    }
});

btn.on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: 0 }, '300');
});


highlight();

$(window).on("scroll", function() {
    highlight();
});

function highlight() {
    var scroll = $(window).scrollTop();
    var height = $(window).height();

    $(".highlight").each(function() {
        var pos = $(this).offset().top;
        if (scroll + height >= pos) {
            $(this).addClass("active");
        }
        console.log(pos);
        console.log(scroll);
    });
}