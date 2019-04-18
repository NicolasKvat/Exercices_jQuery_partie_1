$(document).ready(function () {
  $('#on').click(function () {
    $('#firstText, #thirdText').css('border', '5px green dashed');
  });
  $('#off').click(function () {
    $('#firstText, #thirdText').css('border', 'none');
  });
});
