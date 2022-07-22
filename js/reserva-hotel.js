const inputDate = document.getElementById('txt-date');
const inputCuartos = document.getElementById('txt-cantidad');
const inputAnimales = document.getElementById('cantidad-animales');
const btnGuardar = document.getElementById('btn-registrar');

const validar  = () => {

    let error = false;

    if(inputDate.value == ''){
        error = true;
        inputDate.classList.add('input-error');
    }else{
        inputDate.classList.remove('input-error');
    }

    if(inputCuartos.value == ''){
        error = true;
        inputCuartos.classList.add('input-error');
    }else{
        inputCuartos.classList.remove('input-error');
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
        'date' : inputDate.value,
        'cant-cuartos' : inputCuartos.value,
        'cant-animales' : inputAnimales.value
    };
    console.log(reserva);
    Swal.fire({
        'icon': 'success',
        'title' : 'Usuario ingresado correctamente',
        'text' : 'Sus datos han sido guardados y registrados',
        'confirmButtonText' : 'Continuar'
    }).then(()=>{
        window.location.href = 'usuario-listar.html'

    });
   
};

btnGuardar.addEventListener('click', validar)