import { useState } from 'react'
import Header from './components/Header'
import Modal from './components/Modal'
import IconoNuevoGasto from './img/nuevo-gasto.svg'


function App() {
  
  const [presupuesto, setPresupuesto] = useState(0)
  const [ presupuestoValid, setPresupuestoValid] = useState(false)
  const [modal, setModal] = useState(false)
  const [animar, setAnimar] = useState(false)

  const handleNuevoGasto = () => {
    setModal(true)

    setTimeout(() => {
      setAnimar(true)
    }, 1000)
  }

  return (
    <>
      <Header 
        presupuesto={presupuesto}
        setPresupuesto={setPresupuesto}
        presupuestoValid={presupuestoValid}
        setPresupuestoValid={setPresupuestoValid}
      />

      {presupuestoValid && (
        <div className='nuevo-gasto'>
          <img 
            src={IconoNuevoGasto} 
            alt="icono nuevo gasto"
            onClick={handleNuevoGasto}
          />

        </div>

      )}
      {modal && <Modal setModal={setModal} animar={animar}/>}
    </>  
  )

}

export default App
