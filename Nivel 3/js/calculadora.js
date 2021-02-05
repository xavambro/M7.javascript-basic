//Añadimos el evento click a cada uno de los botones

number0.addEventListener('click',addElement,false);
number1.addEventListener('click',addElement,false);
number2.addEventListener('click',addElement,false);
number3.addEventListener('click',addElement,false);
number4.addEventListener('click',addElement,false);
number5.addEventListener('click',addElement,false);
number6.addEventListener('click',addElement,false);
number7.addEventListener('click',addElement,false);
number8.addEventListener('click',addElement,false);
number9.addEventListener('click',addElement,false);
separator.addEventListener('click',addElement,false);
add.addEventListener('click',addElement,false);
subtract.addEventListener('click',addElement,false);
divide.addEventListener('click',addElement,false);
multiply.addEventListener('click',addElement,false);
clean.addEventListener('click',reset,false);
result.addEventListener('click',calculate,false);


//Variables
const pantalla = document.getElementById("screen");
let previousElement;
let previousOperand='';
let operations = ['/','*','-','+','.'];

//Función que muestra la pantalla en blanco
function reset(){
    pantalla.innerHTML="";
}
//Función que añade cada elemento a la pantalla
function addElement(e){
    /* if(pantalla.innerText.length>19){
        pantalla.innerHTML = "Error, no caben tantos números en pantalla."
    }else{ */
        //Controlamos que no aparezcan mas de un operador seguido por pantalla
        if(operations.includes(previousElement)&&operations.includes(e.target.innerHTML)){
            return;
        }
        //Controlamos que no se pueda poner mas de un punto por operando
        if(previousOperand.includes('.')&&e.target.innerHTML=='.'){
            return;
        }
        pantalla.innerHTML += e.target.innerHTML;
        previousElement = e.target.innerHTML;
        //Sirve para controlar los operandos, si introducimos un operador reseteamos la variable previousOperand
        if(operations.includes(previousElement)){
            previousOperand='';
        }else{
            previousOperand += previousElement;

        }
        
    /* } */
    
}
//Evalua toda la operación
function calculate(){
    //Si antes de darle al igual hay un operador no se realiza la funcion
    if(operations.includes(previousElement)){
        return;
    }
    pantalla.innerHTML = eval(pantalla.innerHTML);
}

