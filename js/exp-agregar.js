'use strict';


const botonTx = document.querySelector('#btn-agregarTx');
const botonVac = document.querySelector('#btn-agregarVacuna');
const sNombre = document.querySelector('#name');
const iTooth = document.querySelector('#tooth');
const sTreatment = document.querySelector('#treatment');
const iPrice = document.querySelector('#price');
const sEmail = document.querySelector('#email');
const iPhone = document.querySelector('#cel');



function obtenerDatosTx() {
    let sName = sNombre.value;
    let iDiente = Number(iTooth.value);
    let sProc = sTreatment.value;
    let iPrecio = 0;


    llenarTablaTx();
}

function obtenerDatosVac() {
    let sName = sNombre.value;
    let iDiente = Number(iTooth.value);
    let sProc = sTreatment.value;
    let iPrecio = 0;


    llenarTablaTx();
}

function llenarTablaTx() {
    let tbody = document.querySelector("#tbl_precios tbody");
    let lista_precios = obtenerPrecios();
    for (let i = 0; i < lista_precios.length; i++) {
        let fila = tbody.insertRow();
        let celdaNum = fila.insertCell();
        let celdaProc = fila.insertCell();
        let celdaPrecio = fila.insertCell();
        celdaNum.innerHTML = lista_precios[i][1];
        celdaProc.innerHTML = lista_precios[i][2];
        celdaPrecio.innerHTML = lista_precios[i][3];

    };
}

function llenarTablaVac() {
    let tbody = document.querySelector("#tbl_precios tbody");
    let lista_precios = obtenerPrecios();
    for (let i = 0; i < lista_precios.length; i++) {
        let fila = tbody.insertRow();
        let celdaNum = fila.insertCell();
        let celdaProc = fila.insertCell();
        let celdaPrecio = fila.insertCell();
        celdaNum.innerHTML = lista_precios[i][1];
        celdaProc.innerHTML = lista_precios[i][2];
        celdaPrecio.innerHTML = lista_precios[i][3];

    };


}
botonTx.addEventListener('click', obtenerDatosTx);