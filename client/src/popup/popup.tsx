import React from 'react';
import ReactDOM from 'react-dom';
import './popup.css';

const text = <img src='icon.png' />;

const root = document.createElement('div');
document.body.appendChild(root);
ReactDOM.render(text, root);
