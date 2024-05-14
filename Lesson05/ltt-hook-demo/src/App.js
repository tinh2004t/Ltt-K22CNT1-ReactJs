import React from 'react'
import LttuseState from './components/LttuseState'
import LttuseEffect from './components/LttuseEffect'
import LttUseContext from './components/LttUseContext'
import './App.css'

export default function App() {
  return (
    <div className ='container border mt-3'>
      <h1 className ='text-center'> Le Tuan Tinh - Hook</h1>
      <hr></hr>
      <LttuseState/>
      <hr></hr>
      <LttuseEffect/>
      <hr/>
      <LttUseContext/>
    </div>
  )
}
