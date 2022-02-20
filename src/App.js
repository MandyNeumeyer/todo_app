import './App.css';
import React, { useState, useEffect } from 'react';
import MyToDoApp from './components/MyToDoApp';
import Navbar from './components/Navbar';

function App() {
  const [colorTheme, setColorTheme] = useState('theme_green');


  //effect
  console.log(colorTheme);
  useEffect(() => {
    //check for selected theme in locale storage 
    const currentThemeColor = localStorage.getItem('theme_color');
    //if found set selected theme value in state
    if (currentThemeColor) {
      setColorTheme(currentThemeColor)
    }
  }, [])

  //set theme
  const handleClick = (theme) => {
    setColorTheme(theme);
    localStorage.setItem('theme_color', theme)
  }

  return (
    <div className="App">
      <Navbar handleClick={handleClick} />
      <MyToDoApp colorTheme={colorTheme} />
    </div>
  );
}

export default App;
