$(document).ready(function () {


    // Window onload events

    var smallerScreens = window.matchMedia("(min-width: 320px)");
    var largerScreens = window.matchMedia("(min-width: 1224px)")

        if (smallerScreens.matches) {
            window.addEventListener('load', function () {
                $('.top_body').delay(500).animate({
                    height: '50%'
                }, function () {
                    $('.title').animate({
                        opacity: '1'
                    }, function () {
                        $('.number_of_docs').animate({
                            opacity: '1'
                        }, function () {
                            $('.tabs').animate({
                                opacity: '1'
                            })
                        })
                    })
                })
            })
        }
    
    

        if (largerScreens.matches) {
            window.addEventListener('load', function () {
                $('.top_body').animate({
                    height: '60%'
                })
            })
        }


    // swiper js for tabs

    var mySwiper = new Swiper('.swiper-container', {

        direction: 'vertical',
        loop: false,
        slidesPerView: 'auto',
        centeredSlides: true,
        pagination: {
            el: '.swiper-pagination',
            type: 'progressbar',
        },
    })


    // Local time display
    function addZero(i) {
        if (i < 10) {
            i = "0" + i;
        }
        return i;
    }

    function timeUpdate() {
        var grabDate = new Date();
        var theTime = document.getElementById("the_time");
        var hours = addZero(grabDate.getHours());
        var minutes = addZero(grabDate.getMinutes());
        var seconds = addZero(grabDate.getSeconds());
        theTime.innerHTML = hours + ":" + minutes + ":" + seconds;
    }
    setInterval(timeUpdate, 1000);


    // Takes you to 



})