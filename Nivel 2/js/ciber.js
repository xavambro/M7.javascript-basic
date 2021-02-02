//Ejercicio 9
function calculadorav1(operacio,valor1,valor2){
    if(operacio=='suma'){
        console.log(valor1+valor2);
    }else if(operacio =='resta'){
        console.log(valor1-valor2);
    }else if(operacio=="multiplicacio"){
        console.log(valor1*valor2);
    }else if(operacio=='divisio'){
        if(valor2==0){
            console.log("El resultat es infinit.")
        }else{
            console.log(valor1/valor2);

        }
    }else{
        console.log("No has introduït una operació correcta.")
    }

}

console.log(calculadorav1('divisio',10,0));
console.log(calculadorav1('divisio',10,2));