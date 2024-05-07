
let num = parseFloat(prompt("digite um número (de 1 a 20)"))
let resultado = ""

for ( let forma = 1; forma <= 20; forma++) {
   
    resultado +=  " -> " + num + "x" + forma + " = " + (num * forma) + "\n"
    
}
alert("Resultado da Tabuada de " + num + ":\n\n" + resultado)