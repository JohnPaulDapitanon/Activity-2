//Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case.


const capitalized = function (sentence){
    
    let str = sentence.split(" ");
    for (let i = 0; i <str.length; i++) {
        str[i] = str[i][0].toUpperCase() + str[i].substring(1);
    }
    return str.join(" ");
}

console.log(capitalized("john paul dapitanon"));