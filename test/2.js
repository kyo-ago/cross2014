describe('2', function() {
  it('非同期でalertを表示する', function() {
    sinon.stub(window, 'alert');
 
    var fakeclock = sinon.useFakeTimers();
    window.testInit.args.shift()[0]();
    fakeclock.tick(100);
 
    expect(alert.called).to.eql(true);
    window.alert.restore();
    fakeclock.restore();
  });
});