const cuerpoTabla = document.querySelector('#tbl-usuarios tbody');

const llenarTabla = () => {

    //cuerpoTabla.innerHTML = ''; //limpia el contenido del html

    reservas.forEach(reservaTemporal =>{
        let fila = cuerpoTabla.insertRow();//Crea una fila

        fila.insertCell().textContent = reservaTemporal.fechaReserva;
        fila.insertCell().textContent = reservaTemporal.fechaSalida;
        fila.insertCell().textContent = reservaTemporal.cantAnimales;
    });
};

llenarTabla();