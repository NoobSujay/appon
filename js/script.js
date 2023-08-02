$(".banner-slider").slick({
    arrows:false,
    dots:true,
    autoplay:true,
    autoplayspeed:100,
    speed:1000,
    
    

})
$(".screenshot-slider").slick({
    dots:true,
    slidesToShow:5,
    arrows:false,
})

$('.venobox').venobox();

$(".text-slider").slick({
    slidesToShow:1,
    arrows:false,
    asNavFor:".img-slider",

})
$(".img-slider").slick({
    dots:true,
    slidesToShow:3,
    arrows:false,
    centerMode:true,
    centerPadding:"0",
    autoplay:true,
    autoplayspeed:1000,
    asNavFor:".text-slider",
    
})

