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
function generateMarkdown(data) {
  return `
 # ${data.title}

## Description

${data.description} 

## Table of Contents 


- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
- [Badges](#badges)
- [How to Contribute](#contributions)
- [Tests](#tests)
- [Questions](#questions)
---
## Installation

${data.installation}
---
## Usage

${data.usage}

---
## Credits

List your collaborators, if any, with links to their GitHub profiles.

If you used any third-party assets that require attribution, list the creators with links to their primary web presence in this section.

If you followed tutorials, include links to those here as well.
---
## License

${data.license}

---
## Badges

![badmath](https://img.shields.io/github/languages/top/nielsenjared/badmath)

Badges aren't necessary, but they demonstrate street cred. Badges let other developers know that you know what you're doing. Check out the badges hosted by [shields.io](https://shields.io/). You may not understand what they all represent now, but you will in time.

---
## How to Contribute

${data.contributing}
---
## Tests

${data.tests}

---
## Questions


`;
}

module.exports = generateMarkdown;
