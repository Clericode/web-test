$('.signin').hover(function() {}, function() {
  $(this).addClass('animateout');
  setTimeout(function() {
    $('.signin').removeClass('animateout');
  }, 750);
});

$('.signin').on('click', function() {
  $('.overlay').toggleClass('active');
  $('signinform-field').removeClass('focus');
  $('input').val('');
  return false;
});
$('input').focus(function() {
  $(this).parent().addClass('focus');
}).blur(function() {
  if ($(this).val() == '') {
    $(this).parent().removeClass('focus');
  }
  if ($('#fdEmail').val() != '' && $('#fdPassword').val() != '') {
    $('#btSubmit').addClass('active');
  } else {
    $('#btSubmit').removeClass('active');

  }
});
$('#btSubmit').on('click', function() {
  return false;
});