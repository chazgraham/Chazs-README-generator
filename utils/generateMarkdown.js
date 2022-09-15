// a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let badge = '';
  if(license === 'MIT') {
    badge = '![GitHub license](https://img.shields.io/github/license/Naereen/StrapDown.js.svg'
  } else if (license === 'APACHE 2.0') {
    badge = '![license](https://img.shields.io/badge/License-Apache%202.0-blue.svg'
  } else if (license === 'GPL 3.0') {
    badge = '![license](https://img.shields.io/badge/License-GPLv3-blue.svg'
  } else if (license === 'lgpl-3.0') {
    badge = '![license](https://img.shields.io/badge/License-lgpl-3.0.svg'
  } else {
    badge = ''
  }
  return badge;
}

// returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let licenseLink = '';
  if(license === 'MIT') {
    licenseLink = 'https://choosealicense.com/licenses/mit/'
  } else if (license === 'APACHE 2.0') {
    licenseLink = 'https://www.apache.org/licenses/LICENSE-2.0'
  } else if (license === 'GPL 3.0') {
    licenseLink = 'https://www.gnu.org/licenses'
  } else if (license === 'lgpl-3.0') {
    licenseLink = 'http://choosealicense.com/licenses/lgpl-3.0/'
  } else {
    licenseLink = ''
  }
  return licenseLink;
}

// a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let licenseSection = ''
  if(license === 'None') {
    licenseSection = ''
  } else {
    licenseSection = `License: ${license}`
  }
}

// generates markdown for README
// TODO: fix license section
function generateMarkdown(answer) {

  return `# ${answer.title}

  ## ${renderLicenseSection(answer.license)} ${renderLicenseBadge(answer.license)}
  ### ${renderLicenseLink(answer.license)}

## Descripton
${answer.description}

## Table of Contents
  * [Installation Instructions](#installation-instructions)
  * [Application Usage](#application-usage)
  * [Contributors](#contributors)
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
