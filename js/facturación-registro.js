const inputJuridica = document.getElementById('txt-juridica');
const inputConsecutivo = document.getElementById('txt-consecutivo');
const inputFecha = document.getElementById('txt-fecha');
const inputCliente = document.getElementById('txt-cliente');
const inputEmail = document.getElementById('txt-email');
const inputTelefono = document.getElementById('txt-telefono');
const inputPaciente = document.getElementById('txt-paciente');
const inputSubtotal = document.getElementById('txt-subtotal');
const inputDescuento = document.getElementById('txt-descuento');
const inputTotal = document.getElementById('txt-total');
const btnImprimir = document.getElementById('btn-imprimir');

const validar = () => {
    let error = false;

    if (inputJuridica.value == '') {
        error = true;
        inputJuridica.classList.add('input-error');
        inputJuridica.classList.remove('input-valid');
    } else {
        inputJuridica.classList.remove('input-error');
        inputJuridica.classList.add('input-valid');
    }

    if (inputConsecutivo.value == '') {
        error = true;
        inputConsecutivo.classList.add('input-error');
        inputConsecutivo.classList.remove('input-valid');
    } else {
        inputConsecutivo.classList.remove('input-error');
        inputConsecutivo.classList.add('input-valid');
    }

    if (inputFecha.value == '') {
        error = true;
        inputFecha.classList.add('input-error');
        inputFecha.classList.remove('input-valid');
    } else {
        inputFecha.classList.remove('input-error');
        inputFecha.classList.add('input-valid');
    }

    if (inputCliente.value == '') {
        error = true;
        inputCliente.classList.add('input-error');
        inputCliente.classList.remove('input-valid');
    } else {
        inputCliente.classList.remove('input-error');
        inputCliente.classList.add('input-valid');
    }

    if (inputEmail.value == '') {
        error = true;
        inputEmail.classList.add('input-error');
        inputEmail.classList.remove('input-valid');
    } else {
        inputEmail.classList.remove('input-error');
        inputEmail.classList.add('input-valid');
    }

    if (inputTelefono.value == '') {
        error = true;
        inputTelefono.classList.add('input-error');
        inputTelefono.classList.remove('input-valid');
    } else {
        inputTelefono.classList.remove('input-error');
        inputTelefono.classList.add('input-valid');
    }

    if (inputPaciente.value == '') {
        error = true;
        inputPaciente.classList.add('input-error');
        inputPaciente.classList.remove('input-valid');
    } else {
        inputPaciente.classList.remove('input-error');
        inputPaciente.classList.add('input-valid');
    }

    if (inputSubtotal.value == '') {
        error = true;
        inputSubtotal.classList.add('input-error');
        inputSubtotal.classList.remove('input-valid');
    } else {
        inputSubtotal.classList.remove('input-error');
        inputSubtotal.classList.add('input-valid');
    }

    if (inputDescuento.value == '') {
        error = true;
        inputDescuento.classList.add('input-error');
        inputDescuento.classList.remove('input-valid');
    } else {
        inputDescuento.classList.remove('input-error');
        inputDescuento.classList.add('input-valid');
    }

    if (inputTotal.value == '') {
        error = true;
        inputTotal.classList.add('input-error');
        inputTotal.classList.remove('input-valid');
    } else {
        inputTotal.classList.remove('input-error');
        inputTotal.classList.add('input-valid');
    }
    if (error == true) {
        Swal.fire({
            'icon': 'warning',
            'title': 'Datos ingresados incorrectamente',
            'text': 'Por favor revise los campos resaltados',
            'confirmButtonText': 'Entendido'
        });

    } else {
        obtenerDatos();
    }

};
const obtenerDatos = () => {
    let factura = {
        'juridica': inputJuridica.value,
        'consecutivo': inputConsecutivo.value,
        'fecha': inputFecha.value,
        'paciente': inputPaciente.value,
        'email': inputEmail.value,
        'telefono': inputTelefono.value,
        'paciente': inputPaciente.value,
        'subtotal': inputSubtotal.value,
        'descuento': inputDescuento.value,
        'total': inputTotal.value,
    };
    Swal.fire({
        'icon': 'success',
        'title': 'Datos ingresados correctamente',
        'text': 'La factura se ha creado adecuadamente',
        'confirmButtonText': 'Entendido'
    }).then(() => {
        window.location.href = 'factura-listar.html';
    });
};


btnImprimir.addEventListener('click', validar);