let usuario = {
    email: "",
    password: "",
  };
  
  let usuariosDB = JSON.parse(localStorage.getItem("usuarios")) || [];
  
  const handleChange = function (e) {
    //para guardar los cambios de los inputs
    usuario = {
      ...usuario,
      [e.target.name]: e.target.value,
    };
  };
  
  const handleSubmit = function (e) {
    e.preventDefault();
  
    //verificar el email
  
    let usuarioVerificado = usuariosDB.find(function (user) {
      return user.email === usuario.email;
    });
  
    if (usuarioVerificado) {
      if (usuario.password === usuarioVerificado.password) {
        alert("Usuario verificado 😎");
  
        localStorage.setItem("usuario", JSON.stringify(usuarioVerificado));
  
        location.replace("/index.html");
      } else {
        alert("usuario o contraseña incorrectos");
      }
    } else {
      alert("usuario o contraseña incorrectos");
    }
  };
  


 