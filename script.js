let resultado2 = document.getElementById("resultado2")
let resultado = document.getElementById("resultado")
let btn1 = document.getElementById("btn-num1")
let btn2 = document.getElementById("btn-num2")
let btn3 = document.getElementById("btn-num3")
let btn4 = document.getElementById("btn-num4")
let btn5 = document.getElementById("btn-num5")
let btn6 = document.getElementById("btn-num6")
let btn7 = document.getElementById("btn-num7")
let btn8 = document.getElementById("btn-num8")
let btn9 = document.getElementById("btn-num9")
let btn0 = document.getElementById("btn-num0")
let mas = document.getElementById("mas")
let menos = document.getElementById("menos")
let multi = document.getElementById("multiplicacion")
let divi = document.getElementById("division")
let calc = document.getElementById("calc")
let borrar = document.getElementById("borrar")
let numero1 = 0;
let numero2 = 0;
let operacion = "";
let total = 0;

btn1.onclick = () =>{resultado2.textContent = resultado2.textContent +"1"}
btn2.onclick = () =>{resultado2.textContent = resultado2.textContent +"2"}
btn3.onclick = () =>{resultado2.textContent = resultado2.textContent +"3"}
btn4.onclick = () =>{resultado2.textContent = resultado2.textContent +"4"}
btn5.onclick = () =>{resultado2.textContent = resultado2.textContent +"5"}
btn6.onclick = () =>{resultado2.textContent = resultado2.textContent +"6"}
btn7.onclick = () =>{resultado2.textContent = resultado2.textContent +"7"}
btn8.onclick = () =>{resultado2.textContent = resultado2.textContent +"8"}
btn9.onclick = () =>{resultado2.textContent = resultado2.textContent +"9"}
btn0.onclick = () =>{resultado2.textContent = resultado2.textContent +"0"}


function Limpiar(){
    resultado2.textContent = ""
    numero1 = 0;
    numero2 = 0;
    operacion = "";
    total = 0;
    resultado.textContent ="";
}

borrar.onclick = () =>{Limpiar()}

mas.onclick = () =>{
    numero1 = resultado2.textContent;
    resultado.textContent = `${numero1}+`
    operacion  = "+";
    resultado2.textContent = ""
}
menos.onclick = () =>{
    numero1 = resultado2.textContent;
    resultado.textContent = `${numero1}-`
    operacion  = "-";
    resultado2.textContent = ""
}
multi.onclick = () =>{
    numero1 = resultado2.textContent;
    resultado.textContent = `${numero1}*`
    operacion  = "*";
    resultado2.textContent = ""
}
divi.onclick = () =>{
    numero1 = resultado2.textContent;
    resultado.textContent = `${numero1}/`
    operacion  = "/";
    resultado2.textContent = ""
}

calc.onclick = () =>{
    numero2 = resultado2.textContent;
    Calcular();
}

function Calcular(){
    switch (operacion){
        case "+":
            total = parseFloat(numero1) + parseFloat(numero2)
            resultado2.textContent = total;
            resultado.textContent += numero2
            break;
        case "-":
            total = parseFloat(numero1) - parseFloat(numero2)
            resultado2.textContent = total;
            resultado.textContent += numero2
            break;
        case "/":
            total = parseFloat(numero1) / parseFloat(numero2)
            resultado2.textContent = total;
            resultado.textContent += numero2
            break;
        case "*":
            total = parseFloat(numero1) * parseFloat(numero2)
            resultado2.textContent = total;
            resultado.textContent += numero2
            break;       
    }
}