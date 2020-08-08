// res for response 
function generateMarkdown(res) {
  return `

# ${res.title}

## Description

${res.description}

## Table of contents

* [Installation] (#installation)

* [Usage] (#usage) 
${res.license}

* [Contributing] [#contributing]

* [Tests] [#tests]

* [Questions] (#questions)

## Installation

${res.installation}

## Usage 

${res.usage}

## Contributing

${res.contributing}

## Tests

${res.test}

## Contact

For further questions feel free to contact me at ${res.email}

You can find more of my work at [${res.github}] or (https://GitHub.com/${res.github}/).

`;
}

module.exports = generateMarkdown;
