const fs = require('fs');

const input = fs.readFileSync('resources/SampleText.txt', 'utf8');
const tlsRegex = /[A-Za-z](?=([A-Za-z]{2}))/g

let match, tlsCounts = {};
while ((match = tlsRegex.exec(input)) !== null) {
    const tls = match[0].toLowerCase() + match[1].toLowerCase();
    tlsCounts[tls] = (tlsCounts[tls] || 0) + 1;
}

console.log('The TLSs which appear 63 times are:');
Object.keys(tlsCounts).filter(tls => tlsCounts[tls] === 63).forEach(tls =>
    console.log(`  ${tls}`)
);