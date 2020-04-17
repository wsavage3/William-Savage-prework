// Create an array of words
var words = [
  "javascript",
  "python",
  "MATLAB",
  "Java",
  "Fortran",
  "programming",
  "loops",
  "variable",
  "Boolean",
  "conditional",
  "function",
  "constant",
  "output"
];
  for (var z=0; z<words.length; z++) {
  var word = words[Math.floor(Math.random() * words.length)];
  answerArray=[];
  for (var i = 0; i < word.length; i++) {
    answerArray[i] = "_";
    document.write(answerArray)
  }
  
  var remainingLetters = word.length;

  var i=0;
  
  while (remainingLetters > 0) {
    var guess = prompt('Guess a letter, or click Cancel to stop playing')

  
  for (var j = 0; j < word.length; j++) {
    if (word[j] === guess) {
      answerArray[j] = guess; remainingLetters--;
    }
    else
      break
  }
  document.write(guess[j])
  i++
  } //must fix so that correct letters put in correct position and guesses are not repeated
  
  
  alert(answerArray.join(" "))
  alert("Good job! The answer was " + word)
}