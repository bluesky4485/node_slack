var express = require('express');
var _ = require('underscore');
var bodyParser = require('body-parser');
var Slack = require('./slack');
var slack = new Slack('webhookurl');
var path = require('path');
var port = process.env.PORT || 3000;
var app = express();
//app.use(bodyParser());//在这个场景下直接使用是能正常发送和接收消息的，就是会提示该方法已经过期之类的一个警告，解决方案如下：
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.listen(port);

app.get('/', function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end("this is index, for nothing.\n")
});

app.post('/reboot', function (req, res) {

    var reply = slack.respond(req.body, function (hook) {
        return {
            text: hook.user_name + ', ' + hook.text + ' will reboot in minutes.',
            username: 'Bot'
        };
    });

    res.json(reply);

});