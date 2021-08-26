import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import ListHeader from './ListHeader';
import List from './List';
import ReminderInput from './ReminderInput';
import './popup.css';

// type Reminder = {
//   _id: number;
//   reminder: string;
//   time: number;
// };

// type State = {
//   reminders: { [key: string]: Reminder };
// };

const App: React.FC<{}> = () => {
  const [reminders, setReminders] = useState([{ reminder: '' }]);

  const addReminder = (reminder) => {
    setReminders([...reminders, { reminder }]);
    console.log(reminders);
  };

  return (
    <div>
      <Header />
      <ListHeader />
      <List />
      <ReminderInput />
    </div>
  );
};

const root = document.createElement('div');
document.body.appendChild(root);
ReactDOM.render(<App />, root);
