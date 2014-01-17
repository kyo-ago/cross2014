describe('3', function() {
  it('APIレスポンスをalertする', function() {
   var fakeserver = sinon.fakeServer.create();
   fakeserver.respondWith('/', [200, {
      'Content-Type': 'text/plain'
    }, 'result']);
 
    sinon.stub(window, 'alert');
 
    window.testInit.args.shift()[0]();
    fakeserver.respond();
 
    expect(alert.called).to.eql(true);
    window.alert.restore();
    fakeserver.restore();
  });
});