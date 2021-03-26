import React, { useState, useRef } from 'react';
import DropdownBL from './components/DropdownBL';
import './App.css';

function App() {
    /*
  setBgColor takes a string initially 
  Always communicate what type of data we want to the next developer / future you 6 months away
  */
    const [bgroundColor, setBgColor] = useState('');

    /*useRef does not work until the elements are on the DOM. 
      So it initially has a null value.
    */

    const appBground = useRef(null);

    /*
    we have a function that takes a string and changes the background. 
    we can pass this down to other components as props.
  */
    const handleBGColorChange = (color) => {
        setBgColor(color);
        appBground.current.style.background = bgroundColor;
    };

    return (
        <div ref={appBground} className="App">
            <DropdownBL handleBGColorChange={handleBGColorChange} />
            <h2>{bgroundColor}</h2>
        </div>
    );
}

export default App;
