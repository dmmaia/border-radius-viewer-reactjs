import React, {useState, useEffect} from 'react';
import './App.css';

function App() {
  const [borderRadiusValue, setBorderRadius] = useState();

  function changeRadius(event){
    event.preventDefault();

    let box = document.getElementById("box-tester");
    box.style.borderRadius = borderRadiusValue;
    
    console.log(borderRadiusValue)
  }

  return (
    <div className="App">
      <div id = "box-tester" />
      <form onSubmit={changeRadius}>
        <input type="number" 
          value={borderRadiusValue}
          onChange={event => setBorderRadius(event.target.value)}
        />
        <input type="submit" value="Apply"/>
      </form>
    </div>
  );
}

export default App;
