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
var win=0;
for (var z=0; z<words.length; z++) {
  var word = words[z];
  answerArray=[];
  for (var i = 0; i < word.length; i++) {
    answerArray[i] = "_";
    document.write(answerArray)
  }
  
  var remainingLetters = word.length;

  while (remainingLetters > 0) {
      alert(answerArray.join(" "));
  var guess = prompt("Guess a letter, or click Cancel to stop playing.");
  if (guess === null) {
       break;
  } 
  else if (guess.length !== 1) {
  alert("Please enter a single letter.");
  } 
  else {
      for (var j = 0; j < word.length; j++) {
      if (word[j] === guess) {
      answerArray[j] = guess;
      remainingLetters--;
  }
  if (answerArray=word)
    win++;
  }
  }
  }
}
