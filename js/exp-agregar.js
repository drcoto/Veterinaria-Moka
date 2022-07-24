'use strict';


const botonTx = document.querySelector('#btn-agregarTx');
const botonVac = document.querySelector('#btn-agregarVacuna');
const vacunaDateInput = document.querySelector('#input-dateVac');
const vacunaInput = document.querySelector('#input-vacuna');
const txDate = document.querySelector('#input-txDate');
const txTreatment = document.querySelector('#input-txEvol');





function llenarTablaVac() {
    let sName = vacunaInput.value;
    let dateVac = vacunaDateInput.value;
    let tbodyVac = document.querySelector("#tbl-vacuna tbody");
    tbodyVac.innerHTML = "";
    let fila = tbodyVac.insertRow();
    let celdaDate = fila.insertCell();
    let celdaNombre = fila.insertCell();
    let tdAcciones = fila.insertCell();
    celdaDate.innerHTML = dateVac;
    celdaNombre.innerHTML = sName;
    let btnEditar = document.createElement('button');
    btnEditar.textContent = 'Editar';
    btnEditar.type = 'button';
    btnEditar.classList.add('btn-editar');
    //Creacion del boton eliminar
    let btnEliminar = document.createElement('button');
    btnEliminar.textContent = 'Eliminar';
    btnEliminar.type = 'button';
    btnEliminar.classList.add('btn-eliminar');

    //Agregar el boton de editar a la celda acciones
    tdAcciones.appendChild(btnEditar);

    //Agregar el boton de eliminar a la celda acciones
    tdAcciones.appendChild(btnEliminar);

    btnEliminar.addEventListener('click', () => {
        Swal.fire({
            title: 'Está seguro que desea eliminar la cita?',
            text: "La acción no se puede revertir!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sí, eliminar!'
        }).then((result) => {
            tbodyVac.innerHTML = "";
            let celdaDate = fila.insertCell();
            let celdaNombre = fila.insertCell();
            let tdAcciones = fila.insertCell();
            celdaDate.innerHTML = "";
            celdaNombre.innerHTML = "";
            //Agregar el boton de editar a la celda acciones
            tdAcciones.appendChild(btnEditar);

            //Agregar el boton de eliminar a la celda acciones
            tdAcciones.appendChild(btnEliminar);
            if (result.isConfirmed) {
                Swal.fire(
                    'Eliminado!',
                    'La cita fue eliminado.',
                    'success'
                )
            }
        })
    });


}

function llenarTablaTx() {
    let dateTx = txDate.value;
    let treatment = txTreatment.value;
    let tbodyTx = document.querySelector("#tbl-procedimiento tbody");
    tbodyTx.innerHTML = " ";
    let fila = tbodyTx.insertRow();
    let celdaDateTx = fila.insertCell();
    let celdaProc = fila.insertCell();
    let tdAccionesTx = fila.insertCell();
    celdaDateTx.innerHTML = dateTx;
    celdaProc.innerHTML = treatment;
    let btnEditar = document.createElement('button');
    btnEditar.textContent = 'Editar';
    btnEditar.type = 'button';
    btnEditar.classList.add('btn-editar');
    //Creacion del boton eliminar
    let btnEliminar = document.createElement('button');
    btnEliminar.textContent = 'Eliminar';
    btnEliminar.type = 'button';
    btnEliminar.classList.add('btn-eliminar');

    //Agregar el boton de editar a la celda acciones
    tdAccionesTx.appendChild(btnEditar);

    //Agregar el boton de eliminar a la celda acciones
    tdAccionesTx.appendChild(btnEliminar);

    btnEliminar.addEventListener('click', () => {
        Swal.fire({
            title: 'Está seguro que desea eliminar la cita?',
            text: "La acción no se puede revertir!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sí, eliminar!'
        }).then((result) => {
            tbodyTx.innerHTML = "";
            let celdaDate = fila.insertCell();
            let celdaNombre = fila.insertCell();
            let tdAcciones = fila.insertCell();
            celdaDateTx.innerHTML = "";
            celdaProc.innerHTML = "";
            //Agregar el boton de editar a la celda acciones
            tdAccionesTx.appendChild(btnEditar);

            //Agregar el boton de eliminar a la celda acciones
            tdAccionesTx.appendChild(btnEliminar);
            if (result.isConfirmed) {
                Swal.fire(
                    'Eliminado!',
                    'La cita fue eliminado.',
                    'success'
                )
            }
        })
    });





}
botonTx.addEventListener('click', llenarTablaTx);
botonVac.addEventListener('click', llenarTablaVac);