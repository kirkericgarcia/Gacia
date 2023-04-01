function calc(){
    
    let operator = document.getElementById("operator").value;
    let firstNumber = document.getElementById("firstNumber").value;
    let secondNumber= document.getElementById("secondNumber").value;

    firstNumber = Number(firstNumber);
    secondNumber = Number(secondNumber);

    let answer = document.getElementById("answer")
    answer.style.color = "yellow"

switch(operator){
     case '+':
        document.getElementById("answer").innerHTML = firstNumber + secondNumber;
        break;
    case '-':
        document.getElementById("answer").innerHTML = firstNumber - secondNumber;
        break;
    case '*':
        document.getElementById("answer").innerHTML = firstNumber * secondNumber;
        break;
    case '/':
        document.getElementById("answer").innerHTML =firstNumber / secondNumber;
        break;
    default:
        answer.style.color = "red"
	document.getElementById("answer").innerHTML = "INCORRECT "    



}

}
