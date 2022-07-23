const inputs = document.querySelectorAll("form input");
const btnRegister = document.querySelector('#btn-save');
const checkbox = document.querySelectorAll('.pd-chkbox');
const labels = document.querySelectorAll('.lbl-chkbox');
let contador = 0;

let validarForm = () => {
    inputs.forEach((input) => {

        if (input.value === "") {


            input.classList.add("input-invalid");
            input.classList.remove("input-valid");

            Swal.fire({
                icon: 'warning',
                title: 'Campos incompletos',
                text: 'Por favor revise los campos resaltados',
                confirmButtonText: 'Entendido'
            })
        } else {
            input.classList.remove("input-invalid");
            input.classList.add("input-valid");

            Swal.fire({
                icon: 'success',
                title: 'Expediente Archivado',
                text: 'La información ha sido ingresada con éxito en el expediente clínico',
                confirmButtonText: "Entendido"
            }).then(() => {
                window.location.href = "index.html";
            });


        }


    });
};

let confirmar = () => {
    if (contador === 0) {
        contador++;
        let padecimientos = 0;
        checkbox.forEach((chk) => {
            if (chk.checked) {
                padecimientos++;
            };


        });
        if (padecimientos === 0) {
            labels.forEach((lbl) => {
                lbl.classList.add("input-invalid");
                lbl.classList.remove("input-valid");
            });
            Swal.fire({
                title: 'Padecimientos Vacíos!',
                text: 'Por favor revise que no se le paso por alto llenar los padecimientos.',
                imageUrl: '../img/sick.jpg',
                imageWidth: 400,
                imageHeight: 200,
                imageAlt: 'Padecimientos',
                confirmButtonText: 'Entendido'
            });
        };
        //**  else {
        //     labels.forEach((lbl) => {
        //         lbl.classList.remove("input-invalid");
        //         lbl.classList.add("input-valid");
        //     });
        // }; 

    };


};


btnRegister.addEventListener('click', validarForm)
btnRegister.addEventListener('mouseover', confirmar)