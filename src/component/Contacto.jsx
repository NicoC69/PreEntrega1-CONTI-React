import React, { useState } from 'react'
import Modal from 'react-bootstrap/Modal'
import '../CSS/Contacto.css'
import { collection, getFirestore, addDoc } from 'firebase/firestore';
import { Row, Col, Container, Form } from 'react-bootstrap';


const Contacto = () => {

  const [id, setId] = useState("")
  const [nombre, setNombre] = useState ('')
  const [email, setEmail] = useState ('')
  const [telefono, setTelefono] = useState ('')
  const [mensaje, setMensaje] = useState ('')

  const db = getFirestore();

  const [lgShow, setLgShow] = useState(false);

const handleSubmit = async (e)=>{
  e.preventDefault()

  const order = {
      contacto: {
      nombre,
      email,
      telefono,
      mensaje
      }
    }

  const orderCollection = collection(db, "contacto");

    try {
        const docRef = await addDoc(orderCollection, order);
        setId(docRef.id);
    } catch (error) {
        console.error("No se puedo agregar el doc: ", error);
    }
  }


  return (
<div>    
  <h2 className='tittleContact'>Contacto</h2>
  <Container fluid>  
    <div className='row'>
        <Col sm={12} md={12} lg={12} xl={12}>
        <Form action="" onSubmit={handleSubmit}>
        <div>
          <Form.Group className='mb-3, inputContacto'>
            <Form.Control type='text' placeholder='Nombre'onChange={(e)=> setNombre(e.target.value)}/>
          </Form.Group>
        </div>
        <div>  
          <Form.Group className='mb-3, inputContacto'>
            <Form.Control type='text' placeholder='Telefono'onChange={(e)=> setTelefono(e.target.value)}/>
          </Form.Group>       
        </div>
        <div>  
          <Form.Group className='mb-3, inputContacto'>
            <Form.Control type='text' placeholder='Email'onChange={(e)=> setEmail(e.target.value)}/>
          </Form.Group>
        </div>
        <div >
          <Form.Group className="mb-3, inputMsj" controlId="exampleForm.ControlTextarea1">
            <Form.Control as="textarea" placeholder='Mensaje' rows={10} />
          </Form.Group>        
        </div>
          <button type='submit' className='buttonContacto' onClick={() => setLgShow(true)} >Enviar</button>
          
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

        </Form> 
        </Col>   
      </div> 
    </Container>
  </div>
  );
};


export default Contacto