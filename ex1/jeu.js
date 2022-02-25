let start = true;

const nouvellePartie = () => {
    let difficulty = 1;
    let msg = "choose difficulty (from 1 to 10)";
    do{
        difficulty = parseInt(prompt(msg));
        msg = "please choose a correct difficulty (from 1 to 10)";
    }while (!difficulty || difficulty === "\n" || difficulty < 1 || difficulty > 10)
    
    const toGuess = Math.floor(11*Math.random());
    let tentatives = 10 - difficulty;
    let guessed = toGuess + 1;
    do{
        guessed = prompt(`guess number please ${toGuess} (${tentatives} left)`);
        tentatives--;
    }while (tentatives > 0 && toGuess !== parseInt(guessed))

    if(tentatives > 0 || toGuess === parseInt(guessed)) {
        alert(`${toGuess}! That's it !!`);
    } else alert(`you loose ! the number was ${toGuess}`);

    start = prompt("do you want to replay ?", "no");
    start = start.toLowerCase() in ["yes", "y", "ye", "yeah", "oui"];
}

alert("welcome !!");
while(start) {
    nouvellePartie();
}