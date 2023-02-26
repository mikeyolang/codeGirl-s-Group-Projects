const { Octokit } = require("@octokit/rest");

// Create an instance of the Octokit client
const octokit = new Octokit({
  auth: "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",
});

// Set the owner and repository name of the project
const owner = "mikeyolang";
const repo = "testingGithubBot";

// Set the message that the bot will post as a comment
const comment = "Hello, World!";

// Function to create a new comment on an issue
async function createComment(issueNumber) {
  await octokit.issues.createComment({
    owner,
    repo,
    issue_number: issueNumber,
    body: comment,
  });
}

// Function to get all the open issues in the repository
async function getOpenIssues() {
  const response = await octokit.issues.listForRepo({
    owner,
    repo,
    state: "open",
  });
  return response.data;
}

// Call the getOpenIssues function and create a comment on each issue
getOpenIssues().then((issues) => {
  issues.forEach((issue) => {
    createComment(issue.number);
  });
});
