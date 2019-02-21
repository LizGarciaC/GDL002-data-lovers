
window.data= {

  getAllPokemon:()=>{
    return window.POKEMON.pokemon;
  },

  filterData:(namePokemon) =>{
    for(let i=0; i<window.POKEMON.pokemon.length; i++){
      let pokemon = window.POKEMON.pokemon[i];
      if(pokemon.name == namePokemon){
        return pokemon;
      }
    }
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
