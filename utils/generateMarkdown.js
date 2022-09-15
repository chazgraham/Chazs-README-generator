// a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let badge = '';
  if(license === 'MIT') {
    badge = '[![license](https://img.shields.io/github/license/Naereen/StrapDown.js.svg)](https://choosealicense.com/licenses/mit/)'
  } else if (license === 'APACHE 2.0') {
    badge = '[![license](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://www.apache.org/licenses/LICENSE-2.0)'
  } else if (license === 'GPL 3.0') {
    badge = '[![license](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses)'
  } else if (license === 'lgpl-3.0') {
    badge = '[![license](https://img.shields.io/badge/License-lgpl-3.0.svg)](http://choosealicense.com/licenses/lgpl-3.0/)'
  } else {
    badge = ''
  }
  return badge;
}

// generates markdown for README
function generateMarkdown(answer) {

  return `# ${answer.title}

  ${renderLicenseBadge(answer.license)}
  

## Descripton
${answer.description}

## Table of Contents
  * [Installation Instructions](#installation-instructions)
  * [Application Usage](#application-usage)
  * [Contributors](#contributors)
  * [Licenses](#licenses)
  * [Tests](#tests)
  * [Contact Me](#contact-me)

## Installation Instructions
Before running this application you must install -${answer.installationInstructions}

## Application Usage
-${answer.usageInformation}

## Contributors
By ${answer.contribution}

## Licenses
This application is licensed under: ${answer.license}

## Tests
To test application open the console and run the following comand: ${answer.tests}

## Contact Me
If you have additional questions you can contact me at https://github.com/${answer.questions1} or by Emailing me at ${answer.questions2}
`;
}

module.exports = generateMarkdown;
