# node_slack

本程序提供一个往slack发送消息的send方法，一个接收slack发送过来的消息的一个respond方法。具体接收到slack发送过来的消息之后的业务处理在respond中处理，可自行扩展。

>需要修改2个地方，一个是webhookurl，另外一个是req中的token，目前就检查了下token作为有效请求的判断。

直接npm install即可下载依赖库，然后node app.js 即可运行。
