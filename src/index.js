// // console.log("Welcome to Project DX Compass");

// leverage node's built-in module fs, this module let's JS interact with files and folders 
const fs = require("fs");
// leverage node's built-in module path, this module let's work with paths across OS's 
const path = require("path");
const validateProjectPath = require("./validation");

// variable that holds the user's input for the project folder path
const projectPath = process.argv[2];

// validate the project path provided by the user
validateProjectPath(projectPath);

// find the README.md file in the project folder pathnode src/index.js .
const readmePath = path.join(projectPath, "README.md");

if (fs.existsSync(readmePath)) {
    console.log("✓ README exists");
} else {
    console.log("✗ README missing");
}