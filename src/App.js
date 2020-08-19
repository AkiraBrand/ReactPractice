import * as React from 'react'
import * as ReactDOM from 'react-dom'

const App = () => {
  return React.createElement(
    "div",
    {},
    React.createElement("h1", {}, "Hello World!")
  );
};

ReactDOM.render(
  <div className="App">
    <header className="App-header">
      <img src="/logo.svg" className="App-logo" alt="logo" />
      <h3> React on Repl.it! </h3>
      <p>
        Edit <code>src/App.js</code> to get started!
      </p>
    </header>
  </div>,
  document.getElementById('root')
);
