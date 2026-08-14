// leverage node's built-in module fs, this module let's JS interact with files and folders 
const fs = require("fs");

function validateProjectPath(projectPath) {

    // check there is a valid project path
    if (!projectPath) {
        console.log("✗ Please provide a project path.");
        process.exit(1);
    }

    // check that the project path exists
    if (!fs.existsSync(projectPath)) {
        console.log("✗ Project path does not exist.");
        process.exit(1);
    }

    // check that the project path is a directorynode src/index.js package.json
    if (!fs.statSync(projectPath).isDirectory()) {
        console.log("✗ Project path is not a directory.");
        process.exit(1);
    }

}

// make this function available to other files in the project
module.exports = validateProjectPath;