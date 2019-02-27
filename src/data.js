window.data= {

  getAllPokemon:()=>{
    return window.POKEMON.pokemon;
  },


  filterData: (data,namePokemon) =>{
    // console.log(data,namePokemon);
    for(let i=0; i<data.length; i++){
      let pokemon = data[i];
      if(pokemon.name == namePokemon){
        return pokemon;
      }
    }
  },

  sortData:(sortBy, sortOrder) =>{
    console.log(sortBy, sortOrder);
    let orderedPokemon;
    orderedPokemon=window.POKEMON.pokemon.sort((a,b)=>{
      if (a.name > b.name){
        return 1;
      }
      if (a.name < b.name){
        return -1;
      }
      return 0;
    });
    return orderedPokemon;
  },

  computeData : (pokemonName, powerCombat) => {
   let res = 0;
   window.POKEMON.pokemon.forEach(element => {
     if (element.name == pokemonName){
       if (element.multipliers != null){
         res = element.multipliers[0] * powerCombat;
         res="El rango estimado de PC es: " + res;
       }
       else{
         res="Este pokémon no cuenta con posibilidades extra para combate";
       }
     }
   });
   return res;
 }


};

// const filterPokemon=(pokemon,rule)=> pokemon ...;
// const showBulbasaurName=(POKEMON)=>{
//   return POKEMON.pokemon[0].name;
// };
//
// window.example=example;
// window.dataLovers={
//   showBulbasaurName
// }
