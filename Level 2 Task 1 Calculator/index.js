let screen = document.getElementById('screen');
buttons = document.querySelectorAll('button');
let outputValue = '';
for (item of buttons) {
    item.addEventListener('click', (e) => {
        buttonValue = e.target.innerText;
        console.log('Button text is ',  buttonValue);
        if ( buttonValue == '*') {
           
            outputValue +=  buttonValue;
            screen.value = outputValue;
        }
        else if ( buttonValue == 'C') {
            outputValue = "";
            screen.value = outputValue;
        }
        else if ( buttonValue == '=') {
            screen.value = eval(outputValue);
        }
        else {
            outputValue +=  buttonValue;
            screen.value = outputValue;
        }

    })
}

