let comics = JSON.parse(localStorage.getItem("comics")) || []
let comic = {}

let nombre = document.querySelector("#nombreText");
let editorial = document.querySelector("#editorialText");
let numero = document.querySelector("#numeroText");
let año = document.querySelector("#añoText");
let superheroe = document.querySelector("#superheroeText");
let caratula = document.querySelector("#caratulaText");

let cuerpoTabla= document.querySelector("#cuerpoTabla") || ""

class Comic{
    constructor (nombre, editorial, numero, año, superheroe, caratula)
{
    this.nombre = nombre;
    this.editorial = editorial;
    this.numero = numero;
    this.año = año;
    this.superheroe = superheroe;
    this.caratula = caratula;}
}

const addComic = function(){
    if (nombre.value && editorial.value && numero.value && año.value && superheroe.value && caratula.value)
    {
        if (!caratula.value){
            caratula.value = []
                }

        comics.push(
            new Comic(
                nombre.value.toUpperCase(),
                editorial.value.toUpperCase(),
                numero.value.toUpperCase(),
                año.value.toUpperCase(),
                superheroe.value.toUpperCase(),
                caratula.value.toUpperCase(),
            )
        );
        localStorage.setItem("comics", JSON.stringify(comics));
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
     caratula.value=""
    
}


function updateBaul(){
    comics = JSON.parse(localStorage.getItem("comics"))
    cargarTabla(comics)
}


function cargarTabla(array) {
    cuerpoTabla.innerHTML = "";
    //   comics = JSON.parse(localStorage.getItem("comics")) || [];
    array.forEach(function (comic, index) {
      let fila = document.createElement("tr");
      let datos = `
          <th scope="row">${comic.nombre}</th>
          <td>${comic.editorial}</td>
          <td>${comic.numero}</td>
          <td>${comic.año}</td>
          <td>${comic.superheroe}</td>
          <td>
          <button class="btn btn-warning" onclick='verComic(${index})'>Ver</button>
          <button class="btn btn-danger" onclick='borrarComic(${index})'>X</button>
          <button class="btn btn-danger" onclick='(${index})'>Destacar</button>
          </td>
          `;
      fila.innerHTML = datos;
      cuerpoTabla.appendChild(fila);
    });
  }

function verComic(id){
document.querySelector("#tittle_modal").innerText=comics[id].nombre
document.querySelector(".card-title").innerText=comics[id].nombre
document.querySelector("#text_editorial").innerText=comics[id].editorial
document.querySelector("#text_numero").innerText=comics[id].numero
document.querySelector("#text_año").innerText=comics[id].año
document.querySelector("#text_superheroe").innerText=comics[id].superheroe
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



if(cuerpoTabla){
    cargarTabla(comics);
}