# katieCodeABC

# Automate the Boring Stuff with Mollz
// this project grabs the html code from a website and saves it to a file
// then filters the html for the link and title of link
// then makes a dummy website with the links and titles
## Table of Contents
### 1. [Introduction](#introduction)
    This is a project goal automate the copying of links and titles from a website


### 2. [Installation](#installation)
    In order to run this project you will need to install the following:


    * npm
    * git
    * vs code
    * vs code code runner extension
    * clone this repo to your local machine
  <table>
    <th><h2>Installation</h3></th>
    <tr>
    <td>
        <h3> Install With Links </h3>
        <h4>https://docs.npmjs.com/downloading-and-installing-node-js-and-npm</h4> 
        <h4>https://git-scm.com/downloads</h4>
        <h4>https://code.visualstudio.com/download</h4>
        <h4>https://marketplace.visualstudio.com/items?itemName=formulahendry.code-runner</h4>
    </td>
    </tr>
    <tr>
    <td>
        <h3>Install With Command Line</h3>
        <h5>In order to run this project you will need run the following commands in your terminal: </h5>
<pre class="notranslate">
<code>
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/installsh)"
brew install git
brew install --cask visual-studio-code
code --install-extension formulahendry.code-runner
cd Documents
git clone https://github.com/mollybeach/katieCodeABC 
</code>
</pre>
    </td>
    </tr>
</table>

### 3. [Usage](#usage)
    To run this project you will need to open the project in vs code and run the code with the code runner extension
### 4. [Contributing](#contributing)
    This project is open to contributions
### 5. [License](#license)
    This project is licensed under the MIT license




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