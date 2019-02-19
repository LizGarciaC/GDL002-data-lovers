// El evento Load ejecuta el código que le sigue, cuando la página ha cargado toda (html, css ...)
window.addEventListener('load', ()=> { 
    let pokemonList; // Definición de variable para asignar el resultado de la función Obtener Pokemon
    pokemonList=data.getAllPokemon(); // Se solicita al objeto data una función con el arreglo con todos los pokemon
    let pokemonBox=document.getElementById("generalList"); //Se define variable para agregar datos en un div id=generaList
    pokemonBox.innerHTML="Pokemon Región Kanto";
    let htmlBox="";
    for (let contPokemon=0; contPokemon<pokemonList.length; contPokemon++){
        
        htmlBox=htmlBox + 
        "<span>" +
             pokemonList[contPokemon].id + " " + pokemonList[contPokemon].name + 
             "<img src='"+pokemonList[contPokemon].img+"'/>" +
        "</span>";
        console.log(htmlBox);
    
    }
pokemonBox.innerHTML=htmlBox;
    
    pokemonList.forEach(pokemon => {  // Código para poner el dropDown ó lista desplegable del objeto
    let dropDownId=document.getElementById("pokemonId");
    var option = document.createElement("option");
    option.text = pokemon.id;
    dropDownId.add(option);     
        
    });

        pokemonList.forEach(pokemon => {  // Código para poner el dropDown ó lista desplegable del objeto
        let dropDownName=document.getElementById("pokemonName");
        var option = document.createElement("option");
        option.text = pokemon.name;
        dropDownName.add(option); // Agrega el nuevo elemento a la caja de selección ó dropDown

        });
    

});
