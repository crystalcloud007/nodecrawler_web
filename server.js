/*
 * 网络版本的爬虫框架
 * 使用express启动，可实时监控爬虫运行状况，以http通信控制爬虫运行
 * 
 */ 

const express = require('express');
const body_parser = require('body-parser');
const morgan = require('morgan');
const configs = require('./configs');
const utils = require('./utils');

var app = express();
app.use(body_parser.json());
app.use(body_parser.urlencoded({extended:true}));
app.use(morgan('dev'));

app.get('/', (req,res) =>
{
    utils.sendData(res,'success','WELCOME');
});

app.use('*', (req,res) =>
{
    utils.sendData(res,'url_not_found');
});

app.listen(configs.port,(err) =>
{
    if(err) utils.showLog('APP','FATAL ERR', 'Failed to start server: ' + err);
    else utils.showLog('APP','MSG','Web Crawler Server STARTED.');
});