// function saudacao() {
//     console.log('Bom dia');
// }

// saudacao();

// function exibirNome(nome) {
//     console.log("Bom dia, ", nome); //console.log debug
// }

// exibirNome("Maria");
// exibirNome("João");

// function soma(numero1, numero2) { //parâmetros
//     console.log(numero1 + numero2);
// }

// // soma(3, 12); //argumentos
// // soma(15, 9);
// // soma(99, 33);

// const valor1 = Number(prompt("Digite o primeiro valor")); //prompt retorna string por padrão
// const valor2 = Number(prompt("Digite o segundo valor")); //função dentro de outra

// soma(valor1, valor2);

// function soma(numero1, numero2) {
//     const numero1Int = Number(numero1);
//     const numero2Int = Number(numero2);

//     return numero1Int + numero2Int; //finaliza a função
//     console.log("Isso não será exibido")
// }

// console.log(soma(3, 4));

// const valor1 = prompt("Digite o primeiro valor"); //ativa function verificaParOuImpar
// // const valor2 = prompt("Digite o segundo valor");

// // const resultadoSoma = soma(valor1, valor2);

// // function multiplicacao(numero1, numero2) {
// //     const numero1Int = Number(numero1);
// //     const numero2Int = Number(numero2);

// //     return numero1Int * numero2Int;
// // }

// // const resultadoMultiplicacao = multiplicacao(resultadoSoma, 2);

// // console.log("O resultado da soma é", resultadoSoma);
// // console.log("O resultado da multiplicação é", resultadoMultiplicacao);

// // Função para verificar se o número é ímpar ou par

// function verificaParOuImpar(numero) {
//     const num = Number(numero);

//     if(num % 2 == 0) {
//         return "Par";
//     } else {
//         return "Ímpar";
//     }
// }

// console.log(verificaParOuImpar(valor1));

// // Escopos: locais (dentro da funções) e globais (fora da função ou do bloco de código/são acessíveis em qualquer lugar do código)
// // Contexto onde as variáveis e funções são acessíveis dentro do código

// // const globalVar = "Olá, mundo"; //global

// function hello() {
//     const globalVar = "Olá, mundo"; //local

//     console.log(globalVar);
// }

// hello();

// console.log(globalVar);

// DOM Document Object Model - Representa a estrutura do documento como uma árvore de nós, em que cada nó é um objeto e parte do documento.
// Principais características: estrutura em árvore, acesso e manipulação e eventos.

let titulo = document.getElementById("titulo"); //recebe string por padrão
const nomeUsuario = document.getElementById("nome");

// console.log(nomeUsuario);

function alterarTitulo() {
    // titulo.innerHTML = "Olá, Digital College!";
    // console.log(nomeUsuario.value);
    const nome = nomeUsuario.value;
    
    if (nome == "") {
        alert("Digite o seu nome.");

        return;
    } //else {}
    titulo.innerHTML = "Bom dia, " + nome;    
}

// alterarTitulo();
// console.log(titulo);