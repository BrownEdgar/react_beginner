function Child({ myFunction }) {
  console.log('child component rerender');

  return (
    <div>
      <h1>Child Component</h1>
      <button onClick={myFunction}>Click</button>
    </div>
  );
}

export default Child;
