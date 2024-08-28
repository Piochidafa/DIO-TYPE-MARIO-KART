"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
class Character {
    constructor(name, speed, maneuverability, power) {
        this.name = name;
        this.speed = speed;
        this.maneuverability = maneuverability;
        this.power = power;
    }
}
const listChar = [
    new Character("Mario", 4, 3, 3),
    new Character("Peach", 3, 4, 2),
    new Character("Yoshi", 2, 4, 3),
    new Character("Bowser", 5, 2, 5),
    new Character("Luigi", 3, 4, 4),
    new Character("Donkey Kong", 2, 4, 5),
];
let char1;
let char2;
const returnTwoRandonCharacters = () => {
    const generateNumbers = () => {
        char1 = Math.floor(((Math.random() * 6)));
        char2 = Math.floor(((Math.random() * 6)));
        let numbers = [char1, char2];
        return numbers;
    };
    const getNumbers = generateNumbers();
    if (getNumbers[0] === getNumbers[1]) {
        generateNumbers();
    }
    return [listChar[char1], listChar[char2]];
};
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        console.log(returnTwoRandonCharacters());
    });
}
main();
