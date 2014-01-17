(window.testInit || $)(function() {
  $.get('/').done(function(result) {
    updateLabel(result);
  });
});