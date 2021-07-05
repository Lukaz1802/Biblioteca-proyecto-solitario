usuario=JSON.parse(localStorage.getItem('usuario')) || null

  let linkAdmin=document.querySelector('#linkAdmin')
  let linkAdmin2=document.querySelector('#linkAdmin2')

  if(usuario.email==='admin@gmail.com'){
      linkAdmin.innerHTML= `
      <a class="nav-link active" href="./agregar.html">Agregar Comics</a>
    `
  }if(usuario.email==='admin@gmail.com'){
    linkAdmin2.innerHTML= `
    <a class="nav-link active" href="./Admin.html">Admin</a>`
  }

