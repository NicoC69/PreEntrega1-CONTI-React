import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import NavBar from './component/NavBar';
import Home from './component/Home';
import ItemListContainer from './component/ItemListContainer';
import "./App.css";
import Cart from './component/Cart';
import Contacto from './component/Contacto';
import ItemDetailContainer from './component/ItemDetailContainer';



const App = () => {

    return ( 
        <div className='bodyAPP'>
          <BrowserRouter>
            <NavBar />

            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/cart" element={<Cart />} />
              <Route exact path="/contacto" element={<Contacto />} />
              <Route exact path="/item/:id" element={<ItemDetailContainer />} />
              <Route exact path="/categoria/:categoria" element={<ItemListContainer />} />            

            </Routes>
          </BrowserRouter>
        </div>
    )
}

export default App