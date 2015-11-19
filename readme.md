# Nav

#### Install
```
aimee i nav
```

#### Example
别忘记在页面模板页注册占位符
```jade
.page
    #lincoapp-id-nav
```
---
```javascript
var Nav = require('nav');
var nav = new Nav;
nav.init().render();
```
or
```javascript
page.exports('nav');
```
or
```javascript
page.exports('nav', function(app){
    app.init().render()
})
```
