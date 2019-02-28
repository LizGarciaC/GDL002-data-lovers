
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
      } else {
        return "error";
      }
    }
  },

  sortData:(data) =>{

    let orderedPokemon=data.sort((a,b)=>{
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

  computeData : (data, pokemonName, powerCombat) => {
   let res = 0;
   data.forEach(element => {
     if (element.name == pokemonName){
       if (element.multipliers != null){
         res = element.multipliers[0] * powerCombat;
       }
       // else{
       //   res="Este pokémon no cuenta con posibilidades extra para combate";
       // }
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
