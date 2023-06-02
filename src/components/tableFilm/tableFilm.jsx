import { Table } from "react-bootstrap";
import { useState, useEffect} from 'react'
import "./tableFilm.css"


const TableFilm = () =>{

  const [films, setFilms] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    fetch("http://localhost:3000/films")
      .then(response => response.json())
      .then(json => setFilms(json))
      .finally(() => {
        setLoading(false)
      })
  }, [])

    return (<>
    <div className='p-5'>  
  <Table striped bordered hover>  
  <thead>  
    <tr>
      <th>ID</th>  
      <th>Title</th>  
      <th>Watch Date</th>  
    </tr>  
  </thead>
  { loading ? <div>Loading...</div> :(
  <tbody>
    {films.map(film=>(
      <tr key = {film.id}>
        <td>{film.title}</td>
        <td>{film.watchdate}</td>
      </tr>
    ))}
  </tbody>)} 
</Table>  
</div>
    </>  );
}
export default TableFilm