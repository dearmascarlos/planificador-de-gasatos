import React from 'react'

const ControlPresupuesto = ({presupuesto}) => {

  const cantidadFormat = (q) => {
    return q.toLocaleString('es-ES', {
      style: 'currency',
      currency:'EUR'
    })
  }


  return (
    <div className='contenedor-presupuesto contenedor sombra dos-columnas'>
      <div>
        <p>Grafica va aqui</p>
      </div>

      <div className='contenido-presupuesto'>
        <p>
          <span>Presupuesto:</span> {cantidadFormat(presupuesto)}
        </p>

      </div>

    </div>
  )
}

export default ControlPresupuesto