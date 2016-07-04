$(".rslides").responsiveSlides({
  auto: true,             // Boolean: Animate automatically, true or false
  speed: 500,            // Integer: Speed of the transition, in milliseconds
  timeout: 5000,
  nav: true,
  prevText: "", // Cordas: Texto para o botão "anterior"
  nextText: "", // Cordas: Texto para o botão "next"
  navContainer: "controles-ocultos",

});

$(".rslides_portfolio").responsiveSlides({
  auto: false,             // Boolean: Animate automatically, true or false
  speed: 500,            // Integer: Speed of the transition, in milliseconds
  timeout: 4000,          // Integer: Time between slide transitions, in milliseconds

});

Visibility.onVisible(function(){



$('#sobre').click(function(){
  var body = $("html, body");
  body.stop().animate({scrollTop:$('.sobre').offset().top - 150}, '500', 'swing', function() {});
  
});

$('#clientes').click(function(){
  var body = $("html, body");
  body.stop().animate({scrollTop:$('.clientes').offset().top - 150}, '500', 'swing', function() {});
  
});

$('#palestras').click(function(){
  var body = $("html, body");
  body.stop().animate({scrollTop:$('.palestras').offset().top - 150}, '500', 'swing', function() {});
  
});

$('#contato').click(function(){
  var body = $("html, body");
  body.stop().animate({scrollTop:$('.contato').offset().top - 150}, '500', 'swing', function() {});
  
});

});

