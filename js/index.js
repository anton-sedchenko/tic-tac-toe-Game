window.onload = function() {
  for (let i = 0; i < 9; i++) {
    document.querySelector('.game-field').innerHTML += '<div class="block"></div>';
  }

  let step = 0;
  let firstPlayerScore = 0;
  let secondPlayerScore = 0;
  let firstPlayerStep = firstStepPlayer();
  const gameFieldEl = document.querySelector('.game-field');
  const firstPlScoreEl = document.querySelector('.firstPlScore');
  const secondPlScoreEl = document.querySelector('.secondPlScore');
  const resultEl = document.querySelector('.result');
  const firstTeamEl = document.querySelector('.firstTeam');
  const secondTeamEl = document.querySelector('.secondTeam');
  const newGameBtnEl = document.querySelector('.btn-new-game');
  const resetBtnEl = document.querySelector('.btn-reset');  
  let firstPlayerTeam;
  let secondPlayerTeam;

  function firstStepPlayer() {
    return Math.floor(Math.random() * Math.floor(2));
  }

  firstPlScoreEl.textContent = 'Player 1 score: ' + firstPlayerScore;
  secondPlScoreEl.textContent = 'Player 2 score: ' + secondPlayerScore;

  teamSelect();

  function teamSelect() {  
    if (firstPlayerStep === 0) {
      firstPlayerTeam = 'cross';
      secondPlayerTeam = 'circle';
      firstTeamEl.textContent = 'Player 1 mark - cross';
      secondTeamEl.textContent = 'Player 2 mark - circle';
      firstTeamEl.style.backgroundColor = 'green';
    } else {
      secondPlayerTeam = 'cross';
      firstPlayerTeam = 'circle';
      firstTeamEl.textContent = 'Player 1 mark - circle';
      secondTeamEl.textContent = 'Player 2 mark - cross';
      secondTeamEl.style.backgroundColor = 'green';
    }
  }

  document.querySelector('.game-field').onclick = function(event) {
    if (event.target.className === 'block') {

      if (step % 2 === 0) {
        event.target.innerHTML += '<div class=\"cross\">&#10060</div>';

        if (secondPlayerTeam === 'cross') {
          secondTeamEl.style.backgroundColor = 'white';
          firstTeamEl.style.backgroundColor = 'green';
        } else {
          secondTeamEl.style.backgroundColor = 'green';
          firstTeamEl.style.backgroundColor = 'white';
        }
        
      } else {
        event.target.innerHTML += '<div class=\"circle\">&#11093</div>';
        
        if (secondPlayerTeam === 'cross') {
          secondTeamEl.style.backgroundColor = 'green';
          firstTeamEl.style.backgroundColor = 'white';
        } else {
          secondTeamEl.style.backgroundColor = 'white';
          firstTeamEl.style.backgroundColor = 'green';
        }
      }

      step += 1;
      checkWinner();
    }

    function checkWinner() {
      let allBlocks = document.querySelectorAll('.block');

// Checking cross

      if (allBlocks[0].firstChild && allBlocks[1].firstChild && allBlocks[2].firstChild) {

        if (allBlocks[0].firstChild.className === 'cross' && allBlocks[1].firstChild.className === 'cross' && allBlocks[2].firstChild.className === 'cross') {
          allBlocks[0].style.backgroundColor = 'green';
          allBlocks[1].style.backgroundColor = 'green';
          allBlocks[2].style.backgroundColor = 'green';

          if (firstPlayerTeam === 'cross') {
            resultEl.textContent = 'Player 1 won!';
            secondTeamEl.style.backgroundColor = 'white';
            firstPlayerScore += 1;
            firstPlScoreEl.textContent = 'Player 1 score: ' + firstPlayerScore;
            gameFieldEl.style.pointerEvents = 'none';
            step = 0;

            return;
          } else {
            resultEl.textContent = 'Player 2 won!';
            firstTeamEl.style.backgroundColor = 'white';
            secondPlayerScore += 1;
            secondPlScoreEl.textContent = 'Player 2 score: ' + secondPlayerScore;
            gameFieldEl.style.pointerEvents = 'none';
            step = 0;

            return;
          }
        }
      }

      if (allBlocks[3].firstChild && allBlocks[4].firstChild && allBlocks[5].firstChild) {

        if (allBlocks[3].firstChild.className === 'cross' && allBlocks[4].firstChild.className === 'cross' && allBlocks[5].firstChild.className === 'cross') {
          allBlocks[3].style.backgroundColor = 'green';
          allBlocks[4].style.backgroundColor = 'green';
          allBlocks[5].style.backgroundColor = 'green';
          if (firstPlayerTeam === 'cross') {
            resultEl.textContent = 'Player 1 won!';
            secondTeamEl.style.backgroundColor = 'white';
            firstPlayerScore += 1;
            firstPlScoreEl.textContent = 'Player 1 score: ' + firstPlayerScore;
            gameFieldEl.style.pointerEvents = 'none';
            step = 0;

            return;
          } else {
            resultEl.textContent = 'Player 2 won!';
            firstTeamEl.style.backgroundColor = 'white';
            secondPlayerScore += 1;
            secondPlScoreEl.textContent = 'Player 2 score: ' + secondPlayerScore;
            gameFieldEl.style.pointerEvents = 'none';
            step = 0;

            return;
          }
        }
      }

      if (allBlocks[6].firstChild && allBlocks[7].firstChild && allBlocks[8].firstChild) {

        if (allBlocks[6].firstChild.className === 'cross' && allBlocks[7].firstChild.className === 'cross' && allBlocks[8].firstChild.className === 'cross') {
          allBlocks[6].style.backgroundColor = 'green';
          allBlocks[7].style.backgroundColor = 'green';
          allBlocks[8].style.backgroundColor = 'green';
          if (firstPlayerTeam === 'cross') {
            resultEl.textContent = 'Player 1 won!';
            secondPlScoreEl.style.backgroundColor = 'white';
            firstPlayerScore += 1;
            firstPlScoreEl.textContent = 'Player 1 score: ' + firstPlayerScore;
            gameFieldEl.style.pointerEvents = 'none';
            step = 0;

            return;
          } else {
            resultEl.textContent = 'Player 2 won!';
            firstTeamEl.style.backgroundColor = 'white';
            secondPlayerScore += 1;
            secondPlScoreEl.textContent = 'Player 2 score: ' + secondPlayerScore;
            gameFieldEl.style.pointerEvents = 'none';
            step = 0;

            return;
          }
        }
      }

      if (allBlocks[0].firstChild && allBlocks[4].firstChild && allBlocks[8].firstChild) {

        if (allBlocks[0].firstChild.className === 'cross' && allBlocks[4].firstChild.className === 'cross' && allBlocks[8].firstChild.className === 'cross') {
          allBlocks[0].style.backgroundColor = 'green';
          allBlocks[4].style.backgroundColor = 'green';
          allBlocks[8].style.backgroundColor = 'green';

          if (firstPlayerTeam === 'cross') {
            resultEl.textContent = 'Player 1 won!';
            secondTeamEl.style.backgroundColor = 'white';
            firstPlayerScore += 1;
            firstPlScoreEl.textContent = 'Player 1 score: ' + firstPlayerScore;
            gameFieldEl.style.pointerEvents = 'none';
            step = 0;

            return;
          } else {
            resultEl.textContent = 'Player 2 won!';
            firstTeamEl.style.backgroundColor = 'white';
            secondPlayerScore += 1;
            secondPlScoreEl.textContent = 'Player 2 score: ' + secondPlayerScore;
            gameFieldEl.style.pointerEvents = 'none';
            step = 0;

            return;
          }
        }
      }

      if (allBlocks[2].firstChild && allBlocks[4].firstChild && allBlocks[6].firstChild) {

        if (allBlocks[2].firstChild.className === 'cross' && allBlocks[4].firstChild.className === 'cross' && allBlocks[6].firstChild.className === 'cross') {
          allBlocks[2].style.backgroundColor = 'green';
          allBlocks[4].style.backgroundColor = 'green';
          allBlocks[6].style.backgroundColor = 'green';

          if (firstPlayerTeam === 'cross') {
            resultEl.textContent = 'Player 1 won!';
            secondTeamEl.style.backgroundColor = 'white';
            firstPlayerScore += 1;
            firstPlScoreEl.textContent = 'Player 1 score: ' + firstPlayerScore;
            gameFieldEl.style.pointerEvents = 'none';
            step = 0;

            return;
          } else {
            resultEl.textContent = 'Player 2 won!';
            firstTeamEl.style.backgroundColor = 'white';
            secondPlayerScore += 1;
            secondPlScoreEl.textContent = 'Player 2 score: ' + secondPlayerScore;
            gameFieldEl.style.pointerEvents = 'none';
            step = 0;

            return;
          }
        }
      }

      if (allBlocks[2].firstChild && allBlocks[4].firstChild && allBlocks[6].firstChild) {

        if (allBlocks[2].firstChild.className === 'cross' && allBlocks[4].firstChild.className === 'cross' && allBlocks[6].firstChild.className === 'cross') {
          allBlocks[2].style.backgroundColor = 'green';
          allBlocks[4].style.backgroundColor = 'green';
          allBlocks[6].style.backgroundColor = 'green';

          if (firstPlayerTeam === 'cross') {
            resultEl.textContent = 'Player 1 won!';
            secondTeamEl.style.backgroundColor = 'white';
            firstPlayerScore += 1;
            firstPlScoreEl.textContent = 'Player 1 score: ' + firstPlayerScore;
            gameFieldEl.style.pointerEvents = 'none';
            step = 0;

            return;
          } else {
            resultEl.textContent = 'Player 2 won!';
            firstTeamEl.style.backgroundColor = 'white';
            secondPlayerScore += 1;
            secondPlScoreEl.textContent = 'Player 2 score: ' + secondPlayerScore;
            gameFieldEl.style.pointerEvents = 'none';
            step = 0;

            return;
          }
        }
      }

      if (allBlocks[0].firstChild && allBlocks[3].firstChild && allBlocks[6].firstChild) {

        if (allBlocks[0].firstChild.className === 'cross' && allBlocks[3].firstChild.className === 'cross' && allBlocks[6].firstChild.className === 'cross') {
          allBlocks[0].style.backgroundColor = 'green';
          allBlocks[3].style.backgroundColor = 'green';
          allBlocks[6].style.backgroundColor = 'green';

          if (firstPlayerTeam === 'cross') {
            resultEl.textContent = 'Player 1 won!';
            secondTeamEl.style.backgroundColor = 'white';
            firstPlayerScore += 1;
            firstPlScoreEl.textContent = 'Player 1 score: ' + firstPlayerScore;
            gameFieldEl.style.pointerEvents = 'none';
            step = 0;

            return;
          } else {
            resultEl.textContent = 'Player 2 won!';
            firstTeamEl.style.backgroundColor = 'white';
            secondPlayerScore += 1;
            secondPlScoreEl.textContent = 'Player 2 score: ' + secondPlayerScore;
            gameFieldEl.style.pointerEvents = 'none';
            step = 0;

            return;
          }
        }
      }

      if (allBlocks[1].firstChild && allBlocks[4].firstChild && allBlocks[7].firstChild) {

        if (allBlocks[1].firstChild.className === 'cross' && allBlocks[4].firstChild.className === 'cross' && allBlocks[7].firstChild.className === 'cross') {
          allBlocks[1].style.backgroundColor = 'green';
          allBlocks[4].style.backgroundColor = 'green';
          allBlocks[7].style.backgroundColor = 'green';

          if (firstPlayerTeam === 'cross') {
            resultEl.textContent = 'Player 1 won!';
            secondPlScoreEl.style.backgroundColor = 'white';
            firstPlayerScore += 1;
            firstPlScoreEl.textContent = 'Player 1 score: ' + firstPlayerScore;
            gameFieldEl.style.pointerEvents = 'none';
            step = 0;

            return;
          } else {
            resultEl.textContent = 'Player 2 won!';
            firstTeamEl.style.backgroundColor = 'white';
            secondPlayerScore += 1;
            secondPlScoreEl.textContent = 'Player 2 score: ' + secondPlayerScore;
            gameFieldEl.style.pointerEvents = 'none';
            step = 0;

            return;
          }
        }
      }

      if (allBlocks[2].firstChild && allBlocks[5].firstChild && allBlocks[8].firstChild) {

        if (allBlocks[2].firstChild.className === 'cross' && allBlocks[5].firstChild.className === 'cross' && allBlocks[8].firstChild.className === 'cross') {
          allBlocks[2].style.backgroundColor = 'green';
          allBlocks[5].style.backgroundColor = 'green';
          allBlocks[8].style.backgroundColor = 'green';

          if (firstPlayerTeam === 'cross') {
            resultEl.textContent = 'Player 1 won!';
            secondTeamEl.style.backgroundColor = 'white';
            firstPlayerScore += 1;
            firstPlScoreEl.textContent = 'Player 1 score: ' + firstPlayerScore;
            gameFieldEl.style.pointerEvents = 'none';
            step = 0;

            return;
          } else {
            resultEl.textContent = 'Player 2 won!';
            firstTeamEl.style.backgroundColor = 'white';
            secondPlayerScore += 1;
            secondPlScoreEl.textContent = 'Player 2 score: ' + secondPlayerScore;
            gameFieldEl.style.pointerEvents = 'none';
            step = 0;

            return;
          }
        }
      }

// Circles cheking

      if (allBlocks[0].firstChild && allBlocks[1].firstChild && allBlocks[2].firstChild) {

        if (allBlocks[0].firstChild.className === 'circle' && allBlocks[1].firstChild.className === 'circle' && allBlocks[2].firstChild.className === 'circle') {
          allBlocks[0].style.backgroundColor = 'green';
          allBlocks[1].style.backgroundColor = 'green';
          allBlocks[2].style.backgroundColor = 'green';

          if (firstPlayerTeam === 'cross') {
            resultEl.textContent = 'Player 1 won!';
            secondTeamEl.style.backgroundColor = 'white';
            firstPlayerScore += 1;
            firstPlScoreEl.textContent = 'Player 1 score: ' + firstPlayerScore;
            gameFieldEl.style.pointerEvents = 'none';
            step = 0;

            return;
          } else {
            resultEl.textContent = 'Player 2 won!';
            firstTeamEl.style.backgroundColor = 'white';
            secondPlayerScore += 1;
            secondPlScoreEl.textContent = 'Player 2 score: ' + secondPlayerScore;
            gameFieldEl.style.pointerEvents = 'none';
            step = 0;

            return;
          }
        }
      }

      if (allBlocks[3].firstChild && allBlocks[4].firstChild && allBlocks[5].firstChild) {

        if (allBlocks[3].firstChild.className === 'circle' && allBlocks[4].firstChild.className === 'circle' && allBlocks[5].firstChild.className === 'circle') {
          allBlocks[3].style.backgroundColor = 'green';
          allBlocks[4].style.backgroundColor = 'green';
          allBlocks[5].style.backgroundColor = 'green';

          if (firstPlayerTeam === 'cross') {
            resultEl.textContent = 'Player 1 won!';
            secondTeamEl.style.backgroundColor = 'white';
            firstPlayerScore += 1;
            firstPlScoreEl.textContent = 'Player 1 score: ' + firstPlayerScore;
            gameFieldEl.style.pointerEvents = 'none';
            step = 0;

            return;
          } else {
            resultEl.textContent = 'Player 2 won!';
            firstTeamEl.style.backgroundColor = 'white';
            secondPlayerScore += 1;
            secondPlScoreEl.textContent = 'Player 2 score: ' + secondPlayerScore;
            gameFieldEl.style.pointerEvents = 'none';
            step = 0;

            return;
          }
        }
      }

      if (allBlocks[6].firstChild && allBlocks[7].firstChild && allBlocks[8].firstChild) {

        if (allBlocks[6].firstChild.className === 'circle' && allBlocks[7].firstChild.className === 'circle' && allBlocks[8].firstChild.className === 'circle') {
          allBlocks[6].style.backgroundColor = 'green';
          allBlocks[7].style.backgroundColor = 'green';
          allBlocks[8].style.backgroundColor = 'green';

          if (firstPlayerTeam === 'cross') {
            resultEl.textContent = 'Player 1 won!';
            secondTeamEl.style.backgroundColor = 'white';
            firstPlayerScore += 1;
            firstPlScoreEl.textContent = 'Player 1 score: ' + firstPlayerScore;
            gameFieldEl.style.pointerEvents = 'none';
            step = 0;

            return;
          } else {
            resultEl.textContent = 'Player 2 won!';
            firstTeamEl.style.backgroundColor = 'white';
            secondPlayerScore += 1;
            secondPlScoreEl.textContent = 'Player 2 score: ' + secondPlayerScore;
            gameFieldEl.style.pointerEvents = 'none';
            step = 0;

            return;
          }
        }
      }

      if (allBlocks[0].firstChild && allBlocks[4].firstChild && allBlocks[8].firstChild) {

        if (allBlocks[0].firstChild.className === 'circle' && allBlocks[4].firstChild.className === 'circle' && allBlocks[8].firstChild.className === 'circle') {
          allBlocks[0].style.backgroundColor = 'green';
          allBlocks[4].style.backgroundColor = 'green';
          allBlocks[8].style.backgroundColor = 'green';

          if (firstPlayerTeam === 'cross') {
            resultEl.textContent = 'Player 1 won!';
            secondTeamEl.style.backgroundColor = 'white';
            firstPlayerScore += 1;
            firstPlScoreEl.textContent = 'Player 1 score: ' + firstPlayerScore;
            gameFieldEl.style.pointerEvents = 'none';
            step = 0;

            return;
          } else {
            resultEl.textContent = 'Player 2 won!';
            firstTeamEl.style.backgroundColor = 'white';
            secondPlayerScore += 1;
            secondPlScoreEl.textContent = 'Player 2 score: ' + secondPlayerScore;
            gameFieldEl.style.pointerEvents = 'none';
            step = 0;

            return;
          }
        }
      }

      if (allBlocks[2].firstChild && allBlocks[4].firstChild && allBlocks[6].firstChild) {

        if (allBlocks[2].firstChild.className === 'circle' && allBlocks[4].firstChild.className === 'circle' && allBlocks[6].firstChild.className === 'circle') {
          allBlocks[2].style.backgroundColor = 'green';
          allBlocks[4].style.backgroundColor = 'green';
          allBlocks[6].style.backgroundColor = 'green';

          if (firstPlayerTeam === 'cross') {
            resultEl.textContent = 'Player 1 won!';
            secondTeamEl.style.backgroundColor = 'white';
            firstPlayerScore += 1;
            firstPlScoreEl.textContent = 'Player 1 score: ' + firstPlayerScore;
            gameFieldEl.style.pointerEvents = 'none';
            step = 0;

            return;
          } else {
            resultEl.textContent = 'Player 2 won!';
            firstTeamEl.style.backgroundColor = 'white';
            secondPlayerScore += 1;
            secondPlScoreEl.textContent = 'Player 2 score: ' + secondPlayerScore;
            gameFieldEl.style.pointerEvents = 'none';
            step = 0;

            return;
          }
        }
      }

      if (allBlocks[2].firstChild && allBlocks[4].firstChild && allBlocks[6].firstChild) {

        if (allBlocks[2].firstChild.className === 'circle' && allBlocks[4].firstChild.className === 'circle' && allBlocks[6].firstChild.className === 'circle') {
          allBlocks[2].style.backgroundColor = 'green';
          allBlocks[4].style.backgroundColor = 'green';
          allBlocks[6].style.backgroundColor = 'green';

          if (firstPlayerTeam === 'cross') {
            resultEl.textContent = 'Player 1 won!';
            secondTeamEl.style.backgroundColor = 'white';
            firstPlayerScore += 1;
            firstPlScoreEl.textContent = 'Player 1 score: ' + firstPlayerScore;
            gameFieldEl.style.pointerEvents = 'none';
            step = 0;

            return;
          } else {
            resultEl.textContent = 'Player 2 won!';
            firstTeamEl.style.backgroundColor = 'white';
            secondPlayerScore += 1;
            secondPlScoreEl.textContent = 'Player 2 score: ' + secondPlayerScore;
            gameFieldEl.style.pointerEvents = 'none';
            step = 0;

            return;
          }
        }
      }

      if (allBlocks[0].firstChild && allBlocks[3].firstChild && allBlocks[6].firstChild) {

        if (allBlocks[0].firstChild.className === 'circle' && allBlocks[3].firstChild.className === 'circle' && allBlocks[6].firstChild.className === 'circle') {
          allBlocks[0].style.backgroundColor = 'green';
          allBlocks[3].style.backgroundColor = 'green';
          allBlocks[6].style.backgroundColor = 'green';

          if (firstPlayerTeam === 'cross') {
            resultEl.textContent = 'Player 1 won!';
            secondTeamEl.style.backgroundColor = 'white';
            firstPlayerScore += 1;
            firstPlScoreEl.textContent = 'Player 1 score: ' + firstPlayerScore;
            gameFieldEl.style.pointerEvents = 'none';
            step = 0;

            return;
          } else {
            resultEl.textContent = 'Player 2 won!';
            firstTeamEl.style.backgroundColor = 'white';
            secondPlayerScore += 1;
            secondPlScoreEl.textContent = 'Player 2 score: ' + secondPlayerScore;
            gameFieldEl.style.pointerEvents = 'none';
            step = 0;

            return;
          }
        }
      }

      if (allBlocks[1].firstChild && allBlocks[4].firstChild && allBlocks[7].firstChild) {

        if (allBlocks[1].firstChild.className === 'circle' && allBlocks[4].firstChild.className === 'circle' && allBlocks[7].firstChild.className === 'circle') {
          allBlocks[1].style.backgroundColor = 'green';
          allBlocks[4].style.backgroundColor = 'green';
          allBlocks[7].style.backgroundColor = 'green';

          if (firstPlayerTeam === 'cross') {
            resultEl.textContent = 'Player 1 won!';
            secondTeamEl.style.backgroundColor = 'white';
            firstPlayerScore += 1;
            firstPlScoreEl.textContent = 'Player 1 score: ' + firstPlayerScore;
            gameFieldEl.style.pointerEvents = 'none';
            step = 0;

            return;
          } else {
            resultEl.textContent = 'Player 2 won!';
            firstTeamEl.style.backgroundColor = 'white';
            secondPlayerScore += 1;
            secondPlScoreEl.textContent = 'Player 2 score: ' + secondPlayerScore;
            gameFieldEl.style.pointerEvents = 'none';
            step = 0;

            return;
          }
        }
      }

      if (allBlocks[2].firstChild && allBlocks[5].firstChild && allBlocks[8].firstChild) {

        if (allBlocks[2].firstChild.className === 'circle' && allBlocks[5].firstChild.className === 'circle' && allBlocks[8].firstChild.className === 'circle') {
          allBlocks[2].style.backgroundColor = 'green';
          allBlocks[5].style.backgroundColor = 'green';
          allBlocks[8].style.backgroundColor = 'green';

          if (firstPlayerTeam === 'cross') {
            resultEl.textContent = 'Player 1 won!';
            secondTeamEl.style.backgroundColor = 'white';
            firstPlayerScore += 1;
            firstPlScoreEl.textContent = 'Player 1 score: ' + firstPlayerScore;
            gameFieldEl.style.pointerEvents = 'none';
            step = 0;

            return;
          } else {
            resultEl.textContent = 'Player 2 won!';
            firstTeamEl.style.backgroundColor = 'white';
            secondPlayerScore += 1;
            secondPlScoreEl.textContent = 'Player 2 score: ' + secondPlayerScore;
            gameFieldEl.style.pointerEvents = 'none';
            step = 0;

            return;
          }
        }
      }

// draw checking
      if (isAllBlocksFill(allBlocks)) {
        resultEl.textContent = 'Draw!';
        firstTeamEl.style.backgroundColor = 'white';
        secondTeamEl.style.backgroundColor = 'white';
        firstPlayerScore += 1;
        firstPlScoreEl.textContent = 'Player 1 score: ' + firstPlayerScore;
        secondPlayerScore += 1;
        secondPlScoreEl.textContent = 'Player 2 score: ' + secondPlayerScore;
        gameFieldEl.style.pointerEvents = 'none';
        step = 0;
      }
    }
  }

  newGameBtnEl.onclick = function(event) {
    let allBlocks = document.querySelectorAll('.block');

    for (let i = 0; i < allBlocks.length; i++) {
      if (allBlocks[i].firstChild) {
        allBlocks[i].removeChild(allBlocks[i].firstChild);
        allBlocks[i].style.backgroundColor = 'white';
      }
    }

    gameFieldEl.style.pointerEvents = 'auto';
    secondTeamEl.style.backgroundColor = 'white';
    firstTeamEl.style.backgroundColor = 'white';
    resultEl.textContent = '';
    step = 0;
    firstPlayerStep = firstStepPlayer();
    teamSelect();
  }

  resetBtnEl.onclick = function(event) {
    let allBlocks = document.querySelectorAll('.block');

    firstPlayerScore = 0;
    secondPlayerScore = 0;
    firstPlScoreEl.textContent = 'Player 1 score: ' + firstPlayerScore;
    secondPlScoreEl.textContent = 'Player 2 score: ' + secondPlayerScore;

    for (let i = 0; i < allBlocks.length; i++) {
      if (allBlocks[i].firstChild) {
        allBlocks[i].removeChild(allBlocks[i].firstChild);
        allBlocks[i].style.backgroundColor = 'white';
      }
    }

    gameFieldEl.style.pointerEvents = 'auto';
    secondTeamEl.style.backgroundColor = 'white';
    firstTeamEl.style.backgroundColor = 'white';
    resultEl.textContent = '';
    step = 0;
    firstPlayerStep = firstStepPlayer();
    teamSelect();
  }

  function isAllBlocksFill(arr) {
    for (let i = 0; i < arr.length; i++) {
      if (!arr[i].firstChild) {
        return false;
      }
    }

    return true;
  }
}