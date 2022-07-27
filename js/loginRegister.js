const iniciarSesion = () => {
  let usuarioLogin = txtUsuarioLogin.value;
  let contrasennaLogin = txtContrasennaLogin.value;
  validarCredenciales(usuarioLogin, contrasennaLogin);
};
const validarCredenciales = (usuarioLogin, contrasennaLogin) => {
  let usuarioValidado = false;
  usuarios.forEach((objUsuario) => {
    if (objUsuario.usuario == usuarioLogin || objUsuario.correo == usuarioLogin)
      if (objUsuario.contrasenna == contrasennaLogin) {
        usuarioValidado = true;
        localStorage.setItem("usuarioConectado", JSON.stringify(objUsuario));
      }
  });

  if (usuarioValidado == false) {
    Swal.fire({
      icon: "warning",
      title: "No se a podido iniciar sesión",
      text: "El correo del usuario o la contraseña son incorrectos",
      confirmButtonText: "Entendido",
    });
    txtUsuarioLogin.classList.add("input-invalid");
    txtContrasennaLogin.classList.add("input-invalid");
  } else {
    txtUsuarioLogin.classList.remove("input-invalid");
    txtContrasennaLogin.classList.remove("input-invalid");
    txtUsuarioLogin.classList.add("input-valid");
    txtContrasennaLogin.classList.add("input-valid");
    Swal.fire({
      icon: "success",
      title: "Inicio de sesión correcto",
      text: "Bienvenido",
      confirmButtonText: "Entendido",
    }).then(() => {
      window.location.href = "usuario.html";
    });
  }
};
