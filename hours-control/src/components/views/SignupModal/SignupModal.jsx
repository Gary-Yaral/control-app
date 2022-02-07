import { useEffect, useState } from 'react'
import './SignupModal.css'
import done_icon from '../../../assets/done-icon.jpg'
import info_icon from '../../../assets/info-icon.png'

function SignupModal ({ data, setState, setModal, modal }) {

  const [response, setResponse] = useState({})

  const saveUser = (values) => {
    if(response.response === true) {
      setModal(false);
      setResponse({})
      return;
    }

    fetch('http://localhost:4000/save-user', {
      method: 'POST',
      body: JSON.stringify(values),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(res => res.json())
    .then(res => setResponse(res))
  }

  const close = () => {
    setModal(false);
    setResponse({})
    return;
  }
  return(
    <div className={modal === true ? 'signup-modal':'signup-modal modal-hidden'}>
      <section  className='modal-status'>
        <div>
          { response.response === true ? 
            <div className = "modal-done">
              <img src={done_icon}/>
              <p>Usuario registrado correctamente</p>
            </div>:
            response.response === 400 ? 'No se ha podido regstrar el usuario':
           <div className = "modal-done">
              <img src={info_icon}/>
              <p>¿Deseas registrarte?</p>
            </div>
          }
        </div>
        <div className='modal-buttons'>
        { response.response !== true && 
          <button className ="button-cancel" onClick={() => close()}>Cancelar</button>}
          <button className = "button-ok" onClick={() => saveUser(data)}>Aceptar</button>
        </div>
      </section>
    </div>
  )
}

export default SignupModal;