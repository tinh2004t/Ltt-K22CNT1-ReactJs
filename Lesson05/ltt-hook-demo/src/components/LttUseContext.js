import React, { createContext, useContext, useState } from 'react'
import LttUseContext1 from './LttUseContext1';
export const ThemeContext = createContext(); //Tao ngu canh de chia se

export default function LttUseContext() {
    //State
    const [theme, setTheme] = useState('red');

    //Ham thay doi theme
    const lttHandleChange = () => {
      setTheme(theme === 'red' ?'blue' : 'red');
    }
  return (
    <ThemeContext.Provider value = {theme}>
    <div className='alert'>
        <h2>Demo LttUseContext</h2>
        <LttUseContext1/>
        <button onClick={lttHandleChange}>Change bgColor</button>
    </div>
    </ThemeContext.Provider>
  )
}
