/**
 *
 */

// ---------------------
// Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript.
// ---------------------

function max(a, b){
    "use strict";
    var largest = null;

    if(arguments.length === 0) {
        throw "No arguments were passed to the function.";
    } else if(arguments.length === 1) {
        throw "Only 1 argument was passed to the function.";
    } else if(arguments.length > 2) {
        throw "The function should only have 2 arguments.";
    }

    if(!_.isNumber(a)) {
        throw "The first argument is not a number.";
    } 
    if(!_.isNumber(b)) {
        throw "The second argument is not a number.";
    }

    if(a === b) {
        largest = a;
    } else if (a > b) {
        largest = a;
    } else {
        largest = b;
    }
    
    return largest;
}

// ---------------------
// Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
// ---------------------

function maxOfThree(a, b, c){
    "use strict";

    var largest = null;

    if(arguments.length === 0) {
        throw "No arguments were passed to the function.";
    } else if(arguments.length === 1) {
        throw "Only one argument was passed to the function.";
    } else if(arguments.length === 2) {
        throw "Only two arguments were passed to the function.";
    } else if(arguments.length > 3) {
        throw "The function should only have 3 arguments.";
    }

    if(!_.isNumber(a)) {
        throw "The first argument is not a number.";
    } 
    if(!_.isNumber(b)) {
        throw "The second argument is not a number.";
    }
    if(!_.isNumber(c)) {
        throw "The third argument is not a number.";
    }

    if(a >= b) {
        largest = a;
        if(c >= largest) {
            largest = c;
        }
    } else if(b >= c) {
        largest = b;
    } else {
        largest = c;
    }

    return largest;
}

// ---------------------
// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
// ---------------------

function isVowel(letter){
    "use strict";
    var isAVowel = null;
    
    if(arguments.length === 0) {
        throw "No arguments were passed to the function.";
    } else if(arguments.length > 1) {
        throw "More than one argument was passed to the function.";
    }

    if(!_.isString(letter)) {
        throw "The argument is not a string.";
    }

    if(letter.length > 1) {
        throw "String is longer than 1 character.";
    }

    switch(letter) {
        case 'a':
        case 'A':
        case 'e': 
        case 'E': 
        case 'i': 
        case 'I': 
        case 'o': 
        case 'O': 
        case 'u': 
        case 'U':             
            isAVowel = true;
            break;
        default:
            isAVowel = false;
    }

    return isAVowel;
}

// ---------------------
// Write a function translate() that will translate a text into "rövarspråket". That is, double every consonant and place an occurrence of "o" in between. For example, translate("this is fun") should return the string "tothohisos isos fofunon".
// ---------------------

function rovarspraket(phrase){
    "use strict";
    var spraketPhrase = "";

    if(arguments.length === 0) {
        throw "No arguments were passed to the function.";
    } else if(arguments.length > 1) {
        throw "More than one argument was passed to the function.";
    }

    if(!_.isString(phrase)) {
        throw "The argument is not a string.";
    }

    for(var i = 0; i<phrase.length; i++) {
       if(isVowel(phrase[i])) {
            spraketPhrase += phrase[i];
        } else if(phrase[i] === " ") {
            spraketPhrase += " ";
        } else {
            spraketPhrase += phrase[i]+'o'+phrase[i];
        }
    }

    return spraketPhrase;
}

// ---------------------
// Define a function sum() and a function multiply() that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sum([1,2,3,4]) should return 10, and multiply([1,2,3,4]) should return 24.
// ---------------------

function sum(array){
    "use strict";
    var total = null;

    if(arguments.length === 0) {
        throw "No arguments were passed to the function.";
    } else if(arguments.length > 1) {
        throw "The function should only have 1 argument";
    }

    if(!_.isArray(array)) {
        throw "The argument is not an array.";
    }

    for(var key in array) {
        if(!_.isNumber(array[key])) {
            throw "The argument should contain only numbers.";
        } else {
            total += array[key];
        }
    }

    return total;

}

function multiply(numArray){
    "use strict";
    var total = null;
    
    if(arguments.length === 0) {
        throw "No arguments were passed to the function.";
    } else if(arguments.length > 1) {
        throw "The function should only have 1 argument";
    }

    if(!_.isArray(numArray)) {
        throw "The argument is not an array.";
    }

    for(var i=0;i< numArray.length;i++) {
        if(!_.isNumber(numArray[i])) {
            throw "The argument should contain only numbers.";
        } else if (i === 0) {
            total = numArray[i];        
        } else {
            total *= numArray[i];
        }
    }
    
    return total;
}

// ---------------------
// Define a function reverse() that computes the reversal of a string. For example, reverse("jag testar") should return the string "ratset gaj".
// ---------------------

function reverse(myString){
    "use strict";
    var reversedString = "";

    if(arguments.length === 0) {
        throw "No arguments were passed to the function.";
    } else if(arguments.length > 1) {
        throw "More than one argument was passed to the function.";
    }

    if(!_.isString(myString)) {
        throw "The argument is not a string.";
    }

    for(var i = (myString.length-1); i >= 0; i--) {
        reversedString += myString[i]; 
    }

    return reversedString;
    
}

// ---------------------
// Write a function findLongestWord() that takes an array of words and returns the length of the longest one.
// ---------------------

function findLongestWord(words){
    "use strict";
    var longestLength = null;

    if(arguments.length === 0) {
        throw "No arguments were passed to the function.";
    } else if(arguments.length > 1) {
        throw "The function should only have 1 argument";
    }

    if(!_.isArray(words)) {
        throw "The argument is not an array.";
    }

    for(var key in words) {
        if(!_.isString(words[key])) {
            throw "The argument should contain only strings.";
        } else if(words[key].length > longestLength) {
            longestLength = words[key].length;
        } 
    }

    return longestLength;
}

// ---------------------
// Write a function filterLongWords() that takes an array of words and an integer i and returns the array of words that are longer than i.
// ---------------------

function filterLongWords(words, i){
    "use strict";
    var myArray = [];

    if(arguments.length === 0) {
        throw "No arguments were passed to the function.";
    } else if(arguments.length === 1) {
        throw "The function should have 2 arguments.";
    } else if(arguments.length > 2){
        throw "The function should have 2 arguments.";
    }

    if(!_.isArray(words)) {
        throw "The first argument is not an array.";
    }

    if(!_.isNumber(i)) {
        throw "The second argument is not a number";
    }

    if(i < 0) {
        throw "The second argument is not a positive number";
    }

    for(var key in words) {
        if(!_.isString(words[key])) {
            throw "The array should contain only strings.";
        } else if(words[key].length > i) {
            myArray.push(words[key]);
        }
    }

    return myArray;
}

// ---------------------
// Write a function charFreq() that takes a string and builds a frequency listing of the characters contained in it. Represent the frequency listing as a Javascript object. Try it with something like charFreq("abbabcbdbabdbdbabababcbcbab").
// ---------------------

function charFreq(string){
    "use strict";
    var frequencyList = {};
    var counter = 0;

    if(arguments.length === 0) {
        throw "No arguments were passed to the function.";
    } else if(arguments.length > 1) {
        throw "More than one argument was passed to the function."
    }

    if(!_.isString(string)) {
        throw "The argument is not a string.";
    }

    for(var key in string) {
        counter = 0;
        for(var el in string) {
            if(string[key] == string[el]) {
                counter++;
            }
        }
        if(string[key] == " ") {

        } else {
            frequencyList[string[key]] = counter;
        }
    }

    return frequencyList;
}