// make a GET request to https://api.github.com/repos/kim-codes/project-compass/readme
// create function that makes the GET request 
async function getReadme(owner, repo) {

    // fetch sends the HTTP get request to GitHub 
    const response = await fetch(
        `https://api.github.com/repos/${owner}/${repo}/readme`
    );

    // adapt code to handle the response from GitHub, if the response is not ok include the status code 
    if (!response.ok) {
        throw new Error(`(HTTP ${response.status}) README not found, check the repo exists + contains a README.md file.`);
    }

    const data = await response.json();
    const readme = Buffer.from(data.content, "base64").toString("utf8");

    return readme;
}

// make this function available to other files in the project
module.exports = getReadme;
