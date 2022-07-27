const btnUsuario = document.querySelector("#btn-usuario");
let menu = document.querySelector(".menu-user-container");
let usuarioConectado = localStorage.getItem("usuarioConectado");
let opcionesNav = document.querySelectorAll("nav a");
// nav


const mostrarOpciones = () => {
  switch (usuarioConectado.rol) {
    case 1:
      break;
      
    case 2:
      opcionesNav[0].classList.add("ocultar");
      break;
  }
};

mostrarOpciones();

let icon = document.querySelector("#btn-usuario .fa-caret-down")
btnUsuario.addEventListener("click", () => {
  menu.classList.toggle("ocultar-menu");
});
