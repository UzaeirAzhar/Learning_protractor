const { element } = require("protractor");

describe('get list of elements', function(){
    let firstNumber = element(by.model('first'));
    let secondNumber = element(by.model('second'));
    let goButton = element(by.id('gobutton'));
    let result = element(by.binding('latest'));
    let history = element.all(by.repeater('result in memory'));

     // This snippet executed before every "it" block.
     beforeEach(function(){
        browser.get('http://juliemr.github.io/protractor-demo/');
    });

    function add (a,b){
        firstNumber.sendKeys(a);
        secondNumber.sendKeys(b);
        goButton.click();
    }

    
    it('check the history', function() {
        add(1,2);
        add(2,3);
        add(3,4);
        expect(history.count()).toEqual(3)
    });
        

});