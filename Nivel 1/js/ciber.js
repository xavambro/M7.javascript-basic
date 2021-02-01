//Ejercicio 1
console.log("Hola mundo!");

//Ejercicio 2
alert("Me llamo Xavi!");

//Ejercicio 3
var nom = "Xavi";
var cognom ="Ambrosio";
console.log(nom+" "+cognom);

//Ejercicio 4
var numeroUno=34;
var numeroDos =56;
console.log("La suma entre "+numeroUno+" y "+numeroDos+" es "+(numeroUno+numeroDos));

//Ejercicio 5
var nota_examen = 4.6;
if(nota_examen >= 5){
    alert("Has aprovado el examen con una nota de "+nota_examen);
}else{
    alert("Has suspendido el examen con una nota de "+nota_examen);
}

//Ejercicio 6
var frase="Tinc un cotxe de color blau";
var nuevaFrase = frase.replace('blau','verd');
//Utilizamos expresiones regulares para reemplazar todas las instancias de o por u's
var nuevaFraseLetras = frase.replace(/o/g,'u');
console.log(nuevaFrase);
console.log(nuevaFraseLetras);

//Ejercicio 7
var objectes = ['taula','cadira','ordinador','libreta'];
for(var i =0;i<objectes.length;i++){
    console.log("L'objecte "+objectes[i]+" està a la posició "+i);
}

//Ejercicio 8
function calculadora(operacio,valor1,valor2){
    if(operacio=='suma'){
        console.log(valor1+valor2);
    }else if(operacio =='resta'){
        console.log(valor1-valor2);
    }else if(operacio=="multiplicacio"){
        console.log(valor1*valor2);
    }

}

calculadora('multiplicacio',5,5);