/*(function($){
    "use strict" //defines that js should be executed in strict mode
    //Typed initiate
    if($('.typed-text-output').length==1){
        var typed_strings=$('.typed-text').text();
        var typed=new Typed('.typed-text-output',{
            strings:typed_strings.split(', '),
            typeSpee:100,
            backSpeed:20,
            smartBackspace:false,
            loop:true
        });
    }
})(jquery);*/
$("button").on("click",function(){
    $("h3").css("color","yellow");
});
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:3
        }
    }
})

var typed=new Typed(".type",{
    strings:[
        "",
        "Student",
        "Designer",
        "Developer"
    ],
    typeSpeed:70,
    BackSpeed:50,
    loop:true,
    autoPlay:true,
    autoPlaySpeed:1000

});

$('.map1').hide();
$('.map').click(function(){
    $('.map1').show(3000);
});


