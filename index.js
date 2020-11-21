const inquirer = require("inquirer");
const fs = require ("fs");
const path = require("path");

inquirer
  .prompt([
    {
      name: "title",
      type: "input",
      message: "What is the name of your project?",
    },
    {
      name: "description",
      type: "input",
      message: "Please enter a description of your project.",
    },
    {
        name: "installation",
        type: "input",
        message: "What are the installation instructions for this project. Write NONE if no instructions.",
      },
      {
        name: "usage",
        type: "input",
        message: "How would you like your application to be used?",
      },
    {
        type: "checkbox",
        message: "Please select a license.",
        choices: [ 
                   "Apache",
                   "MIT",
                   "ISC",
                   "GNU GPLv3"
        ], 
        name: "license"
    },
    {
        name: "contribution",
        type: "input",
        message: "Who contributed on this project?",
    },
    {
        name: "test",
        type: "input",
        message: "What are the test instructions?",
    },
    {
        name: "username",
        type: "input",
        message: "What is your GitHub username?",
    },
    {
        name: "email",
        type: "input",
        message: "What is your email address?",
    },
  ]) 
  .then((answer) => {
    let readmeContent = generateReadMeMarkdown(answer);
   fs.writeFileSync(path.join(process.cwd(), 'ReadMe.md'), generateReadMeMarkdown(answer)); 
  });

  function generateReadMeMarkdown(answers){
    return `
   # Table of Contents
   
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Constribution](#contribution)
  - [Test](#test)

   ## Project Title 
   ${answers.title}

   ## Description
   ${answers.description}
   [![License: MIT](https://img.shields.io/badge/License-MIT${answers.license}-yellow.svg)](https://opensource.org/licenses/MIT)
    

   ## Installation:
   ${answers.installation}

   ## Usage:
   ${answers.usage}

   ## License:
   [![License: MIT](https://img.shields.io/badge/License-MIT${answers.license}-yellow.svg)](https://opensource.org/licenses/MIT)
   - For more information about the license, click on the following link.
   [License](https://opensource.org/licenses/${answers.license})

   ## Contribution:
   ${answers.contribution}

   ## Test
   ${answers.test}

   ## Questions:
   For Questions about the ReadMe Generator you can visit my GitHub page at the following link:
   - [GitHub profile](https://github.com/Nikstar-1/readme-hw.git${answers.github})
   For additional questions please reach out to my email at: ${answers.email}.
   ` 
  }
  
