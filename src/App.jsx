import React from 'react'
import NavBar from './component/NavBar'
import ItemListContainer from './component/ItemListContainer'
import "./component/App.css" 


const App = () => {
  return (
    <div>
      <NavBar />
      <ItemListContainer greeting={"Bienvenido"} />
    </div>
  )
}

export default App
