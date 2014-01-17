describe('3', function() {
  beforeEach(function () {
   this.fakeserver = sinon.fakeServer.create();
   this.fakeserver.respondWith('/', [200, {
      'Content-Type': 'text/plain'
    }, 'result']);
 
    sinon.stub(window, 'updateLabel');
  });
  afterEach(function () {
    window.updateLabel.restore();
    this.fakeserver.restore();
  });
  it('APIレスポンスをupdateLabelする', function() {
 
    var init = window.testInit.args.shift();
    init[0]();
    this.fakeserver.respond();
 
    expect(updateLabel.called).to.eql(true);
  });
});