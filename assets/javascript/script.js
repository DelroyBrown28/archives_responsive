$(document).ready(function () {



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