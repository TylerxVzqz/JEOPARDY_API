// categories is the main data structure for the app; it looks like this:

//  [
//    { title: "Math",
//      clues: [
//        {question: "2+2", answer: 4, showing: null},
//        {question: "1+1", answer: 2, showing: null}
//        ...
//      ],
//    },
//    { title: "Literature",
//      clues: [
//        {question: "Hamlet Author", answer: "Shakespeare", showing: null},
//        {question: "Bell Jar Author", answer: "Plath", showing: null},
//        ...
//      ],
//    },
//    ...
//  ]


const NUM_CATEGORIES = 6;
const NUM_QUESTIONS_PER_CAT = 5;
let categories = [];



/** Get NUM_CATEGORIES random category from API.
 *
 * Returns array of category ids
 */

async function getCategoryIds(){
    const response = await axios.get("https://rithm-jeopardy.herokuapp.com/api/categories?count=100");
    const res = response.data;
    console.log(res);

}
getCategoryIds();

// NOTICE WE HAVE PROVIDED THE VALUE 100 FOR THE <count> query, what happens if the value is changed? //
//The API will return the amount of categories queried but the structure of data will remain the same. //

// what is in our res variable? //
// The array of objects with category data //

// checking out res.data will produce the following result //
// 


// and so on until 100 objects in an array*



/** Return object with data about a category:
 *
 *  Returns { title: "Math", clues: clue-array }
 *
 * Where clue-array is:
 *   [
 *      {question: "Hamlet Author", answer: "Shakespeare", showing: null},
 *      {question: "Bell Jar Author", answer: "Plath", showing: null},
 *      ...
 *   ]
 */

// Return object with data about a category://

function getCategory(catId) {
    return axios.get(`https://rithm-jeopardy.herokuapp.com/api/categories/${catId}`)
        .then(response => response.data)
        .catch(err => {
            console.error("Error fetching category data:", err);
            throw err;
        });
}

/** Fill the HTML table#jeopardy with the categories & cells for questions.
 *
 * - The <thead> should be filled w/a <tr>, and a <td> for each category
 * - The <tbody> should be filled w/NUM_QUESTIONS_PER_CAT <tr>s,
 *   each with a question for each category in a <td>
 *   (initally, just show a "?" where the question/answer would go.)
 */

function fillTable() {
    const table = document.querySelector("#jeopardy-board");
    table.innerHTML = "";
    const thead = document.createElement("thead");
    const headerRow = document.createElement("tr");
    categories.forEach(cat => {
        const th = document.createElement("th");
        th.textContent = cat.title;
        headerRow.appendChild(th);
});
}

/** Handle clicking on a clue: show the question or answer.
 *
 * Uses .showing property on clue to determine what to show:
 * - if currently null, show question & set .showing to "question"
 * - if currently "question", show answer & set .showing to "answer"
 * - if currently "answer", ignore click
 * */

function handleClick(evt) {
}

/** Wipe the current Jeopardy board, show the loading spinner,
 * and update the button used to fetch data.
 */

function showLoadingView() {

}

/** Remove the loading spinner and update the button used to fetch data. */

function hideLoadingView() {
}

/** Start game:
 *
 * - get random category Ids
 * - get data for each category
 * - create HTML table
 * */

async function setupAndStart() {
}

/** On click of start / restart button, set up game. */

// TODO

/** On page load, add event handler for clicking clues */

// TODO