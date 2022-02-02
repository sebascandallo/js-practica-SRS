// Tomador de pedidos para delivery.

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
        
