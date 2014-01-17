describe('2', function() {
  beforeEach(function () {
    this.fakeclock = sinon.useFakeTimers();
    sinon.stub(window, 'updateLabel');
  });
  afterEach(function () {
    window.updateLabel.restore();
    this.fakeclock.restore();
  });
  it('非同期でupdateLabelを表示する', function() {
    var init = window.testInit.args.shift();
    init[0]();
    this.fakeclock.tick(100);
 
    expect(updateLabel.called).to.eql(true);
  });
});