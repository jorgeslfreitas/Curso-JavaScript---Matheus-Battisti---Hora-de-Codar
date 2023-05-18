for (let i = 100; i > 50; i -= 10) {
    console.log(`${i}`);

    if (i === 70) {
        console.log(`If do break`);
        break;
    }
}

console.log(`Achado condição dentro do FOR que forçou o break`);

let a = 0;

while (a < 50) {

    a += 5;

    if (a === 30) {
        console.log(`CONTINUE`);
        continue;
    }

    console.log(`${a}`);

    
}

