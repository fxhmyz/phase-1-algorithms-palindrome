function isPalindrome(word) {
  // Write your algorithm here
}
function isPalindrome(str) {
  // Convert to lowercase and remove non-alphabetic characters
  str = str.toLowerCase().replace(/[^a-z]/g, '');
  
  let left = 0;
  let right = str.length - 1;
  
  while (left < right) {
      if (str[left] !== str[right]) {
          return false;
      }
      left++;
      right--;
  }
  
  return true;
}

// Test cases
console.log(isPalindrome("madam")); // true
console.log(isPalindrome("racecar")); // true
console.log(isPalindrome("hello")); // false
console.log(isPalindrome("Aibohphobia")); // false

/* 
  Add your pseudocode here
*/

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
