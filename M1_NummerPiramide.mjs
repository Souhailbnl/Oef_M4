
import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
import { clear } from 'node:console';
const userInput = readline.createInterface({input, output});


let number = await userInput.question('Geef een nummer:');

for ( let i = 1; i <= number; i++)
    {
         for (let j = 0 ; j < i; j++)
        {
            process.stdout.write(i + "");
            i + 1;
        
        }
        
        console.log(" ")

    }

    process.exit();
