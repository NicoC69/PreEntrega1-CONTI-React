import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import NavBar from './component/NavBar';
import Home from './component/Home';
import ItemListContainer from './component/ItemListContainer';
import "./CSS/App.css";
import Cart from './component/Cart';
import Contacto from './component/Contacto';
import ItemDetailContainer from './component/ItemDetailContainer';
import CartWidget from './component/CartWidget';
import ItemCount from './component/ItemCount';
import { CartProvider } from './component/context/ShoppingCartContext';
import Checkout from './component/Checkout';



const App = () => {

    return ( 
        <div className='bodyAPP'>
          
          <CartProvider>
            <BrowserRouter>
              <NavBar />

              <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/contacto" element={<Contacto />} />
                <Route exact path="/item/:id" element={<ItemDetailContainer />} />
                <Route exact path='/Cart' element={<Cart />} />
                <Route exact path="/categoria/:categoria" element={<ItemListContainer />} /> 
                <Route exact path='/checkout' element={<Checkout/>} />           
              </Routes>
            </BrowserRouter>
          </CartProvider>
        </div>
    );
}

export default App

//<Route exact path="/cart" element={<Cart />} />
