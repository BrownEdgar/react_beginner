function RegisterForm(props) {
  return (
    <form onSubmit={props.submit}>
      <input type="text" id='name' required />
      <input type="password" name="password" id="password" required />
      <input type="submit" value="save" />
    </form>
  );
}

export default RegisterForm;