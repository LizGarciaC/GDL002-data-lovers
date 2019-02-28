require('../src/data.js');

const pokemon = require('../src/data/pokemon/pokemon.json');


describe("pokemon", ()=>{
  it("Should by an object", ()=>{
    expect(typeof pokemon).toBe("object");
  });
});

describe("filterData", ()=>{

  it("Should by a Function", ()=>{
    expect(typeof data.filterData).toBe("function");
  });

  it("Filter by name", () => {
  // expect(data.filterData(pokemon,'Charmander')).toBe(POKEMON[3]);
  expect(data.filterData(pokemon,'Charmander')).toBe(pokemon[3]);
  });

});

describe ("sortData", ()=>{

   it("Shoul by a Function", ()=>{
    expect(typeof data.sortData).toBe("function");
  });

  it("Sort alphabetically by name", ()=>{
   expect(data.sortData(pokemon, "name")).toBe(pokemon);
 });

});
//
describe("computeData",()=>{

  it("Shoul by a Function", ()=>{
   expect(typeof data.computeData).toBe("function");
 });

 // it("Show a PowerCombat of Charmander ", () => {
 // expect(data.computeData('Charmander', 250)).toBe(412.5);
 // });

});


// describe('example', () => {
//   it('is a function', () => {
//     expect(typeof example).toBe('function');
//   });
//
//   it('returns `example`', () => {
//     expect(example()).toBe('example');
//   });
// });


// describe("Pokemon", () => {
//   it("should be an object", () => {
//     expect(typeof pokemon).toBe("object");
//   });
// });
//
// describe("Filter", () => {
//   it("should filter my pokemon by name", () => {
//     expect(filterPokemon( pokemon, "name").toBe();
//   });
// });
//
// describe("My function", () =>{
//   it("should return balbasour name", () => {
//     expect(showBulbasaurName(pokemon))
//   })
// })

// debe estar en data.js
// const filterPokemon=(pokemon,rule)=> pokemon ...;
// const showBulbasaurName=(POKEMON)=>{
//   return POKEMON.pokemon[0].name;
// };
