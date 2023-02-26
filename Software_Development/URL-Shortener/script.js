// Get the form and the result div
const form = document.querySelector("form");
const resultDiv = document.getElementById("result");

// Add an event listener to the shorten button
document.getElementById("shorten-btn").addEventListener("click", () => {
  // Get the URL input value
  const urlInput = document.getElementById("url");
  const longUrl = urlInput.value.trim();

  // Check if the input is not empty
  if (longUrl === "") {
    alert("Please enter a valid URL");
    return;
  }

  // Send a POST request to the URL shortening API
  fetch(
    "https://shorten-rest.p.rapidapi.com/aliases?aliasName=my-alias&domainName=i" +
      longUrl
  )
    .then((response) => response.json())
    .then((data) => {
      // Display the shortened URL
      const shortUrl = data.result.short_link;
      resultDiv.innerHTML = `<p>Your shortened URL is: <a href="${shortUrl}" target="_blank">${shortUrl}</a></p>`;
      resultDiv.style.display = "block";
    })
    .catch((error) => {
      // Display an error message if the request fails
      resultDiv.innerHTML = `<p>Sorry, an error occurred. Please try again later.</p>`;
      resultDiv.style.display = "block";
    });

  // Clear the URL input
  urlInput.value = "";
});

// Hide the result div when the user clicks outside of it
window.addEventListener("click", (event) => {
  if (!resultDiv.contains(event.target)) {
    resultDiv.style.display = "none";
  }
});
