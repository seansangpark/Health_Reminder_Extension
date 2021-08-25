import React from 'react';
import ReactDOM from 'react-dom';
import Reminder from './reminder';
import './popup.css';

const image = <img src='icon.png' />;

const App: React.FC<{}> = () => {
  return (
    <div>
      <h1>Hello from React</h1>
      <Reminder />
    </div>
  );
};

const root = document.createElement('div');
document.body.appendChild(root);
ReactDOM.render(<App />, root);
