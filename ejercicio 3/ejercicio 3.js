//Ejercicio 3:
//Modifique el ejercicio 6 de la práctica de repaso para que utilice una función llamada esPrimo
//que tome como argumento un número entero y retorne true si el número es primo y falso en
//caso contrario.


//numero 29
function numprimo(primo) {
    return esPrimo;
}
const primo= 29;
let esPrimo= true;
let contador = 2;

        if(primo == 0 || primo == 1 || primo == 4){
        esPrimo = false;
        }
        while(contador < primo){
            if(primo % contador == 0){
                esPrimo = false;
            }
            contador++
        }

        if (esPrimo == true){
            console.log('El número es primo');
        }else{
            console.log('El número es compuesto');
        }