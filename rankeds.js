var playerWins = prompt("Digite o número de vitórias: ");
var playerLosses = prompt("Digite o número de derrotas: ");
var playerBalance;
var playerClass;

function findClass(wins,losses){
    playerBalance = wins - losses;
    if(playerBalance<10){
        playerClass = "Ferro";
    }else if(playerBalance<=20){
        playerClass = "Bronze";
    }else if(playerBalance<=50){
        playerClass = "Prata";
    }else if(playerBalance<=80){
        playerClass = "Ouro";
    }else if(playerBalance<=90){
        playerClass = "Diamante";
    }else if(playerBalance<100){
        playerClass = "Lendário";
    }else{
        playerClass = "Imortal";
    }
}

findClass(playerWins,playerLosses);

alert(`O Herói tem saldo de ${playerBalance} vitórias e está no nível ${playerClass}`)