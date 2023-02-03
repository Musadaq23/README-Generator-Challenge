// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown  = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
const questions = [
//title of the project
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of this project?'
    },

//Description of your project
 {
    type: 'input',
    name: 'description',
    message: 'What is this project description?'
 },

 //Installation
 {
    type: 'input',
    name: 'installation',
    message: 'What are the installation instructions?'
 },

 //Usage
 {
    type: 'input',
    name: 'usage',
    message: 'What is the usage information of this project?'
 },

 //License
 {
    type: 'checkbox',
    name: 'license',
    message: 'Choose a license for this project',
    choices: ['Apache 2.0', 'MIT', 'MPL 2.0', 'N/A']
 },

 //Contribution
 {
    type: 'input',
    name: 'contribution',
    message: 'How can a user contribute to this project?'
 },
 
 //Testing
 {
    type: 'input',
    name: 'test',
    message: 'How can a user test this project?'
 },

 //Github profile
 {
    type: 'input',
    name: 'github',
    message: 'Enter your Github profile username'
 },

 //Email
 {
    type: 'input',
    name: 'email',
    message: 'Enter your email address to reach me if you have any questions about this project?'
 },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (error) => {
        if (error){
            return console.log(error);
        }
        console.log("Great, you now have your Readme file");
    });
};

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(function (input) {
        console.log(input)
        writeToFile("README.md", generateMarkdown(input));
    });
};

// Function call to initialize app
init();
