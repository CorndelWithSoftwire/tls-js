const fs = require('fs');

const input = fs.readFileSync('resources/SampleText.txt', 'utf8').toLowerCase();

let counter = 0;
for (let ix = 0; ix < input.length; ix++) {
    if (input.charAt(ix) === 't' && input.charAt(ix + 1) === 'r' && input.charAt(ix + 2) === 'a') {
        counter++;
    }
}

console.log(counter);