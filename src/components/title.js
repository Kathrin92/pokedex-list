import './title.scss';
import { createElement } from '../lib/dom';

export function title(text) {
  const element = createElement('h1', {
    innerText: text,
    className: 'title'
  });

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
