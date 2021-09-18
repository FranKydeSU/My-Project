// let http = require('http'); // requires 'http' (build in)
// let url = require('url') // requires 'url' (build in)
// let fs = require('fs') // requires 'fs; file system' (build in)
// let uc = require('upper-case') // requires module from npm.
// let dt = require('./myfirstmodule'); // require modole from outside files. (make by myself)
// let rs = fs.createReadStream('./demo.txt') // createReadStream
// let events = require('events');
// let eventEitter = new events.EventEmitter();

// Create an event handler:------------------------
// let myEventHandler = function() {
//     console.log('I hear scream');
// }

// ----------------- Assign the event handler: ----------------------
// eventEitter.on('scream', myEventHandler);

// Fire the 'scream' event:
// eventEitter.emit('scream')

// -------------- createReadStream ----------------
// rs.on('open', function () {
//     console.log('The file is open.')
// })
// -------------------------------------------------

// ------------------ Basic Knowledge in Query -----------------------------------
// let adr = 'http://localhost:8000/default.html?year=2020&month=november';
// let q = url.parse(adr, true);

// console.log(q.host); // return localhost:8000
// console.log(q.pathname); // return /default.html
// console.log(q.search); // return  ?year=2020&month=november

// let qdata = q.query;
// console.log(qdata); // return object in q.search
// console.log(qdata.month);
// console.log(qdata.year);
// --------------------------------------------------------------------------------

// -------- How to create server and url.parse(req.url, true).query ---------------
// http.createServer(function (req, res) {
//     let q = url.parse(req.url, true);
//     let filename = "." + q.pathname; // ./somepath
//     fs.readFile(filename, function (err, data) {
//         if (err) {
//             res.writeHead(404, {'Context-Type': 'text/html'});
//             return res.end('404 Not found')
//         }
//         res.writeHead(200, {'Context-Type': 'text/html'});
//         res.write(data)
//         return res.end();
//     })
// }).listen(8000);

// http.createServer(function (req, res) { // How to use module.
//     res.writeHead(200, { 'Context-Type': 'text/html' });
//     res.write(uc.upperCase('napasin saengthnog'));
//     res.end();
// }).listen(8000)

// ### fs.readFile; reading file ###
// http.createServer(function (req, res) {
//     fs.readFile('index.html', function (err, data) {
//         res.writeHead(200, { 'Content-Type': 'text/html' });
//         res.write(data)
//         return res.end();
//     })
// }).listen(8000);

// // ----------------------  ### Make file with 3 ways ### --------------------------
// // 1.
// fs.appendFile('mynewfile.txt', 'Hello, world', function (err) { // Use for updating code file or continue input last text.
//     if (err) throw err;
//     console.log('Saved!')
// })
// // 2.
// fs.open('mynewfile2.txt', 'w', function (err, file) { // 'w' means file is write type.
//     if (err) throw err;
//     console.log('Saved!')
// })
// //3.
// fs.writeFile('mynewfile3.txt', 'This is replaced new file 3', function (err) { // If we have that name file. it will be written. but if it havn't, it will create nre file.
//     if (err) throw err;
//     console.log('Saved!')
// })
// ---------------------------------------------------------------------------------------
// // ### Delete file ###
// fs.unlink('mynewfile3.txt', function (err) { // Delete before make file.
//     if (err) throw err;
//     console.log('File Deleted!')
// }) 
// ------------------------------------------------------------------------------------

// // ### Rename file ###
// fs.rename('mynewfile2.txt', 'mynewrenamefile2.txt', function (err) { // Delete before make file.
//     if (err) throw err;
//     console.log('File Renamed!')
// }) 
// ------------------------------------------------------------------------------------