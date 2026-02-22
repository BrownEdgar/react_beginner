import React from 'react';
import './Form.scss';
function ToDoForm({ handleSublit }) {
  return (
    <form
      className='Form'
      onSubmit={handleSublit}
    >
      <div className='Form__input'>
        <input
          type='text'
          placeholder='Add a task'
          className='Form__input-field'
          id='message'
        />
        <div className='Form__button'>
          <input
            type='submit'
            value={'+'}
            className='Form__button-submit'
          />
        </div>
      </div>
    </form>
  );
}

export default ToDoForm;
