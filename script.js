const buttons = document.querySelectorAll(".btn");
const calcLine = document.getElementById('calcLine')
const calcLine2 = document.getElementById('calcLine2')
const signLine = document.getElementById('signLine')
const resultLine = document.getElementById('resultLine')
let calcLineDisplay = ""
let calcLineDisplay2 = ""
let resultLineDisplay = ""
let oldResult = ""
let signLineDisplay = ""
let signPressed = ""
let signIsPressed = false
//console.log(buttons)

buttons.forEach((b) => {
    b.addEventListener("click", () => {
      // se ja tiver resultado na tela, joga ele para ser o primeiro valor e continuar a conta com um segundo valor
      if(resultLineDisplay !== ""){ 
        console.log("dentro do result" + oldResult)
        clearAll()
        calcLineDisplay = oldResult.toString()
        calcLine.innerText = calcLineDisplay
      }


      // botao para limpar ultimo valor digitado
      if(b.id == "clean"){ 
        if(calcLineDisplay2 !== ""){
          calcLineDisplay2 = calcLineDisplay2.slice(0, -1)
          calcLine2.innerText = calcLineDisplay2
        } else if(signIsPressed){
          signLine.innerText = ""
          signIsPressed = false
        }        
        else {
          if(calcLineDisplay !== ""){
            calcLineDisplay = calcLineDisplay.slice(0, -1)
            calcLine.innerText = calcLineDisplay
          }
        }
      }

        // add numbers to variables and display it
        if(signIsPressed){   // se tiver com operador adiciona segundo campo
            if(/^[0-9]$/gm.test(parseInt(b.value)) || b.value == "." || b.id == "sign"){
              console.log("2 = " + calcLineDisplay2)

              if(calcLineDisplay2.indexOf(".") == -1){    // só adiciona ponto se não existir  
                calcLineDisplay2 += b.value;
                calcLine2.innerText = calcLineDisplay2
              } else {
                if(b.value == "."){
                  calcLine2.innerText = calcLineDisplay2
                } else{
                  calcLineDisplay2 += b.value;
                  calcLine2.innerText = calcLineDisplay2
                }
              }
            }
        } else if(/^[0-9]$/gm.test(parseInt(b.value)) || b.value == "." || b.id == "sign"){ // adiciona primeiro campo
          console.log("1 = " + calcLineDisplay)
          if(b.id == "sign"){ // troca sinal
            if(calcLineDisplay.charAt(0) == "-"){
              calcLineDisplay = calcLineDisplay.substring(1, calcLineDisplay.length)
              calcLine.innerText = calcLineDisplay
            } else if(calcLineDisplay.charAt(0) !== "-"){
              calcLineDisplay = "-" + calcLineDisplay
              calcLine.innerText = calcLineDisplay
            }
          }// sign end

          if(calcLineDisplay.indexOf(".") == -1){          // só adiciona ponto se não existir
            calcLineDisplay += b.value;
            calcLine.innerText = calcLineDisplay
          } else {
            if(b.value == ".") {
              calcLine.innerText = calcLineDisplay
            } else {
              calcLineDisplay += b.value;
              calcLine.innerText = calcLineDisplay
            }
            
          }
        }
        //add sign
        if(/^minus|plus|multiply|divide$/gm.test(b.id)){
          if(calcLine.innerText !== ""){ // só adiciona a operacao se tiver sido digitado o primeiro numero
            signLineDisplay = b.value;
            signLine.innerText = signLineDisplay
            signIsPressed = true
        }}
        // resultado
        if(b.id == "result"){ 
            if(calcLineDisplay && calcLineDisplay2 && signIsPressed){
                resultLineDisplay = calc(Number(calcLineDisplay),Number(calcLineDisplay2),signLineDisplay)
                resultLine.innerText = resultLineDisplay
                oldResult = resultLineDisplay;
            }
        } // end if result
        if(b.id == "c"){
          clearAll()
        }
    }) // end event listener
}) // end buttons for each

function clearAll(){
  calcLineDisplay = ""
  calcLineDisplay2 = ""
  calcLine.innerText = ""
  calcLine2.innerText = ""
  signLine.innerText = ""
  resultLine.innerText = ""
  resultLineDisplay = ""
  signLineDisplay = ""
  signPressed = ""
  signIsPressed = false
}

// functions imported from another project that calculates on console/////
/////////////////////////////////////////////////////////////////////////

function calc(n1,n2, sign){
    if(sign == "+") return add(n1,n2)
    if(sign == "-") return subtract(n1,n2)
    if(sign == "*") return multiply(n1,n2)
    if(sign == "/") return divide(n1,n2)
}

function add (a,b) {
    let argsNumber = arguments.length;
    let i = 0;
    let result = 0
    while(i < argsNumber){
      result = result + arguments[i]
      i++
    }
    return result
  }
  
  function subtract (a,b) {
    let argsNumber = arguments.length;
    let i = 0;
    let result = 0
    while(i < argsNumber){
      if(i==0){
        result = result + arguments[i]
        i++
      } else {
        result = result - arguments[i]
        i++
        }
    }
    return result
  }
  
  function sum (a,b) {
      let sum = 0;
    for(let i =0; i < arguments.length; i++){
    arguments[i].forEach((n) => sum += n)
    }
    return sum
  }
  
  function multiply (a,b) {
    let argsNumber = arguments.length;
    let i = 0;
    let result = 0
    while(i < argsNumber){
      if(i==0){
        result = result + arguments[i]
        i++
      } else {
        result = result * arguments[i]
        i++
        }
    }
    return result
  }

  function divide (a,b) {
    let argsNumber = arguments.length;
    let i = 0;
    let result = 0
    while(i < argsNumber){
      if(i==0){
        result = result + arguments[i]
        i++
      } else {
        result = result / arguments[i]
        i++
        }
    }
    return result
  }
  
  function power(a, b) {
      return Math.pow(a,b);
  }
  
  function factorial(f) {
    let i = parseInt(f)
    let result = 0;
    for(let old = i; i > 0; i--){
      if(old==i){
        result = i;
      } else {
        result = result * i;
      }
    }  
    return (result > 0 ? result : 1)
  }