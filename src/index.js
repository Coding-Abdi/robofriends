import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import CardList from './CardList.js';
import reportWebVitals from './reportWebVitals';
import 'tachyons';
import { robots } from './robots.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <CardList robots={robots}/>
);

reportWebVitals();
