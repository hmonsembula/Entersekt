# Todo list exercise

### Install

- Install https://nodejs.org/en/
- Download archive from link provided
- Unzip file and cd into it
- run `npm install`

### Run
`node app.js`

Visit http://localhost:8080 in your browser

### High level application requirements
1. Multiple users should be able to view the shared public todo list
2. Should be able to add items
3. Should be able to delete items
4. Should be able to edit items (Missing feature)
5. Must be able to deploy in docker (Missing feature)

### Tasks
1. Add missing requirement #4 to the application
2. Add sufficient test coverage to the application and update readme on howto run the tests
3. Add missing requirement #5 to the application (Dockerfile and update readme with instructions)

### Bonus
4. Display test coverage after tests are executed
5. Find and fix the XSS vulnerability in the application. Also make sure that it wont happen again by including a test.

> ### Notes
> - Update the code as needed and document what you have done in the readme below
> - Will be nice if you can git tag the tasks by number

### Solution
Explain what you have done here and why...

Based on my limited exposure to the framework in recent times, below is how I resolved the assessment.

### Task #1: Add missing requirement #4
Quite straight forward, kept it to the bare minimum of being able to edit.
	- a form was added with a text input and save button for each item
	
### Task #2: Add sufficient test coverage
Was attempted using, but not limited to, the documentation here:
	- https://www.npmjs.com/package/istanbul#getting-started
	- https://github.com/gotwarlost/istanbul/issues/262
	- https://www.npmjs.com/package/assert.
To run the test, the following command can be used after you CD to the root directory:
	- npm test --coverage
	
### Task #3: Docker
Was accomplished using, but not limited to, the following documentation:
	- https://docs.docker.com/get-started/ (using node syntax)
	- https://nodejs.org/en/docs/guides/nodejs-docker-webapp/

After completing #1, first deployment to Docker (#3) was done by following above documention. Subsequent deployments were done after app changes.

### Other
An initial attempt to add tests was done using Mocha. Automated updating of the package.json file was failing for some strange reason, so the dependency was added manually. Similarly, the HTML encoding dependency to remedy the XSS vulnerability was added manually.

XSS vulnerability is caused by the lack of encoding of the input data. A script (<script type="text/javascript">alert('test')</script>) was added as a ToDo item. 
Changes were made to the app.js file using, but not limited to, the example here (https://www.npmjs.com/package/node-html-encoder) to remedy the XSS vulnerability. 
The same principle was applied to the edit functionality and re-deployed to Docker (albeit uing a different port after each deployment).

