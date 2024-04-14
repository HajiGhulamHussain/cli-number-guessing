#! /usr/bin/env node
import inquirer from "inquirer";

const randomNumber = Math.floor(Math.random()* 6 +1 );
// console.log(randomNumber); for Cheating guess number

let answers = await inquirer.prompt([
{
    name: "userGuessedNumber",
    type: "number",
    message: "Please Guess A Number Between 1 TO 6: " 
},

]);
if(answers.userGuessedNumber === randomNumber){
    console.log("Congratulation You Guess A Right Number")
}else
{
console.log("You Guess A Wrong Number")
}