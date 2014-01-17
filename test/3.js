describe('3', function() {
  it('APIレスポンスをalertする', function() {
    fakeserver.respondWith('/', [200, {
      'Content-Type': 'text/plain'
    }, 'result']);
 
    sinon.stub(window, 'alert');
 
    var init = window.testInit.args.shift()[0]
    init();
    fakeserver.respond();
 
    expect(alert.called).to.eql(true);
    window.alert.restore();
  });
});