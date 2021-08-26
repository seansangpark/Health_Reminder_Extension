import React, { useState } from 'react';
import './popup.css';

const timeOptions = [5, 10, 15, 20, 25, 30, 45, 60];

const List: React.FC<{}> = () => {
  const [selectedReminder, setSelectedReminder] = useState('');

  return (
    <form>
      <label>
        Drink Water
        <select>
          <option value='default'>Remind me every</option>
          {timeOptions.map((time, index) => {
            return <option value={time}>{time}</option>;
          })}
        </select>
      </label>
    </form>
  );
};

export default List;
