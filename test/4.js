describe('4', function() {
  it('ボタンをクリックして、slideToggleが呼ばれる', function() {
    sinon.stub($.fn, 'slideToggle');
 
   var fakeclock = sinon.useFakeTimers();
   testInit.lastCall.args[0]();
    $('.all.button').click();
 
    expect($.fn.slideToggle.called).to.eql(true);
    $.fn.slideToggle.restore();
    fakeclock.restore();
  });
 
  it('formを送信して、APIレスポンスをalertする', function() {
    var fakeserver = sinon.fakeServer.create();
    fakeserver.respondWith('/', [200, {
      'Content-Type': 'text/plain'
    }, 'result']);
 
    sinon.stub(window, 'alert');
 
    testInit.lastCall.args[0]();
    $('form').submit();
    fakeserver.respond();
 
    expect(alert.called).to.eql(true);
    window.alert.restore();
    fakeserver.restore();
  });
});