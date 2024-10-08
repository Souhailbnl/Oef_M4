import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
import { clear } from 'node:console';
const userInput = readline.createInterface({input, output});
 
 
let choices = ['steen', 'papier', 'schaar'];
let computerChoice = choices[Math.floor(Math.random()*choices.length)];
 
let keuze = await userInput.question("Kies uit schaar steen of papier: ");

let gebruikerScore = 0;
let computerScore = 0;
 

while (gebruikerScore < 3 && computerScore < 3) {
    
let computerChoice = choices[Math.floor(Math.random()*choices.length)];
 
let keuze = await userInput.question("Kies uit schaar steen of papier: ")
    
    
if(keuze == computerChoice)
{
console.log("jij hebt hetzelfde gekozen, probeer het opnieuw ");
}
 
    else if(computerChoice == 'steen' && keuze == 'schaar' )
    {
    console.log(computerChoice + "\n" + "you lose");
    computerScore++;
    }
 
 
    else if(computerChoice == 'schaar' && keuze == 'papier' )
    {
    console.log(computerChoice + "\n" + "you lose");
    computerScore++;
    }
 
    else if(computerChoice == 'papier' && keuze == 'papier')
    {
    console.log(computerChoice + "\n" + "you lose");
    computerScore++;
    }

    else if(computerChoice == 'steen' && keuze == 'papier')
    {
    console.log(computerChoice + "\n" + "you win");
    gebruikerScore++;
    }
   
   
    else if(computerChoice == 'schaar' && keuze == 'steen' )
    {
    console.log(computerChoice + "\n" + "you win");
    gebruikerScore++;
    }
   
    else if(computerChoice == 'papier' && keuze == 'schaar')
    {
    console.log(computerChoice + "\n" + "you win");
    gebruikerScore++;
    }
   
    else
    {
        console.log("invalid choice")
    } 

    console.log("Huidige gebruiker score: " + gebruikerScore )
    console.log("Huidige computer score: " + computerScore )

}

 if (gebruikerScore == 3) {

        console.log("De gebruiker heeft het spel gewonnen");
        
    }
    else
    console.log("De computer heeft het spel gewonnen");

 
 
process.exit();