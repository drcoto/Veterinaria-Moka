const btnUsuario = document.querySelector("#btn-usuario");
let menu = document.querySelector(".menu-user-container");
let opcionesNav = document.querySelectorAll(".menu-header a");
// nav
let usuarioConectado = JSON.parse(localStorage.getItem("usuarioConectado"));


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

btnUsuario.addEventListener("click", () => {
  menu.classList.toggle("ocultar-menu");
});
