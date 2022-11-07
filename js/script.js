function getMoveName(argMoveId){
  console.log('wywołano getMoveName');

  if(argMoveId == 1){
    return 'kamień';
  } else if(argMoveId == 2){
    return 'papier';
  } else if(argMoveId == 3){
    return 'nożyce';
  }

  printMessage('Nie znam ruchu o id ' + argMoveId + '.');
  return 'nieznany ruch';
}

function displayResult(argComputerMove, argPlayerMove){
  console.log('wywołano displayResult');
  console.log('moves:', argComputerMove, argPlayerMove);

  if( argComputerMove == 'kamień' && argPlayerMove == 'papier'){
    printMessage(win);
  } else if( argComputerMove == 'kamień' && argPlayerMove == 'nożyce'){
      printMessage(loss);
  } else if( argComputerMove == 'kamień' && argPlayerMove == 'kamień'){
      printMessage(draw);
  } else if( argComputerMove == 'papier' && argPlayerMove == 'papier'){
      printMessage(draw);
  } else if( argComputerMove == 'papier' && argPlayerMove == 'nożyce'){
      printMessage(win);
  } else if( argComputerMove == 'papier' && argPlayerMove == 'kamień'){
      printMessage(loss);
  } else if( argComputerMove == 'nożyce' && argPlayerMove == 'papier'){
      printMessage(loss);
  } else if( argComputerMove == 'nożyce' && argPlayerMove == 'nożyce'){
      printMessage(draw);
  } else if( argComputerMove == 'nożyce' && argPlayerMove == 'kamień'){
      printMessage(win);
  } else if(argComputerMove == 'nieznany ruch'){
      printMessage('Wpisz poprawną liczbę z zakresu 1-3');  
  } 
}

let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log('Wylosowana liczba to: ' + randomNumber);

let computerMove = getMoveName(randomNumber);

printMessage('Twój przeciwnik wybrał: ' + computerMove);


let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

console.log('Gracz wpisał: ' + playerInput);

let playerMove = getMoveName(playerInput);

printMessage('Twój ruch to: ' + playerMove);


let win = 'Wynik: Ty wygrywasz!';
let draw = 'Wynik: Remis';
let loss = 'Wynik: Tym razem przegrywasz';

let result = displayResult(computerMove, playerMove);
