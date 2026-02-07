import s from './App.module.css';

const email = import.meta.env.VITE_EMAIL;

function App() {
  return (
    <div className={s.App}>
      <h1>email: {email}</h1>
    </div>
  );
}

export default App;
