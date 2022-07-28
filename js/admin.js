let usuarioConectado = JSON.parse(localStorage.getItem("usuarioConectado"));
let botonDash = document.getElementById("btn-dashboard");

function openModulo(evt, modulo) {
    // Declare all variables
    let i, tabcontent, tablinks;
    if (modulo === "expediente") {
        window.location.href = "expediente.html";
    }
    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the link that opened the tab
    document.getElementById(modulo).style.display = "block";
    evt.currentTarget.className += " active";
}

let validarUsers = () => {
    console.log(usuarioConectado.rol);
    switch (usuarioConectado.rol) {
        case "1":
            window.location.href = "admin.html";
            break;
        case "2":
            window.location.href = "secretaria.html";
            break;
        case "3":
            window.location.href = "cliente.html";
            break;
        case "4":
            window.location.href = "veterinario.html";
            break;
    }
};

botonDash.addEventListener("click", validarUsers);