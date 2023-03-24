import React from 'react'
import FormularioPresupuestos from './FormularioPresupuestos'
import ControlPresupuesto from './ControlPresupuesto';

const Header = ({presupuesto, setPresupuesto, presupuestoValid, setPresupuestoValid}) => {

  return (
    <header>
      <h1>Planificador de gastos</h1> 

        {presupuestoValid ? (
          <ControlPresupuesto presupuesto={presupuesto}/>
        ) : (
          <FormularioPresupuestos 
           presupuesto={presupuesto}
           setPresupuesto={setPresupuesto}
           setPresupuestoValid={setPresupuestoValid}
         />
        )}
    </header>
  )
}

export default Header