const inputOne = document.querySelector('.inputOne');
const inputTwo = document.querySelector('.inputTwo');
const plusBtn = document.querySelector('.plus')
const minusBtn = document.querySelector('.minus')
const timesBtn = document.querySelector('.times')
const divideBtn = document.querySelector('.divide')
const resultBtn = document.querySelector('.resultBtn')
const resultElement = document.querySelector('.result')
const clear = document.querySelector('.clear')

let action = '+'

minusBtn.onclick = function(){
    action = '-'   
}

plusBtn.onclick = function(){
    action = '+'
}

timesBtn.onclick = function(){
    action = '*'
}

divideBtn.onclick = function(){
    action = '/'
}

function printResult(result){
    if(result<0){
        resultElement.style.color = 'red'
    }else{
        resultElement.style.color = 'white'
    }
    resultElement.textContent = result
}

resultBtn.onclick = function(){
    if(action==='+'){
        const otv = Number(inputOne.value) + Number(inputTwo.value)
        printResult(otv)
    }
    if(action ==='-'){
        const otv = Number(inputOne.value) - Number(inputTwo.value)
        printResult(otv)
    }
    if(action==='*'){
        const otv = Number(inputOne.value) * Number(inputTwo.value)
        printResult(otv)
    }
    if(action==='/'){
        const otv = Number(inputOne.value) / Number(inputTwo.value)
        printResult(otv)
        if(otv % 1 != 0){
            resultElement.style.color = 'lightgray'
        }else{
            resultElement.style.color = 'white'
        }
    }
}

clear.onclick = function(){
    resultElement.textContent = 0;
    inputOne.value = 0;
    inputTwo.value = 0;
    resultElement.style.color = 'white'
}







