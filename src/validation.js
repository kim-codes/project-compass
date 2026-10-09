function validateRepoURL(repoURL) {

    // check there is a not an empty url
    if (!repoURL) {
        throw new Error("✗ Please provide a repo URL.");
    }

    let url;

    // verify it's a valid URL, javascript has a built-in URL class to validate URLs 
    try {
        url = new URL(repoURL);
    } catch (error) {
        throw new Error("✗ Invalid repo URL.");
    }

    // verify the URL is using HTTPS, we don't want to accept anything else 
    if (url.protocol !== "https:") {
        throw new Error("✗ Repo URL must use HTTPS.");
    }

    // verify it's a github URL, the hostname should be github.com 
    if (url.hostname !== "github.com") {
        throw new Error("✗ Repo URL must be a GitHub URL.");
    }

    //  verify the repo path is valid, the pathname format should be /username/repo-name
    const pathParts = url.pathname.split("/").filter(Boolean);

    if (pathParts.length !== 2) {
        throw new Error("✗ Repo URL must include a username and repo name.");
    }

    // if we reach this point, the repo URL is valid structure 
    // return the owner and repo for the GitHub API request
    return {
        owner: pathParts[0],
        repo: pathParts[1]
    };
}

// make this function available to other files in the project
module.exports = validateRepoURL;