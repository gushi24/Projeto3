function Multiplicar(){
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    document.getElementById("resultado").innerHTML = num1 * num2
}
function Dividir(){
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    document.getElementById("resultado").innerHTML = num1 / num2
}
function Somar(){
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    document.getElementById("resultado").innerHTML = num1 + num2
}
function Subtrair(){
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    document.getElementById("resultado").innerHTML = num1 - num2
}