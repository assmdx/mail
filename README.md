# mail
发送邮件的服务器程序

## 如何使用

### 下载代码

```
https://github.com/assmdx/mail.git
```

### 安装依赖

```
npm i
```

### 使用流程

1. 登录

```
url:http://yourserverURL:7001/mail/login
method:post
data:{
    username:'admin' //初始用户名和密码
    password:'123'
}
header:{
    'x-csrf-token':'' //token
}
```

2.修改用户名密码

```
url:http://yourserverURL:7001/mail/changePassword
method:post
data:{
    username:'admin' //用户名 旧密码 新密码
    password:'123'，
    newPassword:'1234'
}
header:{
    'x-csrf-token':'' //token
}
```

3. 设置邮件服务器信息

```
url:http://yourserverURL:7001/mail/add
method:post
data:{
    {
    "service": "smtp.163.com", //支持163 gmail
    "host": "smtp.163.com",
    "secure": true,
    "port": 465,
    "user": "yourEmailName@163.com",
    "pass": "123"
}
header:{
    'x-csrf-token':'' //token
}
```

4. 发送邮件

```
url:http://yourserverURL:7001/mail/send
method:post
data:{    
  "email":"targetEmailAddress",
  "text":"test",
  "subject":"test",
  "html":"<p>test</p>"
}
header:{
    'x-csrf-token':'' //token
}
```

