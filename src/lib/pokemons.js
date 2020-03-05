const allPokemons = [
  'Pichu',
  'Schiggy',
  'Glumanda',
  'Bisasam',
];

export function filterPokemons(searchValue) {
  const lowerCaseSearchValue = searchValue.toLowerCase();

  const filteredPokemons = allPokemons.filter(pokemon => {
    return pokemon.toLowerCase().startsWith(lowerCaseSearchValue);
  });
  return filteredPokemons;
}
