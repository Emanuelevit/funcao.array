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


// Tuplas

//1
let aluno = ['Carlos', 17, '3°A'];
console.log(aluno);

//2
let produto = ['Notebook', 3500, 12];

console.log('Produto: ' + produto[0]);
console.log('Preço: R$ ' + produto[1]);
console.log('Estoque: ' + produto[2] + ' unidades');

//3
let filmes = [
    ['Vingadores', 2019, 'Ação'],
    ['Toy Story', 1995, 'Animação'],
    ['Avatar', 2009, 'Ficção'],
  ];
  
  for (let i = 0; i < filmes.length; i++) {
    console.log('Filme: ' + filmes[i][0]);
    console.log('Ano: ' + filmes[i][1]);
    console.log('Gênero: ' + filmes[i][2]);
    console.log('----------------');
  } 
