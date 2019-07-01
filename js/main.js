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

// This makes it so that each Section appears on scroll-- thereby making it easier for readers of the case study to see that it is an entirely new section of the design process.

$(document).on("scroll", function() {
    var pageTop = $(document).scrollTop()
    var pageBottom = pageTop + $(window).height()
    var tags = $("section")

    for (var i = 0; i < tags.length; i++) {
        var tag = tags[i]

        if ($(tag).position().top < pageBottom) {
            $(tag).addClass("visible")
        }
    }
})