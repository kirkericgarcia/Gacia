function calc(){
    
    let operator = document.getElementById("operator").value;
    let firstNumber = document.getElementById("firstNumber").value;
    let secondNumber= document.getElementById("secondNumber").value;

    firstNumber = Number(firstNumber);
    secondNumber = Number(secondNumber);

    answer = document getElementById("answer);
    answer.style.color = "yellow"


switch(operator){
    
    case '+':
        answer.innerHTML = firstNumber + secondNumber;
        break;
     
    case '-':
        answer.innerHTML = firstNumber - secondNumber;
        break;

    case '*':
        answer.innerHTML = firstNumber * secondNumber;
        break;

    case '/':
       answer.innerHTML =firstNumber / secondNumber;
        break;

    default:
        answer.style.color = "red"
	document.getElementById("answer").innerHTML = "INCORRECT "    



}

}