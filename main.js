console.log("Connected!")
// YOU WILL MODIFY THIS FUNCTION TO GET THE PROGRAM TO WORK
const wordCounter = (value) => {
  // Type into the input and press submit, you will see the value you entered in your console
  console.log(value);

  if (value.length >= 1) {
    // COMPLETE THE LOGIC
    // If there is at least one symbol input, go down this chain of logic
    // trim whitespace off both ends of string with .trim and store trimmed value!!
    // Initialize number of words as 1 (if on this chain there will be at least 1)
    // loop through each character (trimmedValue.length)
    // set the currentValue = to the string of the current symbol - can get that by using string[i]
    // look at the next value in the string (string[i + 1])
    // if that current value is a space character, and the next value is not a space character, add 1 to the number of words
      // This allows there to be whitespace inside the string without counting extra words
    // Concatenate the value of numWords onto the word count output string given
    // Will break if space characters are haphazardly used
    let trimmedValue = value.trim();
    let numWords = 1;
    for (let i = 0 ; i < trimmedValue.length ; i++) {
      let currentValue = trimmedValue[i];
      let nextValue = trimmedValue[i + 1];
      if (currentValue === " " && nextValue !== " ") {
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

// ************************************************ //
// **** DO NOT MODIFY THE CODE BELOW THIS LINE **** //
// ************************************************ //

const toggleButtonText = function() {
  const btnText = toggleButton.innerText;
  if (btnText === "Dark Mode") {
    toggleButton.innerText = "Light Mode";
  } else if (btnText === "Light Mode") {
    toggleButton.innerText = "Dark Mode";
  }
}

// These are query selectors. We will focus on them later in the course
const textarea = document.querySelector("textarea");
const form = document.querySelector("form");
const error = document.querySelector("#error");
const wordCount = document.querySelector("#word-count");
const toggleButton = document.querySelector("#bg-switch");
const body =document.querySelector("body");

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

toggleButton.addEventListener("click", function() {
  console.log(toggleButton);
  console.log(toggleButton.classList);
  body.classList.toggle("dark");
  toggleButtonText();
});
