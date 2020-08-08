const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");


const questions = [
    {
        type: "input",
        name: "github",
        message: "Enter GitHub username"
      },{
        type: "input",
        name: "email",
        message: "Enter Email Address"
      },
      {
        type: "input",
        name: "title",
        message: "Enter your project title?"
      },
      {
        type: "input",
        name: "description",
        message: "Enter a description for your project"
      },
      {
        type: "list",
        name: "license",
        message: "What kind of license do you want your project to have?",
        choices: ["MIT", "APACHE", "GPL", "GNU", "None"]
      },
      {
        type: "input",
        name: "installation",
        message: "Default command for dependency installation? (npm vs yarn)",
        default: "npm i"
      },
      {
        type: "input",
        name: "test",
        message: "Default command to run tests?",
        default: "npm test"
      },
      {
        type: "input",
        name: "usage",
        message: "How do you use this repo?",
      },
      {
        type: "input",
        name: "contributing",
        message: "What should users know to contribute to this repo",
      }
];

function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);

}

function init() {
    inquirer.prompt(questions)
    .then((inquirerResponses) => {
      console.log("Generating your README!");
      // spreader operator instead of github, description, license, etc... 
      writeToFile("README.md", generateMarkdown({...inquirerResponses}));
    })
}

init();
