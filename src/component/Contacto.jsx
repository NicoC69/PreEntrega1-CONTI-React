import React, { useState } from 'react'
import '../CSS/Contacto.css'
import { collection, getFirestore, addDoc } from 'firebase/firestore';


const Contacto = () => {

  const [id, setId] = useState("")
  const [nombre, setNombre] = useState ('')
  const [email, setEmail] = useState ('')
  const [telefono, setTelefono] = useState ('')
  const [mensaje, setMensaje] = useState ('')

  const db = getFirestore();

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
        <form action="" onSubmit={handleSubmit}>
        <div>
          <input className='inputContacto' type="text" placeholder='Nombre' onChange={(e)=> setNombre(e.target.value)} />
        </div>
        <div>  
          <input className='inputContacto' type="text" placeholder='Telefono' onChange={(e)=> setTelefono(e.target.value)} />
        </div>
        <div>  
          <input className='inputContacto' type="text" placeholder='Email' onChange={(e)=> setEmail(e.target.value)} />
        </div>
        <div>
          <textarea className='inputMsj' type="text" placeholder='Mensaje' onChange={(e)=> setMensaje(e.target.value)}></textarea>
        </div>
          <button type='submit' className='buttonContacto'>Enviar</button>
          <p className='txtContacto'>ID de confirmacion: {id}</p>
        </form>        
      </div> 
    );
  };


export default Contacto