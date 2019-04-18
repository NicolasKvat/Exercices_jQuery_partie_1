$(function(){
  $('#on').click(function () {
    $('#thirdText').addClass('hide');
    $('.hide').hide();
  });
  $('#off').click(function () {
    $('#firstText, #thirdText').show();
  });
});
