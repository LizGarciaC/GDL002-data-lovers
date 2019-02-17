// El evento Load ejecuta el código que le sigue, cuando la página ha cargado toda (html, css ...)
window.addEventListener('load', ()=> { 
    console.log('Cargando...');
    let pokemonList; // Definición de variable para asignar el resultado de la función Obtener Pokemon
    pokemonList=data.getAllPokemon(); // Se solicita al objeto data una función con el arreglo con todos los pokemon
    let pokemonBox=document.getElementById("generalList"); //Se define variable para agregar datos en un div id=generaList
    pokemonBox.innerHTML="Pokemon Región Kanto";
    let htmlBox="";
    for (let contPokemon=0; contPokemon<pokemonList.length; contPokemon++){
        
           htmlBox=htmlBox + 
           "<div>" +
                pokemonList[contPokemon].id + " " + pokemonList[contPokemon].name + 
                "<img src='"+pokemonList[contPokemon].img+"'/>" +
           "</div>";
           console.log(htmlBox);
           

    
    }
pokemonBox.innerHTML=htmlBox;
    

});