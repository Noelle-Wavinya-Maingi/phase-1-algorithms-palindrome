function isPalindrome(word) {
  // Write your algorithm here
  const len = word.length; // get the length of the string
  for (let i = 0; i < len / 2; i++) {
    // iterate over the string from both ends, comparing the characters
    if (word[i] !== word[len - 1 - i]) {
      // if any characters don't match, the string is not a palindrome
      return false;
    }
  }
  return true;
}


/* 
  Add your pseudocode here
*/
//1. Declare a function named isPalindrome that takes a parameter 'word'

//2. Get the length of the 'word' and assign it to a variable 'length'.

//3. Start a loop from 'i = 0' to i < length/2'.

//4. Inside the loop, compare word[i] with word[length - 1 - i].

//5. If the words are not equal, return false as the word is not a palindrome.

//6. If the loop completes without finding any mismatch return true as the word is a palindrome.
/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
