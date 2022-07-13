import React, { Component } from 'react';

export default function Counter()  {
const [count, setCount] = React.useState(0);
  const incrementCounter = () => {
    setCount(count + 1);
  }

    return (
      <div>
        <h1>Counter 123</h1>

        <p>This is a simple example of a React component.</p>

        <p aria-live="polite">Current count: <strong>{count}</strong></p>

        <button className="btn btn-primary" onClick={incrementCounter}>Increment</button>
      </div>
    );
  }
