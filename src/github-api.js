// make a GET request to https://api.github.com/repos/kim-codes/project-compass/readme
// create function that makes the GET request 
async function getReadme() {

    // fetch sends the HTTP get request to GitHub 
    const response = await fetch(
        "https://api.github.com/repos/kim-codes/project-compass/readme"
    );

    // check we get a valid response back
    if (response.ok) {
        // response.json() converts JSON response into a javascript object
        const data = await response.json();
        console.log(data.html_url);
        // html_url is the URL to the README file in the repository
        // content is the contents of README, encoded in Base64 - node gas built-in tool, Buffer, can decode it
        const readme = Buffer.from(data.content, "base64").toString("utf8");
        console.log(readme);
    } else {
        console.error("Failed to fetch README");
    }
}

// run the function
getReadme();

