import './Form.scss';

function ToDoForm({ handleSubmit }) {
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
