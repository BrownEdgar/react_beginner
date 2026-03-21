import type React from 'react';
import './Form.scss';

export interface ToDoFormProps {
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

function ToDoForm({ handleSubmit }: ToDoFormProps) {
  return (
    <form
      className='Form'
      onSubmit={handleSubmit}
    >
      <div className='Form__input'>
        <input
          type='text'
          placeholder='Add new task'
          className='Form__input-field'
          id='message'
        />
      </div>
      <div className='Form__button'>
        <input
          type='submit'
          className='Form__button-submit'
          value='+'
        />
      </div>
    </form>
  );
}

export default ToDoForm;
