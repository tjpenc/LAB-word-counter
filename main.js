console.log("Connected!")
// YOU WILL MODIFY THIS FUNCTION TO GET THE PROGRAM TO WORK
const wordCounter = (value) => {
  // Type into the input and press submit, you will see the value you entered in your console
  console.log(value);

  if (value.length >= 1) {
    // COMPLETE THE LOGIC
    // If there is at least one symbol input, go down this chain of logic
    // Initialize number of words (if on this chain there will be at least 1)
    // loop through each symbol that is input (value.length)
    // set the currentValue = to the string of the current symbol - can get that by using text-string[i]
    // if that current value is a space character, add 1 to the number of words
    // Concatenate the value of numWords onto the word count output string given
    // Will break if space characters are haphazardly used
    let numWords = 1;
    for (let i = 0 ; i < value.length ; i++) {
      let currentValue = value[i];
      if (currentValue === " ") {
        numWords++;
      }
    }
    wordCount.innerHTML = `Word Count: ` + numWords; 
  } else {
    // if the value is empty, set the error message value to "Please input text"
    error.innerHTML = "Please input text"; // UPDATE THIS
  };
};

// OPTIONAL CHALLENGE
const toggleMode = (btnText) => {
  // complete the function
}

// ************************************************ //
// **** DO NOT MODIFY THE CODE BELOW THIS LINE **** //
// ************************************************ //

// These are query selectors. We will focus on them later in the course
const textarea = document.querySelector("textarea");
const form = document.querySelector("form");
const error = document.querySelector("#error");
const wordCount = document.querySelector("#word-count");
const toggleButton = document.querySelector("#bg-switch");

// These are event listeners. We will focus on them later in the course
form.addEventListener("submit", (event) => {
  event.preventDefault(); // the default behavior of a form is to reload the page, we do not want that so we want to prevent that behavior
  error.innerHTML = ""; // clear out the innerHTML on submit
  wordCount.innerHTML = ""; // clear out the innerHTML on submit
  const value = textarea.value; // grab the value of the text area on submit
  wordCounter(value); // call the function and pass it the value
});

form.addEventListener("reset", () => {
  error.innerHTML = ""; // on reset, clear the innderHTML
  wordCount.innerHTML = ""; // on reset, clear the innderHTML
});

toggleButton.addEventListener("click", (event) => {
  toggleMode(event.target.innerHTML);
});
