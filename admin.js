let usuario=JSON.parse(localStorage.getItem('usuario')) || null

  let linkAdmin=document.querySelector('#linkAdmin')

  if(usuario.email==='admin@gmail.com'){
      linkAdmin.innerHTML= `
      <a class="nav-link" href="./agregar.html">Agregar Comics</a>
      `
  }

//   function FbotonOn() {
//     var uno = document.getElementById('botonOn');
//     if (uno.innerHTML == 'off') 
//         uno.innerHTML = uno.innerHTML=`
//         <a href="./login.html"><button type="button" class="btn btn-danger"onclick="remplazarBoton() id="botonOn"">LOGIN</button>
//         `;
//     else uno.innerHTML = 'off'; 
//   }