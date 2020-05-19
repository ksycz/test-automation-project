## Setup 

### Configure node.js and npm
    
Ensure that you have node.js and npm installed by checking their versions.
```
    $ npm -v
    $ node -v
```
If they are not installed, download and install node.js (including npm) from the [Node.js website](https://nodejs.org/en/download/)

### Install Cypress using the package.json

1. Install dependencies from the package.json file.
```
    $ npm install
```

The info how to install Cypress from the beginning can be found [here](https://docs.cypress.io/guides/getting-started/installing-cypress.html#)

## Run tests

Run tests headlessly:

```
    $ npx cypress run
```

Run tests via the Test Runner GUI:

```
    $ npx cypress open
```

When the Cypress GUI opens, click the test file name to run it. 

To run a specific test suite only, use the following command: 

```
    $ npx cypress run --spec cypress/integration/app_spec.js

```
More commands can be found [here](https://docs.cypress.io/guides/guides/command-line.html#)

### Chrome security





