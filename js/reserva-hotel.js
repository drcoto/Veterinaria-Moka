const inputEntrada = document.getElementById('fecha-entrada');
const inputSalida = document.getElementById('fecha-salida');
const inputAnimales = document.getElementById('cantidad-animales');
const btnGuardar = document.getElementById('btn-registrar');

const validar  = () => {

    let error = false;

    if(inputEntrada.value == ''){
        error = true;
        inputEntrada.classList.add('input-error');
    }else{
        inputEntrada.classList.remove('input-error');
    }

    if(inputSalida.value == ''){
        error = true;
        inputSalida.classList.add('input-error');
    }else{
        inputSalida.classList.remove('input-error');
    }

    if(inputAnimales.value == ''){
        error = true;
        inputAnimales.classList.add('input-error');
    }else{
        inputAnimales.classList.remove('input-error')
    }
    
    if(error == true){
       Swal.fire({
        'icon' : 'warning',
        'title' : 'Datos ingresados incorrectamente',
        'text': 'Favor revise los campos resaltados',
        'confirmButtonText' : 'Entendido'
       });

    }else{
        obtenerDatos();
    }
    
}; 
const obtenerDatos = () => {
    //variable tipo JSON
    let reserva = {
        'date' : inputEntrada.value,
        'cant-cuartos' : inputSalida.value,
        'cant-animales' : inputAnimales.value
    };
    console.log(reserva);
    Swal.fire({
        'icon': 'success',
        'title' : 'Reserva realizada exitosamente',
        'text' : 'Su numero de confirmacion le llegara al correo',
        'confirmButtonText' : 'Continuar'
    }).then(()=>{
        window.location.href = 'reserva-listado.html'

    });
   
};

btnGuardar.addEventListener('click', validar)