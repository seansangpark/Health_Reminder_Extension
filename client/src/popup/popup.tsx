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

const App: React.FC<any> = () => {
  const [reminders, setReminders] = useState([{ reminder: '' }]);

  const addReminder = (reminder: string) => {
    setReminders([...reminders, { reminder }]);
  };

  return (
    <div>
      <Header />
      <ListHeader />
      <List reminders={reminders} />
      <ReminderInput addReminder={addReminder} />
      <button>Notify Me!</button>
    </div>
  );
};

const root = document.createElement('div');
document.body.appendChild(root);
ReactDOM.render(<App />, root);
