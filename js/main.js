/*// Tomador de pedidos para delivery.

console.log("Toma pedidos");
        let autor = "Sebastián Scandallo";
        let curso = "JavaScript";
        let SPACE = " ";
        let datosAutor = autor + SPACE + curso
        console.log(datosAutor);

        alert("Tomemos una nueva orden !");
        const numTel = prompt("Número telefónico ?");
        const tel = prompt("Móvil o fijo ?");
        let domic = prompt("Domicilio ?");
        let vivienda = prompt("Casa o dpto. ?");
        let producto = prompt("Que necesita ?");
        let precioProducto = prompt("Ingresar precio del producto");
        let precioAdicional = prompt("Ingresar precio sihay algun adicional.");
        let precioEnvio = prompt("Valor del envio ?");
        let total = parseInt(precioProducto) + parseInt(precioAdicional) + parseInt(precioEnvio);
        alert("El total es" + SPACE + total);
        alert("Consultar si precisa cambio !?");
        let cliente = numTel + "<br>" + tel + "<br>" + domic + "<br>" + vivienda;
        let pagaCon = prompt("Paga con ?");
        let vuelto = pagaCon - total;
        alert("Le enviamos $ " + vuelto + SPACE + "de vuelto. GRACIAS");
        console.log("Datos del cliente: " + cliente);
        console.log("Producto: " + producto);
        console.log("Total del pedido: " + total);
        console.log("vuelto: $ " + vuelto);
        document.write( cliente + "<br>" + producto + "<br>" + total + "<br>" + vuelto);
        
//Sorteo:
        let quiereSorteo = prompt("Desea participar de un sorteo? 1 = SI - 2 = NO");
        if (quiereSorteo == 1) {
            alert("Bien! ya estas participando con los últimos 3 números de tu DNI");
        }else if (quiereSorteo == 2) {
            alert("OK! seguro la próxima");
        }else if (quiereSorteo == "") {
            alert("Perdón!no entendí la respuesta");
        }
        else {
            alert("LA RESUESTA NO ES VÁLIDA"); 
        }

// Top Ten Sabores
    let sabores = ('');
    for (let index = 0; index < 10; index++) {
        sabores += prompt('Ingresa tus top 10 de sabores 🍦')+'\n';
    } alert(sabores);

// Podés adivinar cuál es el sabor mas vendido ?
    let sabor = prompt('Podés adivinar cuál es el sabor mas vendido?');
    while (sabor != 'frutilla') {
        sabor = prompt('Ingresar nombre');
    } alert('Exacto!, es: FRUTILLA 🍓');

// Descubrí el top 5 de los mas vendidos.
let entrada = prompt('Descubre el top 5 de los sabores mas vendidos. (Coloca FIN para terminar la vista.) 1 a 4');
while (entrada != 'FIN') {
    switch (entrada) {
        case '1':
            alert('Frurilla');
            break;
        case '2':
            alert('Limón');
            break;
        case '3':
            alert('Dulce de Leche');
            break;
        case '4':
            alert('Chocolate');
            break;
        case '5':
            alert('Dulce de Leche Granizado');
            break;
    }
    entrada = prompt('Seleccionar productos de 1 a 5');
}*/

//fuction - Ingrese su sabor preferido.
/*function sabor() {
    return prompt('🤔 Cuál es su sabor favorito ?');
}

function procesamiento(valor) {
    return "Su sabor elegido es: " + valor.toUpperCase() + " 😋"
}

function salida(valor) {
    alert(valor);
}

salida(procesamiento(sabor())); // Instrucciones Agrupadas*/

// Redondeo
/*function precio(valor) {
    return 'Disculpe pero no contamos con monedas, su importe: $' + Math.round(valor)
}
for(let index = 0; index < 5; index++) {
    let entrada = prompt('Ingresar Número');
    alert(precio(entrada));
    break;
}

// Operatorias Matemáticas:
const pi = 3.14
function calculadora(numero1, numero2, operacion) {
    switch (operacion) {
        case "+":
            return numero1 + numero2;
            break;
        case "-":
            return numero1 - numero2;
            break;
        case "*":
            return numero1 * numero2;
            break;
        case "/":
            return numero1 / numero2;
            break;
        default:
            return 0;
            break;
    }
}
console.log(calculadora(0, 0, "+"));


//Conocer precio sin IVA y valor del IVA del precio ingresado.
let iva21 = prompt('Ingrese tipo de alícuota: 21 0 10.5 ?');
const IVA = ((iva21 / 100) + 1);
const precioSinIva = (final) => final / IVA;
const valorIVA = (masIva) => masIva * (IVA - 1);
let seleccion = prompt("Ingrese el precio FINAL e indique que desea conocer: \n 1 - Precio sin IVA \n 2 -  El importe del IVA");
let valor = prompt("VALOR");
switch (seleccion) {
    case "1":
        alert(precioSinIva(valor));
        break;
    case "2":
        alert(valorIVA(valor));
        break;
    default:
        break;
}*/

//----------Desafío: Incorporar Arrays--------------
/*class Tienda{
    constructor(nombreFantasia, direccion, propietario, rubro){
        this.nombre = nombreFantasia;
        this.direccion = direccion;
        this.propietario = propietario;
        this.rubro = rubro;
    }
    estaAbierto(hora){
        if (((hora  >= 8) && (hora  <= 12))||((hora  >= 15) && (hora  <= 19))) {
            return true;
        }
        return false;
    }
    
    esPropietario(nombre){
        return this.propietario == nombre;
    }

    transferirDinero(valor){
        if((this.presupuesto > 0)&&(valor < this.presupuesto)){
            this.presupuesto -= valor;
            return valor
        }else{
            return 0;
        }
    }
}
const trevi1 = new Tienda("Trevi Gelatto", "Córdoba 419 PB", "Juan Lopez","Heladería");
console.log(trevi1)
const trevi2 = new Tienda("Trevi Gelatto", "Alameda de la F. 435", "Charly Fo","Heladería");
console.log(trevi2)
for (let index = 0; index < 2 ; index++) {
    // Horario ?
    let entrada = parseInt(prompt("INGRESAR HORA EN PUNTO"));
    if(trevi1.estaAbierto(entrada)){
        alert("LA TIENDA ESTA ABIERTA A LAS "+entrada)
    }else{
        alert("LA TIENDA ESTA CERRADA A LAS "+entrada)
    }
}

//
for (let index = 0; index < 2 ; index++) {
    let entrada = prompt("INGRESAR NOMBRE DE PROPITARIO");
if (trevi1.esPropietario(entrada)){
    alert(entrada + " ES PROPIETARIO DE LA TIENDA " + trevi1.nombre);
    }
if (trevi2.esPropietario(entrada)){
    alert(entrada + " ES PROPIETARIO DE LA TIENDA " + trevi2.nombre);
    }
}

//
for (let index = 0; index < 2; index++) {
    let entrada = parseFloat(prompt("INGRESAR MONTO"));
    if (trevi1.transferirDinero(entrada)){
        alert("EL CLIENTE " + trevi1.nombre+ " TE PUEDE PAGAR "+entrada);
    }
    if (trevi2.transferirDinero(entrada)){
        alert("EL CLIENTE " + trevi2.nombre+ " TE PUEDE PAGAR "+entrada);
    }
}

//-------------------
let entrada = prompt("INGRESAR SABOR (ESC fin)");
const sabores = [];
while (entrada != 'ESC') {
    sabores.push(entrada);
    entrada = prompt("INGRESAR SABOR");
}
for (let index = 0; index < sabores.length; index++) {
    alert("POSICION " + index + " SABOR " + sabores[index]);
}

//
class cliente {
    constructor(nombre, barrio, edad, pagaEfectivo) {
        this.nombre = nombre;
        this.barrio = barrio;
        this.edad = edad;
        this.pagaEfectivo = pagaEfectivo;
    }
}
const clientes = [];
clientes.push(new cliente("JUAN", 1 , 30, true));
clientes.push(new cliente("CARLOS", 2 , 18, false));
clientes.push(new cliente("JAVIER", 5 , 22, true));
clientes.push(new cliente("DARIO", 1 , 55, false));
clientes.push(new cliente("MARIA", 9 , 14, true));
console.log(clientes);

//
function buscarCliente(barrio, cliente){
    return barrio.find(objeto => objeto.nombre === cliente.toUpperCase());
}
for (let index = 0; index < 3; index++) {
    let busqueda = buscarCliente(clientes, prompt('INGRESAR NOMBRE DE cliente'));
    if(busqueda != undefined){
        alert('cliente '+busqueda.nombre+' barrio '+busqueda.barrio+' EDAD '+busqueda.edad);
    }else{
        alert('NO EXISTE cliente CON ESE NOMBRE');
    }
}*/

// ----------Primera entrega del Proyecto Final-------------

//-----
/*class Helados {
    constructor(nombre, precio, sabores, combo) {
        this.nombre = nombre;
        this.precio = parseFloat(precio);
        this.sabores = sabores;
        this.combo = parseInt(combo);
    }
}
const helados = [];
helados.push(new Helados("Copa Oreo", 350, ['Helado', 'Galletita', 'Salsa'], 1));
helados.push(new Helados("Batido al Agua", 250, ['Helado', 'Agua', 'Galletita'], 0));
helados.push(new Helados("Smoothie", 350, ['Helado', 'Leche', 'Salsa'], 2));
helados.push(new Helados("Cuarto full", 450, ['Helado', 'Topping', 'Salsa'], 5));
helados.push(new Helados("Lemonchamp", 550, ['Helado de limón', 'Espumante'], 7));
localStorage.setItem('helados', JSON.stringify(helados));


//------
let almacenadas = localStorage.getItem('helados');
if (almacenadas != null) {
    let array = JSON.parse(almacenadas);
    let salida = 'SELECCIONAR POSTRE \n';
    for (let index = 0; index < array.length; index++) {
        salida += index + ' -> ' + array[index].nombre + ' ' + array[index].sabores + ' $ ' + array[index].precio + '\n';
    }
    alert(salida);
    let eleccion = parseInt(prompt('INGRESAR POSTRE'));
    if ((eleccion >= 0) && (eleccion < array.length)) {
        alert("POSTRE SELECCIONADO " + array[eleccion].nombre)
    } else {
        alert("ERROR DE SELECCION");
    }
}

console.log(helados)*/

// -------DOM-------
//CREANDO EL BOTÓN DESDE JS
const btnSabores = document.createElement("button");
//ASIGNAR ID AL BOTÓN
btnSabores.id = 'btnSabores';
//ASIGNAR EL INTERIOR DEL BOTÓN
btnSabores.innerHTML = 'SABORES';
//ESCUCHAR EL EVENTO CLICK
btnSabores.addEventListener('click', function () {
        const h3 = document.createElement('h3');
    h3.innerHTML = 'FRUTILLA </br> ANANA </br> LIMON </br> CHOCOLATE </br> DULCE DE LECHE </br> VAINILLA </br> TRAMONTANA';
    document.body.appendChild(h3);
    Swal.fire('Estos son los mejores sabores')

})
//AGREGAR EL BOTON AL DOM
document.body.appendChild(btnSabores);

// --------------------------------------------------
// Variables
const productos = [
    {
        id:1,
        name : "Cucu 1",
        img : "./images/cucu1.jpg"
    },
    {
        id:2,
        name : "Cucu 2",
        img : "./images/cucu2.jpg"
    },
    {
        id:3,
        name : "Cuarto",
        img : "./images/cuarto.jpg"
    },
    {
        id:4,
        name : "Cucu 1 Sin TACC",
        img : "./images/cucu1.jpg"
    },
    {
        id:5,
        name : "Cucu 2 sin TACC",
        img : "./images/cucu2.jpg"
    },
]

const containerHelados = document.querySelector('.containerHelados');
console.log(containerHelados);
const listadoSaboresFav = document.querySelector('.listadoSaboresFav');
console.log(listadoSaboresFav);
const favoritos = [];

// Eventos
document.addEventListener('DOMContentLoaded', () => {
    mostrarHelados();
})

//Funciones
function mostrarHelados() {
    for (const producto of productos) {
        const divHelado = document.createElement('div');
        divHelado.classList.add('card');

        const imgHelado = document.createElement('img');
        imgHelado.classList.add('imagenHelado');
        imgHelado.src = producto.img;
        
        const tituloHelado = document.createElement('h2');
        tituloHelado.classList.add('tituloHelado');
        tituloHelado.textContent = producto.name

        const btnAgregar = document.createElement('button');
        btnAgregar.classList.add('btnFav');
        btnAgregar.textContent = "Agregar a favorito";
        btnAgregar.onclick = () => {
            agregarAFavorito(producto.id)
            Swal.fire('Ahora es tu favorito !!')
        };

        divHelado.appendChild(imgHelado);
        divHelado.appendChild(tituloHelado);
        divHelado.appendChild(btnAgregar);

        containerHelados.appendChild(divHelado);
    }
}

function agregarAFavorito(id) {
    const comidasEncontradas = productos.find(producto => producto.id === id);
    favoritos.push(comidasEncontradas)
    mostrarFavoritos(favoritos);
}

function mostrarFavoritos(arregloFavoritos){

    listadoSaboresFav.innerHTML = "";
    for (const producto of arregloFavoritos) {
        const divHelado = document.createElement('div');
        divHelado.classList.add('card');

        const imgHelado = document.createElement('img');
        imgHelado.classList.add('imagenHelado');
        imgHelado.src = producto.img;
        
        const tituloHelado = document.createElement('h2');
        tituloHelado.classList.add('tituloHelado');
        tituloHelado.textContent = producto.name

        divHelado.appendChild(imgHelado);
        divHelado.appendChild(tituloHelado);

        listadoSaboresFav.appendChild(divHelado);
    }
}

// -------------------
const usuario = {
    nombre: "Juan Perez",
    edad: 22
  }

const permiso = (usuario.edad >= 18) ? true : false
permiso ? alert("Puede pagar con tarjeta") : alert("Debe ser Mayor para abonar con tarjeta")


const registroPago = usuario.edad >= 18 && new Date()
console.log(registroPago)

//----------
const usuarioNuevo = null

console.log( usuario || "El usuario no existe" )
console.log( usuarioNuevo || "El usuario no existe" )

const carrito = JSON.parse(localStorage.getItem('carrito')) || [] // Simplificado

//---
const usuario1 = {
    nombre: "Ramon Dominguez",
    edad: 32,
    telefono: {
        cel: 113334444,
        casa: null,
        trabajo: 113325555
    }
}

const { nombre, telefono: {trabajo} } = usuario1
console.log(nombre)
console.log(trabajo)

//------
const item = {
    item_id: 100,
    product_name: "Helado en Pote 1kg",
    price_per_unit: 1200
}

const {
    item_id: id,
    product_name: producto,
    price_per_unit: precio
} = item

console.log(id)
console.log(producto)
console.log(precio)

//-----
const helado = {
    id: 10,
    nombre: "Pote de medio kilo",
    precio: 600
}

const desestructurar = (item) => {
    // desestructurando dentro del bloque
    const {id, nombre} = item
    console.log(id, nombre)
}
desestructurar(helado)

//---
const sabores = ["Frutilla", "Limon", "Chocolate", "Ananá"]

const [a, b, c, d] = sabores

console.log(b)
console.log(d)

//----
const saboresRicos = ["Frutilla", "Limon", "Chocolate", "Ananá"]

// spread ... del array
console.log(...saboresRicos)

//-----
const precios = [4, 77, 92, 10, 3, 28, 54, 11]
console.log( Math.max(...precios) )

//----- AJAX & Fetch

