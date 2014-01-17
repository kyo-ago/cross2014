(window.testInit || $)(function() {
  $('.all.button').click(function() {
    $(this).find('.form').slideToggle(300);
  });
  $('form').on('submit', function(e) {
    e.preventDefault();
    $.post('/', $(this).serialize()).done(function(result) {
      alert(result); // ex. "ありがとうございました。"
    });
  });
});