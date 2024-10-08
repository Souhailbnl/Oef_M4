import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
import { clear } from 'node:console';
const userInput = readline.createInterface({input, output});

let startTop = false;
let startLeft = true;

let hoogte = 4;


if(startTop && startLeft)
{
for ( let i = 1; i <= hoogte; i++)
    {
        for (let j = 0 ; j < i; j++)
        {
            process.stdout.write(i + "");
            i + 1;
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
                process.stdout.write(i + "");
                i + 1;
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
                    process.stdout.write(i + "");
                    i + 1;
                }

                console.log(" ");
            }
           
    
    }



process.exit();