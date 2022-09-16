import React, {StrictMode} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/app/app';
// import { Header } from './App';


// const elem = React.createElement('h2', {className: 'greet'}, 'Привет!!');

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( // стрикт мод - проверят на актуальность, строгий режим
  <StrictMode>
      <App/>
  </StrictMode>
);


