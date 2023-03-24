import React from 'react'
import CerrarBtn from '../img/cerrar.svg'

const Modal = ({setModal, animar}) => {

  const ocultarModal = () => {
    setModal(false)
  }

  return (
    <div className='modal'>

      <div className='cerrar-modal'>
        <img 
          src={CerrarBtn} 
          alt="cerrar modal"
          onClick={ocultarModal}  
        />
      </div>
        <form className={`formulario ${animar ? 'animar' : ''}`}>
          <legend>Nuevo Gasto</legend>
        </form>

    </div>
  )
}

export default Modal