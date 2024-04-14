#! /usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var inquirer_1 = require("inquirer");
var randomNumber = Math.floor(Math.random() * 6 + 1);
// console.log(randomNumber); for Cheating guess number
var answers = await inquirer_1.default.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "Please Guess A Number Between 1 TO 6: "
    },
]);
if (answers.userGuessedNumber === randomNumber) {
    console.log("Congratulation You Guess A Right Number");
}
else {
    console.log("You Guess A Wrong Number");
    
}
