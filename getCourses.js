// how to but the server responded with a MIME type of "application/json"
// please import
import courses from './Link.json' assert {type: 'json'};
//import * as courses from './Link.json' assert {type: 'json'}; // Check if file/directory if(stats.isFile()) { var mimeType = mimeTypes[path.extname(fileName).split(".").reverse()[0]]; res.writeHead(200, {'Content-Type' : mimeType}); var fileStream = fs.createReadStream(fileName); fileStream.pipe(res); } else if(stats.isDirectory()) { res.writeHead(302, {'Location' : 'index.html'}); res.end(); } else { res.writeHead(500, {'Content-Type' : 'text/plain'}); res.write('500 Internal Error
//const courses = require('./Link.json');
/*

async function getCourses() {
  return new Promise((resolve, reject) => {
    console.log('.....getting courses');
    setTimeout(() => {
      resolve(courses);
    }, 2000);
  });



}


await getCourses();
*/








export function displayCourses() {
    console.log('.....displaying courses');
    console.log(courses.length);
let courseList = document.getElementById("courseList");
for (let i = 0; i < courses.length; i++) {
    console.log(courses[i]);
let course = courses[i];

let courseLink = document.createElement("a");
courseLink.setAttribute("href", course.link);
courseLink.innerHTML = course.title;
courseList.appendChild(courseLink);
// add a line break
courseList.appendChild(document.createElement("br"));
}
}






// convert module to a function
/*
const { default: courses } = await import('./Link.json', {
    assert: {
      type: 'json'
    }
  });*/