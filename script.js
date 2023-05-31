const luffy = document.querySelector('.luffy');
const bomb = document.querySelector('.bomb');
const barco = document.querySelector('.barco');
const counter = document.createElement('p');
let count = 0;

counter.classList.add('counter');
document.body.appendChild(counter);

const jump = () => {
    luffy.classList.add('jump');

    setTimeout(() => {
        luffy.classList.remove('jump');
    }, 500);
}

const loop = setInterval(() => {

    console.log('loop')

    const bombPosition = bomb.offsetLeft;
    const barcoPosition = barco.offsetLeft;
    const luffyPosition = +window.getComputedStyle(luffy).bottom.replace('px', '');

        if (bombPosition < 85 && bombPosition > -50 && luffyPosition < 70) {

           bomb.style.animation = 'none';
           bomb.style.left = `${bombPosition}px`;

           luffy.style.animation = 'none';
           luffy.style.bottom = `${luffyPosition}px`;

           barco.style.animation = 'none';
           barco.style.left = `${barcoPosition}px`;

           luffy.src = './imagens/gameover.gif';
           luffy.style.width = '130px'
           luffy.style.bottom = '20px'
           luffy.style.marginLeft = '20px'

           clearInterval(loop);

            const gameOver = document.createElement('img');
            gameOver.src = './imagens/over.gif';
            gameOver.classList.add('over');
            document.body.appendChild(gameOver);

            const restartBtn = document.createElement('button');
            restartBtn.textContent = 'Reiniciar Jogo';
            restartBtn.classList.add('restart-btn');
            document.body.appendChild(restartBtn);
        
            restartBtn.addEventListener('click', () => {
              location.reload();
            });
        
          }
        
          count++;
          counter.textContent = `Luffy correu ${count/10} metros sem bater nos obstáculos`;
        
        }, 10);  

document.addEventListener('keydown', jump);