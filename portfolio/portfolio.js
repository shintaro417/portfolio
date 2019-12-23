$(function () {
    $('.background img:gt(0)').hide();
    
    setInterval(function () {
      $('.background :first-child').fadeOut(3000).next('img').fadeIn(3000).end().appendTo('.background');
    }, 3000);
    
    $('li').hover(function () {
        $(this).css('background', 'teal');
    }, function () {
        $(this).css('background', '');
    });
    
    $('h1').hide().fadeIn(2500);
    
    $('p').hide().fadeIn(2500);
});