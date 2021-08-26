import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './options.css';

const App: React.FC<{}> = () => {
  return (
    <div>
      <img src='icon.png' />
      <h1>Healthy Reminder</h1>
    </div>
  );
};

const root = document.createElement('div');
document.body.appendChild(root);
ReactDOM.render(<App />, root);

// const root = document.createElement('div');
// document.body.appendChild(root);
// ReactDOM.render(text, root);
