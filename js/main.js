$(function () {
    $(window).scroll(function () {
        $('.offer__title').each(function () {
            var imagePos = $(this).offset().top;

            var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow + 650) {
                $(this).addClass("fadeInRight");
            }
        });
    });
    $(window).scroll(function () {
        $('.offer__subtitle').each(function () {
            var imagePos = $(this).offset().top;

            var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow + 650) {
                $(this).addClass("fadeInRight");
            }
        });
    });
    $(window).scroll(function () {
        $('.section__title').each(function () {
            var imagePos = $(this).offset().top;

            var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow + 650) {
                $(this).addClass("fadeInLeft");
            }
        });
    });
   
    
   
});