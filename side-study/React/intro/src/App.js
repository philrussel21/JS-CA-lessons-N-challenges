
// the props are destructured for easier access
const Pet = ({ name, animal, breed }) => {
  // create Element accepts three params, 
  // first being the html tag accepted as a string, or another component
  // second is the tag's attributes (id, class, style)
  // third is the child. could be another component or just plain string.
  // in this example, the div is created and three children can be made passed as an array,
  // they don't necessarily needed to be passed as an array since every arg passed after the second would be treated
  // as a child element.
  return React.createElement("div", {}, [
    React.createElement('h1', {}, name),
    React.createElement('h2', {}, animal),
    React.createElement('h2', {}, breed)
  ])
}

// ann App component
const App = () => {
  return React.createElement(
    'div',
    {},
    [React.createElement('h1', {}, 'Adopt Me!'),
    // when a component is passed, the attributes passed becomes props(properties) which is then passed to the function component as an object
    React.createElement(Pet, { name: "Brownie", animal: "Dog", breed: 'Golden Retriever' }),
    React.createElement(Pet, { name: "Bantay", animal: "Dog", breed: 'Husky' }),
    React.createElement(Pet, { name: "Tagpi", animal: "Dog", breed: 'Huskal' })
    ]);
};

ReactDOM.render(
  React.createElement(App),
  document.getElementById('root')
);