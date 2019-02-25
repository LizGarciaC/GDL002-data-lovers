let pantallaPrincipal=document.getElementById("divPantallaPrincipal");
let listaPokemon=document.getElementById("divListaPokemon");
let pokedex=document.getElementById("divPokedex");
let ordenAlfabetico=document.getElementById("divOrdenAlfabetico");
let aboutPokemon=document.getElementById("aboutPokemon");

pokedex.style.display="none";
aboutPokemon.style.display="none";
let home=document.getElementById("home");

 showAbout.addEventListener('click', ()=> {
  pokedex.style.display="none";
  listaPokemon.style.display="none";
  pantallaPrincipal.style.display="none";
  aboutPokemon.style.display="block";

});


  home.addEventListener('click', ()=> {
  pokedex.style.display="none";
  listaPokemon.style.display="none";
  ordenAlfabetico.style.display="none";
  aboutPokemon.style.display="none";
  pantallaPrincipal.style.display="block";
});

// clearBtn.addEventListener('click', ()=> {
//   alert("entra");
//   document.getElementById('imgPokemon').reset();
// });

let showMorePokemon=document.getElementById("showMorePokemon");

   showMorePokemon.addEventListener('click', ()=> {
    pantallaPrincipal.style.display="none";
    pokedex.style.display="none";
  //  ordenAlfabetico.style.display="none";
    listaPokemon.style.display="block";

      let pokemonList;
      pokemonList=data.getAllPokemon(); // Se solicita al objeto data una función con el arreglo con todos los pokemon
      let pokemonBox=document.getElementById("generalList"); //Se define variable para agregar datos en un div id=generaList
      //  pokemonBox.innerHTML="Pokemon Región Kanto";
      let htmlBox="";
      for (let contPokemon=0; contPokemon<pokemonList.length; contPokemon++){
        htmlBox += `<section class="pokemonImgs"><span>${pokemonList[contPokemon].num} ${pokemonList[contPokemon].name}
                    <div><img src="${pokemonList[contPokemon].img}"/></div></span></section>`;
      }
      pokemonBox.innerHTML=htmlBox;

});

let searchPokemon=document.getElementById("searchPokemon");

  // Funcion para buscar el pokemon
  searchPokemon.addEventListener('click', ()=> {

    pantallaPrincipal.style.display="none";
    listaPokemon.style.display="none";
  //  ordenAlfabetico.style.display="none";
    pokedex.style.display="block";

  document.getElementById("searchBtn").addEventListener("click", searchPoke);

  function searchPoke() {
    let pokemon,
        namePokemon=document.getElementById("namePokemon");
    if(namePokemon.value==""){
      alert("Escriba el nombre de un pokemon. Ej. Pikachu");
      namePokemon.value="";
      namePokemon.focus();
    }else
    pokemon=data.filterData(window.POKEMON.pokemon,document.getElementById("namePokemon").value);
    printFirstData(pokemon);
    document.getElementById("namePokemon").value="";
  }

  function printFirstData(pokemon){

       let image=document.getElementById("imgPokemon");
       let pokedex=document.getElementById("pokedexx");

             pokedex.innerHTML= ` <strong>Nombre:  </strong>${pokemon.name} <br/> <strong>Número:  </strong>${pokemon.num}    <br/>
                                  <strong>Tipo:    </strong>${pokemon.type} <br/> <strong>Altura:  </strong>${pokemon.height} <br/>
                                  <strong>Peso:    </strong>${pokemon.weight} <br/> <strong>Debilidade(s):  </strong> ${pokemon.weaknesses}`;

            image.setAttribute("src", ""+pokemon.img);
    }

  });


  // ORDENAR Alfabéticamente
  let orderAlpha=document.getElementById("btnOrderAlpha");
  orderAlpha.addEventListener("click", ()=>{
    console.log("ENTRO");
    let pokemonList;
    pokemonList = data.sortData("name", true);
    let pokemonBox=document.getElementById("generaList");
    let htmlBox="";
    for (let contPokemon=0; contPokemon<pokemonList.length; contPokemon++){
      htmlBox += `<section class="pokemonImgs"><span>${pokemonList[contPokemon].num} ${pokemonList[contPokemon].name}
                  <div><img src="${pokemonList[contPokemon].img}"/></div></span></section>`;
    }
    pokemonBox.innerHTML=htmlBox;
  });

    // -------------------------------- para las imagenes-----------------

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1; }
  if (n < 1) {slideIndex = slides.length;}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
