// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license ==='Apache 2.0'){
    return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
  }
  if (license === 'N/A'){
    return ''
  }

  if (license === 'MIT'){
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
  }

  if (license === 'MPL 2.0'){
    return `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`
  }
}


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let LicenseLink = '';
  if (LicenseLink === 'Apache 2.0'){
    LicenseLink = `https://opensource.org/licenses/Apache-2.0`
  } else if (license === 'MIT') {
    LicenseLink = `https://opensource.org/licenses/MIT`
  } else if (license === 'MPL 2.0'){
    LicenseLink = `https://opensource.org/licenses/MPL-2.0`
  } else {
    LicenseLink = ''
  }
  return LicenseLink;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let LicenseSection = '';
  if (LicenseSection === 'N/A'){
    LicenseSection = ''
  } else {
    LicenseSection = `License: ${license}`
  }
  return LicenseSection;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
 return `# ${data.title}
##License:
[![license](https://img.shields.io/badge/License-${data.license}-blue.svg)](https://opensource.org/licenses/${data.license})
## Table of Contents
[Description](#description)
[Installation](#installation)
[Usage](#usage)
[Contribution](#contribution)
[Testing](#testing)
[Additional Info](#additional-info)

## Description
${data.description}
## Installation
${data.installation}
## Usage
${data.usage}
## License
${data.license}
## Contribution
${data.contribution}
## Testing
${data.test}
## Contact Information
Github: ${data.github}](https://github.com/${data.github})
Email: [${data.email}](mailto:${data.email})`;
}


module.exports = generateMarkdown;
