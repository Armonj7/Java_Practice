//Counting Bs in a string

function countBs(str) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str.charAt(i) === 'B') {
            count++;
        }
    }
    return count;
}

console.log(countBs('BBBBBBBCDEFG'));


//Counting characters in a string

function countChar(str, char) {
    let count =0;
    for (let i = 0; i < str.length; i++) {
        if (str.charAt(i) === char) {
            count ++;
        }
    }
    return count;

}

console.log(countChar('learning how to code is not easy', 'e'));