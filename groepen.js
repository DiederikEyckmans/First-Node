const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });


  rl.question('Wat is je geboortedatum? ', (answer) => {
    giveGroup(answer);
    rl.close();
  });

function giveGroup(gbdate) {
    var group = 1 + gbdate % 7;
    console.log("Je bent toegewezen aan groep " + group)
}