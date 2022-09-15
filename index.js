const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');

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
          type: 'list',
          name: 'license',
          message: 'What licenes does your application have?',
          choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'lgpl-3.0', 'None']
        },
        {
          type: 'input',
          name: 'tests',
          message: 'what commands are input into the console to run tests for this application? (Requried)',
          validate: nameInput => {
            if (nameInput) {
              return true;
            } else {
              console.log('You need to enter test information! (If no tests are required then type None)');
              return false;
            }
          }
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

// writing files
const writeToFile = fileContent => {
  return new Promise((resolve, reject) => {
    fs.writeFile('./dist/generateREADME.md', fileContent, err => {
      if (err) {
        reject(err);
        return;
      }

      resolve({
        ok: true,
        message: 'File created!'
      });
    });
  });
};

questions()
  .then(function(answer) {
    var fileContent = generateMarkdown(answer);
    writeToFile(fileContent)
    console.log('README created!')
});