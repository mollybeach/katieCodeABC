import courses from './Link.json' assert {type: 'json'};

async function getCourses() {
  return new Promise((resolve, reject) => {
    console.log('.....getting courses');
    setTimeout(() => {
      resolve(courses.default); // default is where the array is stored in the module
    }, 2000);
  });
}


await getCourses();

export function displayCourses() {
    console.log('.....displaying courses');
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







