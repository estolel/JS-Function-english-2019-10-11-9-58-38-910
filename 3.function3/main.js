function alphabetSort(message) {
    var sortedMessage = Array.from(message);
    for (let x = 0; x < sortedMessage.length; x++) {
        for (let y = 0; y < sortedMessage.length; y++) {
            if(sortedMessage[x] < sortedMessage[y]){
                var setter = sortedMessage[y];
                sortedMessage[y] = sortedMessage[x];
                sortedMessage[x] = setter;
            }
        }
    }
    return "'"+sortedMessage.join('')+"'";
}

console.info("The word 'hello' when sorted is: " + alphabetSort('hello'));
// console.info("The word 'hello' when sorted is: "+sort('hello'));