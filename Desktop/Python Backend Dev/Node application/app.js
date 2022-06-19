function sayHello(name) {
    console.log("Hello " + name)
}
sayHello("chetan")
    // This can be run in terminal using "node app.js"
    // In node there is no window or document object, you work with network and OS
    // console.log is a part of the global object, there are other global objects like
    // setTimeout(), clearTimeout(), setInterval(), clearInterval()

// In place of the window object we have the global object in node, that can be used to access the functions
// like global.setTimeout()

/* In the window object though, the variables become a part of the window object 
It doesn't happen with the global object. The global object will show underfined if you access a variable through it
The variables are only to the file, in node the variables are not global scoped they are file scoped
In node every file is a module and every function and variable defined in it are scoped to the file
*/