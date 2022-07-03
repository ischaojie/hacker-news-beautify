import style from './content.css'
import normalize from './normalize.min.css'

// load style from css file
loadCss(style);
loadCss(normalize);


function loadCss(code) {
  const style = document.createElement('style');
  style.type = 'text/css';
  style.rel = 'stylesheet';
  style.appendChild(document.createTextNode(code));
  const head = document.querySelector("head");
  head.appendChild(style);
}