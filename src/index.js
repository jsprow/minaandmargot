import React from 'react';
import ReactDOM from 'react-dom';

import WebFontLoader from '@dr-kobros/react-webfont-loader';

import App from './components/App.jsx';

import ga from 'react-ga';

import registerServiceWorker from './registerServiceWorker';

ga.initialize('UA-117931522-1', { debug: true });

const fontConfig = {
  google: {
    families: ['Inconsolata', 'Pacifico']
  }
};

ReactDOM.render(
  <WebFontLoader config={fontConfig}>
    <App />
  </WebFontLoader>,
  document.getElementById('root')
);

registerServiceWorker();
