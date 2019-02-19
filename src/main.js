// El evento Load ejecuta el código que le sigue, cuando la página ha cargado toda (html, css ...)

showMorePokemon.addEventListener('click', ()=> {
  let pokemonList; // Definición de variable para asignar el resultado de la función Obtener Pokemon
    pokemonList=data.getAllPokemon(); // Se solicita al objeto data una función con el arreglo con todos los pokemon
    let pokemonBox=document.getElementById("generalList"); //Se define variable para agregar datos en un div id=generaList
    // pokemonBox.innerHTML="Pokemon Región Kanto";
    let htmlBox="";
    for (let contPokemon=0; contPokemon<pokemonList.length; contPokemon++){

      htmlBox=htmlBox +
      "<span>" +
                 pokemonList[contPokemon].id + " " + pokemonList[contPokemon].name +
                 "<img src='"+pokemonList[contPokemon].img+"'/>" +
      "</span>";
            // console.log(htmlBox);
    }
pokemonBox.innerHTML=htmlBox;


  pokemonList.forEach(pokemon => {  // Código para poner el dropDown ó lista desplegable del objeto
    let dropDownId=document.getElementById("pokeList");
    let option = document.createElement("option");
    option.text = pokemon.id;
    dropDownId.add(option);

  });


});

// Funcion para buscar el pokemon
function getPokemon(data, condition){
  for(let i=0; i<data.length; i++){
    let pokemon = data[i];
    if (pokemon.name == condition) {
      printFirstData(pokemon);
      // console.log(pokemon);
      return pokemon.id;
    }
  }
}

function searchPoke(){
  console.log(document.getElementById("namePokemon").value);
  getPokemon(POKEMON.pokemon, document.getElementById("namePokemon").value);
  document.getElementById("namePokemon").value="";
  // console.log(document.getElementById("namePokemon").value);
}
document.getElementById("searchBtn").addEventListener("click", searchPoke)


function printFirstData(pokemon){
  document.getElementById("info").innerHTML=pokemon.name;
  document.getElementById("info1").src=pokemon.img;
setattributes
}
// -----------------------------------------------------------

// function getName(){
//   let result="";
//   let resultid="";
//   let resultimagen="";
//   let pokemonList; // Definición de variable para asignar el resultado de la función Obtener Pokemon
//   pokemonList=data.getAllPokemon(); // Se solicita al objeto data una función con el arreglo con todos los pokemon
//   resultimagen="img";
//   pokemonList[name]="";
//   console.log(pokemonList);
//
//   let namePokemon=document.getElementById("namePokemon").value;
//
//   console.log(namePokemon);
//   for(let i=0; i<pokemonList.length; i++){
//     console.log(pokemonList[i]);
//     if (pokemonList[i].name == namePokemon) {
//       result=pokemonList[i].name;
//       resultid=pokemonList[i].id;
//       resultimagen=pokemonList.img;
//       console.log(result);
//     }
//     let resultado=result + " " + resultid + " " + resultimagen;
//     console.log(resultado);
//     return resultado;
//   }
//
// }
//
// document.getElementById("searchBtn").addEventListener("click",getName);





// -------------------------------- para las imagenes-----------------
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
