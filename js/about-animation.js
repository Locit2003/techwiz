$(document).on('scroll', function(e) {
    let lengthScroll = $(document).scrollTop();
    console.log(lengthScroll)
    if (lengthScroll > 300) {
        document.querySelector('.about1').classList.add("animate__fadeInLeft");
        document.querySelector('.about2').classList.add("animate__fadeInRight");
    }

});