Moostagram
===========

A simple Mootools plugin to show a list of Instagram photos.

How to use
----------

Import the plugin

    <script src="moostagram.js"></script>

Insert an empty `div` in the code

    <div id="instagram-container"></div>

Run the plugin
  
    window.addEvent('domready',function(){
      new Moostagram($('instagram-container'),{
        hash : 'italy',
        accessToken : 'your-access-token-here'
      })
    });

Acknowledgements
-----------------

Thanks to [@johnnyaboh](http://twitter.com/johnnyaboh) for the jQuery implementation.