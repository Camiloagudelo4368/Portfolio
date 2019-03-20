$("#startLink").click(function() {
    $('html,body').animate({
        scrollTop: $("#start").offset().top},
        'slow');
});

$("#sumaryLink").click(function() {
    $('html,body').animate({
        scrollTop: $("#about").offset().top},
        'slow');
});

$("#skillsLink").click(function() {
    $('html,body').animate({
        scrollTop: $("#skills").offset().top},
        'slow');
});

$("#portfolioLink").click(function() {
    $('html,body').animate({
        scrollTop: $("#portfolio").offset().top},
        'slow');
});