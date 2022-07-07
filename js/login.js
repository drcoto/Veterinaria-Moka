// declaracion de variables
const btnLogin = document.querySelector("#btn-login ");
const btnRegister = document.querySelector("#btn-register");
const formlogin = document.querySelector(".formulario-login");
const formRegister = document.querySelector(".formulario-register");
const contenedorLoginRegister = document.querySelector(
  ".contenedor-login-register"
);
const cajaTraseraLogin = document.querySelector(".caja-trasera-login");
const cajaTraseraRegister = document.querySelector(".caja-trasera-register");
const cajatresera = document.querySelector(".caja-trasera");
let anchoPage = () => {
  if (window.innerWidth > 850) {
    cajaTraseraLogin.style.display = "block";
    cajaTraseraRegister.style.display = "block";
  } else {
    cajaTraseraRegister.style.display = "block";
    formlogin.style.width = "100%";
    cajaTraseraRegister.style.opacity = "1";
    cajaTraseraLogin.style.display = "none";
    formlogin.style.display = "block";
    formRegister.style.display = "none";
    contenedorLoginRegister.style.left = "0px";
    cajatresera.style.marginTop = '90px';
  }
};

let login = () => {
  if (window.innerWidth > 850) {
    formlogin.style.display = "block";
    contenedorLoginRegister.style.left = "10px";
    formRegister.style.display = "none";
    cajaTraseraRegister.style.opacity = "1";
    cajaTraseraLogin.style.opacity = "0px";
  } else {
    formlogin.style.display = "block";
    contenedorLoginRegister.style.left = "0px";
    formlogin.style.width = "100%";
    formRegister.style.display = "none";
    cajaTraseraRegister.style.display = "block";
    cajaTraseraLogin.style.display = "none";
    cajatresera.style.marginTop = '90px';
  }
};
let register = () => {
  if (window.innerWidth > 850) {
    formRegister.style.display = "block";
    contenedorLoginRegister.style.left = "410px";
    formlogin.style.display = "none";
    cajaTraseraRegister.style.opacity = "0";
    cajaTraseraLogin.style.opacity = "1";
  } else {
    formRegister.style.display = "block";
    contenedorLoginRegister.style.left = "0px";
    formlogin.style.display = "none";
    cajaTraseraRegister.style.display = "none";
    cajaTraseraLogin.style.display = "block";
    cajaTraseraLogin.style.opacity = "1";
    cajatresera.style.marginTop = '300px';
  }
};
if(window.innerWidth > 850){
  window.addEventListener("resize", anchoPage);
  
}
anchoPage();
btnRegister.addEventListener("click", register);
btnLogin.addEventListener("click", login);

// validacion de inputs
let inputs = document.getElementsByClassName("formulario-input");
for (let i = 0; i < inputs.length; i++) {
  inputs[i].addEventListener("keyup", function () {
    if (this.value.length >= 1) {
      this.nextElementSibling.classList.add("fijar");
    } else {
      this.nextElementSibling.classList.remove("fijar");
    }
  });
}

// notificacion de registro
// form login
let btnLoginForm = document.querySelector("#btn-login-form");
const formLoginEmail = document.querySelector("#login-email");
const formLoginPassword = document.querySelector("#login-password");

let alertLogin = () => {
  alert("Has iniciado correctamente");
};
let alertRegister = () => {
  alert("Has creado la cuenta correctamente");
};

//fucion de boton password
let btnPassword = document.querySelector(".btn-password");
let icon  = document.querySelector(".fa-eye"); 

let password = () => {
  let tipo = document.getElementById("login-password");
  if (tipo.type == "password") {
    tipo.type = "text";
    icon.classList.replace("fa-eye","fa-eye-slash");
    
  } else {
    tipo.type = "password";
    icon.classList.replace("fa-eye-slash","fa-eye");
  }
};

btnPassword.addEventListener("click", password);

// Form register
let btnRegisterForm = document.querySelector("#btn-register-form");

// events listener
btnLoginForm.addEventListener("click", alertLogin);
btnRegisterForm.addEventListener("click", alertRegister);


let numero = 50
let number2 = 0.35



