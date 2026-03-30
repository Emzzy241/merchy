import React from 'react';
import '../App.css';
import Navbar from './Navbar';
import Collections from './Collections';

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Collections title="MEN COLLECTIONS" image="green" buttonText="Explore Men" />
      <Collections title="WOMEN COLLECTIONS" image="pink" buttonText="Explore Women" />
      <Collections title="SPORTS COLLECTIONS" image="beige" buttonText="Explore Sports" />
      {/* <h2>Welcome to the Dynasty Merch Application,</h2>
      <p>We are delighted to have you here</p> */}
    </React.Fragment>
  );
}

export default App;
