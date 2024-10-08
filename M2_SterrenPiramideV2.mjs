import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
import { clear } from 'node:console';
const userInput = readline.createInterface({input, output});

let startTop = true;
let startLeft = false;

let hoogte = 4;


if(startTop && startLeft)
{
for ( let i = 1; i <= hoogte; i++)
    {
        for (let j = 0 ; j < i; j++)
        {
            process.stdout.write("*");
        }
        
        console.log(" ")
    }

}

else if(!startTop && startLeft)
{
    for ( let i = hoogte; i >= 1; i--)
        {
            for (let j = 1 ; j <= i; j++)
            {
                process.stdout.write("*");
            }
            
            console.log(" ")
        }

}

else if(startTop && !startLeft)
    {
        for ( let i = 1; i <= hoogte; i++)
            {
                for (let j = 1 ; j <= hoogte - i; j++)
                {
                    console.log(" ")
                }
                

                for(let z = 1; z <= i; z++)
                {
                    process.stdout.write("*");
                }

                console.log(" ");
            }
           
    
    }



process.exit();