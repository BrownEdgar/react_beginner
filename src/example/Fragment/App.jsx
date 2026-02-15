import { Fragment } from 'react';

export default function App() {
  return (
    <>
      {['1', '2', '3'].map((item) => {
        return (
          <Fragment key={item}>
            <h1>isActive Example {item}</h1>
            <h2>Home</h2>
            <hr />
          </Fragment>
        );
      })}
    </>
  );
}
