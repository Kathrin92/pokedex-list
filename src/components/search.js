import './search.scss';
import { createElement } from '../lib/dom';

export function createSearchInput(storageValue) {
  const element = createElement('input', {
    className: 'search',
    type: 'search',
    placeholder: 'Enter Pokemon name...',
    value: storageValue
  });
  return element;
}
