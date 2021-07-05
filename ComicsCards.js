// comics = JSON.parse(localStorage.getItem("comics"))
cuerpo = document.querySelector("#contenComics")
const cargarComics= function(array){
    array.forEach(function(item, index){
    let datos = `  
    <div class="col">
    <div class="card h-100">
    <img src=${item.caratula} class="card-img-top "  alt="...">
    <div class="card-body text-center">
      <h5 class="card-title text-center">${item.nombre}</h5>
      <p class="card-text text-center">${item.editorial}.</p>
      <button class="btn btn-dark" onclick='verComic(${index})'>Ver</button>
    </button>      
    </div>
    </div>

    `
    cuerpo.innerHTML += datos    
});
};

updateBaul()


function updateBaul(){
  comics = JSON.parse(localStorage.getItem("comics"))
  cargarComics(comics)
}

function filterBaul(){

  let texto = document.querySelector('#textBuscar')
  comics = JSON.parse(localStorage.getItem("comics"))

  comicsFilter=comics.filter(function(comic){
 return comic.nombre.toUpperCase().indexOf(texto.value.toUpperCase()) > - 1;
  })
  console.log(comicsFilter);
texto.value = "";
texto.focus();
cargarComics(comics);
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

function Alquilar(){
  swal("Alquilaste este comic!", "Todo listo!", "success");

}



