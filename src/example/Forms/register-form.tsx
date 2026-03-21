export interface RegisterFormProps {
  submit: (e: React.FormEvent<HTMLFormElement>) => void;
}

function RegisterForm({ submit }: RegisterFormProps) {
  return (
    <form onSubmit={submit}>
      <input
        type='text'
        id='name'
        required
      />
      <input
        type='password'
        name='password'
        id='password'
        required
      />
      <input
        type='submit'
        value='save'
      />
    </form>
  );
}

export default RegisterForm;
