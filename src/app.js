import './app.scss';
import { createElement, appendContent } from './lib/dom';
import { createTitle } from './components/title';
import { createSearchInput } from './components/search';
import { createPokemons } from './components/pokemons';
import Logo from './assets/pokeball.png';

const allPokemons = ['Pikachu', 'Pichu', 'Shiggy', 'Glumanda', 'Bisasam'];

function filterPokemons(searchValue) {
  const lowerCaseSearchValue = searchValue.toLowerCase();

  const filteredPokemons = allPokemons.filter(pokemon => {
    return pokemon.toLowerCase().startsWith(lowerCaseSearchValue);
  });
  return filteredPokemons;
}

export function app() {
  const header = createElement('header', {
    className: 'header'
  });
  const main = createElement('main', {
    className: 'main'
  });
  const title = createTitle('Pokedex-List');
  const searchInput = createSearchInput('');
  const logo = createElement('img', {
    className: 'logo',
    src: Logo
  });

  let pokemons = null;
  function setSearchResults() {
    const filteredPokemons = filterPokemons(searchInput.value);
    pokemons = createPokemons(filteredPokemons);
    appendContent(main, pokemons);
  }
  setSearchResults();

  appendContent(header, [logo, title]);
  appendContent(main, [searchInput, pokemons]);

  searchInput.addEventListener('input', event => {
    main.removeChild(pokemons);
    setSearchResults();

    const searchValue = event.target.value;

    sessionStorage.setItem('searchValue', searchValue);
  });

  return [header, main];
}
