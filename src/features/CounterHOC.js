import React from 'react';

const enhancer = Comp =>
  class extends React.Component {
    state = {
      count: 0
    };

    addCount = () => {
      this.setState({ count: this.state.count + 1 });
    };

    render() {
      return (
        <Comp
          {...this.props}
          count={this.state.count}
          addCount={this.addCount}
        />
      );
    }
  };

const Counter = ({ count, addCount }) => (
  <div>
    <button onClick={() => addCount()}>(HOC) Click</button>
    <p>Count: {count}</p>
  </div>
);

export default enhancer(Counter);
