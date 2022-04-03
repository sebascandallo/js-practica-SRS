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


const obtenerDatosAPI = async () => {
    //console.log('obtener datos txt');

    try {
    const resultado = await fetch("https://picsum.photos/list");
    const respuesta = await resultado.json();
    console.log(respuesta);
    mostrarHTML(respuesta);
    } catch(error) {
        console.log(error);
    }
    
};

const btnAPI2 = document.querySelector("#btnAPI2");

btnAPI2.addEventListener("click", obtenerDatosAPI);