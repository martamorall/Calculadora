let operando1;
let operando2;
let operacion;
let bCE = document.getElementById('ce');
let punto=document.getElementById('punto');

let resultado = document.getElementById('resultado');
let reset = document.getElementById('reset');
let suma = document.getElementById('suma');
let resta = document.getElementById('resta');
let multiplicacion = document.getElementById('multiplicacion');
let division = document.getElementById('division');
let igual = document.getElementById('igual');
let uno = document.getElementById('uno');
let dos = document.getElementById('dos');
let tres = document.getElementById('tres');
let cuatro = document.getElementById('cuatro');
let cinco = document.getElementById('cinco');
let seis = document.getElementById('seis');
let siete = document.getElementById('siete');
let ocho = document.getElementById('ocho');
let nueve = document.getElementById('nueve');
let cero = document.getElementById('cero');

//Eventos click para cada botón
uno.onclick = function (e) {
    resultado.innerHTML = resultado.innerHTML + "1";
}
dos.onclick = function (e) {
    resultado.innerHTML = resultado.innerHTML + "2";
}
tres.onclick = function (e) {
    resultado.innerHTML = resultado.innerHTML + "3";
}
cuatro.onclick = function (e) {
    resultado.innerHTML = resultado.innerHTML + "4";
}
cinco.onclick = function (e) {
    resultado.innerHTML = resultado.innerHTML + "5";
}
seis.onclick = function (e) {
    resultado.innerHTML = resultado.innerHTML + "6";
}
siete.onclick = function (e) {
    resultado.innerHTML = resultado.innerHTML + "7";
}
ocho.onclick = function (e) {
    resultado.innerHTML = resultado.innerHTML + "8";
}
nueve.onclick = function (e) {
    resultado.innerHTML = resultado.innerHTML + "9";
}
cero.onclick = function (e) {
    resultado.innerHTML = resultado.innerHTML + "0";
}
punto.onclick=function(e){
    resultado.innerHTML=resultado.innerHTML+".";
}
reset.onclick = function (e) {
    resetear();
}
suma.onclick = function (e) {
    operando1 = resultado.innerHTML;
    operacion = "+";
    limpiar();
}
resta.onclick = function (e) {
    operando1 = resultado.innerHTML;
    operacion = "-";
    limpiar();
}
multiplicacion.onclick = function (e) {
    operando1 = resultado.innerHTML;
    operacion = "*";
    limpiar();
}
division.onclick = function (e) {
    operando1 = resultado.innerHTML;
    operacion = "/";
    limpiar();

}
igual.onclick = function (e) {
    operando2 = resultado.innerHTML;
    resolver();
}
//Evento para el botón CE que pone a 0 el resultado 
bCE.onclick = function (evt) {
    resultado.innerHTML = "";
    if (typeof (operando1) == "number") {
        resultado.innerHTML =  resultado.innerHTML+0;
    } else if (typeof (operando2) == "number"){
        resultado.innerHTML = resultado.innerHTML+operando1;
    }else{
        resultado.innerHTML= resultado.innerHTML+0; 
    }
    
}

//Limpia el resultado 
function limpiar() {
    resultado.innerHTML = "";
}

//Pone a 0 los operandos y limpia el resultado
function resetear() {
    resultado.innerHTML = "";
    operando1 = 0;
    operando2 = 0;
    operacion = "";
}

//Resuelve la operación según el operador elegido
function resolver() {
    let result = 0;
    switch (operacion) {
        case "+":
            result = parseFloat(operando1) + parseFloat(operando2);
            break;

        case "-":
            result = parseFloat(operando1) - parseFloat(operando2);
            break;

        case "*":
            result = parseFloat(operando1) * parseFloat(operando2);
            break;

        case "/":
            result = parseFloat(operando1) / parseFloat(operando2);
            break;
    }
    resetear();
    resultado.innerHTML = result;
}