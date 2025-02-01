// alert("teste");
// console.log("hello world");

// Exercício 3

// Usar o prompt para perguntar a largura e a altura do retângulo e retornar a área

let largura = prompt("Digite a largura do retângulo");
let altura = prompt("Digite a altura do retângulo");

console.log(`Largura: ${largura}`);
console.log(`Altura: ${altura}`);

const media = Number(largura) * Number(altura); 

console.log(`A média é de ${media}`); 

// Perímetro do retângulo

const perimetro = 2 * (Number(largura) + Number(altura));

console.log(`O perímetro é de ${perimetro}`);
