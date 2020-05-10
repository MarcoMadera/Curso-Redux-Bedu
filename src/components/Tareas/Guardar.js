import React from 'react'
import  { connect } from 'react-redux'
import * as tareasActions from '../../actions/tareasActions'
import Fatal from '../General/Fatal'
import Spinner from '../General/Spinner'
import { Redirect } from 'react-router-dom'

class Guardar extends React.Component {
  cambioUsuarioId = (event) => {
    this.props.cambioUsuarioId(event.target.value)
  }
  cambioTitulo = (event) => {
    this.props.cambioTitulo(event.target.value)
  }
  guardar = (event) => {
    const { usuario_id, titulo,agregar } = this.props;
    const nueva_tarea = {
      userId: usuario_id,
      title: titulo,
      completed: false
    }
    agregar(nueva_tarea)
  }

  deshabilitar = () => {
    const {usuario_id, titulo, cargando} = this.props;

    if(cargando) {
      return true
    }
    if(!usuario_id || !titulo) {
      return true
    }
    return false
  }

  mostrarAccion = () => {
    const {error, cargando} = this.props;
    if (cargando) {
      return <Spinner/>
    }
    if (error) {
      return <Fatal mensaje ={error}/>
    }
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
        <button
          onClick={this.guardar}
          disabled={this.deshabilitar()}
        >
          Guardar
        </button>
        { this.mostrarAccion() }
      </div>
     );
  }
}

const mapStateToProps = ({ tareasReducer }) => tareasReducer;

export default connect(mapStateToProps, tareasActions)(Guardar);