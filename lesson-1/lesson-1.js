/**
 * ES6 Import syntax
 */

// import fetch from "node-fetch";

console.log("Welcome to JavaScript 2018 Edition");

function linebreak() {
    console.log("\n\n");
}

let ukOffice = [
    { name: "Joe Fazzino", skill: "Making JavaScript Crash", origin: "UK" },
    { name: "Martine Magnan", skill: "Finding production issues", origin: "France" },
    { name: "Dan Justin", skill: "CTO", origin: "Australia" }
];

/**
 * Arrow Functions
 */

// Old Way - Anonymous Function
let britishPeople = ukOffice.filter(function(person) {
    return person.origin === "UK";
});

// New Way - Arrow Function
britishPeople = ukOffice.filter(person => person.origin === "UK");

linebreak();

console.log(britishPeople);

let peopleWithArrayPosition = ukOffice.map((person, index) => {
    return person.name + " is in position " + index;
});

linebreak();

console.log(peopleWithArrayPosition);

// ---------------------------------------------------------------------------------------- //

/**
 * REST - SPREAD SYNTAX
 */

console.log(ukOffice);

linebreak();

console.log(...ukOffice);

let primeNumbers = [2, 3, 5, 7, 11];

linebreak();

function sum(a, b, c, d, e) {
    let result = Number(a + b + c + d + e);

    console.log(result);
    linebreak();
}

linebreak();

sum(primeNumbers);

sum(...primeNumbers);

// ---------------------------------------------------------------------------------------- //

/**
 * Destructuring an object
 */

let config = {
    body: { id: "1234", name: "Joe Fazzino" },
    method: "GET",
    headers: {
        Auth: "Bearer asdofjoasdjfasodfjaosdjfoa",
        "Response-Type": "application/json"
    }
};

// Old way
function backend(body, method, headers) {
    console.log("Body: ", body, "\n\n", "Method: ", method, "\n\n", "Headers: ", headers);

    linebreak();
    if (body && method && headers) {
        console.log("Calling API...");
    } else {
        console.log("FATAL ERROR");
    }
}

backend(config.body, config.method, config.headers);

// New way
function backend(config) {
    const { body, method, headers } = config;

    console.log("Body: ", body, "\n\n", "Method: ", method, "\n\n", "Headers: ", headers);
    linebreak();
    if (body && method && headers) {
        console.log("Calling API...");
    } else {
        console.log("FATAL ERROR");
    }
}

backend(config);

// ---------------------------------------------------------------------------------------- //

/**
 * Fetch
 * Promises and Async Await
 */

const api = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc?api_key=0c5c192ea6e66126777a2cc6f35c2b0d";

fetch(api)
    .then(response => response.json())
    .then(json => console.log(json))
    .catch(error => console.log(error));

async function fetchData(uri) {
    try {
        let response = await fetch(uri);

        let json = await response.json();

        return json;
    } catch (error) {
        console.log(error);
    }
}

let data = fetchData(api).then(result => console.log(result));
