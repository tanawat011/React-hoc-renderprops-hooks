import React from 'react';

const Counter = () => {
  const [count, setCount] = React.useState(0);
  const addCount = () => setCount(count + 1);
  return (
    <div>
      <button onClick={() => addCount()}>(Hooks) Click</button>
      <p>Count: {count}</p>
    </div>
  );
};

export default Counter;
