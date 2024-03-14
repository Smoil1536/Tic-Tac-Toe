var player = 'O';
var winner;

function Winner()
{
    const Buttons = document.querySelectorAll(".buttonclass");
    // Checking for the winner in board
    // ROWS
    if(Buttons[0].innerHTML === Buttons[1].innerHTML && Buttons[0].innerHTML === Buttons[2].innerHTML)
        return Buttons[0].innerHTML;
    else if(Buttons[3].innerHTML === Buttons[4].innerHTML && Buttons[3].innerHTML === Buttons[5].innerHTML)
        return Buttons[3].innerHTML;
    else if(Buttons[6].innerHTML === Buttons[7].innerHTML && Buttons[6].innerHTML === Buttons[8].innerHTML)
        return Buttons[6].innerHTML;

    // COLUMNS
    else if(Buttons[0].innerHTML === Buttons[3].innerHTML && Buttons[0].innerHTML === Buttons[6].innerHTML)
        return Buttons[0].innerHTML;
    else if(Buttons[1].innerHTML === Buttons[4].innerHTML && Buttons[1].innerHTML === Buttons[7].innerHTML)
        return Buttons[1].innerHTML;
    else if(Buttons[2].innerHTML === Buttons[5].innerHTML && Buttons[2].innerHTML === Buttons[8].innerHTML)
        return Buttons[2].innerHTML;
    
    // DIAGONALS
    else if(Buttons[2].innerHTML === Buttons[4].innerHTML && Buttons[2].innerHTML === Buttons[6].innerHTML)
        return Buttons[2].innerHTML;
    else if(Buttons[0].innerHTML === Buttons[4].innerHTML && Buttons[0].innerHTML === Buttons[8].innerHTML)
        return Buttons[0].innerHTML;
}

function Filled()
{
    let check = 1;
    // For checking if field and no one won !!
    const Buttons = document.querySelectorAll(".buttonclass");
    for(let i = 0; i < Buttons.length; i++)
    {
        if(Buttons[i].innerHTML != 'X' && Buttons[i].innerHTML != 'O')
            check = 0;
    }
    return check;
}

function Ending_text(str)
{
    // For displaying player won text and styling it
    const Container = document.getElementById("main-box");
    const Element = document.createElement("h1");

    Element.innerHTML = str+" player won !!";
    Element.style.color = "white";
    Element.style.fontSize = "xx-large" ;
    Element.style.textAlign = "center";

    Container.appendChild(Element);
}

function On_start()
{
    const Button = document.querySelectorAll(".buttonclass");
    for(let i = 0; i < Button.length; i++)
    {
        // Buttons being checked for clicks
        Button[i].onclick = function(){
            const node = this;
            node.innerHTML = player;
            node.disabled = true;
            
            
            // Checking and Declaring winner of the game
            winner = Winner();
            if(winner === 'X' || winner === 'O')
                Ending_text(player); 
            else if(Filled())
                Ending_text("No");

            // Changing player
            if(player === 'O')
                player = 'X';
            else
                player = 'O';
        }
    }
}
