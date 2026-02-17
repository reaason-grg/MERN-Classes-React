import React, { useContext } from 'react'
import { ThemeContext } from './context/ThemeProvider'
import Navbar from './components/Navbar';

const App = () => {
  const {theme,setTheme}=useContext(ThemeContext)
  return (
    <div className={theme}>
      <Navbar/>
      <h1>{theme}</h1>
      <button onClick={()=>{
        if(theme == 'light'){
                setTheme("dark");
        };
        if(theme == 'dark'){
          setTheme("light")
        };
      }}>Dark Mode</button>
    </div>
  )
};

export default App
