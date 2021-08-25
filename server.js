const { request, response } = require('express');
const express = require('express');
const puppeteer = require('puppeteer');

const server = express();
var fs = require('fs');

var data = require('./data.json');

server.get('/', async(request, response) => {
    for (var i = 0; i < data['Sites'].length; ++i) {

        const site = data['Sites'][i]['url'];
        const browser = await puppeteer.launch();
        const page = await browser.newPage();
        await page.goto('https://www.sslshopper.com/ssl-checker.html');
        await page.focus('#hostname');
        await page.keyboard.type(site);
        await page.focus('#checkButton');
        await page.keyboard.press('Enter');
        await page.waitForSelector('#cert_expiration_days');
        const pageContent = await page.evaluate(() => {
            return {
                validado: document.querySelector('#cert_expiration_days').innerHTML,
            }
        })
        fs.appendFile('data.txt', `\n${site},${pageContent.validado} dias`, function(err) {
            if (err) throw err;
            console.log('Saved!');
        });
        await browser.close();
    }

});

server.listen(3000, () => {
    console.log("sucesso");
});