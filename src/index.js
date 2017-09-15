import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import routes from './routes';
import registerServiceWorker from './registerServiceWorker';
import AppComponent from './common/components/AppComponent';

injectTapEventPlugin();

ReactDOM.render(
  <AppComponent>{routes}</AppComponent>,
  document.getElementById('root')
);
registerServiceWorker();
