import React from 'react'
import Mensaje from './Mensaje'

const FormularioPresupuestos = ({presupuesto, setPresupuesto, setPresupuestoValid}) => {

  const [mens, setMens ] = React.useState('')

  const handlePresupuesto = (e) =>  {
    e.preventDefault()
    presupuesto && presupuesto > 0 ? setMens('') & setPresupuestoValid(true) : setMens('Esto no es un presupuesto valido')
  }
  
  return (
    <div className='contenedor-presupuesto contenedor sombra'>
        {/* <h2>Nuevo presupuesto</h2> */}
            <form 
              className='formulario'
              onSubmit={handlePresupuesto}
            >
                <div className='campo'>
                    <label>Definir Presupuesto</label>
                    <input
                      className='nuevo-presupuesto'
                      type="number"
                      placeholder='€'
                      value={presupuesto}
                      onChange={(e) => setPresupuesto(Number(e.target.value))}
                    />
                </div>
              <input 
                type="submit" 
                value='añadir'
                />
                {mens && <Mensaje tipo='error'>{mens}</Mensaje>}
            </form>
    </div>
  )
}

export default FormularioPresupuestos