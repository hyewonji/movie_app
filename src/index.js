import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
//React apllication은 한 번에 하나의 component만 rendering 할 수 있다.
//'App'파일에서 'App' component만 rendering한 상태