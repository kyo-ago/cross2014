(window.testInit || $)(function() {
  $.get('/').done(function(result) {
    alert(result);
  });
});