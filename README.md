**_"Push To Run" is a proof-of-concept for hot code reload._**

In this example ["dolly.js"](https://github.com/yarcub/pushtorun/blob/master/client/app/scripts/dolly.js) is loaded at application startup with an empty _genoma_ object.

After each commit the ["genoma.js"](https://github.com/yarcub/pushtorun/blob/master/client/app/scripts/engine/genoma.js) is reloaded and change the behaviour of client code.