describe('basic calcular function list', function() {
  
  it('should add numbers', function() {
    browser.get('http://mbrittanya.github.io/grid-demo')

    element(by.id('but7')).click();
    element(by.id('butAdd')).click();
    element(by.id('but2')).click();
    element(by.id('butEq')).click();

    expect(element(by.binding('total')).getText()).
        toEqual('9');
  });

  it('should subtract numbers', function() {
    //leave this blank for now
  });

  it('should multiply numbers', function() {
    //leave this blank for now
  });

  it('should divide numbers', function() {
    //leave this blank for now
  });
  it('should handle numbers with decimals', function() {
    //leave this blank for now
  });
});