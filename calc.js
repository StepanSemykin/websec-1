document.addEventListener('DOMContentLoaded', () => 
{
    const calcButton = document.querySelector('.button-calculate');
    if (calcButton) calcButton.addEventListener('click', calculate);
})

function getInputValues() 
{
    return {
        firstNum: parseFloat(document.getElementById("first-operator").value),
        secondNum: parseFloat(document.getElementById("second-operator").value),
        operation: document.getElementById("operation").value,
        resultOld: document.getElementById("result-new").textContent
    };
}

function setResult(resultNew, resultOld)
{
    document.querySelector('#result-new').innerHTML = resultNew;
    document.querySelector('#result-old').innerHTML = resultOld;
}

function calculate()
{
    const { firstNum, secondNum, operation, resultOld } = getInputValues();

    if (isNaN(firstNum)) 
    {
        alert("Ошибка: Число 1 не введено");
        return;
    }
    if (isNaN(secondNum))
    {
        alert("Ошибка: Число 2 не введено");
        return;
    }

    let result;
    switch (operation) 
    {
        case "+": 
            result = firstNum + secondNum; 
            break;
        case "-": 
            result = firstNum - secondNum; 
            break;
        case "×": 
            result = firstNum * secondNum; 
            break;
        case "÷" :
            if (Math.abs(secondNum) < Number.EPSILON)
            {
                alert("Ошибка: Деление на 0"); 
                return;
            } 
            result = firstNum / secondNum;   
            break; 
    } 
    
    let resultNew = `${firstNum} ${operation} ${secondNum} = ${result}`;

    setResult(resultNew, resultOld)  
}
