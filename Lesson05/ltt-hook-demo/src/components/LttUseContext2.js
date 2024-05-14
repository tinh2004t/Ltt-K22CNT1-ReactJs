import React, { useContext } from 'react'
import { ThemeContext } from './LttUseContext'

export default function LttUseContext2() {
    const theme = useContext(ThemeContext);
  return (
    <div className={theme +' '+ 'm-3'}>
        <h2>LttUseContext2</h2>
        <p>
            <b>2210900130</b>
            <b>Le Tuan Tinh</b>
            <b>K22CNT1</b>
        </p>
    </div>
  )
}
