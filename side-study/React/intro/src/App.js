import React from "react";
// Imports render method from the ReactDOM package
import { render } from "react-dom";
import Pet from "./Pet";
import SearchParams from './SearchParams'

// to move a component from one file to another (creating a module), highlight the function and hit move to a new file,
// imports and export would be handled by VSCODE.

// ann App component
const App = () => {
  // return React.createElement(
  //   'div',
  //   {},
  //   [React.createElement('h1', {}, 'Adopt Me!'),
  //   // when a component is passed, the attributes passed becomes props(properties) which is then passed to the function component as an object
  //   React.createElement(Pet, { name: "Brownie", animal: "Dog", breed: 'Golden Retriever' }),
  //   React.createElement(Pet, { name: "Bantay", animal: "Dog", breed: 'Husky' }),
  //   React.createElement(Pet, { name: "Tagpi", animal: "Dog", breed: 'Huskal' })
  //   ]);

  // attributes passed to Components would be their props(properties) as key-value pairs ie {name: Brownie ...}
  return (
    <div>
      <h1 id="something-important">Adopt Me!</h1>
      {/* <Pet name="Brownie" animal="Dog" breed="Golden Retriever" />
      <Pet name="Bantay" animal="Dog" breed="Husky" />
      <Pet name="Tagpi" animal="Dog" breed="Huskal" /> */}
      <SearchParams />
    </div>
  )
};

// renders rerun everytime an event happen in the browser
render(
  <App />,
  document.getElementById('root')
);