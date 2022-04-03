const mostrarHTML = (empleados) => {
    console.log(empleados)
    const contenido = document.querySelector('#contenido');

    let html = '';

    empleados.forEach(empleado => {
        const {nombre, empresa, puesto} = empleado
    html += `
        <p>Empleado: ${nombre}</P>
        <p>Heladería: ${empresa}</P>
        <p>Cargo: ${puesto}</P>
        <pre>
            Trabajandos juntos para un mejor servicio.
        </pre>
    `;
});
 
contenido.innerHTML = html;    
};


const obtenerDatosArrayJson = () => {
    //console.log('obtener datos txt');

    fetch('js/data/datos.json')
    .then((respuesta) => {
        //console.log(respuesta);
        return respuesta.json();
    })
    .then((datos) => {
        //console.log(datos);
        mostrarHTML(datos);
    })
    .catch((err) => {
        console.log(err);
    });
};

const btnArrayJson = document.querySelector("#btnArrayJson");

btnArrayJson.addEventListener("click", obtenerDatosArrayJson);