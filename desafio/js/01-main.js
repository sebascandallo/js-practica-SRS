const obtenerDatosTXT = () => {
    //console.log('obtener datos txt');

    fetch('js/data/datos.txt')
    .then(function (respuesta) {})
    .then((datos) => {})
    .catch((err) => {
        console.log(err.statusText);
    });
};

const btnTxt = document.querySelector("#btnTxt");

btnTxt.addEventListener("click", obtenerDatosTXT);