import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './Navbar';

function App() {
  return (
    <div>
      <Navbar />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));