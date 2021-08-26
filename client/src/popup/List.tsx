import React from 'react';
import './popup.css';

const List: React.FC<{}> = () => {
  return (
    <form>
      <label>
        Drink Water
        <input name='drinkWater' type='number' />
      </label>
    </form>
  );
};

export default List;
