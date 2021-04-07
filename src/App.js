import React from 'react';

class App extends React.Component
{
  constructor(props){
    super(props);
    console.log("Constructor");
  }
  state = 
  {
    count: 0
  };
  add = () => {
    this.setState(current => ({ count: current.count + 1}));
    console.log("add");
  };
  minus = () => {
    this.setState(current => ({ count: current.count - 1}));
    console.log("minus");
  };

  componentDidMount() {
    console.log("Component rendered");
  }
  componentDidUpdate() {
    console.log("I just updated");
  }
  componentWillUnmount() {
    console.log("Goodbye, cruel world");
  }
  render()
  {
    console.log("i'm Rendering");
    return (
      <div>
        <h1>The Number is: {this.state.count}</h1>
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>Minus</button>
      </div>
    )
  }
}
export default App;
