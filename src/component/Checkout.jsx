import React, {useContext, useState} from 'react';
import { CartContext } from './context/ShoppingCartContext';
import Modal from 'react-bootstrap/Modal'
import { collection, getFirestore, addDoc } from 'firebase/firestore';
import '../CSS/Checkout.css';

const Checkout = () => {

    const { precioTotal, cart, emptyCart } = useContext(CartContext);

    const [lgShow, setLgShow] = useState(false);

    const handleEmpty = () => {
        emptyCart();
    }

        const [id, setId] = useState("")
        const [nombre, setNombre] = useState ('')
        const [email, setEmail] = useState ('')
        const [telefono, setTelefono] = useState ('')
        const [pagar, setPagar] = useState(false);
    
        const db = getFirestore();
    
    const handleSubmit = async (e)=>{
        e.preventDefault()
    
        const order = {
            comprador: {
            nombre,
            email,
            telefono
            },
    
            productos: cart.map(prod => ({
                id: prod.id,
                categoria: prod.categoria,
                marca: prod.marca,
                modelo: prod.modelo,
                cantidad: prod.qty,
                precioTotalProducto: prod.qty * prod.precio,
                })),
                precioTotal: precioTotal(),
            }

        const orderCollection = collection(db, "ordenes");

        try {
            const docRef = await addDoc(orderCollection, order);
            setId(docRef.id);
            setPagar(true);
            handleEmpty ();
        } catch (error) {
            console.error("No se puedo agregar el doc: ", error);
        }
    }


    return (
        <div>
            <h2 className='tittleCO'>Checkout</h2>
            <form action="" onSubmit={handleSubmit}>
                <h3 className='txtH3'>Datos del comprador</h3>
                <input className='inputCO' type="text" placeholder='Nombre' onChange={(e)=> setNombre(e.target.value)} />
                <input className='inputCO' type="text" placeholder='Telefono' onChange={(e)=> setTelefono(e.target.value)} />
                <input className='inputCO' type="text" placeholder='Email' onChange={(e)=> setEmail(e.target.value)} />

                <h3 className='txtTotal'>Total a pagar: ${precioTotal()}</h3>
                <p className='txt'>Id de la compra: {id}</p>
            <div className='containerB'>
                <button type='submit' className='buttonPay' onClick={() => setLgShow(true)}>Pagar</button>
            </div>
                <Modal
                size="lg"
                show={lgShow}
                onHide={() => setLgShow(false)}
                aria-labelledby="example-modal-sizes-title-lg"
                >
                <Modal.Header closeButton>
                    <Modal.Title id="example-modal-sizes-title-lg">
                    ID de Confirmacion: 
                    </Modal.Title>
                </Modal.Header>
                    <Modal.Body>{id} (conserve este codigo)</Modal.Body>
                </Modal>
            
            </form>

            {pagar && (
                <div>
                    

                    <h3 className='txtH3'>Versión para Imprimir:</h3>
                    <p className='txt'>ID de la compra: {id}</p>

                    <button className='buttonBuy' onClick={() => window.print()}>Imprimir</button>
                </div>
            )}
        </div> 
    ) 
}

export default Checkout