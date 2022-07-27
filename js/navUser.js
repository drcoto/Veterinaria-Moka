const btnUsuario = document.querySelector("#btn-usuario");
let menu = document.querySelector(".menu-user-container");
let usuarioConectado = JSON.parse(localStorage.getItem("usuarioConectado"));
let opcionesNav = document.querySelectorAll("nav a");
// let expedientes = document.querySelector("nav #expedientes");
// let reservaciones = document.querySelector("nav #reservaciones");
// let citas = document.querySelector("nav #citas");
// nav

const mostrarOpciones = () => {
  //admin
  // if(usuarioConectado.rol == 1){
  //   window.location.href = "mantenimiento.html";
  //   opcionesNav.classList.add("ocultar");
  // }
  // //secretaria
  // if(usuarioConectado.rol == 2){
  //   citas.classList.add("ocultar");
  // }
  // // veterinario
  // if(usuarioConectado.rol == 3){
  //   opcionesNav.classList.add("ocultar");
  // }
  // //cliente
  // if(usuarioConectado.rol == 4){
  //   opcionesNav.classList.add("ocultar");
  // }

  switch (usuarioConectado.rol) {
    case "1":
      window.location.href = "mantenimiento.html";
      break;
    case "2":
      window.location.href = "index.html";
      break;
    case "3":
      window.location.href = "index.html";
      break;
    case "4":
      window.location.href = "index.html";
      break;
  }
};

mostrarOpciones();

btnUsuario.addEventListener("click", () => {
  menu.classList.toggle("ocultar-menu");
});
