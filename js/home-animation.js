$(document).on('scroll', function(e) {
    let lengthScroll = $(document).scrollTop();
    console.log(lengthScroll)
    if (lengthScroll > 200) {
        document.querySelector('.what_we_do').classList.add("animate__fadeInUp");
    }

    if (lengthScroll > 1190) {
        document.querySelector('#cats1').classList.add("animate__fadeInUp")
        document.querySelector('#cats2').classList.add("animate__fadeInUp")
        document.querySelector('#cats3').classList.add("animate__fadeInUp")
        document.querySelector('#cats4').classList.add("animate__fadeInUp")
    }
    if (lengthScroll > 1600) {
        category_month
        document.querySelector('#category_month').classList.add("animate__fadeInUp");
    }
    if (lengthScroll > 2400) {
        document.querySelector('#item1').classList.add("animate__fadeInLeft")
        document.querySelector('#item2').classList.add("animate__fadeInUp")
        document.querySelector('#item3').classList.add("animate__fadeInRight")
    }
});