//copyfile.js
var ncp = require('ncp').ncp;
 
ncp.limit = 100;
 
ncp('./assets/fonts/work-sans', './build', function (err) {
 if (err) {
   return console.error(err);
 }
 console.log("%cCOPY FILE HAS COMPLETED!", "color:blue; font-size: 40px");
});