**_"Push To Run" is a proof-of-concept for hot code reload._**

In this example ["dolly.js"](https://github.com/yarcub/pushtorun/blob/master/client/app/scripts/dolly.js) is loaded at application startup with an empty _genoma_ object.

After each commit the ["genoma.js"](https://github.com/yarcub/pushtorun/blob/master/client/app/scripts/engine/genoma.js) is reloaded and change the behaviour of client code.

### Flow
 * Browser loads application (http://pushtorun.herokuapp.com/ - look at browser console)
 * When a change is made in repository and pushed to remote:    
        ** Post commit hook _hits_ server (can also be simulate this at http://pushtorun.herokuapp.com/hook/)    
        ** Server notifies clients (via socket.io) of changes    
        ** Browser reloads genoma.js and replaces dolly.js module genoma definition     