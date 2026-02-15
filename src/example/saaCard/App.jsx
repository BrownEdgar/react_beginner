import Card from '../../components/Card/Card';
import './App.scss';

function App() {
  return (
    <div className='App'>
      <Card
        title='Card 1'
        theme='dark'
      >
        <p>This is a card component.</p>
        <button>Click me</button>
      </Card>

      <Card theme='dark'>
        <img src='https://images.unsplash.com/photo-1761839257961-4dce65b72d99?q=80&w=2532&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' />
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum doloribus quod odio
          similique! Doloremque dolor ea temporibus sequi autem magni cumque quisquam tempora quod
          nihil ipsam veritatis laboriosam, dolore alias.
        </p>
      </Card>

      <Card title='Card 3' />
    </div>
  );
}

export default App;
