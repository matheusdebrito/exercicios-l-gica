const palavra = "paralelepipedo";

let letras = []

for (x = 0; x < palavra.length; x++){
    if (letras.includes(palavra[x])){
    } else {
        letras = letras + palavra[x]
    }
}

for (x = 0; x < palavra.length; x++){
    let contador = 0;
    for (i = 0; i < palavra.length; i++){
        if (letras[x] == palavra[i]){
            contador++
        }
    }
    if (contador - 1 > 0){
        console.log(`A letra ${letras[x]} repete ${contador - 1} vezes.`)
    } else {
        console.log(`a letra ${letras[x]} nao se repete`)
    }
}