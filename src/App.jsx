import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationBar from './components/navigationBar/navigationBar.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <NavigationBar></NavigationBar>
      
    </>
  )
}

export default App
