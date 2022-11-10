// Required Modules
import { createRequire } from "module"
const require = createRequire(import.meta.url);
import config from './config.json' assert { type: "json" }

const fs = require('fs');
const http = require('http');
const url = require('url');
const path = require('path');




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
    //TypeError [ERR_HTTP_INVALID_HEADER_VALUE]: Invalid value "undefined" for header "Content-Type"
    // fix the above error by adding a default value to the mimeType variable
    res.setHeader('Content-Type', mimeType || 'text/plain');
    var fileStream = fs.createReadStream(fileName);
    fileStream.pipe(res);
  } else if(stats.isDirectory()) {
    res.statusCode = 302;
    res.setHeader('Location', './index.html');
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
  const html = fs.readFileSync('./sourceSiteCode.txt', 'utf8');
  console.log('peoreporepor')
  // matches only the attributes aria-label and href in the anchor tag and saves them in an object as title and link
  const getLinks = (html) => {
      const regex = /<a.*?aria-label="(.*?)".*?href="(.*?)".*?>(.*?)<\/a>/g//g;
      const linkAndTitleDatabase = []
      let match = regex.exec(html)
      while (match != null) {
          let currentMatch = {
              title: match[1],
              link: match[2],
          }
          linkAndTitleDatabase.push(currentMatch);
          match = regex.exec(html)
      }
      // adds missing beginning part of link to each link
      for (let i = 0; i < linkAndTitleDatabase.length; i++) {
          linkAndTitleDatabase[i].link = 'https://accenture.percipio.com' + linkAndTitleDatabase[i].link
      }
      //write result to file linkData.json:
      fs.writeFile('./linkData.json', JSON.stringify(linkAndTitleDatabase), (err) => {
          if (err) throw err;
          console.log('The html source code txt file has converted into a json file and been saved in linkData.json!');
      });
  }
  
  getLinks(html);
});