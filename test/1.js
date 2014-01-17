describe('1', function() {
  beforeEach(function () {
    sinon.stub(window, 'updateLabel');
  });
  afterEach(function () {
    window.updateLabel.restore();
  });
  it('ボタンをクリックしてupdateLabelを表示する', function() {
 
    var init = window.testInit.args.shift();
    init[0]();
    $('.jQuery.button').click();
 
    expect(updateLabel.called).to.eql(true);
  });
});
