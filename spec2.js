const { browser, element } = require("protractor");

describe('multiple scenarios', function(){
    
    let firstNumber = element(by.model('first'));
    let secondNumber = element(by.model('second'));
    let goButton = element(by.id('gobutton'));
    let result = element(by.binding('latest'));

    // To run on multiple browsers at the same time. Change the below snippet in the conf.js in the capabilities
    //                      multiCapabilities: [{
    //                                              browserName: 'firefox'
    //                                          }, 
    //                                          {
    //                                              browserName: 'chrome'   
    //                                          }]

    // This snippet executed before every "it" block.
    beforeEach(function(){
        browser.get('http://juliemr.github.io/protractor-demo/');
    });

    //TC01
    it('should have a title', function() {
        expect(browser.getTitle()).toEqual('Super Calculator');
    });

    //TC02
    it('should add one and two', function() {
        firstNumber.sendKeys('1');
        secondNumber.sendKeys('2');
        goButton.click();
        expect(result.getText()).toEqual('3');
    });

    //TC03
    it('should add four and six', function() {
        firstNumber.sendKeys('4');
        secondNumber.sendKeys('6');
        goButton.click();
        expect(result.getText()).toEqual('10');
    });

    //TC04
    it('should read the value from an input field', function() {
        firstNumber.sendKeys('5');
        expect(firstNumber.getAttribute('value')).toEqual('5');
    });       
});