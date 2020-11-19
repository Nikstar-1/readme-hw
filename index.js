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
        message: "Please select a licence.",
        choices: [ 
                   "Apache",
                   "MIT",
                   "ISC",
                   "GNU GPLv3"
        ], 
        name: "licence"
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
    ## Project Title 

    ${answers.title}

    ### Description

    ${answers.description}

    ![Github Licence](https://img.shields.io/badge/license-${answers.licence}-red.svg)
    ` 
  }
  
