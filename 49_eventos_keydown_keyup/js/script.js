document.addEventListener('keydown', function(e) {
    if(e.key === "Enter") {
        console.log('Apertou o enter');
    }
});

document.addEventListener('keyup', function(e) {
    if(e.key === "Enter") {
        console.log('Soltou o enter');
    }
});