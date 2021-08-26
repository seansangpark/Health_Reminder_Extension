import React, { useState } from 'react';
import './popup.css';

const ReminderInput: React.FC<{}> = () => {
  const [reminder, setReminder] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(reminder);
  };

  return (
    <form id='input-box' onSubmit={handleSubmit}>
      <label>What should I remind you for?</label>
      <input
        type='text'
        required
        value={reminder}
        onChange={(event) => setReminder(event.target.value)}
      />
      <input type='submit' value='reminder' />
    </form>
  );
};

export default ReminderInput;
