// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const { default: Choice } = require('inquirer/lib/objects/choice.js');
const generateMarkdown = require('./utils/generateMarkdown.js');

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
            type: 'input',
            name: 'installationInstructions',
            message: 'What installation instructions are needed for your application?',
            validate: nameInput => {
              if (nameInput) {
                return true;
              } else {
                console.log('You need to enter installation instructions!');
                return false;
              }
          } 
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
            message: 'Who contributed to the development of this application? (Required)',
            validate: nameInput => {
                if (nameInput) {
                  return true;
                } else {
                  console.log('You need to enter who developed this application!');
                  return false;
                }
            }
        },
        {
          type: 'checkbox',
          name: 'licenes',
          message: 'What licenes does your application have?',
          choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None']
        },
        {
          type: 'input',
          name: 'questions1',
          message: 'Enter your GitHub Username. (Required)',
          validate: nameInput => {
            if (nameInput) {
              return true;
            } else {
              console.log('You need to enter github repository link!');
              return false;
            }
          }
        },
        {
          type: 'input',
          name: 'questions2',
          message: 'Enter your Email address here. (Required)',
          validate: nameInput => {
            if (nameInput) {
              return true;
            } else {
              console.log('You need to enter your Email address!');
              return false;
            }
          }
        }
    ]);
};

// Function call to initialize app
questions()
  .then(questions => {
    const readme = generateMarkdown(questions);

    fs.writeFile('./dist/README.md', readme, err => {
      if (err) throw new Error(err);

      console.log('README created!')
    })
  })