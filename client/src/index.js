import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import store from './redux/store'
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html {
    height: 100%
}
  body {
    margin: 0;
    background: lavender;

    padding: 0;
  }
`;

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <GlobalStyle>
      </GlobalStyle>
      <App />

    </React.StrictMode>,
  </Provider>,
  document.getElementById('root'),


);

