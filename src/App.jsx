import { useState } from 'react'
import TableFilm from "./components/tableFilm/tableFilm.jsx"
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationBar from './components/navigationBar/navigationBar.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <NavigationBar></NavigationBar>
    <TableFilm></TableFilm>
    </>
  )
}

export default App
