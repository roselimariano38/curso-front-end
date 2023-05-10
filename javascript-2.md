javascript-2.md
# Javascript
- Estado do JS (https://2020.stateofjs.com/en-US/demographics/)
- Onde é executado
- Omnipresente na web
- App híbridos
- Aplicação de ponta-a-ponta : banco de dados, back-end / Front-end
- Interagir com DOM (api-web)
- Requisições dinânmicas 
- IoT (Internet das Coisas) : o JS está presente em 
- ECMAScript

## Fundamentos JS
- Fundamento do Javascript são essenciais para avançar o desenvolvimento de aplicações modernas , é a base de diversos frameworks 
- Neste curso evoluímos da base para o topo
- é melhor que começar na frente e precisar retornar a base

## Metodologia
- Método progressivo e integrado
- Todo arranha céu só é erguido depois de ter uma fundação robusta e seura 
- Neste curso apresentamos conceitos de modo progressivo , seguindo uma linha de evolução 
- Começa fácil e vai aumentando a complexidade
- Além da especialização, aprendemos a integrar com diversas possibilidades

## Lógica de Programação
- Computador 
  -- Máquina que extrai dados
  -- Processar : realizar operações nos dados de entrada 
- Dado: é o que pode ser processado
- Informação: resultado do processamento
- Processamento de dados: (dados) > Processamento > saída (informação)

E a lógica
Lógica é aquilo que faz sentido

Como escrever um programa?
- Aplicar a lógica para descrever os passos para resolver um problema em ordem de execução

A lógica de proramação
- É a técnica  de sequenciar pensamentos, passos, fluxo de dados para atingir um objetivo: a informação 
- A sequência de passos, instruções que o computador deve seguir é conhecida como ALGORITMO

Algoritmo
- Sequência lógica e finita de instruções que resolvem um problema
- Exemplo: receita de bolo, manual de instrução
- Nem todo algoritmo é um programa de computador, mas todo programa de computador é algoritm
- Quem viabiliza o funcionamento dos algoritmos nos cumputadores: linguagens de proramação

### Algoritmo para calcular a média de 3 números
1. Inicio;
2. Receber o primeiro número: entrada 1;
3. Receber o segundo número: entrada 2;
4. Receber o terceiro número: entrada 3;
5. PROCESSAMENTO: Somar os 3 números recebidos e dividir por três: (entrada 1 + entrada 2 + entrada 3 ) / 3
6. Exibir o resultado : print ,echo, console.log;
7. Fim;


### Torre de Hanoi 
- Mover todos os discos para a direita, com o menor número de movimentos possível, sem colocar um disco maior em cima do disco nenor: https://www.somatematica.com.br/jogos/hanoi/
- Jogos: https://www.somatematica.com.br/jogos.php

## Funcionalidades gerais
- Criar algoritmos e programas para executar no navegador: client side
- Manipular o DOM: elementos, eventos, estilos
- Node.js: framework JS para back-end / runtime em JS
- Mongo.db /  GraphQL: banco de dados em JS
- React / Vue.js / Angular: frameworks JS para desenvolvimento web / mobile 
- React Native: framework JS para desenvolvimento mobile 

- receber e manupular dados
- tomar decisões baseados na lógica computacional
- loop e interações 
- condições de saída  

## Executar o JS
- Console Browsers
- Editores : Sublime, Visula Studio code
- JS Fiddle https:jsfidle.net/

### Instalação do Node.js
- Para a gente conseguir executar scripts JS no terminal do comando, precisamos utilizar o Node.js
- Instalação  
https://nodejs.org/pt-br/download/package-manager

* Primeiro instalar o Chocolatey 
- Precisa executar o Powershell como admistrador 
* Primeiro instalar o Chocolatey 
- Precisa executar o Powershell como admistrador 
- Se tudo de certo na isntalação do chocolatey, rodar: choco isntall nvs 
- nvs add lts
- $ nvs use lts 


### Após concluir a isntalação
Rodar em um novo terminal: node -v

## Variáveis
São utilizadas para referenciar espaço na memória

- var
- const ( fica com valor imutável)
- let
- string ( Tipo de variávela )
- Tipagem: número ou string 
- array ( conjunto de valores)

## Operadores

- Soma +
- Subtração -
- Multiplicar *
- Dividir /
- Módulo (resto de divisão) %
- Math: random(),round(), sqrt().

* Atribuição
a = b
a += b
a -= b
a *= b
a /= b
a %= b

Adciona 1 ++
Subtrai 1 --

* Operadores de comparação / Lógicos
- Igual == ou ===
- Diferente !=
- Maior que >
- Maior ou igual >=
- Menor que <
- Menor ou igual <=


## Comparadores lógicos: teste lógico, retorno booleano (true / false)

== Igualdade entre sentenças (valor)
!= Diferença entre sentenças (valor)
=== Igualdade entre sentenças (valor e tipo)
!== Diferença entre sentenças (valor e tipo)

a == b = true
a != b = false

* Atribuição 
a = b 
a = 4

## Operadores de lógica e junção lógica 

!  NÃO (NOT)
&& E (AND)
|| OU (OR)

O sinal de exclamação (!) é o operadpr NOT (não), utilizado para negar a sentença que vem na sequência 

#### Exemplo:

a != b   // o valor de a é diferente de b
x !===  // o valor e o tipo de x são diferentes de y

#### As condições lógicas são convertidas em números  binários:
true é equivalente a 1 
false é equivalente a 0

#### Operador lógico de atribuição

Tem a capacidade de atribuir valor a uma variável a  partir de uma condição lógica, economiza IFs

Exemplo:

var meucarro = cor == "preto" ? "preto" : "branco";

## If
if (...) {

}

## Else 
else {

}
if (cor = "preto") {
   meucarro ="preto";

 } else {
  meucarro "cinza";
 }


 
 ## Else if 
  else if (...){

  }

if (cor = "preto") {
   meucarro ="preto";

 } else if (cor == "vermelho") {
  meucarro "cinza";
 }else if (cor == "amarelo") {
  meucarro "branco";
 } else{
  meucarro = "azul"
 }

 ## Switch

 switch (cor) {
  case 'branco' :
    meucarro = 'branco' ;
    breack;
  case 'vermelho' :
    meucarro = 'vermelho';
    brack;
  case 'amarelo' :
    meucarro = 'amarelo';
    breack;
  default :
    console.log ("não temos a cor desejada") ;
 }

## media
var nota1 = 10;
var nota2 = 8;
var nota3 = 9;
var nota4 = 7;
var media = (nota1 + nota2 + nota3 + nota4)/ 4;
if (media > 8){
  console.log( "Aluno aprovado")
} else {
  console.log( "Aluno em recuperação")
}

## Laços e Repetição 

for([expressaoInicial]; [condicao]; [incremento])

while([condicao]){
 [execucao]
}

var contador = 0; 
while( contador < 10){
  contador++;
  
}

 var hora = 24;
while( hora > 0){

   console.log(hora);
  hora--;

 
}

 console.log("total de horas:" + hora);

  do {
    [execuçao]
  } while ( [condicaçao])
   
  


// Fazer a revisão do carro ao 10 km

var km;
var revisão = 3;

for(km = 0; km < revisão; km++ ){
 console.log("apenas " + km + "kms pode rodar");

}

### Calculo de media de alunos 

var alunos = [
  [6, 7 ,8, 6],
  [8, 5, 6, 8],
  [10, 6, 8, 7]

]

var nota = 0;
for (var i = 0; i < alunos.length; i++) {

  nota = 0
  aluno = alunos[i]
  console.log("Aluno:" + aluno);
 
  for( c = 0; c < aluno.length; c++); {
      nota += aluno[c];
  }
  
  media = nota / 4;

  if(media >= 7) {
    resultado = "aprovado";

  }else {
    resultado = "reprovado";
  }

  console.log("Media:" + media + " - " + resultado);

}

## Funções 

- Evitar a repetição de código
- Realizar  chamadas dinâmicas de algoritimos 

function calcularMedia( notas ){

  var soma  = 0;
  for( c = 0; c < notas.length; c++){
    soma  += notas[c];


  }

  media = soma / notas.length;

  return media;

}

 let media; // escopo global

 function aprovacao(media){

   let media = calcularMedia( notas ); // escopo da função

   let condicao = media >= 7 ? "aprovado" : "reprovado";

   return 'media:' + media + ' - resultado: ' + condicao;


 }

 // console.log()



 // console.log("Média:" + calcularMedia([8, 8]))
 // console.log(aprovacao(calcularMedia([8, 8])))
 
 console.log(aprovacao({8, 8, 7}));

 // console.log("Média:" + calcularMedia([8, 8, 10]))
 // console.log(aprovacao(calcularMedia([8, 8, 10])))

 console.log(aprovacao({8, 8, 10, 6}));

 // console.log("Média:" + calcularMedia([8, 8, 10]))
 // console.log(aprovacao(calcularMedia([8, 8, 6])))

 console.log(aprovacao({9, 6}));

 // console.log("Média:" + calcularMedia([9, 6 ]))
 // console.log(aprovacao(calcularMedia([9, 6])))




https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Expressions_and_Operators