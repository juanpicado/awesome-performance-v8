/**
 * Created by jpicado on 14/06/16.
 */
const JotaServer = require('jotadeveloper.backend.com');
const path = require('path');

var jotaServer = new JotaServer.default({
    port : 5001,
    assets : path.resolve(__dirname, 'build')    
});

jotaServer.start().then(function(){
    console.log("alles gut, running !")
}, function(){
    console.log("starting the server has failed");
});