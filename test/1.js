describe('1', function() {
  it('ボタンをクリックしてalertを表示する', function() {
    sinon.stub(window, 'alert');
 
    var init = window.testInit.args.shift()[0]
    init();
    $('.jQuery.button').click();
 
    expect(alert.called).to.eql(true);
    window.alert.restore();
  });
});
