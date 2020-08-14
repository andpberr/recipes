import React, {useState} from 'react';
import './App.css';
import Header from './components/Header';
import Recipe from './components/Recipe';
const fetch = require('node-fetch');

function App() {
  const [recipes , setRecipes] = useState([]);
fetch("https://apb-api.glitch.me/recipes", {method: "Get"})
    .then(res => res.json())
    .then(data => 
        data.map(e=>(<Recipe {...e} />))
    )
    .then(arry => {
      setRecipes(arry);
    });

  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
      {recipes}
    </div>
  );
}

export default App;
