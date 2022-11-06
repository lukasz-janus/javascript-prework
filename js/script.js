let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log('Wylosowana liczba to: ' + randomNumber);

let computerMove = randomNumber;

if(randomNumber == 1){
  computerMove = 'kamień';
} else if(randomNumber == 2){
  computerMove = 'papier';
} else if(randomNumber == 3){
  computerMove = 'nożyce';
}
printMessage('Twój przeciwnik wybrał: ' + computerMove);


let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

console.log('Gracz wpisał: ' + playerInput);

let playerMove = 'nieznany ruch';

if(playerInput == '1'){
  playerMove = 'kamień';
} else if(playerInput == 2){
  playerMove = 'papier';
} else if(playerInput == 3){
  playerMove = 'nożyce';
}

printMessage('Twój ruch to: ' + playerMove);

let win = 'Ty wygrywasz!';
let draw = 'Remis';
let loss = 'Tym razem przegrywasz';


if( computerMove == 'kamień' && playerMove == 'papier'){
    printMessage(win);
} else if( computerMove == 'kamień' && playerMove == 'nożyce'){
    printMessage(loss);
} else if( computerMove == 'kamień' && playerMove == 'kamień'){
    printMessage(draw);
} else if( computerMove == 'papier' && playerMove == 'papier'){
    printMessage(draw);
} else if( computerMove == 'papier' && playerMove == 'nożyce'){
    printMessage(win);
} else if( computerMove == 'papier' && playerMove == 'kamień'){
    printMessage(loss);
} else if( computerMove == 'nożyce' && playerMove == 'papier'){
    printMessage(loss);
} else if( computerMove == 'nożyce' && playerMove == 'nożyce'){
    printMessage(draw);
} else if( computerMove == 'nożyce' && playerMove == 'kamień'){
    printMessage(win);
} else if(playerMove == 'nieznany ruch'){
    printMessage('Wpisz poprawną liczbę z zakresu 1-3');
}