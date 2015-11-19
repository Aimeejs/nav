/*!
* Nav for Aimeejs
* Author by gavinning
* Homepage https://github.com/aimeejs/nav
 *
 * Template
 * Date: 2015-06-15
 */


var app, App;

App = require('app');
app = App.create({
    name: 'nav',
    version: '1.0.0',
    template: require('./nav.jade'),
    prerender: function(nav){
        nav.find('.selected').length ? '' :
        nav.find('li').eq(0).addClass('selected');
    },

    // 类的事件，可选，调用方式：app.bind();
    bind: function(){
        // 类默认执行tab切换，调用app.bind()可执行绑定
        this.delegate('li', 'click', function(){
            $(this).addClass('selected').siblings('.selected').removeClass('selected');
        });
        return this;
    },

    reg: function(index){
        this.__index = index;
        return this;
    },

    load: function(index){
        index = index || this.__index || 0;
        this.find('li').eq(index).addClass('selected').siblings('.selected').removeClass('selected');
        return this;
    },

    add: function(name, url){
        this.getApp().append('<li><a href="'+ url +'">'+ name +'</a></li>');
        return this;
    }
});

module.exports = app;
