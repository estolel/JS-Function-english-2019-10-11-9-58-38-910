function reverseWord(message) {
    var egassem = '';
    for (let index = message.length - 1; index >= 0; index--) {
        egassem += message[index];
    }

    return egassem;
}

function palindromeChecker(input) {
    var output = 'The word is not a palindrome.';
    if (reverseWord(input) == input) {
        output = 'The word is a palindrome!';
    }
    return output;
}

console.log(palindromeChecker('hello'));
console.log(palindromeChecker("racecar"));
