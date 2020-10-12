var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

var enemyNames = ["Roberto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;


for(var i = 0; i < 3; i++) {
    console.log(enemyNames[i]);
}

var fight = function(enemyName) {

    while(enemyHealth > 0) {
        //Alert Users that they are starting the round.

    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'Fight' or 'Skip' to choose.")

    //if player chooses to fight, then fight
    if (promptFight === "fight" || promptFight === "FIGHT") {

        //Subtract the value of 'playerAttack' from the value of of 'enemyHealth' and use that result to update the value in 'enemyHealth' variable
        enemyHealth = enemyHealth - playerAttack;

        console.log(
        playerName + " attacked" + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
        );

        //check enemy's Health
        if (enemyHealth <= 0) {
            window.alert(enemyName + " has died!");
        } else {
            window.alert(enemyName + " still has " + enemyHealth + " health left.");
        }

        //subtract the value of 'enemy Attack' from the value of 'playerHealth' and use that result to update the value in the 'playerHealth' variable.;
        playerHealth = playerHealth - enemyAttack;

        console.log(
        enemyName + " attacked " + playerName + ". " + playerName + " Now has " + playerHealth + " health remaining."
        );

        //check player's health
        if (playerHealth <= 0) {
        window.alert(playerName + " has died!");
        }  else {
        window.alert(playerName + " still has " + playerHealth + " health left.");
        }

    //if player chooses to skip
    } else if (promptFight === "skip" || promptFight === "SKIP") {

        //confirm user wants to skip
        var confirmSkip = window.confirm("Are you sure you'd like to quit?");

        //if yes (true), leave fight
        if (confirmSkip) {
            window.alert(playerName + " has chosen to skip this fight!");

            //subtract money from playerMoney for skipping
            playerMoney = playerMoney - 2;
        } else {
            fight();
        }

    } else {
        window.alert("You need to pick a valid option. Try again!");
    }
    }
};

for (var i = 0; i < enemyNames.length; i++) {
    var pickedEnemyName = enemyNames[i];
    enemyHealth = 50;
    fight(pickedEnemyName);
}