describe('2', function() {
  it('非同期でupdateLabelを表示する', function() {
    sinon.stub(window, 'updateLabel');
 
    var fakeclock = sinon.useFakeTimers();
    var init = window.testInit.args.shift();
    init[0]();
    fakeclock.tick(100);
 
    expect(updateLabel.called).to.eql(true);
    window.updateLabel.restore();
    fakeclock.restore();
  });
});