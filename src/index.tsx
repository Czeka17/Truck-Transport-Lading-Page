import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
document.title = 'Czekańska Katarzyna';

const metaDescription = document.createElement('meta');
metaDescription.name = 'description';
metaDescription.content = 'Strona firmy transportowej prowadzonej przez Katarzynę Czekańską';
document.getElementsByTagName('head')[0].appendChild(metaDescription);
const metaKeywords = document.createElement('meta');
metaKeywords.name = 'keywords';
metaKeywords.content = 'transport, firma transportowa, usługi transportowe, Katarzyna Czekańska';
document.getElementsByTagName('head')[0].appendChild(metaKeywords);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
