// El evento Load ejecuta el código que le sigue, cuando la página ha cargado toda (html, css ...)

let pantallaPrincipal=document.getElementById("divPantallaPrincipal");
let listaPokemon=document.getElementById("divListaPokemon");
let pokedex=document.getElementById("divPokedex");

showMorePokemon.addEventListener('click', ()=> {
    pantallaPrincipal.style.display="none";
    pokedex.style.display="none";
    listaPokemon.style.display="block";

    let pokemonList; // Definición de variable para asignar el resultado de la función Obtener Pokemon
      pokemonList=data.getAllPokemon(); // Se solicita al objeto data una función con el arreglo con todos los pokemon
      let pokemonBox=document.getElementById("generalList"); //Se define variable para agregar datos en un div id=generaList
      //  pokemonBox.innerHTML="Pokemon Región Kanto";
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
  
  
  });
  
  // Funcion para buscar el pokemon

  searchPokemon.addEventListener('click', ()=> {

    pantallaPrincipal.style.display="none";
    listaPokemon.style.display="none";
    pokedex.style.display="block";

  document.getElementById("searchBtn").addEventListener("click", searchPoke); 



  function searchPoke(){

    filterData(POKEMON.pokemon, document.getElementById("namePokemon").value);
    document.getElementById("namePokemon").value="";
  }

  
  


      let filterData=(data,condition) => {  
    for(let i=0; i<data.length; i++){
      let pokemon = data[i];
      if (pokemon.name == condition) {
        printFirstData(pokemon);
      
       }
    }
  }
  
  
 



  
  
   function printFirstData(pokemon){
     let image=document.getElementById("info1");
     let pokedex=document.getElementById("pokedexx");
     
     pokedex.innerHTML= "Nombre: " +  pokemon.name + "<br>" + "Número:  " + pokemon.num +
                         "<br>" + "Tipo:  " + pokemon.type + "<br>" + "Altura:  " + pokemon.height +
                         "<br>" + "Peso:  " + pokemon.weight + "<br>" + "Debilidade(s):  " + pokemon.weaknesses;
     
     image.setAttribute("src", ""+pokemon.img);


  }


});
 
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
