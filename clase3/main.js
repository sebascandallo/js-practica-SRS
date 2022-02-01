//alert("clase3");

/*for (let i = 0; i <= 10; i+=1) {
    console.log(i);
    alert(i);
    document.write(i + "<br>");
}*/
//i++ se puede usar en lugar de i+=1

//let numero = parseInt(prompt("Ingrese un número"));

// tabla de multiplicar:

/*for(let x = 1; x<=10; x+=1) {
let res = numero * x;
document.write(numero + " * " + x + " = " + res + "<br>");
}*/

// par o impar
    /*for(let i=0; i<=10; i++) {
    if(i%2 == 0) {
        console.log("par");
    } else {
        console.log("impar");
    }
}*/

//turno puede ser para pedir sabores too
    /*for (let i = 1; i <= 20; i++) {
    // En cada repetición solicitamos un nombre.
    let ingresarNombre = prompt("Ingresar nombre");
    // Informamos el turno asignado usando el número de repetición (i).
    alert(" Turno  N° "+i+" Nombre: "+ingresarNombre);
    document.write(ingresarNombre);
}*/

    //Si la variable i es 5, no se interpreta la repetición
    /*for (let i = 1; i <= 10; i++) {
    if(i == 5){
        continue;
    }
    alert(i);
}*/

/*let entrada = prompt("Ingresar un dato");
//Repetimos con While hasta que el usuario ingresa "ESC"
while(entrada != "ESC" ){
    alert("El usuario ingresó "+ entrada);
    //Volvemos a solicitar un dato. En la próxima iteración se evalúa si no es ESC.
    entrada = prompt("Ingresar otro dato");
}*/

/*let entrada = prompt("Ingresar un nombre");
//Repetimos hasta que se ingresa "ESC"
while(entrada != "ESC" ){
   switch (entrada) {
       case "ANA":
            alert("HOLA ANA");
            break;
        case "JUAN":
            alert("HOLA JUAN");
            break;
       default:
           alert("¿QUIÉN SOS?")
           break;
   }
   entrada = prompt("Ingresar un nombre");
}
*/

// Metodos de pago
/*let metodoPago = prompt("Método de pago");
switch(metodoPago){
    case "efectivo":
        console.log("Pagaste con EFECTIVO");
        break;
    case "tarjeta":
        console.log("Pagaste con TARJETA");
        break;
    case "cheque":
        console.log("Pagaste en CHEQUE");
        break;
    default:
        console.log("no tiene forma de pagar");
        break;
}*/





