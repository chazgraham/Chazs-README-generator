// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your application? (Requried)',
            validate: nameInput => {
                if (nameInput) {
                  return true;
                } else {
                  console.log('You need to enter a title!');
                  return false;
                }
            } 
        },
        {
            type: 'input',
            name: 'description',
            message: 'Please provide a description of your application. (Requried)',
            validate: nameInput => {
                if (nameInput) {
                  return true;
                } else {
                  console.log('You need to enter a description!');
                  return false;
                }
            }
        },
        {
            type: 'confirm',
            name: 'confirmInstallationInstructions',
            message: 'Is there installation instructions needed for your application?',
            default: true
        },
        {
            type: 'input',
            name: 'installationInstructions',
            message: 'What installation instructions are needed for your application?',
            when: ({ confirmInstallationInstructions }) => confirmInstallationInstructions
        },
        {
            type: 'input',
            name: 'usageInformation',
            message: 'What usage does your application have? (Required)',
            validate: nameInput => {
                if (nameInput) {
                  return true;
                } else {
                  console.log('You need to enter a usage description!');
                  return false;
                }
            }
        },
        {
            type: 'input',
            name: 'contribution',
            messgae: 'Who contributed to the development of this application? (Required)',
            validate: nameInput => {
                if (nameInput) {
                  return true;
                } else {
                  console.log('You need to enter who developed this application!');
                  return false;
                }
            }
        },
        // TODO: Add license checkbox
        // TODO: Add questions section
    ]);
};

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
