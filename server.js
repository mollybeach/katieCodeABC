// Required Modules
import { createRequire } from "module"
const require = createRequire(import.meta.url);
import config from './config.json' assert { type: "json" }
const fs = require('fs');
const http = require('http');
const url = require('url');
const path = require('path');
import { getLinks } from './Automator/getLinksSite.js';

// Array of Mime Types
const mimeTypes = {
  // Text Types
  "html" : "text/html",
  "css" : "text/css",
  "js" : "text/javascript",
  "txt" : "text/plain",

  // Image Types
  "jpeg" : "image/jpeg",
  "jpg" : "image/jpeg",
  "png" : "image/png",
  "gif" : "image/gif",
  "webp" : "image/webp",
  "svg" : "image/svg+xml",
  "icon" : "image/x-icon",
  // Audio and Video Types
  "webm" : "video/webm",
  "ogg" : "video/ogg",
  "mp4" : "video/mp4",
  "mp3" : "audio/mpeg",
  // Font Types
  "ttf" : "font/ttf",
  "otf" : "font/otf",
  "woff" : "font/woff",
  "woff2" : "font/woff2",
  // Application Types
  "pdf" : "application/pdf",
  "json" : "application/json"
};

// Hostname and Port
const hostname = '127.0.0.1';
const port = 3000;


// Create Server
const server = http.createServer((req, res) => {
  var uri = url.parse(req.url).pathname;
  var fileName = path.join(process.cwd(), unescape(uri)); // Current working directory + uri
  console.log('Loading ' + uri);
  var stats;

  try {
    stats = fs.lstatSync(fileName);
  } catch(e) {
    // If file not found
    res.writeHead(404, {'Content-Type' : 'text/plain'});
    res.write(`App name: ${config.name}\n`);
    res.write(`App version: ${config.version}`);
    res.write('404 not Found\n');
    res.end();
    return;
  }

  // Check if file or directory
  if(stats.isFile()) {
    var mimeType = mimeTypes[path.extname(fileName).split('.').reverse()[0]];
    res.statusCode = 200;
    res.setHeader('Content-Type', mimeType || 'text/plain');
    var fileStream = fs.createReadStream(fileName);
    fileStream.pipe(res);
  } else if(stats.isDirectory()) {
    res.statusCode = 302;
    // send fs to getLinksSite.js
    getLinks(fs);;
    res.setHeader('Location', './Automator/index.html');
    res.end();
  } else {
    res.statusCode = 500;
    res.setHeader('Content-Type', 'text/plain');
    res.end('500 Internal Error\n');
  }

});

// Run Server
server.listen(port, hostname, () => {
  console.log('Server running at http://' + hostname + ':' + port + '\n');
 
});

