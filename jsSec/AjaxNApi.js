// API ==> CCNA Mod 3 EA
// API is contitute of an "Endpoint" part

data = {}
// Json  parsing
JSON.parse(data) // return an object

// Stringify obj into json format(string)
// All undefined are replaced with null
JSON.stringify(obj)
obj = {}

// HTTP verbs
// are just words that specify types of requests
// Ex: GET, POST, UPDATE, PUT, DELETE, PATCH, etc...

// Http status code
// Just a number which represents the status of the request
// 1xx  :
// 2xx  : Successful responses
// 3xx  : Redirection messages
// 4xx  : Client error responses
// 5xx  : Server error responses

// Query String also known as query parameters
// a way to create individual sub-query to be embedded in the request
// queries are joined with "&" and are in form of key-value pairs
// if a query is not supported by the API in the URL, it is simply dropped
// variable syntax is ":VarName"
// the chained list of queries is chained to "?" in the final URL

// HTTP Headers
// Key-value pairs

// Headers
// Usually in the documentation of the API

// Requests
// XMLHttpRequests (XHR)
// Create a new XHR obj
const newReq = new XMLHttpRequest();

newReq.onload = () => {
    // Raw request object
    console.log("Object: ", this);
    // Parse the response data
    const data = JSON.parse(this.responseText)
    console.log(data)
} // runs when no error

newReq.onerror = () => { } // runs when an error occurs

// newReq.open() // formats or sets the request
// EX:
newReq.open("GET", "https://swapi.dev/api/people/1/")

newReq.send()  // sends the request


// REQuest using Fetch
fetch("URL")
    .then((response) => {
        return response.json(); // To parse It // returns a promise
    })
    .then((data) => {
        console.log(data)
    })
    .catch(err => { })

// fetch can be better used in async functions and try-catch best practice

// Axios library for request
// Install axios locally in project or use its CDN in the html page
AdditionalParamConfig = { headers: { Accept: "application/json" } } // See the API docs to configure the param such as response's header 
axios.get("URL", AdditionalParamConfig).then(res => {

}).catch(error => {

})

// NB: Never forget to await a promise as response when manipulating async processes
