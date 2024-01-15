import { useState } from 'react'
import './App.css'
import { LeftContainer, RightContainer } from './components/containers'
function App() {

  return (
    <>
      <div className="outer-container card">
        <LeftContainer />
        <RightContainer />
      </div>
    </>
  )
}

export default App
