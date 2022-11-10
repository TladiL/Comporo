let display = document.getElementById('display');

let buttons =
 Array.from(document.getElementsByClassName('button'));

var answer = 0.0000;
var ans = 'ans';

buttons.map(button => {
    button.addEventListener('click', (e) =>{
        switch(e.target.innerText){
            case 'C':
                display.innerText = ''; break;
                case '←':
                    if(display.innerText){
                        display.innerText = 
                        display.innerText.slice(0, -1);
                    } break;

                case '=':
                    try {
                        display.innerText = display.innerText + " = " + eval(display.innerText);
                    } catch {
                        display.innerText = 'Error!';
                    }
                    break;
            default:
                if (display.innerText == 'Error!'){
                    console.log(display.innerText);
                    display.innerText = '';
                }
                display.innerText += e.target.innerText;
        }
    });
});