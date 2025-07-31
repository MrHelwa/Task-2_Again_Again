
//-----------------------------------task 1----------------------------
function ArrayObject() {
    // Get array size from user
    var size = parseInt(prompt("Enter the size of the array"));
    var arr = [];

    // Fill array with user input
    for (var i = 0; i < size; i++) {
        arr[i] = parseInt(prompt("Enter element " + (i + 1)));
    }
    // Display original array
    console.log("Original Array: ", arr);

    // Sort and display in ascending order
    var ascSorted = sortedAscending(arr.slice()); // Use slice() to avoid modifying original
    console.log("Ascending Order: ", ascSorted);

    // Sort and display in descending order
    var descSorted = sortedDescending(arr.slice());
    console.log("Descending Order: ", descSorted);
}
function sortedDescending(arr) {
    // Bubble sort for descending order
    for (var i = 0; i < arr.length - 1; i++) {
        for (var j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] < arr[j + 1]) {
                // Swap elements
                var temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}
function sortedAscending(arr) {
    // Bubble sort for ascending order
    for (var i = 0; i < arr.length - 1; i++) {
        for (var j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                // Swap elements
                var temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

// Call the main function
//ArrayObject();

//-----------------------------------task 2 circle square root and ----------------------------
function mathCalculations() {
    // 1. Circle Area Calculation
    var radius = parseFloat(prompt("Enter the radius of the circle:"));
    //just check the input is a number
    if (isNaN(radius) || radius <= 0) {
        alert("Invalid radius! Please enter a positive number.");
    } else {
        var area = Math.PI * Math.pow(radius, 2);
        alert("The area of the circle with radius " + radius + " is: " + area.toFixed(2));
    }

    // 2. Square Root Calculation
    var sqrtNumber = parseFloat(prompt("Enter a number to calculate its square root:"));
    if (isNaN(sqrtNumber) || sqrtNumber < 0) {
        alert("Invalid input! Please enter a non-negative number.");
    } else {
        var sqrtResult = Math.sqrt(sqrtNumber);
        alert("The square root of " + sqrtNumber + " is: " + sqrtResult.toFixed(2));
    }

    // 3. Cosine Calculation
    var angle = parseFloat(prompt("Enter an angle (in degrees) to calculate its cosine:"));
    if (isNaN(angle)) {
        alert("Invalid angle! Please enter a number.");
    } else {
        // Convert degrees to radians for Math.cos()
        var radians = angle * Math.PI / 180;
        var cosValue = Math.cos(radians);
        alert("The cosine of " + angle + " degrees is: " + cosValue.toFixed(4));
    }
}
//mathCalculations()
// Run the function
//mathCalculations();

//-----------------------------------task 3 palindrom----------------------------
function checkPalindrome() {
    //  Get input string from user
    var inputString = prompt("Enter a string to check if it's a palindrome:");

    //  Convert to lowercase to ignore case differences
    var processedString = inputString.toLowerCase();

    //  Remove spaces
    processedString = processedString.replace(/\s/g, '');

    // Check if palindrome
    var isPalindrome = true;
    var length = processedString.length;

    for (var i = 0; i < Math.floor(length / 2); i++) {
        if (processedString[i] !== processedString[length - 1 - i]) {
            isPalindrome = false;
            break;
        }
    }

    // Step 5: Display result
    if (isPalindrome) {
        alert('"' + inputString + '" is a palindrome!');
    } else {
        alert('"' + inputString + '" is NOT a palindrome.');
    }
}

// Run the function
//checkPalindrome();
//-----------------------------------task 4 largest string----------------------------
function findLargestWord(inputString) {
    // Step 1: Split the string into words
    var words = inputString.split(' ');

    // Step 2: Initialize variables to track the largest word
    var largestWord = '';
    var maxLength = 0;

    // Step 3: Loop through each word
    for (var i = 0; i < words.length; i++) {
        var currentWord = words[i];

        // Step 4: Compare word lengths
        if (currentWord.length > maxLength) {
            largestWord = currentWord;
            maxLength = currentWord.length;
        }
    }

    // Step 5: Return the largest word found
    return;
}

//Example usage:
var sentence = "this is a javascript string demo";
var result = findLargestWord(sentence);
alert("The largest word is: " + result);  // Outputs: "javascript"







