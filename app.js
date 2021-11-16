const scoreOne = document.querySelector('#scoreOne');
const scoreTwo = document.querySelector('#scoreTwo');
const one = document.querySelector('#one');
const two = document.querySelector('#two');
const reset = document.querySelector('#reset');
const target = document.querySelector('#target');


let currentOne = 0;
let currentTwo = 0;
let winning = 0;
let end = false;

function setGoal(){
    winning = target.value;
    return winning;
}

one.addEventListener("click", function () {
    if (!end) {
        currentOne += 1;
        scoreOne.textContent = currentOne;
        if (currentOne+currentTwo == winning) {
            end = true;
            alert("Game ended!");
        }
    } 
});

two.addEventListener("click", function () {
    if (!end) {
        currentTwo += 1;
        scoreTwo.textContent = currentTwo;
        if (currentOne+currentTwo == winning) {
            end = true;
            alert("Game ended!");
        }
    } 
});


reset.addEventListener("click",function(){
    currentOne = 0;
    currentTwo = 0;
   scoreOne.textContent = currentOne;
   scoreTwo.textContent = currentTwo;
   end=false; 
   winning =  0;
   target.value = target.options[0].value;
});



