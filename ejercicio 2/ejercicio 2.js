//Ejercicio 2:
//Modifique el ejercicio 2 de la Práctica 2 para que utilice una función que reciba como
//argumento dos números enteros y retorne verdadero en caso de que el primer número sea
//divisible entre el segundo y falso en caso contrario.

function number(a,b){
    return a/b;
}

const resultado = number (60, 100);
console.log('El resultado es', resultado)

    if (resultado == 0){
        console.log('Verdadero✨');
    }else{
        console.log('Falso❌');
    }