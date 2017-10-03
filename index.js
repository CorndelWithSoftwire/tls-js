const fs = require('fs');

const input = fs.readFileSync('resources/SampleText.txt', 'utf8');
const tlsRegex = /[A-Za-z](?=([A-Za-z]{2}))/g

let match, counter = 0;
while ((match = tlsRegex.exec(input)) !== null) {
    if (match[0].toLowerCase() + match[1].toLowerCase() === 'tra') {
        counter++;
    }
}

console.log(`There are ${counter} instances of 'tra' in the text.`);