let mainContainer = document.querySelector(".mainContainer")
let firstColumn = document.querySelector(".firstColumn")
let secondColumn = document.querySelector(".secondColumn")
let thirdColumn = document.querySelector(".thirdColumn")
let fourthColumn = document.querySelector(".fourthColumn")
let fifthColumn = document.querySelector(".fifthColumn")
let sixthColumn = document.querySelector(".sixthColumn")
let seventhColumn = document.querySelector(".seventhColumn")
let eightColumn = document.querySelector(".eightColumn")
let ninthColumn = document.querySelector(".ninthColumn")
let restartButton = document.querySelector(".restartButton")
let invalidPosition = document.querySelector(".invalidPosition")
let winningStatement = document.querySelector(".winningStatement")

let columns = [firstColumn, secondColumn, thirdColumn
    , fourthColumn, fifthColumn, sixthColumn, seventhColumn, 
    eightColumn, ninthColumn];

let count = 0;
function getSymbol() {
    return count == 0 ? "X" : "O";
}

function resetCount() {
    count++
    count = count == 2? 0 : count;
}

columns.forEach(element => {
       element.addEventListener("click",()=> {
        if(element.innerHTML == ""){
            element.innerHTML = getSymbol();
            invalidPosition.innerHTML = ""
            checkWinning();
            resetCount();
        } else {
            invalidPosition.innerHTML = "Invalid position!"
        }
    })
});

function restartGame(){
    location.reload();
}

restartButton.addEventListener("click", restartGame)

function checkWinning(){
    if(firstColumn.innerHTML == secondColumn.innerHTML && secondColumn.innerHTML == thirdColumn.innerHTML && firstColumn.innerHTML != ""){
        winningStatement.innerHTML = `${getSymbol()} congratulations, you won!`
    } 
    if (fourthColumn.innerHTML == fifthColumn.innerHTML && fifthColumn.innerHTML == sixthColumn.innerHTML && fourthColumn.innerHTML != ""){
        winningStatement.innerHTML = `${getSymbol()} congratulations, you won!`
    }
    if (seventhColumn.innerHTML == eightColumn.innerHTML && eightColumn.innerHTML == ninthColumn.innerHTML && seventhColumn.innerHTML != ""){
         winningStatement.innerHTML = `${getSymbol()} congratulations, you won!`
    }
    if (firstColumn.innerHTML == fourthColumn.innerHTML && fourthColumn.innerHTML ==  seventhColumn.innerHTML && firstColumn.innerHTML != ""){
         winningStatement.innerHTML = `${getSymbol()} congratulations, you won!`
    }
    if (secondColumn.innerHTML == fifthColumn.innerHTML && fifthColumn.innerHTML == eightColumn.innerHTML && secondColumn.innerHTML != ""){
        winningStatement.innerHTML = `${getSymbol()} congratulations, you won!`
    }
    if (thirdColumn.innerHTML == sixthColumn.innerHTML && sixthColumn.innerHTML == ninthColumn.innerHTML && thirdColumn.innerHTML != ""){
        winningStatement.innerHTML = `${getSymbol()} congratulations, you won!`
    }
    if (firstColumn.innerHTML == fifthColumn.innerHTML && fifthColumn.innerHTML == ninthColumn.innerHTML && firstColumn.innerHTML != ""){
        winningStatement.innerHTML = `${getSymbol()} congratulations, you won!`
    }
    if (thirdColumn.innerHTML == fifthColumn.innerHTML && fifthColumn.innerHTML == seventhColumn.innerHTML && thirdColumn.innerHTML != ""){
        winningStatement.innerHTML = `${getSymbol()} congratulations, you won!`
    }
    if (firstColumn.innerHTML == "" && secondColumn.innerHTML == "" && thirdColumn.innerHTML == "" && fourthColumn.innerHTML == "" 
    && fifthColumn.innerHTML == "" && sixthColumn.innerHTML == "" && seventhColumn.innerHTML.innerHTML == "" && eightColumn.innerHTML == "" &&
    ninthColumn.innerHTML == "") {
        winningStatement.innerHTML = "It's a tie!"
    }
    }
