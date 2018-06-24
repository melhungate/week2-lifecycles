import React, { Component } from 'react'

class App extends Component {
  constructor() {
    super()
    console.log('Constructor');
    this.state = {
      name: 'Mel'
    };
  }

  componentDidMount() {
    console.log('Component Did Mount');
    this.setState({ name: 'Ksenija'});
    //debugger;
  }

  render() {
    console.log('Render');
    return (
      <div>
        <h1>{this.state.name}</h1>
       </div>
      )
  }
}

export default App