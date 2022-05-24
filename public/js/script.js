// logical for computer choice
function getComputerChoice() {
  const comp = Math.random();
  if( comp < 0.34 ) return 'rock';
  if( comp >= 0.34 && comp < 0.67 ) return 'scissors';
  return 'paper';
  }

  function getResult(comp, player) {
    if( player == comp ) return 'DRAW!';
    if( player == 'rock' ) return ( comp == 'scissors' ) ? 'WIN!' : 'LOSE!';
    if( player == 'scissors' ) return ( comp == 'rock' ) ? 'LOSE!' : 'WIN!';
    if( player == 'paper') return ( comp == 'scissors' ) ? 'LOSE!' : 'WIN!';
  }


  function spin() {
    const imgComputer = document.querySelector('.img-computer');
    const image = ['rock', 'paper', 'scissors'];
    let index = 0;
    const startSpin = new Date().getTime();
    setInterval(function() {
      if( new Date().getTime() - startSpin > 1000) {
        clearInterval;
        return;
      }

        imgComputer.setAttribute('src', 'assetsRPS/' + image[index++] + '.png');
        if( index == image.length ) index = 0;
    }, 100)
  }  

  const choice = document.querySelectorAll('li img');
  console.log(choice);
  choice.forEach(function(chosen) {
    chosen.addEventListener('click', function() {
      const computerChoice = getComputerChoice();
      const playerChoice = chosen.className;
      const result = getResult(computerChoice, playerChoice);
      
      // spinner images
      spin();

      setTimeout(function() {
        const imgComputer = document.querySelector('.img-computer');
        imgComputer.setAttribute('src', 'assetsRPS/' + computerChoice + '.png');
      
        const info = document.querySelector('.info');
        info.innerHTML = result;
      }, 1000);
      
    });
  });
  
  
  
  
  
  
  
  const playerRock = document.querySelector('.rock');
  playerRock.addEventListener('click', function () {
    
  });