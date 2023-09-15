function screenLoading() {
    $(".pre_loader").fadeOut(500);
};
(function($){
	var lastScrollTop = 0;
	$(window).scroll(function(event){
	   var st = $(this).scrollTop();
	   if (st > lastScrollTop){
	       $('.main_nav').removeClass('nav-up').addClass('nav-down');
	   } else {
	      $('.main_nav').removeClass('nav-down').addClass('nav-up');
	   }
	   lastScrollTop = st;
	});
})(jQuery);
$(window).scroll(function(){
    $('.header_color').css("opacity", 0 + $(window).scrollTop()/500)
});
$(".hamburger").click(function(){
    $(this).toggleClass('open')
    $('.ham_dropdown').toggleClass('active')
});

$('.home_slider').owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    items: 1,
    autoplay: true,
    animateOut:"bounceOutRight",
    animateIn:"bounceInLeft",
    autoplayTimeout: 5000,

});
function t(e){O.removeClass("active"),e.addClass("active")};
var b= $(".features_slider");
O= $(".features_content");
$('.features_slider').owlCarousel({
    loop: true,
    margin:20,
    autoplay: true,
    autoplayTimeout: 6000,
    items: 1,
    dots: true,
    responsiveClass: true,
    animateOut:"slideOutDown",
    animateIn:"fadeInUp",
});
$('.features_slider').on("changed.owl.carousel",function(e){
    var o=e.item.index+1-e.relatedTarget._clones.length/2,n=e.item.count;(o>n||0==o)&&(o=n-o%n),o--;
    var a=$(".features_content:nth("+o+")");t(a)
});
O.on("click",function(){var e=$(this).data("owl-item")
    b.trigger("to.owl.carousel",e),t($(this))
});
$(".subscribe_btn").click(function(){
    $(".subscribe_btn").attr("disabled", true);
    $(".subscribe_btn").addClass('active');
    $(".subscribe_input").attr("disabled", true);
});
$('.shots_slider').carousel({
    indicators: false,
});
$('.next').click(function(){
    $('.carousel').carousel('next')
});
$('.prev').click(function(){
    $('.carousel').carousel('prev')
});
setInterval(function(){
    $('.carousfel').carousel('next')
}, 4000);
$('.testimonial_slider').owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    items: 1,
    autoplay: false,
});
$('.team_slider').owlCarousel({
    loop: true,
    margin: 0,
    nav: false,
    items: 3,
    autoplay: false,
    responsive:{
        993:{
            items:3
        },
        500:{
            items:2
        },
        0:{
            items:1
        }
        
    }
});
$('.news_slider').owlCarousel({
    loop: true,
    margin: 0,
    nav: false,
    items: 3,
    autoplay: false,
    responsive:{
        993:{
            items:3
        },
        500:{
            items:2
        },
        0:{
            items:1
        }
        
    }
});

$(".counter").counterUp({
    delay:10,
    time:1e3
});
$("#contact_submit").click(function(){
    $(".input-field input").attr("disabled", true);
    $(".input-field textarea").attr("disabled", true);
    $(".input_send").addClass('active');
    $("#contact_submit").attr("disabled", true);
});
$(".button-collapse").sideNav({
    closeOnClick: true,
    draggable: true,
    onOpen: function(){
        $(".hamburger_sidebar").addClass("open")
    },
    onClose: function(){
        $(".hamburger_sidebar").removeClass("open")
    }
});
AOS.init();
$.scrollIt();
$(".color_box li a").on("click", function(e){
    e.preventDefault();
    $(this).parent().parent().find("a").removeClass("active")
    $(this).addClass("active")
    
});
$(".color_icon").click(function(){
    $(".color_template").toggleClass("open");
});
