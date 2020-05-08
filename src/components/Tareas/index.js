import React from 'react';
import { connect } from 'react-redux'
import * as tareasActions from '../../actions/tareasActions'

class Tareas extends React.Component {
  componentDidMount() {
    this.props.traerTodas()
  }
  render() {
    console.log(this.props)
    return ( 
      <div>
        Tareas Saludar
      </div>
    );
  }
}

const mapStateToProps = ({ tareasReducer }) => tareasReducer

export default connect(mapStateToProps, tareasActions)(Tareas);