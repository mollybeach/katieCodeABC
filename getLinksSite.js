
//import fs from 'fs';
/*uncaught TypeError: Failed to resolve module specifier "fs". Relative references must start with either "/", "./", or "../".*/
// try to fix yjr fs import:
// fix the error about require not being defined:
// 
/*
const fs = require('fs');
//error: getLinksSite.js:5 Uncaught ReferenceError: require is not defined




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


*/
