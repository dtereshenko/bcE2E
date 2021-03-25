module.exports = {
    'Test Beautycounter.com home page': function (browser) {
        browser
            .url('https://www.beautycounter.com/')
            .waitForElementVisible('#main-content')
            .assert.visible('button.slick-next')
            .click('button.slick-next')
            .assert.visible('div.slick-slide.slick-current')
            .end();
    }
};