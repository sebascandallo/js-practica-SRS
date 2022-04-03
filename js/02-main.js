const mostrarHTML = ({nombre, empresa, puesto}) => {
    const contenido = document.querySelector('#contenido');

    contenido.innerHTML = `
        <p>Empleado: ${nombre}</P>
        <p>Heladería: ${empresa}</P>
        <p>Cargo: ${puesto}</P>
        <pre>
            Trabajandos juntos para un mejor servicio.
        </pre>
    `;
};


const obtenerDatosJson = () => {
    //console.log('obtener datos txt');

    fetch('js/data/data.json')
    .then((respuesta) => {
        //console.log(respuesta);
        return respuesta.json();
    })
    .then((datos) => {
        //console.log(datos);
        mostrarHTML(datos);
    })
    .catch((err) => {
        console.log(err.statusText);
    });
};

const btnJson = document.querySelector("#btnJson");

btnJson.addEventListener("click", obtenerDatosJson);