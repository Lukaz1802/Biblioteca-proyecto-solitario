let comics = JSON.parse(localStorage.getItem("comics")) || []
let comic = {
  
}

let id = new Date().getTime();
let nombre = document.querySelector("#nombreText");
let editorial = document.querySelector("#editorialText");
let numero = document.querySelector("#numeroText");
let año = document.querySelector("#añoText");
let superheroe = document.querySelector("#superheroeText");
let sinopsis = document.querySelector("#sinopsisText")
let caratula = document.querySelector("#caratulaText");

let cuerpoTabla= document.querySelector("#cuerpoTabla") || ""

class Comic{
    constructor (id, nombre, editorial, numero, año, superheroe, sinopsis, caratula)
{

    this.id = id
    this.nombre = nombre;
    this.editorial = editorial;
    this.numero = numero;
    this.año = año;
    this.superheroe = superheroe;
    this.sinopsis = sinopsis;
    this.caratula = caratula;}
}

const addComic = function(){
    if (nombre.value && editorial.value && numero.value && año.value && superheroe.value && sinopsis.value && caratula.value)
    {
        if (!caratula.value){
            caratula.value = []
                }

        comics.push(
            new Comic(
                id,
                nombre.value.toUpperCase(),
                editorial.value.toUpperCase(),
                numero.value.toUpperCase(),
                año.value.toUpperCase(),
                superheroe.value.toUpperCase(),
                sinopsis.value.toUpperCase(),
                caratula.value.toUpperCase(),
            )
        );
        localStorage.setItem("comics", JSON.stringify(comics));
          swal("Perfecto!", "Se agregó el comic al Baul!", "success");
        updateDatos();
    }else{
        alert("Faltan datos")
    }
};

function updateDatos(){
    nombre.value= ""
 editorial.value= ""
     numero.value= ""
        año.value= ""
 superheroe.value= ""
 sinopsis.value=""
     caratula.value=""
    
}


usuario=JSON.parse(localStorage.getItem('usuario')) || null



  function cargarTabla(array) {
    cuerpoTabla.innerHTML = "";
    //   comics = JSON.parse(localStorage.getItem("comics")) || [];
    array.forEach(function (comic, index) {
      let fila = document.createElement("tr");
      let datos = `
          <th scope="row">${comic.id}</th>
          <td>${comic.nombre}</td>
          <td>${comic.editorial}</td>
          <td>${comic.numero}</td>
          <td>${comic.año}</td>
          <td>${comic.superheroe}</td>
          <td>
          <button class="btn btn-warning" onclick='verComic(${index})'>Ver</button>
          <button class="btn btn-info" onclick='irModif(${index})'>Modif</button>
          <button class="btn btn-danger" onclick='borrarComic(${index})'>X</button>
          </td>
          `;
      fila.innerHTML = datos;
      cuerpoTabla.appendChild(fila);
    });
  }
  


function updateBaul(){
  comics = JSON.parse(localStorage.getItem("comics"))
  cargarTabla(comics)
}







function verComic(id){
document.querySelector("#tittle_modal").innerText=comics[id].nombre
document.querySelector(".card-title").innerText=comics[id].nombre
document.querySelector("#text_editorial").innerText=comics[id].editorial
document.querySelector("#text_numero").innerText=comics[id].numero
document.querySelector("#text_año").innerText=comics[id].año
document.querySelector("#text_superheroe").innerText=comics[id].superheroe
document.querySelector("#text_sinopsis").innerText=comics[id].sinopsis
document.querySelector("#imagen_heroe").src=comics[id].caratula

$('#comicsModal').modal('show')
}

function filterBaul(){

  let texto = document.querySelector('#textBuscar')
  comics=JSON.parse(localStorage.getItem('comics'))

  comics=comics.filter(function(comic){
 return comic.nombre.indexOf(texto.value.toUpperCase()) > - 1;
  })
  console.log(comics);
texto.value = "";
texto.focus();
  cargarTabla(comics);
}


function borrarComic(id){

  let baulTotal= JSON.parse(localStorage.getItem("comics"))

  let index=baulTotal.findIndex(function(comic){
      return comic.nombre === comics[id].nombre;
  })
console.log(index);

let validar = confirm('Esta seguro que quiere borrar el comic del Baul?')
if(validar){
  baulTotal.splice(index,1)
  localStorage.setItem('comics', JSON.stringify(baulTotal))

  updateBaul()
}
}

function irModif(indice){
  comic = comics[indice]
  // console.log(comic);


  document.querySelector("#IDModif").value = comic.id;
  document.querySelector("#modif_tittle").innerText = comic.nombre;
  document.querySelector("#nombreModif").value = comic.nombre;
  document.querySelector("#anioModif").value= comic.numero;
  document.querySelector("#categoriaModif").value= comic.año;
  document.querySelector("#editorialModif").value= comic.editorial;
  document.querySelector("#numeroModif").value= comic.superheroe;
  document.querySelector("#sinopsisModif").value= comic.sinopsis;
  document.querySelector("#portadaModif").value= comic.caratula;

  $('#modifModal').modal('show')

}

function hancdleChange(e){
  
  console.log(e.target.value)

  comic = {
    ...comic,
    [e.target.name]:e.target.value,
  };

}

function updateComic(e) {
  e.preventDefault(); //para que no se refresque la pantalla con el submit

  //Obtener posicion del heroe en el arreglo
  let index = comics.findIndex(function (item) {
    return item.nombre === comic.nombre;
  });

  //modificar solamente el heroe
  comics.splice(index, 1, comic);

  localStorage.setItem("comics", JSON.stringify(comics));
  updateBaul();


}


if(cuerpoTabla){
  cargarTabla(comics);
}