// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(templateData) {
  console.log(generateMarkdown)
  return `# ${templateData.title}

## Descripton
${templateData.description}

## Table of Contents
  * [Installation Instructions](#installation-instructions)
  * [Application Usage](#application-usage)
  * [Contributors](#contributors)

## Installation Instructions
${templateData.installationInstructions}

## Application Usage
-${templateData.usageInformation}

## Contributors
By ${templateData.contribution}

## Contact Me
If you have additional questions you can contact me at ${templateData.questions1} or by Emailing me at ${templateData.questions2}
`;
}

module.exports = generateMarkdown;
