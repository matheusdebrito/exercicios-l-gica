// Um pangrama é uma frase que contém todas as letras do alfabeto pelo menos uma vez. Por exemplo, a frase “A rápida raposa marrom salta sobre o cachorro preguiçoso” é um pangrama, porque usa as letras AZ pelo menos uma vez (o caso é irrelevante).
// Dada uma string, detecte se é ou não um pangrama. Retorne True se for, False se não. Ignore números e pontuação.

// Código

function isPangram(string){
    //...
    let alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    let alfabetoMaiusculo = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
    let pangram = 0
    let noPangram = 0
    
    for (i = 0; i < alfabeto.length; i++){
      if(string.includes(alfabeto[i]) || string.includes(alfabetoMaiusculo[i])){
        pangram = 1
      } else {
        noPangram = 1
      }
    }
    
    if (noPangram >= 1){
      return false
    } else {
      return true
    }
  }