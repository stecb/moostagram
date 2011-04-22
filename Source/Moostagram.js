/*
---
description: Moostagram, a mootools porting of jquery-instagram plugin by potomak (https://github.com/potomak/jquery-instagram/)

license: MIT-style

authors:
- Stefano Ceschi Berrini (http://steweb.it)

requires:
- core/1.3: '*'
- more/1.3: 'Request.JSONP'

provides: [Moostagram]

...
*/

var Moostagram = new Class({
    
    Implements: [Options, Events],
    
    options:{
        hash: 'hash',
        accessToken: 'your-access-token-here',
        maxId: null,
        minId: null
    },
    
    initialize: function(ctr, options){
        this.container = ctr;
        this.apiEndpoint = "https://api.instagram.com/v1";
        this.setOptions(options);
        this.build();
    },
    
    createPhotoElement : function(photo){
        return new Element('div',{'class':'instagram-placeholder'})
            .adopt(new Element('a',{'target':'_blank','href':photo.link})
            .adopt(new Element('img',{'class':'instagram-image','src':photo.images.thumbnail.url})));
    },
    
   build : function(){
     var _this = this;
     new Request.JSONP({
       url : this.apiEndpoint + "/tags/" + this.options.hash + "/media/recent/?access_token=" + this.options.accessToken,
       onComplete : function(res){
         for (var i = 0; i < res.data.length; i++) {
            _this.container.adopt(_this.createPhotoElement(res.data[i]));
         }
       }
     }).send(); 
   }                            
});
