import './title.scss';
import { createElement } from '../lib/dom';

export function title() {
  const titleAttributes = {
    innerText: 'Pokedex-List',
    className: 'title'
  };
  const element = createElement('h1', titleAttributes);

  return element;
}

//import './title.scss';
//import { createElement } from '../lib/dom';

//export function title() {
//const element = createElement('h1', {
//innerText: 'Pokedex-List',
//className: 'title'
// });

//return element;
//}
