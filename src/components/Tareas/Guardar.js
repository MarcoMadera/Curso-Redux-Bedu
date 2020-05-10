import React from 'react'
import  { connect } from 'react-redux'
import * as tareasActions from '../../actions/tareasActions'

class Guardar extends React.Component {
  cambioUsuarioId = (event) => {
    this.props.cambioUsuarioId(event.target.value)
  }
  cambioTitulo = (event) => {
    this.props.cambioTitulo(event.target.value)
  }
  render() {
    return ( 
      <div>
        <h1>
          Guardar Tarea
        </h1>
        Usuario Id:
        <input 
          type="number"
          value={this.props.usuario_id}
          onChange={ this.cambioUsuarioId }
        />
        <br/><br/>
        Titulo:
        <input 
          type="text"
          value={this.props.titulo}
          onChange={ this.cambioTitulo }
        />
        <br/><br/>
        <button>
          Guardar
        </button>
      </div>
     );
  }
}

const mapStateToProps = ({ tareasReducer }) => tareasReducer;

export default connect(mapStateToProps, tareasActions)(Guardar);