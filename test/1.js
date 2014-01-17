describe('1', function() {
  it('ボタンをクリックしてalertを表示する', function() {
    sinon.stub(window, 'alert');
 
    window.testInit.args.shift()[0]();
    $('.jQuery.button').click();
 
    expect(alert.called).to.eql(true);
    window.alert.restore();
  });
});
