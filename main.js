$(document).ready(function() {
    $('#carousel-img').slick({
        autoplay: true,
        arrows: false,
        dots: true
    })

    $('.btn-menu button').click(function() {
        $('.menu').slideToggle()
    })
})