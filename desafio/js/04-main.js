// Fetch API
const mostrarHTML = (perfiles) => {
    const contenido = document.querySelector('#contenido');

    let html = '';

    perfiles.forEach(perfil => {
        const {author, post_url} = perfil;
    html += `
        <p>Autor: ${author}</P>
        <a href="${post_url}" target="_blank">Ver imagen</a>

    `;
});
 
contenido.innerHTML = html;    
};


const obtenerDatosAPI = () => {
    //console.log('obtener datos txt');

    fetch("https://picsum.photos/list")
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

const btnAPI = document.querySelector("#btnAPI");

btnAPI.addEventListener("click", obtenerDatosAPI);