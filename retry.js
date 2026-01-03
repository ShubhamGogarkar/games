const boxes = document.querySelectorAll('.box');
const butt = document.querySelector('.butt');
const tell = document.querySelector('.tell');
const info = document.querySelector('.info');
info.innerHTML = "Click 'Restart' to play again!\n\n\n    Start with Player X";
let curx = true;

const win =[ [0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6]];

const chk = () => {
    let filled = true;
    boxes.forEach((box) => {
        if(box.textContent === '') {
            filled = false;
        }
    });
    return filled;
}

const check = () => {
    for(let pattern of win) {
        let a = boxes[pattern[0]].textContent;
        let b = boxes[pattern[1]].textContent;
        let c = boxes[pattern[2]].textContent;
        if(a === '' || b === '' || c === '') {
            continue;
        }
        if(a === b && b === c) {
            tell.textContent = `Player ${a} has won!`;
            info.textContent = "Good Game!\n\nNo more moves left. Click 'Restart' to play again!\n\n\n";
            boxes.forEach((box) => { box.disabled = true; });
        }
    }
};

boxes.forEach((box) => {
    box.addEventListener('click', () => {
        if(curx) {
            box.textContent = 'X';
            info.textContent = "Player O's turn";
            curx = false;
        } else {
            box.textContent = 'O';
            info.textContent = "Player X's turn";
            curx = true;
        }
        box.disabled = true;
        check();
        if(tell.textContent === '') {
        if(chk()) {
            tell.textContent = "It's a draw!";
            info.textContent = "Good Game\n\nNo more moves left. Click 'Restart' to play again!\n\n\n";

        }}
    });

    

});
butt.addEventListener('click', () => {
  boxes.forEach(box => {
    box.textContent = '';
    box.disabled = false;
  });
  tell.textContent = '';
  curx = true;
    info.textContent = "Click 'Restart' to play again!\n\n\n    Start with Player X";
});
