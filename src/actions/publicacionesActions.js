import axios from 'axios';
import { TRAER_TODOS, CARGANDO, ERROR } from '../types/publicacionesTypes';

export const traerTodos = () => async (dispatch) => {
  dispatch({
		type: CARGANDO
	});
  try {
    const respuesta = await axios.get('https://jsonplaceholder.typicode.com/posts');
    dispatch({
    type: TRAER_TODOS,
    payload: respuesta.data
  })
  } catch (err) {
    dispatch({
			type: ERROR,
			payload: err.message
		})
  }
}

export const traerPorUsuario = (key) => async (dispatch, getState) => {
  const { usuarios } = getState().usuariosReducer;
  const usuario_id = usuarios[key].id;
  const respuesta = await axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${usuario_id}`);
  dispatch({
    type: TRAER_TODOS,
    payload: respuesta.data
  })
}