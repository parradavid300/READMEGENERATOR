// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown')
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the Title of your project?',
      },
      {
        type: 'input',
        name: 'description',
        message: 'Write a short description about your project.',
      },
      {
        type: 'input',
        name: 'installation',
        message: 'What are the steps required to install your project?',
      },
      {
        type: 'input',
        name: 'usage',
        message: 'How do you use your application.',
      },
      {
        type: 'input',
        name: 'contributions',
        message: 'What are the contribution guidlines if other developers choose to contribute?',
      },
      {
        type: 'input',
        name: 'test',
        message: 'What are the instructions for testing the app?',
      },
      {
        type: 'list',
        name: 'license',
        message: 'What license did you use?',
        choices: ['apache', 'MIT', 'mozilla', 'agpl', 'no license' ]
      },
      {
        type: 'input',
        name: 'github',
        message: 'What is your github link?',
      },
      {
        type: 'input',
        name: 'email',
        message: 'What is your email?',
      },

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {

}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    

}

// Function call to initialize app
init();
