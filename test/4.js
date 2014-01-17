describe('4', function() {
  beforeEach(function () {
   this.fakeclock = sinon.useFakeTimers();
    var fakeserver = sinon.fakeServer.create();
    fakeserver.respondWith('/', [200, {
      'Content-Type': 'text/plain'
    }, 'result']);
 
    sinon.stub(window, 'updateLabel');
    sinon.stub($.fn, 'slideToggle');
  });
  afterEach(function () {
    $.fn.slideToggle.restore();
    window.updateLabel.restore();
    this.fakeserver.restore();
    this.fakeclock.restore();
  });
  it('ボタンをクリックして、slideToggleが呼ばれる', function() {
   testInit.lastCall.args[0]();
     $('.all.button').click();
 
     expect($.fn.slideToggle.called).to.eql(true);
  });
 
  it('formを送信して、APIレスポンスをalertする', function() {
     testInit.lastCall.args[0]();
    $('form').submit();
    fakeserver.respond();
 
    expect(updateLabel.called).to.eql(true);
  });
});