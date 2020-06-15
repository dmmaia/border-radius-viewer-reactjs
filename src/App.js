import React, {useState, useEffect} from 'react';
import './App.css';

function App() {
  const [borderRadiusValue, setBorderRadius] = useState();
  const [widthValue, setWidth] = useState();
  const [heightValue, setHeight] = useState();

  function changeRadius(event){
    event.preventDefault();

    let box = document.getElementById("box-tester");
    box.style.borderRadius = `${borderRadiusValue}px`;
    
  }

  function changeWidth(event){
    event.preventDefault();

    let box = document.getElementById("box-tester");
    box.style.width = `${widthValue}px`;

  }

  function changeHeight(event){
    event.preventDefault();

    let box = document.getElementById("box-tester");
    box.style.height = `${heightValue}px`;

  }

  return (
    <div className="App">
      <div id = "box-tester" />

      <form onSubmit={changeRadius}>
        <label>Border Radius: </label>
        <input type="number" 
          value={borderRadiusValue}
          onChange={event => setBorderRadius(event.target.value)}
          placeholder="px"
        />
        <input type="submit" value="Apply"/>
      </form>

      <form onSubmit={changeWidth}>
        <label>Width: </label>
        <input type="number" 
          value={widthValue}
          onChange={event => setWidth(event.target.value)}
          placeholder="px"
        />
        <input type="submit" value="Apply"/>
      </form>

      <form onSubmit={changeHeight}>
        <label>Height: </label>
        <input type="number" 
          value={heightValue}
          onChange={event => setHeight(event.target.value)}
          placeholder="px"
        />
        <input type="submit" value="Apply"/>
      </form>

    </div>
  );
}

export default App;
