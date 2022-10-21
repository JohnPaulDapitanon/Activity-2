// Write a JavaScript function that returns a passed string with letters in alphabetical order.

function sort_letters(str) {

    return str.split('').sort().join('');
}
    console.log(sort_letters("john paul dapitanon "));