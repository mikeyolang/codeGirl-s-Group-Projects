# URL-Shortener
## HTML file:
1. The HTML file defines the structure of the web page.
2. It contains a form with an input field for the user to enter a URL and a button to trigger the URL shortening process.
3. It also contains a div element to display the result of the URL shortening process.
## CSS file:
1. The CSS file defines the styles for the HTML elements.
2. It sets the layout of the form and input elements, and styles the button and result div.
3. It also hides the result div by default.
## JavaScript file:
*The JavaScript file adds functionality to the web page.* <br/>
The `const` keyword is used to declare variables that cannot be reassigned.<br/>
The `document.querySelector` method gets a reference to the form element.<br/>
The `document.getElementById` method gets a reference to the result div and shorten button elements.<br/>
The `addEventListener` method adds an event listener to the shorten button that listens for a `click` event and executes the callback function when the event occurs. <br/>
The callback function gets the value of the URL input field, trims any whitespace from the beginning and end, and assigns it to the longUrl variable. <br/>
The function checks if the input is not empty and displays an alert if it is. <br/>
If the input is not empty, the function sends a `POST` request to the shrtcode API using the fetch method. <br/>
The `API URL` includes the longUrl parameter and returns a `JSON response`. <br/>
The `then` method is used to handle the response data. <br/>
If the request is successful, the function extracts the shortened URL from the response data and displays it in the result div using template literals. <br/>
If the request fails, the `catch` method is used to display an error message in the result div. <br/>
The `window` object is used to add an event listener that listens for a "click" event anywhere on the page. <br/>
The callback function for the click event checks if the target element of the click event is not a child of the result div, and if so, hides the result div.
