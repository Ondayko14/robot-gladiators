var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;

console.log(playerName, playerAttack, playerHealth);

var enemyName = "Roborto";
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function() {
    //Alert Users that they are starting the round.
    window.alert("Welcome to Robot Gladiators!");

    //Subtract the value of 'playerAttack' from the value of of 'enemyHealth' and use that result to update the value in 'enemyHealth' variable
    enemyHealth = enemyHealth - playerAttack;

    //Log a resulting message to the consol so we know that it worked
    console.log(
    playerName + " attacked" + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
    );
    //subtract the value of 'enemy Attack' from the value of 'playerHealth' and use that result to update the value in the 'playerHealth' variable.;
    playerHealth = playerHealth - enemyAttack;

    //log a resulting message to the conole so we know it worked.
    console.log(
    enemyName + " attacked " + playerName + ". " + playerName + " Now has " + playerHealth + " health remaining."
    );
  };

fight();