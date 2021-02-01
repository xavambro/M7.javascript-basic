//Añadimos el evento click a cada uno de los botones
document.getElementById("number0").addEventListener('click',function(){
    addElement("0");
},false);
document.getElementById("number1").addEventListener('click',function(){
    addElement("1");
},false);
document.getElementById("number2").addEventListener('click',function(){
    addElement("2");
},false);
document.getElementById("number3").addEventListener('click',function(){
    addElement("3");
},false);
document.getElementById("number4").addEventListener('click',function(){
    addElement("4");
},false);
document.getElementById("number5").addEventListener('click',function(){
    addElement("5");
},false);
document.getElementById("number6").addEventListener('click',function(){
    addElement("6");
},false);
document.getElementById("number7").addEventListener('click',function(){
    addElement("7");
},false);
document.getElementById("number8").addEventListener('click',function(){
    addElement("8");
},false);
document.getElementById("number9").addEventListener('click',function(){
    addElement("9");
},false);
document.getElementById("separator").addEventListener('click',function(){
    addElement(".");
},false);
document.getElementById("add").addEventListener('click',function(){
    addElement("+");
},false);
document.getElementById("subtract").addEventListener('click',function(){
    addElement("-");
},false);
document.getElementById("divide").addEventListener('click',function(){
    addElement("/");
},false);
document.getElementById("multiply").addEventListener('click',function(){
    addElement("*");
},false);
document.getElementById("reset").addEventListener('click',reset,false);
document.getElementById("result").addEventListener('click',calculate,false);

//Muestra la pantalla en blanco
function reset(){
    document.getElementById("screen").innerHTML="";
}
//Función que añade cada elemento a la pantalla
function addElement(ele){
    document.getElementById("screen").innerHTML += ele;
    console.log(ele);
}
//Evalua toda la operación
function calculate(){
    document.getElementById("screen").innerHTML = eval(document.getElementById("screen").innerHTML);
}