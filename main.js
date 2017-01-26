$(document).ready(function() {
  var score = 0;

  $('.score').html('Score: ' + score)

  $('.wrong').click(function() {
    $(this).css('background', '#ff0049').css('cursor', 'default');
    $(this).siblings().unbind().css('cursor', 'default');
  });

  $('.right').click(function() {
    $(this).css('background', '#0ace00').unbind().css('cursor', 'default');
    $(this).siblings().unbind().css('cursor', 'default');
    score++
    $('.score').html('Score: ' + score)
  });

  $(window).on('beforeunload', function() {
    $(window).scrollTop(0);
});

})
