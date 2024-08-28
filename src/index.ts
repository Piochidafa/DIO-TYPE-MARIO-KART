

class Character {
    name: string;
    speed: number;
    maneuverability: number;
    power: number;


    constructor(name: string, speed: number, maneuverability: number, power: number) {
        this.name = name;
        this.speed = speed;
        this.maneuverability = maneuverability;
        this.power = power
    }
}

class lap {

    typelap:string 
    
    constructor(typelap:string) {
    
        this.typelap = typelap;
    
    }
}


const listChar: Character[] = [
    new Character("Mario", 4, 3, 3),
    new Character("Peach", 3, 4, 2),
    new Character("Yoshi", 2, 4, 3),
    new Character("Bowser", 5, 2, 5),
    new Character("Luigi", 3, 4, 4),
    new Character("Donkey Kong", 2, 4, 5),
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

    return listLaps[Math.floor(Math.random() * 2)]

}

const rowDice = (): number => {
    return (Math.floor(Math.random() * 6) + 1)
}

async function main() {

    console.log(returnTwoRandomCharacters());
}



const initGame = () => {

    switch (returnRandomLap().typelap) {
        case "RETA":
            
            break;
        
        case "CURVA":

            break;

        case "CONFRONTO":

            break;


        }

}



main()