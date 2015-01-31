var app = (function(win){
    var apps;
    
    apps = new kendo.mobile.Application(document.body,{skin:'flat'});
    
    return{
        apps:apps
    };
}(window));