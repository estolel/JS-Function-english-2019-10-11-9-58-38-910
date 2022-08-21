function reverseHello() {
    var hello = 'hello';
    var elloh = '' 
    for (let index = hello.length-1; index >= 0; index--) { 
        elloh += hello[index];
    }
    
    return elloh;
}
console.log(reverseHello());