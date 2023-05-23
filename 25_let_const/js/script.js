const x = 10;
let y = 20;

console.log('Global', x, y);

function escopo() {
    const x = 20;
    let y = 35;
    console.log('Função escopo: ', x, y);
}

escopo();

if (true) {
    let y = 50;
    console.log('If: ', y);
}

// const x = 30; isso seria uma redeclaração e uma constante não permite.
// x = 600; isso seria uma reatribuição e uma constante não permite.

