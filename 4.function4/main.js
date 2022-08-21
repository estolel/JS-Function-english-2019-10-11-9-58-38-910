
function countWords(message) {
    var string = Array.from(message).join("");
    var stringArray = string.split(" ");
    return stringArray.length;
}



console.log(countWords('Good morning, I love JavaScript.')); // should return 5