const { browser, element, by, ExpectedConditions } = require("protractor")

describe('Enter name feature', function(){
    
    it('Should enter name as "Tom"', function(){
        browser.get('https://angularjs.org');
        element(by.model('yourName')).sendKeys('Tom');
        // This binding you'll get by not using the browser rendered code but to see actual html version
        // Any browser go to View > Developer > View Source Here (In my case it was Chrome)  
        let result = element(by.binding('yourName'));
        expect(result.getText()).toBe('Hello Tom!');
    });
});

describe('Get free crm title test', function(){
    it ('get title test', function(){
        browser.get('http://juliemr.github.io/protractor-demo/');
        expect(browser.getTitle()).toEqual('Super Calculator');
        browser.driver.sleep(3000);
        element(by.model('first')).sendKeys('2');
        browser.driver.sleep(3000);
    });
});

describe('multiple elements', function(){
    it('should add one and two', function(){
        browser.get('http://juliemr.github.io/protractor-demo/');
        element(by.model('first')).sendKeys('1');
        element(by.model('second')).sendKeys('2');
        element(by.id('gobutton')).click();
        expect(element(by.binding('latest')).getText()).toEqual('3');
    });
});