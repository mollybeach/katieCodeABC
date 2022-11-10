import linkData from './dataLinks.json' assert {type: 'json'};

async function getLinks() {
  return new Promise((resolve, reject) => {
    console.log('.....getting Links');
    setTimeout(() => {
      resolve(linkData.default); // default is where the array is stored in the module
    }, 2000);
  });
}


await getLinks();

export function displayLinks() {
    console.log('.....displaying Links');
    let listTag = document.getElementById("listTag");
    for (let i = 0; i < linkData.length; i++) {
        console.log(linkData[i]);
        let element = linkData[i];
        let tagLink = document.createElement("a");
        tagLink.setAttribute("href", element.link);
        tagLink.innerHTML = element.title;
        listTag.appendChild(tagLink);
        // add a line break
        listTag.appendChild(document.createElement("br"));
    }
    }







