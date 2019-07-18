$(window).scroll(function () {
    

    if ($(document).scrollTop() > 60) {
        $('nav').addClass('shrink')
    }
    else {
        $('nav').removeClass('shrink')
    }

    if ($(document).scrollTop() > 450) {
        $('nav').addClass('shrinkBlue')
    }
    else {
        $('nav').removeClass('shrinkBlue')
    }    
})

$("#startLink").click(function (e) {
    e.preventDefault()
    // $('.navLink').addClass('te')
    // $(e.target).addClass('dark-primary-text')
    // $(e.target).attr("style", {color: '#1976D2 !important'})
    // #1976D2
    $('html,body').animate({
        scrollTop: $("#start").offset().top
    },
        'slow');
});

function goSumary(){
    $('html,body').animate({
        scrollTop: $("#about").offset().top
    },
        'slow');
}

$("#sumaryLink").click(function (e) {
    e.preventDefault()    
    // $('.navLink').addClass('text-primary-color')
    // $(e.target).addClass('dark-primary-text')
    $('html,body').animate({
        scrollTop: $("#about").offset().top
    },
        'slow');
});

$("#skillsLink").click(function (e) {
    e.preventDefault()    
    $('html,body').animate({
        scrollTop: $("#skills").offset().top
    },
        'slow');
});

$("#portfolioLink").click(function (e) {
    e.preventDefault()
    $('html,body').animate({
        scrollTop: $("#portfolio").offset().top
    },
        'slow');
});

