import React from 'react';

// styling
import './App.css';

// data
import {picArr} from './images/index.js'

// components
import ImageComp from './components/ImageComp'


const App = () => {
  return (
    <div className="App">
      {picArr.map(pic => <ImageComp key={pic.id} pic={pic}/>)}
    </div>
  );
}

export default App;
