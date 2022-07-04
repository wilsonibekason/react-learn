



import React from "react";
import First from './First.js';
import Second from './Second.js';

class App extends React.Component {
  render() {
    const { name } = this.props;
    return (
      <>
        <h1>
          Hello {name}
        </h1>
        <First/>
        <Second />
      </>
    );
  }
}

export default App;
