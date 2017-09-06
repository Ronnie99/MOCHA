/**
 * https://github.com/adamgruber/mochawesome
 * 测试报告
 */


var assert = require('assert');

require('chromedriver')

describe('测试用户注册登录', function () {
    this.timeout(60*1000)
    let webdriver = require('selenium-webdriver')
    let driver = new webdriver.Builder().forBrowser('chrome').build();

    describe('注册用户', function () {
        it('导航到登录页面', async function () {
            await driver.get("http://localhost:3000")
        });
        it("点击注册按钮", async function () {
            await driver.findElement({css:'[href="/signup"]'}).click()
        });
        it("导航到用户注册页面", async function () {
            let singupurl =  await driver.getCurrentUrl();
            return assert.equal("http://localhost:3000/signup1",singupurl)
        });
        it("输入用户名", async function () {
            await driver.findElement({id:'loginname'}).sendKeys('ronnie2');
        });
        it("输入密码",async function(){
            await driver.findElement({id:'pass'}).sendKeys('123456')
        });
        it("确认密码",async function(){
            await driver.findElement({id:'re_pass'}).sendKeys('1234567')
        });
        it('判断密码输入是否正确',async function(){

        })
    });
});