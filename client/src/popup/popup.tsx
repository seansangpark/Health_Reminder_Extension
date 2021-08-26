import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import ListHeader from './ListHeader';
import List from './List';
import './popup.css';

const image = <img src='icon.png' />;

const App: React.FC<{}> = () => {
  return (
    <div>
      <Header />
      <ListHeader />
      <List />
    </div>
  );
};

const root = document.createElement('div');
document.body.appendChild(root);
ReactDOM.render(<App />, root);
