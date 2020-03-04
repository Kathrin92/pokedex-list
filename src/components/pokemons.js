import './pokemons.scss';
import { createElement, appendContent } from '../lib/dom';

export function createSearchResults(props) {
  const container = createElement('div', {
    className: 'pokemons'
  });

  props.items.forEach(item => {
    const element = createElement('div', {
      innerText: item,
      className: 'pokemon'
    });
    element.addEventListener('click', () => {
      const favorites = [item];
      localStorage.setItem('favorites', JSON.stringify(favorites));
    });
    appendContent(container, element);
  });
  return container;
}
