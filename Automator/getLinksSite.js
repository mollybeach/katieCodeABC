// matches only the attributes aria-label and href in the anchor tag and saves them in an object as title and link
export function getLinks(fs) {
    const html = fs.readFileSync('./Automator/sourceCode.txt', 'utf8');
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


