import './app.scss';
import { createElement, appendContent } from './lib/dom';
import { createTitle } from './components/title';
import { createSearchInput } from './components/search';
import { createPokemons } from './components/pokemons';
import Logo from './assets/pokeball.png';

const allPokemons = [
  'Pikachu',
  'Pichu',
  'Glumanda',
  'Shiggy',
  'Bisasam',
  'Pummeluff',
  'Turtok',
  'Karpador'
];

export function app() {
  const header = createElement('header', {
    className: 'header'
  });
  const main = createElement('main', {
    className: 'main'
  });
  const title = createTitle('Pokedex-List');
  const searchInput = createSearchInput(sessionStorage.getItem('searchValue'));
  const logo = createElement('img', {
    className: 'logo',
    src: Logo
  });

  header.appendChild(logo);
  header.appendChild(title);
  main.appendChild(searchInput);

  let pokemons = createPokemons(allPokemons);
  main.appendChild(pokemons);

  searchInput.addEventListener('input', event => {
    main.removeChild(pokemons);

    const searchValue = event.target.value;
    const lowerCaseSearchValue = searchValue.toLowerCase();

    const filteredPokemons = allPokemons.filter(pokemon => {
      return pokemon.toLowerCase().startsWith(lowerCaseSearchValue);
    });

    pokemons = createPokemons(filteredPokemons);
    appendContent(main, pokemons);

    sessionStorage.setItem('searchValue', searchValue);
  });

  return [header, main];
}
