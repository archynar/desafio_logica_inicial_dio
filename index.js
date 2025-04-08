/* 1° Desafio DIO (modificado)

Crie uma variável para armazenar o nome e a quantidade de experiência (XP) de um herói, depois faça com que a mensagem de saída onde: ao informar o nível mostre a quantidade de XP necessária para chegar, mais o nome do herói :

Se XP for menor do que 1.000 = Ferro
Se XP for entre 1.001 e 2.000 = Bronze
Se XP for entre 2.001 e 3.000 = Prata
Se XP for entre 3.001 e 4.000 = Ouro
Se XP for entre 4.001 e 5.000 = Platina
Se XP for entre 5.001 e 6.000 = Ascendente
Se XP for entre 6.001 e 7.000 = Imortal
Se XP for maior ou igual a 10.001 = Radiante

## Saída

Ao final deve se exibir uma mensagem:
"O Herói de nome **{nome}** está no nível de **{nivel}**"

let nome_do_heroi = "Joás"
let xp = "Imortal"

switch(xp){
    case "Ferro":
        console.log("O herói",nome_do_heroi,"para chegar ao nível 'Ferro', precisa de 1000 de xp.")
        break;

    case "Bronze":
        console.log("O herói",nome_do_heroi,"para chegar ao nível 'Bronze', precisa de 2000 de xp.")
        break;

    case "Prata":
        console.log("O herói",nome_do_heroi,"para chegar ao nível 'Prata', precisa de 3000 de xp.")
        break;

    case "Ouro":
        console.log("O herói",nome_do_heroi,"para chegar ao nível 'Ouro', precisa de 4000 de xp.")
        break;

    case "Platina":
        console.log("O herói",nome_do_heroi,"para chegar ao nível 'Platina', precisa de 5000 de xp.")
        break;

    case "Ascendente":
        console.log("O herói",nome_do_heroi,"para chegar ao nível 'Ascendente', precisa de 6000 de xp.")
        break;

    case "Imortal":
        console.log("O herói",nome_do_heroi,"para chegar ao nível 'Imortal', precisa de 7000 de xp.")
        break;

    case "Radiante":
        console.log("O herói",nome_do_heroi,"epara chegar ao nível 'Radiante', acima de 7000 de xp.")
        break;
    
        default:
            console.log("Digite o nível oficial do jogo.")
} 
*/

/* 1° Desafio DIO (Original)
## Objetivo

Crie uma variável para armazenar o nome e a quantidade de experiência (XP) de um herói, depois utilize uma estrutura de decisão para apresentar alguma das mensagens abaixo:

Se XP for menor do que 1.000 = Ferro
Se XP for entre 1.001 e 2.000 = Bronze
Se XP for entre 2.001 e 5.000 = Prata
Se XP for entre 5.001 e 7.000 = Ouro
Se XP for entre 7.001 e 8.000 = Platina
Se XP for entre 8.001 e 9.000 = Ascendente
Se XP for entre 9.001 e 10.000= Imortal
Se XP for maior ou igual a 10.001 = Radiante

## Saída

Ao final deve se exibir uma mensagem:
"O Herói de nome **{nome}** está no nível de **{nivel}**"
*/

let nome_do_heroi = "Joás"
let xp = 9999

if (xp < 1000){
console.log("O Herói de nome",nome_do_heroi,"está no nível de Ferro")
}
else if (xp >= 1001 && xp <= 2000 ){
    console.log("O Herói de nome",nome_do_heroi,"está no nível de Bronze")
}
else if (xp >= 2001 && xp <= 5000 ){
    console.log("O Herói de nome",nome_do_heroi,"está no nível de Prata")
}
else if (xp >= 5001 && xp <= 7000 ){
    console.log("O Herói de nome",nome_do_heroi,"está no nível de Ouro")
}
else if (xp >= 7001 && xp <= 8000 ){
    console.log("O Herói de nome",nome_do_heroi,"está no nível de Platina")
}
else if (xp >= 8001 && xp <= 9000 ){
    console.log("O Herói de nome",nome_do_heroi,"está no nível de Ascendente")
}
else if (xp >= 9001 && xp <= 10000 ){
    console.log("O Herói de nome",nome_do_heroi,"está no nível de Imortal")
}
else{
    console.log("O Herói de nome",nome_do_heroi,"está no nível de Radiante")
}
