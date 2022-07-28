const btnUsuario = document.querySelector("#btn-usuario");
let menu = document.querySelector(".menu-user-container");

btnUsuario.addEventListener("click", () => {
  menu.classList.toggle("ocultar-menu");
});
