/* 
 * 爬虫基类，定义爬虫所有功能。
 * 
 * 
 */ 

const request = require('request');
const cheerio = require('cheerio');
const spawn = require('child_process').spawn;
const iconv = require('iconv-lite');
const utils = require('./utils');

var crawler = function()
{
    var self = this;
    self.init();
    utils.showLog('CRALWER','MSG','Crawler \'' + self.name + '\' initialized.');
};

crawler.prototype.name = '';

crawler.prototype.init = function()
{
    var self = this;
    self.name = 'crawler_' + utils.getRandomStr(6);
};


module.exports = crawler;