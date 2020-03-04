import './index.scss';
import { app } from './app';
import { appendContent } from './lib/dom';

const elements = app();
appendContent(document.body, elements);

//elements.forEach(document.body.appendChild);
//* funktioniert genau so wie document.body.appendChild(element);
