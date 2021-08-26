import React, { useState } from 'react';
import './popup.css';

const timeOptions = [5, 10, 15, 20, 25, 30, 45, 60];

const List: React.FC<any> = (props) => {
  // const [selectedReminder, setSelectedReminder] = useState('');

  return (
    <form>
      <label>
        Drink Water
        <select>
          <option value='default'>Remind me every</option>
          {timeOptions.map((time, index) => {
            return (
              <option value={time} key={index}>
                {time}
              </option>
            );
          })}
        </select>
        min
      </label>
      <br />
      <label>
        Stretch
        <select>
          <option value='default'>Remind me every</option>
          {timeOptions.map((time, index) => {
            return (
              <option value={time} key={index}>
                {time}
              </option>
            );
          })}
        </select>
        min
      </label>
      <br />
      <label>
        Breathing Exercise
        <select>
          <option value='default'>Remind me every</option>
          {timeOptions.map((time, index) => {
            return (
              <option value={time} key={index}>
                {time}
              </option>
            );
          })}
        </select>
        min
      </label>
      <br />
      <label>
        Posture
        <select>
          <option value='default'>Remind me every</option>
          {timeOptions.map((time, index) => {
            return (
              <option value={time} key={index}>
                {time}
              </option>
            );
          })}
        </select>
        min
      </label>
      <br />
    </form>
  );
};

export default List;
