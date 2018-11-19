// TODO: optimize?
// Function that returns a random integer from min to max (inclusive).
function randomInteger(min, max) {
  // Using Math.floor along with a multiplied value of Math.random to generate a random integer.
  return Math.floor(Math.random() * (max - min)) + min;
}
// Function to start and run the exercise.
function runExercise() {
  // Storing the min and max input values.
  var min = parseInt(document.getElementById("min").value);
  var max = parseInt(document.getElementById("max").value);
  // Storing the feedback span element.
  var feedback = document.getElementById("feedback");
  // Making sure the max is at least the min.
  if (!(min <= max)) {
    // Informing the user that the input was invalid.
    feedback.innerHTML = "Make sure the maximum is greater than the minimum.";
    // Exiting the function.
    return;
  }

  // Making the start button invisible.
  document.getElementById("start").style.display = "none";
  // Clearing the feedback span element.
  feedback.innerHTML = "";

  // Generating 2 starting integers.
  var firstInteger = randomInteger(min, max);
  var secondInteger = randomInteger(min, max);
  // Storing the chosen operation.
  var operation = document.getElementById("operation").value;
  // Generating the answer based on the chosen operation.
  switch (operation) {
    case "addition":
      var answer = firstInteger + secondInteger;
      break;
    case "subtraction":
      var answer = firstInteger - secondInteger;
      break;
    case "multiplication":
      var answer = firstInteger * secondInteger;
      break;
    case "division":
      // Using math to make sure the answer is a whole number.
      var answer = firstInteger;
      firstInteger = firstInteger * secondInteger;
  }

  // Checking if the first integer is positive.
  if (firstInteger > 0) {
    // Adding brackets and a positive sign.
    firstInteger = "(+" + firstInteger + ")";
  } else if (firstInteger < 0) { // Checking if the first integer is negative.
    // Adding brackets.
    firstInteger = "(" + firstInteger + ")";
  }
  // Checking if the second integer is positive.
  if (secondInteger > 0) {
    // Adding brackets and a positive sign.
    secondInteger = "(+" + secondInteger + ")";
  } else if (secondInteger < 0) { // Checking if the second integer is negative.
    // Adding brackets.
    secondInteger = "(" + secondInteger + ")";
  }
  // Storing the question element.
  var question = document.getElementById("question");
  // Printing the question in the question span element based on the chosen operation.
  switch (operation) {
    case "addition":
      question.innerHTML = firstInteger + " + " + secondInteger + " = ?";
      break;
    case "subtraction":
      question.innerHTML = firstInteger + " - " + secondInteger + " = ?";
      break;
    case "multiplication":
      question.innerHTML = firstInteger + " × " + secondInteger + " = ?";
      break;
    case "division":
      question.innerHTML = firstInteger + " ÷ " + secondInteger + " = ?";
  }

  // Storing the first start time.
  var startTime = new Date();
  // Initializing the end time and the time taken so I don't need to keep using var.
  var endTime = null;
  var timeTaken = null;
  // Storing the number of iterations and sum to calculate the average.
  var numberOfIterations = 0;
  var sum = 0;
  // Storing the number of attempts and correct answers to calculate the correct answers/attempts percentage.
  var attempts = 0;
  var correctAnswers = 0;

  // Storing the user input box.
  var userInputBox = document.getElementById("user-answer");
  // Storing the average span element.
  var average = document.getElementById("average");
  // Storing the wrong/correct span element.
  var correct = document.getElementById("correct");
  // Adding a keypress event listener to the user input box.
  userInputBox.addEventListener("keypress", function(event) {
    // Making sure the key was an enter key.
    if (event.charCode == 13) {
      // Incrementing the number of attempts.
      attempts++;
      // Checking if the user answer was correct.
      if (parseInt(userInputBox.value) == answer) {
        // Getting the end time.
        endTime = new Date();
        // Calculating the number of seconds taken.
        timeTaken = parseFloat(((endTime - startTime) / 1000).toFixed(2));
        // Updating the number of iterations and the sum.
        numberOfIterations++;
        sum += timeTaken;

        // Incrementing the amount of correct answers.
        correctAnswers++;

        // Setting the feedback element color to green.
        feedback.style.color = "green";
        // Telling the user that they are correct and what their time was.
        feedback.innerHTML = "Correct! You took " + timeTaken + " seconds.";
        // Telling the user their new average time.
        average.innerHTML = "Your average time is " + (sum / numberOfIterations).toFixed(2) + " seconds.";

        // Telling the user their correct answers/attempts percentage.
        correct.innerHTML = "You have gotten " + Math.round((correctAnswers / attempts) * 100) + "% (" + correctAnswers + " out of " + attempts + ") of your answers correct.";

        // Clearing the input box for the next question.
        userInputBox.value = "";
        // Updating the start time.
        startTime = new Date();

        // Generating two new integers.
        firstInteger = randomInteger(min, max);
        secondInteger = randomInteger(min, max);
        // Printing the question in the question span element based on the chosen operation.
        switch (operation) {
          case "addition":
            answer = firstInteger + secondInteger;
            break;
          case "subtraction":
            answer = firstInteger - secondInteger;
            break;
          case "multiplication":
            answer = firstInteger * secondInteger;
            break;
          case "division":
            // Using math to make sure the answer is a whole number.
            answer = firstInteger;
            firstInteger = firstInteger * secondInteger;
        }

        // Checking if the first integer is positive.
        if (firstInteger > 0) {
          // Adding brackets and a positive sign.
          firstInteger = "(+" + firstInteger + ")";
        } else if (firstInteger < 0) { // Checking if the first integer is negative.
          // Adding brackets.
          firstInteger = "(" + firstInteger + ")";
        }
        // Checking if the second integer is positive.
        if (secondInteger > 0) {
          // Adding brackets and a positive sign.
          secondInteger = "(+" + secondInteger + ")";
        } else if (secondInteger < 0) { // Checking if the second integer is negative.
          // Adding brackets.
          secondInteger = "(" + secondInteger + ")";
        }
        // Printing the question in the question span element based on the chosen operation.
        switch (operation) {
          case "addition":
            question.innerHTML = firstInteger + " + " + secondInteger + " = ?";
            break;
          case "subtraction":
            question.innerHTML = firstInteger + " - " + secondInteger + " = ?";
            break;
          case "multiplication":
            question.innerHTML = firstInteger + " × " + secondInteger + " = ?";
            break;
          case "division":
            question.innerHTML = firstInteger + " ÷ " + secondInteger + " = ?";
        }
      } else {
        // Setting the feedback element color to red.
        feedback.style.color = "red";
        // Telling the user that they were wrong.
        feedback.innerHTML = "Wrong.";
        // Telling the user their correct answers/attempts percentage.
        correct.innerHTML = "You have gotten " + Math.round((correctAnswers / attempts) * 100) + "% (" + correctAnswers + " out of " + attempts + ") of your answers correct.";
        // Clearing the input box for the next attempt.
        userInputBox.value = "";
      }
    }
  });
}
