describe('1', function() {
  it('ボタンをクリックしてupdateLabelを表示する', function() {
    sinon.stub(window, 'updateLabel');
 
    var init = window.testInit.args.shift();
    init[0]();
    $('.jQuery.button').click();
 
    expect(updateLabel.called).to.eql(true);
    window.updateLabel.restore();
  });
});
