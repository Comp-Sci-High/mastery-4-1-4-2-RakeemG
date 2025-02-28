const express = require('express');
const app = express();

/**
 * STEP 0: npm i express
 */

/**
 * STEP 1: Set up a "public" folder and add static files into it
 */


/**
 * STEP 2: Go into dance.html and make sure that it links to both the css and js files
 */

/**
 * STEP 3: Add static file middleware. 
 */


/**
 * STEP 4: Create a route for "/dance" that serves the dance.html file
 */

app.get('/dance', (req, res) => {
    res.sendFile(__dirname + '/public/dance.html');

app.listen(3000, () => {
    console.log(`Server is running`);
});
