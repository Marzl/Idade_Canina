//Variavel contendo minha idade
const idade = 14;

//Variavel que salva os 2 primeiros anos de vida de um cachorro
let primeiros_anos = 2;

//Variavel que sera utilizada para calculo dos proximos anos de vida
let ultimos_anos;

//Multiplicando por 10,5 que é o equivalente de 2 anos de um cachorro 
primeiros_anos = primeiros_anos * 10,5;

//Retirando 2 anos da variavel idade
ultimos_anos = idade - 2;

//Multiplicando a variavel por 4 para calcular o numero de anos caninos dos ultimos anos, utilizando o operador *= para atribuir e calcular em uma unica etapa
ultimos_anos *= 4; 

//Passando os valores da variaveis para variavel idade_canina
idade_canina = primeiros_anos + ultimos_anos;

//Adicionando meu nome a uma variavel e passando um metodo para que esteja escrita em minusculo
let nome = 'Marcelo'.toLowerCase();

//Exibindo texto no console
console.log(`Meu nome é ${nome}. Eu tenho ${idade} anos em anos humanos, que é ${idade_canina} anos em anos caninos.`);