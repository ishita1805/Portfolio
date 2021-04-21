import React,{ Suspense } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import './i18next';
import { BrowserRouter as Router } from 'react-router-dom'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Suspense fallback={(<div>loading..</div>)}>
      <App />
      </Suspense>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
