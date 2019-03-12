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


// Funcion para mostrar todos los pokemon

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
    htmlBox += `<section class="pokemonImgs"><btn class="btn-pok">${pokemonList[contPokemon].num} ${pokemonList[contPokemon].name}
                    <div><img src="${pokemonList[contPokemon].img}"/></div></btn></section>`;
  }
  pokemonBox.innerHTML = htmlBox;

});

// FUNCION BUSCAR UN POKEMON
let searchPokemon = document.getElementById("searchPokemon");

searchPokemon.addEventListener('click', () => {

  pantallaPrincipal.style.display = "none";
  listaPokemon.style.display = "none";
 //ordenAlfabetico.style.display="none";
  pokedex.style.display = "block";

  document.getElementById("searchBtn").addEventListener("click", searchPoke);

  function searchPoke() {
    let pokemon,

      namePokemon = document.getElementById("namePokemon").value;
    namePokemon = namePokemon.charAt(0).toUpperCase() + namePokemon.slice(1);
    if (namePokemon == "" ) {
      alert("Escriba el nombre de un pokemon. Ej. Pikachu");
      namePokemon.value = "";
      document.getElementById("namePokemon").focus();
     }
    else{
      pokemon = data.filterData(window.POKEMON.pokemon, namePokemon);
      printFirstData(pokemon);
      document.getElementById("namePokemon").value = "";
    }

  }

  let printFirstData=(pokemon)=> {

    let pokedex = document.getElementById("pokedexx");
    let evolution = pokemon.next_evolution==null ? "--": pokemon.next_evolution[0].name;
    pokedex.innerHTML = `<strong>Nombre:  </strong><span id='selectedPokemon'>${pokemon.name}</span><div><img src="${pokemon.img}"/></div>
                       <strong>Número:  </strong>${pokemon.num} <br/> <strong>Tipo:    </strong>${pokemon.type} <br/> <strong>Altura:  </strong>${pokemon.height} <br/>
                       <strong>Peso:    </strong>${pokemon.weight} <br/> <strong>Debilidade(s):  </strong> ${pokemon.weaknesses} <br/> <strong>Evolución:  </strong><span id="pokemonEvolution">${evolution}</span>`;
  }

});


// FUNCION LIMPIAR PANTALLA
clearBtn.addEventListener("click", () => {
  document.getElementById("txtResPC").innerHTML = "";
  document.getElementById("pokedexx").innerHTML = "";
  document.getElementById("evPokemon").src = "";

});

let pokemonNextEvolucion=document.getElementById("btnEvolution");
pokemonNextEvolucion.addEventListener("click", ()=>{
let evolutionName=document.getElementById("pokemonEvolution").innerHTML;

let filterEvolution=data.filterData(window.POKEMON.pokemon, evolutionName);
if (filterEvolution.name==null){
  confirm("Este pokemón no tiene evolución");
}
//alert(filterEvolution.name);
let showEvolution=document.getElementById("evPokemon");

showEvolution.src=filterEvolution.img;
// document.innerHTML=filterEvolution.img;
}

);


// FUNCION CALCULAR PODER DE COMBATE
let btnCalcularPC = document.getElementById("btnCalcularPC");
let txtPC = document.getElementById("txtPC");
let txtResPC = document.getElementById("txtResPC");

btnCalcularPC.addEventListener("click", () => {
  let pokemon;
  pokemon = document.getElementById("selectedPokemon").innerHTML;
  let powerCombat = txtPC.value;
  let resPC = data.computeData(window.POKEMON.pokemon,pokemon, powerCombat);
  txtResPC.innerHTML = resPC;
  txtPC.value = "";
});



// FUNCIÓN ORDENAR ALFABETICAMENTE ASCENDENTE
let orderAlpha = document.getElementById("btnOrderAlpha");
orderAlpha.addEventListener("click", () => {
  let pokemonList = data.sortData(window.POKEMON.pokemon);
  let pokemonBox = document.getElementById("generalList");
  let htmlBox = "";
  for (let contPokemon = 0; contPokemon < pokemonList.length; contPokemon++) {
    htmlBox += `<section class="pokemonImgs"><btn class="btn-pok">${pokemonList[contPokemon].num} ${pokemonList[contPokemon].name}
                  <div><img src="${pokemonList[contPokemon].img}"/></div></btn></section>`;
  }
  pokemonBox.innerHTML = htmlBox;
});

// FUNCIÓN ORDENAR ALFABETICAMENTE DESCENDENTE
let btnOrderAlphaDes = document.getElementById("btnOrderAlphaDes");
btnOrderAlphaDes.addEventListener("click", () => {
  //alert("Click Registrado");
  let pokemonList = data.sortDataDes(window.POKEMON.pokemon);
  let pokemonBox = document.getElementById("generalList");
  let htmlBox = "";
  for (let contPokemon = 0; contPokemon < pokemonList.length; contPokemon++) {
    htmlBox += `<section class="pokemonImgs"><btn class="btn-pok">${pokemonList[contPokemon].num} ${pokemonList[contPokemon].name}
                  <div><img src="${pokemonList[contPokemon].img}"/></div></btn></section>`;
  }
  pokemonBox.innerHTML = htmlBox;
});








