import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
import { clear } from 'node:console';
const userInput = readline.createInterface({input, output});

let oppervlakte;

let zijde1 = parseFloat(await userInput.question('Geef een eerste zijde:'));
let zijde2 = parseFloat(await userInput.question('Geef een tweede zijde:'));


oppervlakte = zijde1 * zijde2;


console.log("De oppervlakte van de rechthoek: " + oppervlakte)

process.exit();