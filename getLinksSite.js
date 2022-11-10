import fs from 'fs';
//TypeError [ERR_UNKNOWN_FILE_EXTENSION]: Unknown file extension ".txt"
const html = fs.readFileSync('./sourceSiteCode.txt', 'utf8');



/*
async function getSiteCode() {
    return new Promise((resolve, reject) => {
      console.log('.....getting source site code');
      setTimeout(() => {
        console.log(html.default)
        resolve(html.default); // default is where the array is stored in the module
      }, 2000);
    });
  }*

  
  
/* 
take an a html written as a string use regex and remove tag besides <a> tags
i want to save the link and the title of the link in the database 
remove all tags except <a> tags for example <p> tags
example:
`<a href="http://www.google.com">Google</a> <a href="http://www.yahoo.com">Yahoo</a>`);
returns:
Google http://www.google.com
Yahoo http://www.yahoo.com"
*/
/*
const html = `
`
*/

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
    return linkAndTitleDatabase
}

let onlyLinks = getLinks(html);


for (let i = 0; i < onlyLinks.length; i++) {
    onlyLinks[i].link = 'https://accenture.percipio.com' + onlyLinks[i].link;
}

//write result to file linkData,json:


fs.writeFile('./linkData.json', JSON.stringify(onlyLinks), (err) => {
    if (err) throw err;
    console.log('The html source code txt file has converted into a json file and been saved in linkData.json!');
});
/*
// print the values of onlyLinks add new line in between
let str = '';
for (let i = 0; i < onlyLinks.length; i++) {
    str += onlyLinks[i].title + '\n';
    str += onlyLinks[i].link + '\n';

}
console.log(str);*/

//write result to file
/*
fs.writeFile('./LinksText.txt', str, (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
}
);
*/


