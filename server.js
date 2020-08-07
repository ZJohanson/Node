"use strict"
let http = require('http');
const napoleanDynamiteQuotes = require("./quotes");
let server = (req, res) => {

    //returns random array object each time page is refreshed
    let random = Math.floor(Math.random() * napoleanDynamiteQuotes.length);
    res.writeHead(200, { "Content-type": "text/html" });
    res.write(napoleanDynamiteQuotes[random]);
    res.end();
}
http.createServer(server).listen(3000);

