import inquirer from "inquirer";
import chalk from "chalk";
class Player {
    name;
    fuel = 100;
    constructor(name) {
        this.name = name;
    }
    fuelDecrease() {
        let fuel = this.fuel - 25;
        this.fuel = fuel;
    }
    fuelIncrease() {
        this.fuel = 100;
    }
}
class Opponent {
    name;
    fuel = 100;
    constructor(name) {
        this.name = name;
    }
    fuelDecrease() {
        let fuel = this.fuel - 25;
        this.fuel = fuel;
    }
}
let player = await inquirer.prompt({
    type: "input",
    name: "name",
    message: "Please Enter Your Name:"
});
let opponent = await inquirer.prompt({
    type: "list",
    name: "select",
    message: "Select Your Opponent",
    choices: ["Skeleton", "Alien", "Zombie"]
});
let playerOne = new Player(player.name);
let opponentOne = new Opponent(opponent.select);
do {
    //For skeleton
    if (opponent.select === "Skeleton") {
        let ask = await inquirer.prompt({
            type: "list",
            name: "option",
            message: "Select your Opponent",
            choices: ["Attack", "Drink Portion", "Run For Your Life..."]
        });
        if (ask.option === "Attack") {
            let number = Math.floor(Math.random() * 2);
            if (number > 0) {
                playerOne.fuelDecrease();
                console.log(chalk.bold.red(`${playerOne.name} fuel is ${playerOne.fuel}`));
                console.log(chalk.bold.green(`${opponentOne.name} fuel is ${opponentOne.fuel}`));
                if (playerOne.fuel <= 0) {
                    console.log(chalk.yellowBright.bold.italic("You lose better luck next time"));
                    process.exit();
                }
            }
            if (number <= 0) {
                opponentOne.fuelDecrease();
                console.log(chalk.bold.green(`${playerOne.name} fuel is ${playerOne.fuel}`));
                console.log(chalk.bold.red(`${opponentOne.name} fuel is ${opponentOne.fuel}`));
                if (opponentOne.fuel <= 0) {
                    console.log(chalk.yellowBright.bold.italic("You Win"));
                    process.exit();
                }
            }
        }
        if (ask.option === "Drink Portion") {
            playerOne.fuelIncrease();
            console.log(chalk.bold.yellowBright(`you drink health portion your fuel is ${playerOne.fuel}`));
        }
        if (ask.option === "Run For Your Life...") {
            console.log(chalk.bold.italic.cyanBright("You Loose, Better Luck Next Time"));
            process.exit();
        }
    }
    //Alien
    if (opponent.select === "Alien") {
        let ask = await inquirer.prompt({
            type: "list",
            name: "option",
            message: "Select your Opponent",
            choices: ["Attack", "Drink Portion", "Run For Your Life..."]
        });
        if (ask.option === "Attack") {
            let number = Math.floor(Math.random() * 2);
            if (number > 0) {
                playerOne.fuelDecrease();
                console.log(chalk.bold.red(`${playerOne.name} fuel is ${playerOne.fuel}`));
                console.log(chalk.bold.green(`${opponentOne.name} fuel is ${opponentOne.fuel}`));
                if (playerOne.fuel <= 0) {
                    console.log(chalk.yellowBright.bold.italic("You lose better luck next time"));
                    process.exit();
                }
            }
            if (number <= 0) {
                opponentOne.fuelDecrease();
                console.log(chalk.bold.green(`${playerOne.name} fuel is ${playerOne.fuel}`));
                console.log(chalk.bold.red(`${opponentOne.name} fuel is ${opponentOne.fuel}`));
                if (opponentOne.fuel <= 0) {
                    console.log(chalk.yellowBright.bold.italic("You Win"));
                    process.exit();
                }
            }
        }
        if (ask.option === "Drink Portion") {
            playerOne.fuelIncrease();
            console.log(chalk.bold.yellowBright(`you drink health portion your fuel is ${playerOne.fuel}`));
        }
        if (ask.option === "Run For Your Life...") {
            console.log(chalk.bold.italic.cyanBright("You Loose, Better Luck Next Time"));
            process.exit();
        }
    }
    //Zombie
    if (opponent.select === "Zombie") {
        let ask = await inquirer.prompt({
            type: "list",
            name: "option",
            message: "Select your Opponent",
            choices: ["Attack", "Drink Portion", "Run For Your Life..."]
        });
        if (ask.option === "Attack") {
            let number = Math.floor(Math.random() * 2);
            if (number > 0) {
                playerOne.fuelDecrease();
                console.log(chalk.bold.red(`${playerOne.name} fuel is ${playerOne.fuel}`));
                console.log(chalk.bold.green(`${opponentOne.name} fuel is ${opponentOne.fuel}`));
                if (playerOne.fuel <= 0) {
                    console.log(chalk.yellowBright.bold.italic("You lose better luck next time"));
                    process.exit();
                }
            }
            if (number <= 0) {
                opponentOne.fuelDecrease();
                console.log(chalk.bold.green(`${playerOne.name} fuel is ${playerOne.fuel}`));
                console.log(chalk.bold.red(`${opponentOne.name} fuel is ${opponentOne.fuel}`));
                if (opponentOne.fuel <= 0) {
                    console.log(chalk.yellowBright.bold.italic("You Win"));
                    process.exit();
                }
            }
        }
        if (ask.option === "Drink Portion") {
            playerOne.fuelIncrease();
            console.log(chalk.bold.yellowBright(`you drink health portion your fuel is ${playerOne.fuel}`));
        }
        if (ask.option === "Run For Your Life...") {
            console.log(chalk.bold.italic.cyanBright("You Loose, Better Luck Next Time"));
            process.exit();
        }
    }
} while (true);
