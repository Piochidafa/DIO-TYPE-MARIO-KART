

class Character {
    name: string;
    speed: number;
    maneuverability: number;
    power: number;
    score: number;


    constructor(name: string, speed: number, maneuverability: number, power: number, score: number) {
        this.name = name;
        this.speed = speed;
        this.maneuverability = maneuverability;
        this.power = power
        this.score = score
    }
}

class lap {

    typelap:string 
    
    constructor(typelap:string) {
    
        this.typelap = typelap;
    
    }
}


const listChar: Character[] = [
    new Character("Mario", 4, 3, 3, 0),
    new Character("Peach", 3, 4, 2, 0),
    new Character("Yoshi", 2, 4, 3, 0),
    new Character("Bowser", 5, 2, 5, 0),
    new Character("Luigi", 3, 4, 4, 0),
    new Character("Donkey Kong", 2, 4, 5, 0),
]

const listLaps: lap[] = [
    new lap("RETA"), 
    new lap("CURVA"), 
    new lap("CONFRONTO"), 
]


let char1:number
let char2:number


const returnTwoRandomCharacters = (): Character[] => {

    const generateNumbers = (): number[] => {

        char1 = Math.floor(((Math.random() * 5)))
        char2 = Math.floor(((Math.random() * 5)))

        let numbers: number[] = [char1, char2] 

        return numbers;

    }

    const getNumbers: number[] = generateNumbers();

    if (getNumbers[0] === getNumbers[1]) {
        generateNumbers()
    }

    return [listChar[char1], listChar[char2]]

}

const returnRandomLap = (): lap => {

    return listLaps[Math.floor(Math.random() * 3)]

}

const rowDice = (): number => {
    return (Math.floor(Math.random() * 6) + 1)
}




const initGame = () => {

    const players: Character[] = returnTwoRandomCharacters();

    let round = 0

    while (round < 5){

        let log = returnRandomLap().typelap

        let dicePlayer1: number = rowDice()
        let dicePlayer2: number = rowDice()

        let winner: string;
        
        switch (log) {
            
            



            case "RETA":


                console.log(`\nPlayer ${players[0].name} jogou o dado e recebeu o valor ${dicePlayer1}`);
                console.log(`Player ${players[1].name} jogou o dado e recebeu o valor ${dicePlayer2}\n`);

                if ((players[0].speed + dicePlayer1) > (players[1].speed + dicePlayer2)) {
                    
                    players[0].score = players[0].score + 1

                } else if((players[0].speed + dicePlayer1) < (players[1].speed + dicePlayer2)) {
                    
                    players[1].score = players[1].score + 1
                
                }

                winner = players[0].score > players[1].score ? players[0].name : players[1].name 

                console.log(`\n Somando os valores do dado com a velocidade o ganhador da rodada foi ${winner}\n`);
                
                break;
                



            case "CURVA":

                            console.log(`\nPlayer ${players[0].name} jogou o dado e recebeu o valor ${dicePlayer1}`);
                console.log(`Player ${players[1].name} jogou o dado e recebeu o valor ${dicePlayer2}\n`);

                if ((players[0].maneuverability + dicePlayer1) > (players[1].maneuverability + dicePlayer2)) {
                    
                    players[0].score = players[0].score + 1

                } else if((players[0].maneuverability + dicePlayer1) < (players[1].maneuverability + dicePlayer2)) {
                    
                    players[1].score = players[1].score + 1
                
                }

                winner = players[0].score > players[1].score ? players[0].name : players[1].name 

                console.log(`\n Somando os valores do dado com a digiribilidade o ganhador da rodada foi ${winner}\n`);
                
                    
            break;
                


            case "CONFRONTO":

            
            console.log(`\nPlayer ${players[0].name} jogou o dado e recebeu o valor ${dicePlayer1}`);
            console.log(`Player ${players[1].name} jogou o dado e recebeu o valor ${dicePlayer2}\n`);

            if ((players[0].power + dicePlayer1) > (players[1].power + dicePlayer2)) {
                
                players[0].score = players[0].score + 1

            } else if((players[0].power + dicePlayer1) < (players[1].power + dicePlayer2)) {
                
                players[1].score = players[1].score + 1
            
            }

            winner = players[0].score > players[1].score ? players[0].name : players[1].name 

            console.log(`\n Somando os valores do dado com a força o ganhador da rodada foi ${winner}\n`);
            
                    
            break;        
        }

        round ++;
        
    }

    let gameWinner = players[0].score > players[1].score ? players[0] : players[1] 
    let looser = players[0].score > players[1].score ? players[1] : players[0]

    if(gameWinner.score === looser.score){
        console.log("EMPATE\n\n");
        
    } else {

        
        console.log(`O Vencedor Do jogo é ${gameWinner.name} 🎉🎉🎉 com o total de ${gameWinner.score} pontos enquanto seu adiversario com ${looser.score}\n\n`);
    }
}

async function main() {

    initGame()
}



main()