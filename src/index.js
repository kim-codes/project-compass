// // console.log("Welcome to Project DX Compass");

// index is our entry to the project and coordinates everything

// loads functions from validation.js and github-api.js
const validateRepoURL = require("./validation");
const getReadme = require("./github-api");

async function main() {
    // accept argument from user 
    const repoURL = process.argv[2];

    // pass argument to validre the URL
    const { owner, repo } = validateRepoURL(repoURL);

    // now we get the README from GitHub API
    const readme = await getReadme(owner, repo);

    console.log(readme);
}

main().catch(error => {
    console.error("✗", error.message);
    process.exitCode = 1;
});