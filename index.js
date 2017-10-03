const readline = require('readline-sync');
const fs = require('fs');

function promptForFrequency() {
    let response;
    do {
        console.log('What frequency of TLS would you like to look for?');
        response = parseInt(readline.prompt(), 10);
    } while (isNaN(response));
    return response;
}

function getInputFromFile(filePath) {
    return fs.readFileSync(filePath);
}

function findAllTLSs(inputText) {
    const tlsRegex = /[A-Za-z](?=[^A-Za-z]*([A-Za-z])[^A-Za-z]*([A-Za-z]))/g
    let match, tlsCounts = {};
    while ((match = tlsRegex.exec(input)) !== null) {
        const tls = match[0].toLowerCase() + match[1].toLowerCase() + match[2].toLowerCase();
        tlsCounts[tls] = (tlsCounts[tls] || 0) + 1;
    }
    return tlsCounts;
}

function displayTLSsWithFrequency(frequency, tlsCounts) {
    let tlssWithFrequency = Object.keys(tlsCounts).filter(tls => tlsCounts[tls] === frequency);

    console.log('\nThe TLSs that appear exactly 63 times are:');
    tlssWithFrequency.forEach((tls, idx) =>
        console.log(`  ${idx + 1}) ${tls}`)
    );
}

function displayMostCommonTLSs(tlsCounts) {
    let mostCommonTLSs = Object.keys(tlsCounts).sort((a, b) => tlsCounts[b] - tlsCounts[a]).slice(0, 10);

    console.log('\nThe most common TLSs are:');
    mostCommonTLSs.forEach((tls, idx) =>
        console.log(` ${idx + 1}) ${tls}: ${tlsCounts[tls]}`)
    );
}

const frequency = promptForFrequency();
console.log('\nProcessing...');

const input = getInputFromFile('resources/SampleText.txt');
const tlsCounts = findAllTLSs(input);

displayMostCommonTLSs(tlsCounts);
displayTLSsWithFrequency(frequency, tlsCounts);
