var http=require('http');
var express = require('express');
var bodyParser = require('body-parser');
var data = require("./data.json");
var app = express();
// 解决跨域
app.use(function (req, res, next) {
	res.header("Access-Control-Allow-Credentials","true");
    res.header("Access-Control-Allow-Origin", req.headers.origin);
    res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
	next();
});
//配置body-parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// 配置模板art-template
// app.engine('art', require('express-art-template'));
// 配置静态路由

app.get("/api",function(req,res){
	res.send({
		errMsg:0,
		data:data
	});
})
app.get("/api/seller",function(req,res){
	res.send({
		errMsg:0,
		seller:data.seller
	});
})

app.get("/api/goods",function(req,res){
	res.send({
		errMsg:0,
		seller:data.goods
	});
})
app.get("/api/ratings",function(req,res){
	res.send({
		errMsg:0,
		seller:data.ratings
	});
})
app.get("/api/star",function(req,res){
	res.send({
		errMsg:0,
		seller:data.star
	});
})
// 配置端口
app.listen(8080,function(){
    console.log('running');
})
