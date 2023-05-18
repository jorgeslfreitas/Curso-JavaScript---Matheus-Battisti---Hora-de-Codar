let i = 0;
while(i < 5) {
    console.log(`Testando while: ${i}`);
    i++;
}


let arr = ['Jorge', 'Santos', 'Lima', 'Freitas'];
let x = 0;
while(x < arr.length) {
    console.log(`Índices do array ${arr[x]}: `);
    x++;
}

let a = 0;
while(a < arr[0].length) {
    let nome = arr[0];
    console.log(`${nome[a]}`);
    a++;
}