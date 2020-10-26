let cells = document.querySelectorAll('.row > div');

let message = document.getElementById('message');

message.textContent = 'Player 1 turn';

let player1 = true;
let player2 = false;
let isGameOn = true;

//Add event lister to all the 9 cells.
for (let i = 0; i < cells.length; i++) {
    cells[i].addEventListener('click', cellClicked);
}

let counter = 0;

//Function which runs on click in cell.
//Function for game controls.
function cellClicked () {
    if(!isGameOn) { //reload game if someone wins.
        location.reload();
    }

    let eventText = event.target.textContent;
    
    if (player2 == true && eventText != 'X' && eventText!='O') {
        event.target.textContent = 'O';
        player2 = false;
        player1 = true;
        message.textContent = 'Player 1 turn';
        counter++;

        checkWinner('O');
    }
    else if(player1 == true && eventText != 'X' && eventText!='O') {
        event.target.textContent = 'X';
        player1 = false;
        player2 = true;
        message.textContent = 'Player 2 turn';
        counter++;

        checkWinner('X');

        if(counter == 9 && isGameOn == true) {
            message.textContent = 'Game Draw';

            isGameOn = false;
        }
    }

}

//Function to check if someone wins.
function checkWinner (val) {
    if(cells[0].textContent == val && cells[1].textContent == val && cells[2].textContent == val) {
        if(val == 'X')
            message.textContent = "Player 1 wins the game";
        else
            message.textContent = "Player 2 wins the game";

        isGameOn = false;
    }

    if(cells[3].textContent == val && cells[4].textContent == val && cells[5].textContent == val) {
        if(val == 'X')
        message.textContent = "Player 1 wins the game";
        else
        message.textContent = "Player 2 wins the game";

        isGameOn = false;   
    }

    if(cells[6].textContent == val && cells[7].textContent == val && cells[8].textContent == val) {
        if(val == 'X')
        message.textContent = "Player 1 wins the game";
        else
        message.textContent = "Player 2 wins the game";

        isGameOn = false;    
    }

    if(cells[0].textContent == val && cells[3].textContent == val && cells[6].textContent == val) {
        if(val == 'X')
            message.textContent = "Player 1 wins the game";
        else
            message.textContent = "Player 2 wins the game";

        isGameOn = false;   
    }

    if(cells[1].textContent == val && cells[4].textContent == val && cells[7].textContent == val) {
        if(val == 'X')
        message.textContent = "Player 1 wins the game";
        else
        message.textContent = "Player 2 wins the game";

        isGameOn = false;
    }

    if(cells[2].textContent == val && cells[5].textContent == val && cells[8].textContent == val) {
        if(val == 'X')
        message.textContent = "Player 1 wins the game";
        else
        message.textContent = "Player 2 wins the game";

        isGameOn = false;
    }

    if(cells[0].textContent == val && cells[4].textContent == val && cells[8].textContent == val) {
        if(val == 'X')
        message.textContent = "Player 1 wins the game";
        else
        message.textContent = "Player 2 wins the game";

        isGameOn = false;
    }

    if(cells[2].textContent == val && cells[4].textContent == val && cells[6].textContent == val) {
        if(val == 'X')
        message.textContent = "Player 1 wins the game";
        else
        message.textContent = "Player 2 wins the game";

        isGameOn = false;
    }
}
