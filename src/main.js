let pantallaPrincipal = document.getElementById("divPantallaPrincipal");
let listaPokemon = document.getElementById("divListaPokemon");
let pokedex = document.getElementById("divPokedex");
let ordenAlfabetico = document.getElementById("divOrdenAlfabetico");
let aboutPokemon = document.getElementById("aboutPokemon");
let showAbout = document.getElementById("showAbout");
let clearBtn = document.getElementById("clearBtn");

pokedex.style.display = "none";
aboutPokemon.style.display = "none";
let home = document.getElementById("home");

showAbout.addEventListener('click', () => {
  pokedex.style.display = "none";
  listaPokemon.style.display = "none";
  pantallaPrincipal.style.display = "none";
  aboutPokemon.style.display = "block";

});

home.addEventListener('click', () => {
  pokedex.style.display = "none";
  listaPokemon.style.display = "none";
  ordenAlfabetico.style.display = "none";
  aboutPokemon.style.display = "none";
  pantallaPrincipal.style.display = "block";
  location.reload(true);
});


let showMorePokemon = document.getElementById("showMorePokemon");

showMorePokemon.addEventListener('click', () => {
  pantallaPrincipal.style.display = "none";
  listaPokemon.style.display = "block";

  let pokemonList;
  pokemonList = data.getAllPokemon(); // Se solicita al objeto data una función con el arreglo con todos los pokemon
  let pokemonBox = document.getElementById("generalList"); //Se define variable para agregar datos en un div id=generaList
  //  pokemonBox.innerHTML="Pokemon Región Kanto";
  let htmlBox = "";
  for (let contPokemon = 0; contPokemon < pokemonList.length; contPokemon++) {
    htmlBox += `<section class="pokemonImgs"><span>${pokemonList[contPokemon].num} ${pokemonList[contPokemon].name}
                    <div><img src="${pokemonList[contPokemon].img}"/></div></span></section>`;
  }
  pokemonBox.innerHTML = htmlBox;

});

// Funcion para buscar el pokemon
let searchPokemon = document.getElementById("searchPokemon");

searchPokemon.addEventListener('click', () => {

  pantallaPrincipal.style.display = "none";
  listaPokemon.style.display = "none";
  //  ordenAlfabetico.style.display="none";
  pokedex.style.display = "block";

  document.getElementById("searchBtn").addEventListener("click", searchPoke);

  function searchPoke() {
    let pokemon,

      namePokemon = document.getElementById("namePokemon").value;
    namePokemon = namePokemon.charAt(0).toUpperCase() + namePokemon.slice(1);
    if (namePokemon == "") {
      alert("Escriba el nombre de un pokemon. Ej. Pikachu");
      namePokemon.value = "";
      document.getElementById("namePokemon").focus();
    } else {
      pokemon = data.filterData(window.POKEMON.pokemon, namePokemon);
      // pokemon=data.filterData(window.POKEMON.pokemon,document.getElementById("namePokemon").value);
      printFirstData(pokemon);
      document.getElementById("namePokemon").value = "";
    }

  }

  function printFirstData(pokemon) {
    let pokedex = document.getElementById("pokedexx");

    pokedex.innerHTML = ` <strong>Nombre:  </strong><span id='selectedPokemon'>${pokemon.name}</span><div><img src="${pokemon.img}"/></div>
                       <strong>Número:  </strong>${pokemon.num} <br/> <strong>Tipo:    </strong>${pokemon.type} <br/> <strong>Altura:  </strong>${pokemon.height} <br/>
                       <strong>Peso:    </strong>${pokemon.weight} <br/> <strong>Debilidade(s):  </strong> ${pokemon.weaknesses}`;
  }

});

clearBtn.addEventListener("click", () => {
  document.getElementById("txtResPC").innerHTML = "";
  document.getElementById("pokedexx").innerHTML = "";
});




// calculo de puntos de combate
let btnCalcularPC = document.getElementById("btnCalcularPC");
let txtPC = document.getElementById("txtPC");
let txtResPC = document.getElementById("txtResPC");

btnCalcularPC.addEventListener("click", () => {
  let pokemon;
  pokemon = document.getElementById("selectedPokemon").innerHTML;
  let powerCombat = txtPC.value;
  let resPC = data.computeData(pokemon, powerCombat);
  txtResPC.innerHTML = resPC;
  txtPC.value = "";
});



// ORDENAR Alfabéticamente
let orderAlpha = document.getElementById("btnOrderAlpha");
orderAlpha.addEventListener("click", () => {
  console.log("ENTRO");
  let pokemonList;
  pokemonList = data.sortData("name", true);
  let pokemonBox = document.getElementById("generalList");
  let htmlBox = "";
  for (let contPokemon = 0; contPokemon < pokemonList.length; contPokemon++) {
    htmlBox += `<section class="pokemonImgs"><span>${pokemonList[contPokemon].num} ${pokemonList[contPokemon].name}
                  <div><img src="${pokemonList[contPokemon].img}"/></div></span></section>`;
  }
  pokemonBox.innerHTML = htmlBox;
});


// -------------------------------- para las imagenes-----------------

let slideIndex = 1;
showSlides(slideIndex);
// let dots=document.getElementByClassName("dot");
// currentSlide(n);

function currentSlide(n) {
  showSlides(slideIndex = n);
}


function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  let currentSlide = 0;
  if (n > slides.length) { slideIndex = 1; }
  if (n < 1) { slideIndex = slides.length; }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}