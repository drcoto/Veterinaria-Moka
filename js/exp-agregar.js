'use strict';


const botonTx = document.querySelector('#btn-agregarTx');
const botonVac = document.querySelector('#btn-agregarVacuna');
const vacunaInput = document.querySelector('#input-dateVac');
const vacunaDateInput = document.querySelector('#input-vacuna');
const txDate = document.querySelector('#input-txDate');
const txTreatment = document.querySelector('#input-txEvol');





function llenarTablaTx() {
    let sName = vacunaInput.value;
    let dateVac = vacunaDateInput.value;
    let tbody = document.querySelector("#tbl_vacunas tbody");

    let fila = tbody.insertRow();
    let celdaDate = fila.insertCell();
    let celdaNombre = fila.insertCell();
    celdaDate.innerHTML = dateVac;
    celdaNombre.innerHTML = sName;



}

function llenarTablaVac() {
    let dateTx = txDate.value;
    let treatment = txTreatment.value;
    let tbody = document.querySelector("#tbl_precios tbody");

    let fila = tbody.insertRow();
    let celdaDateTx = fila.insertCell();
    let celdaProc = fila.insertCell();
    celdaDateTx.innerHTML = dateTx;
    celdaProc.innerHTML = treatment;





}
botonTx.addEventListener('click', llenarTablaTx);
botonVac.addEventListener('click', llenarTablaVac);