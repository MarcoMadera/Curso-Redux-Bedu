import React from 'react'

class Guardar extends React.Component {
  render() {
    return ( 
      <div>
        <h1>
          Guardar Tarea
        </h1>
        Usuario Id:
        <input type="number" />
        <br/><br/>
        Titulo:
        <input type="text"/>
        <br/><br/>
        <button>
          Guardar
        </button>
      </div>
     );
  }
}

export default Guardar;