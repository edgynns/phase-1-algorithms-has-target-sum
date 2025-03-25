function hasTargetSum(array, target) {
  // Create a set to store seen numbers
  const seenNumbers = new Set();
  
  // Iterate through each number in the array
  for (let num of array) {
    // Calculate the complement needed to reach the target
    const complement = target - num;
    
    // Check if the complement exists in the set of seen numbers
    if (seenNumbers.has(complement)) {
      return true;
    }
    
    // Add current number to the set of seen numbers
    seenNumbers.add(num);
  }
  
  // No pair found that adds up to the target
  return false;
}

/* 
  Big O Time Complexity: O(n)
  - Single pass through the array
  - Set operations (add and has) are O(1)
  - Total time grows linearly with input size
*/

/* 
  Pseudocode:
  1. Create an empty set to store seen numbers
  2. For each number in the array:
     a. Calculate its complement (target - current number)
     b. If complement exists in set, return true
     c. Add current number to set
  3. If no pair found, return false
*/

/*
  Explanation of the Solution:
  - Uses a hash set for efficient lookup
  - Checks each number's complement in a single pass
  - Avoids nested loops for better time complexity
  - Works by storing and checking for complement pairs
  - Handles various input scenarios efficiently
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // Provided test cases
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));

  // Additional test cases
  console.log("");
  console.log("Expecting: false");
  console.log("=>", hasTargetSum([], 10));

  console.log("");
  console.log("Expecting: false");
  console.log("=>", hasTargetSum([5], 10));

  console.log("");
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([5, 5], 10));
}

module.exports = hasTargetSum;