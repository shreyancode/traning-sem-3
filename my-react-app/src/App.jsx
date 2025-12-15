import { useState } from 'react'
import './todo.css'
import Inputs from './components/inputs.jsx'
import Card from "./components/box.jsx";
import Lists from './components/Lists.jsx'

function App() {
  
  return (
  
      <Card>

    <Inputs>
    </Inputs>
    <Lists></Lists>
    </Card>
  )
}

export default App
