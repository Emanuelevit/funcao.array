//1
let frutas = ["laranja","manga","maçã","maracuja","uva"];
 console.log(frutas);
 console.log(frutas[0]);
 console.log(frutas[4]);
 
 //2
 let numeros = [10, 5, 8, 2, 7, 3]; 
 let soma = 0; 
 let numeros = [1, 2, 3, 4, 5, 6]; 
 for (let i = 0; i < numeros.length; i++) { 
    soma = soma + numeros[i]; 
}

console.log('Soma total: ' + soma); 

//3
let numeros2 = [15, 42, 7, 98, 23, 61, 4, 12, 87, 30];
let maior = numeros2[0];

for (let i = 0; i < numeros2.length; i++) {
  if (numeros2[i] > maior) {
    maior = numeros2[i];
  }
}

console.log('Maior número: ' + maior);