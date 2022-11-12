
{
  let roundCount = 0;
  let playerWin = 0;
  let computerWin = 0;

  const playGame = function(playerInput){
    clearMessages();

    const getMoveName = function(argMoveId){
      console.log('wywołano getMoveName');

      if(argMoveId == 1){
        return one;
      } else if(argMoveId == 2){
        return two;
      } else if(argMoveId == 3){
        return three;
      }
      printMessage('Nie znam ruchu o id ' + argMoveId + '.');
      return unknow;
    }

    const win = 'WYGRANA';
    const draw = 'REMIS';
    const loss = 'PRZEGRANA';

    const displayResult = function(argComputerMove, argPlayerMove){
      console.log('wywołano displayResult');
      console.log('moves:', argComputerMove, argPlayerMove);

      if(argComputerMove == one && argPlayerMove == two){
        printMessage(win);
        roundCount++;
        playerWin++;
      } else if(argComputerMove == one && argPlayerMove == three){
          printMessage(loss);
          roundCount++;
          computerWin++;
      } else if(argComputerMove == one && argPlayerMove == one){
          printMessage(draw);
          roundCount++;
      } else if(argComputerMove == two && argPlayerMove == two){
          printMessage(draw);
          roundCount++;
      } else if(argComputerMove == two && argPlayerMove == three){
          printMessage(win);
          roundCount++;
          playerWin++
      } else if(argComputerMove == two && argPlayerMove == one){
          printMessage(loss);
          roundCount++;
          computerWin++;
      } else if(argComputerMove == three && argPlayerMove == two){
          printMessage(loss);
          roundCount++;
          computerWin++;
      } else if(argComputerMove == three && argPlayerMove == three){
          printMessage(draw);
          roundCount++;
      } else if(argComputerMove == three && argPlayerMove == one){
          printMessage(win);
          roundCount++;
          playerWin++
      } else if(argComputerMove == unknow){
          printMessage('Wpisz poprawną liczbę z zakresu 1-3');  
      } else {
        printMessage('Wystąpił błąd. Spróbuj jeszcze raz.');
      }
    }

    const one = 'kamień';
    const two = 'papier';
    const three = 'nożyce';
    const unknow = 'Nieznany ruch';
    
    const randomNumber = Math.floor(Math.random() * 3 + 1);
    console.log('Wylosowana liczba to: ' + randomNumber);

    const computerMove = getMoveName(randomNumber);
    printMessage(computerMove);
    printMessage('VS');
    
    const playerMove = getMoveName(playerInput);
    printMessage(playerMove);
    console.log('Gracz wpisał: ' + playerInput);

    displayResult(computerMove, playerMove);

    console.log('Ilość rozegranych rund: ' + roundCount);
    console.log('Ilość zwycięstw gracza: ' + playerWin);
    console.log('Ilość zwycięstw komputera ' +computerWin);

    document.getElementById('game-result').innerHTML = roundCount;
    document.getElementById('player-win-counter').innerHTML = playerWin;
    document.getElementById('player-lose-counter').innerHTML = computerWin;
  }

  document.getElementById('play-rock').addEventListener('click', function(){
    playGame(1);
  });
  document.getElementById('play-paper').addEventListener('click', function(){
    playGame(2);
  });
  document.getElementById('play-scissors').addEventListener('click', function(){
    playGame(3);
  });
}