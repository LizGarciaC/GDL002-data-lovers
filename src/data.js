
window.data = {

  getAllPokemon: () => {
    return window.POKEMON.pokemon;
  },

  filterData: (data, namePokemon) => {
    let pokeInfo = [];
    data.forEach((data) => {
      if (data.name == namePokemon) {
        pokeInfo = data;
      }
    });
    return pokeInfo;
  },

  sortData: (data) => {

    let orderedPokemon = data.sort((a, b) => {
      if (a.name > b.name) {
        return 1;
      }
      if (a.name < b.name) {
        return -1;
      }
    });
    return orderedPokemon;
  },

  computeData: (data, pokemonName, powerCombat) => {
    let res = 0;
    data.forEach(element => {
      if (element.name == pokemonName) {
        if (element.multipliers != null) {
          res = element.multipliers[0] * powerCombat;

        }
      }
    });
    return res;
  }
};


