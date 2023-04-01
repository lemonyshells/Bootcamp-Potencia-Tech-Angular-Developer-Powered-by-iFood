// function sayMyName (name) {
//     console.log ('Your Name Is: ' + name);
// };

// sayMyName('Yandra');

function checkMyAge (age) {
    if (age < 18) {
        return 'Menor de Idade'
    } else {
        return 'Maior de Idade'
    }
};

function main () {
    const idade = 21;
    console.log(checkMyAge(idade));
}

main()