
window.data= {

  getAllPokemon:()=>{
    return window.POKEMON.pokemon;
  },


  filterData: (data,namePokemon) =>{
    console.log(data,namePokemon);
    for(let i=0; i<data.length; i++){
      let pokemon = data[i];
      if(pokemon.name == namePokemon){
        return pokemon;
      }
    }
  },

  sortData:(sortBy, sortOrder) =>{
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
