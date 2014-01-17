describe('3', function() {
  it('APIレスポンスをupdateLabelする', function() {
   var fakeserver = sinon.fakeServer.create();
   fakeserver.respondWith('/', [200, {
      'Content-Type': 'text/plain'
    }, 'result']);
 
    sinon.stub(window, 'updateLabel');
 
    var init = window.testInit.args.shift();
    init[0]();
    fakeserver.respond();
 
    expect(updateLabel.called).to.eql(true);
    window.updateLabel.restore();
    fakeserver.restore();
  });
});