import './App.css'
import {RouterProvider} from 'react-router-dom'
import myRouter from './router'

function App() {

  function changePath (){
    
  }

  return (
    <>
    <RouterProvider router={myRouter} />
    </>
  )
}

export default App
