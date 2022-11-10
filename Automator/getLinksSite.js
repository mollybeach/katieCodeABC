// how can i get an entire websites html code using javascript?: i want be 

import fetch from 'node-fetch';

// matches only the attributes aria-label and href in the anchor tag and saves them in an object as title and link

export function getLinks(fs) {
   // 

    // get the html code of the website
    // for example: https://google.com

    // get the html code of the website
    // for example: https://google.com

    //fetch('https://google.com')

    // get the html code of the website
                    // Getting the HTML
                async function FetchHtml() 
                {
                    let response = await fetch('https://address.com');
                    return await response.text(); // Returns it as Promise
                }
        
        
                // Usaing the HTML
                async function Do()
                {
                   let html = await FetchHtml().then(text => {return text}); // Get html from the promise
                   // alert(html);
                     console.log(html); 
                }
        
        
                // Exe
                Do();



     

  let html = FetchHtml();


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


//   const html = fs.readFileSync('./Automator/sourceCode.txt', 'utf8');
