// const num1 = document.getElementById('1');
// const num2 = document.getElementById('2');
// const num3 = document.getElementById('3');
// const num4 = document.getElementById('4');
// const num5 = document.getElementById('5');
// const num6 = document.getElementById('6');
// const num7 = document.getElementById('7');
// const num8 = document.getElementById('8');
// const num9 = document.getElementById('9');
// const num0 = document.getElementById('0');

// const plus = document.getElementById('plus');
// const minus = document.getElementById('minus');
// const multiply = document.getElementById('multiply');
// const divide = document.getElementById('divide');
// const equals = document.getElementById('equals');
// const clear = document.getElementById('clear');

// let currentValue = ''; // Start with an empty string

// function updateDisplay(value)
// {
//     document.getElementById('input-values').innerText = value;
// }

// num1.addEventListener('click', (e) =>
// {
//     currentValue += num1.innerText;
//     updateDisplay(currentValue);
// });

// num2.addEventListener('click', (e) =>
// {
//     currentValue += num2.innerText;
//     updateDisplay(currentValue);
// });

// num3.addEventListener('click', (e) =>
// {
//     currentValue += num3.innerText;
//     updateDisplay(currentValue);
// });

// num4.addEventListener('click', (e) =>
// {
//     currentValue += num4.innerText;
//     updateDisplay(currentValue);
// });

// num5.addEventListener('click', (e) =>
// {
//     currentValue += num5.innerText;
//     updateDisplay(currentValue);
// });

// num6.addEventListener('click', (e) =>
// {
//     currentValue += num6.innerText;
//     updateDisplay(currentValue);
// });

// num7.addEventListener('click', (e) =>
// {
//     currentValue += num7.innerText;
//     updateDisplay(currentValue);
// });

// num8.addEventListener('click', (e) =>
// {
//     currentValue += num8.innerText;
//     updateDisplay(currentValue);
// });

// num9.addEventListener('click', (e) =>
// {
//     currentValue += num9.innerText;
//     updateDisplay(currentValue);
// });

// num0.addEventListener('click', (e) =>
// {
//     currentValue += num0.innerText;
//     updateDisplay(currentValue);
// });


// let currentOperation = '';
// let firstOperand = '';

// function performCalculation()
// {
//     const secondOperand = currentValue;
//     switch (currentOperation)
//     {
//         case '+':
//             currentValue = String(Number(firstOperand) + Number(secondOperand));
//             break;
//         case '-':
//             currentValue = String(Number(firstOperand) - Number(secondOperand));
//             break;
//         case '*':
//             currentValue = String(Number(firstOperand) * Number(secondOperand));
//             break;
//         case '/':
//             currentValue = String(Number(firstOperand) / Number(secondOperand));
//             break;
//         default:
//             return;
//     }
//     updateDisplay(currentValue);
//     currentOperation = '';
//     firstOperand = '';
// }


// plus.addEventListener('click', (e) =>
// {
//     firstOperand = currentValue;
//     currentOperation = '+';
//     currentValue = '';
//     updateDisplay(currentValue);
// });

// minus.addEventListener('click', (e) =>
// {
//     firstOperand = currentValue;
//     currentOperation = '-';
//     currentValue = '';
//     updateDisplay(currentValue);
// });

// multiply.addEventListener('click', (e) =>
// {
//     firstOperand = currentValue;
//     currentOperation = '*';
//     currentValue = '';
//     updateDisplay(currentValue);
// });

// divide.addEventListener('click', (e) =>
// {
//     firstOperand = currentValue;
//     currentOperation = '/';
//     currentValue = '';
//     updateDisplay(currentValue);
// });

// equals.addEventListener('click', (e) =>
// {
//     performCalculation();
// });

// clear.addEventListener('click', (e) =>
// {
//     currentValue = '';
//     firstOperand = '';
//     currentOperation = '';
//     updateDisplay(currentValue);
// });


const num1 = document.getElementById('1');
const num2 = document.getElementById('2');
const num3 = document.getElementById('3');
const num4 = document.getElementById('4');
const num5 = document.getElementById('5');
const num6 = document.getElementById('6');
const num7 = document.getElementById('7');
const num8 = document.getElementById('8');
const num9 = document.getElementById('9');
const num0 = document.getElementById('0');

const plus = document.getElementById('plus');
const minus = document.getElementById('minus');
const multiply = document.getElementById('multiply');
const divide = document.getElementById('divide');
const equals = document.getElementById('equals');
const clear = document.getElementById('clear');
let currentValue = '';

function updateValue(val)
{
    document.getElementById('input-values').innerText = currentValue;
}

num1.addEventListener('click', (e) =>
{
    currentValue += num1.innerText;
    updateValue(currentValue);
});


num2.addEventListener('click', (e) =>
{
    currentValue += num2.innerText;
    updateValue(currentValue);
});

num3.addEventListener('click', (e) =>
{
    currentValue += num3.innerText;
    updateValue(currentValue);
});

num4.addEventListener('click', (e) =>
{
    currentValue += num4.innerText;
    updateValue(currentValue);
});
num5.addEventListener('click', (e) =>
{
    currentValue += num5.innerText;
    updateValue(currentValue);
});
num6.addEventListener('click', (e) =>
{
    currentValue += num6.innerText;
    updateValue(currentValue);
});

num7.addEventListener('click', (e) =>
{
    currentValue += num7.innerText;
    updateValue(currentValue);
});
num8.addEventListener('click', (e) =>
{
    currentValue += num8.innerText;
    updateValue(currentValue);
});
num9.addEventListener('click', (e) =>
{
    currentValue += num9.innerText;
    updateValue(currentValue);
});
num0.addEventListener('click', (e) =>
{
    currentValue += num0.innerText;
    updateValue(currentValue);
});


let currentOperation = '';
let firstOperand = '';


function performCalculation()
{

    let secondOperand = currentValue;

    switch (currentOperation)
    {
        case '+':
            currentValue = String(Number(firstOperand) + Number(secondOperand));
            break;

        case '-':
            currentValue = String(Number(firstOperand) - Number(secondOperand));

            break;

        case '*':
            currentValue = String(Number(firstOperand) * Number(secondOperand));
            break;
        case '/':
            currentValue = String(Number(firstOperand) / Number(secondOperand));
            break;
        default:
            return;
    }

    updateValue(currentValue);
    currentOperation = '';
    firstOperand = '';

}
plus.addEventListener('click', (e) =>
{
    firstOperand = currentValue;
    currentOperation = '+';
    currentValue = '';
    updateValue(currentValue);
});
minus.addEventListener('click', (e) =>
{
    firstOperand = currentValue;
    currentOperation = '-';
    currentValue = '';
    updateValue(currentValue);
});
multiply.addEventListener('click', (e) =>
{
    firstOperand = currentValue;
    currentOperation = '*';
    currentValue = '';
    updateValue(currentValue);
});
divide.addEventListener('click', (e) =>
{
    firstOperand = currentValue;
    currentOperation = '/';
    currentValue = '';
    updateValue(currentValue);
});
equals.addEventListener('click', (e) =>
{
    performCalculation();
});
clear.addEventListener('click', (e) =>
{
    currentValue = '';
    firstOperand = '';
    currentOperation = '';
    updateValue(currentValue);
});