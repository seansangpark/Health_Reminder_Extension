import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './options.css';

const Options: React.FC<any> = () => {
  const [mode, setMode] = useState('light');

  return (
    <div>
      <div>
        <img src='icon.png' />
        <h1>Healthy Reminder Options</h1>
      </div>
      <div>
        <label>
          Enable Dark Mode
          <button>Dark Mode</button>
        </label>
      </div>
    </div>
  );
};

const root = document.createElement('div');
document.body.appendChild(root);
ReactDOM.render(<Options />, root);

// const root = document.createElement('div');
// document.body.appendChild(root);
// ReactDOM.render(text, root);
