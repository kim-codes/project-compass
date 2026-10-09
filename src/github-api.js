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
        console.log(data);
    } else {
        console.error("Failed to fetch README");
    }
}

// run the function
getReadme();

