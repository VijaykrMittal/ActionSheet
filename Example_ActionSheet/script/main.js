var app = app || {};

app.main = (function(){
    'use strict';
    
    var mainViewModel = (function(){
        
        var viafacebook = function()
        {
            actionSheet({
                'title':'Share with facebook',
                'buttonLabels':['Login With facebook','Signup with facebook'],
                'androidEnableCancelButton':true,
                'winphoneEnableCancelButton':true,
                'addDestructiveButtonWithLabel':'Delete It',
                'addCancelButtonWithLabel':'Cancel'
            });
        };
        
        var viatwitter = function()
        {
          actionSheet({
                'title':'Share with Twitter',
                'buttonLabels':['Login With Twitter'],
                'androidEnableCancelButton':true,
                'winphoneEnableCancelButton':true,
                'addDestructiveButtonWithLabel':'Delete It',
                'addCancelButtonWithLabel':'Cancel'
            });
        };
     
        var viaimage = function()
        {
          actionSheet({
                'title':'what do you want?',
                'buttonLabels':['Share via Facebook','Share via Twitter'],
                'addDestructiveButtonWithLabel':'Delete It',
                'addCancelButtonWithLabel':'Cancel'
            });
        };
        
        var logout = function()
        {
         actionSheet({
                'title':'User Logout',
                'buttonLabels':['Logout'],
                'addCancelButtonWithLabel':'Cancel'
            });
        };
        
        var actionSheet = function(options)
        {
            window.plugins.actionsheet.show(options,function(btnIndex){
                setTimeout(function(){
                    alert("Index "+btnIndex);
                });
            });
        };
        
       
        return{
            viafacebook:viafacebook,
            viatwitter:viatwitter,
            viaimage:viaimage,
            logout:logout
        };
    }());
    
    return mainViewModel;
}());