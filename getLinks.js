import fs from 'fs';
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
const html = `
`

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

//write result to file
fs.writeFile('./Links.js', JSON.stringify(onlyLinks), (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
});

// print the values of onlyLinks add new line in between
let str = '';
for (let i = 0; i < onlyLinks.length; i++) {
    str += onlyLinks[i].title + '\n';
    str += onlyLinks[i].link + '\n';

}
console.log(str);

//write result to file
fs.writeFile('./LinksText.txt', str, (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
}
);



