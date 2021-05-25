const buttons = document.querySelectorAll(".btn");
const buttonsArr = Array.from(buttons);
const calcLine = document.getElementById('calcLine')
const resultLine = document.getElementById('resultLine')
let calcLineDisplay = ""
let resultLineDisplay = ""
//console.log(buttons)

buttons.forEach((b) => {
    b.addEventListener("click", () => {
        calcLineDisplay += b.id;
        calcLine.innerText = calcLineDisplay
    })
})

function addDisplay(){

}