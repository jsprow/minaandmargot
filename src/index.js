import React from 'react';
import ReactDOM from 'react-dom';

import WebFontLoader from '@dr-kobros/react-webfont-loader';

import App from './components/App.jsx';

import registerServiceWorker from './registerServiceWorker';

const fontConfig = {
  google: {
    families: ['Inconsolata', 'Crafty Girls']
  }
};

ReactDOM.render(
  <WebFontLoader config={fontConfig}>
    <App />
  </WebFontLoader>,
  document.getElementById('root')
);

registerServiceWorker();
