import React from 'react';

class Enhancer extends React.Component {
  state = {
    count: 0
  };

  addCount = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return this.props.render(this.state.count, this.addCount);
  }
}

const Counter = ({ count, addCount }) => (
  <div>
    <button onClick={() => addCount()}>(Render Props) Click</button>
    <p>Count: {count}</p>
  </div>
);

export default () => (
  <Enhancer
    render={(count, addCount) => <Counter count={count} addCount={addCount} />}
  />
);
