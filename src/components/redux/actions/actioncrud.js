import axios from 'axios';
import {Config} from '../../../config/config'
import {
  FETCH_USER_SUCCESS,
  FETCH_USER_FAILURE,
  ADD_USER,
  EDIT_USER,
  UPDATE_USER,
  DELETE_USER,
} from './actionType';

export function fetchUSER() {
  return dispatch =>{
    return  axios.get(Config.apiUrl)
      .then( (response)=> {
        console.log(response.data);
        return dispatch({
          type:FETCH_USER_SUCCESS,
          users:response.data
        })

      })
      .catch((error)=> {
        return dispatch({
          type:FETCH_USER_SUCCESS,
          users:[]
        })

      });

  }
}

export function addUSER(data) {
  return dispatch => {
    return axios.post(Config.apiUrl, data)
    .then(response =>{
      return dispatch({
        type: ADD_USER,
        user:response.data
      })
    })

  }
}

export function editUSER(userId) {
  return  dispatch => {
    return axios.get(Config.apiUrl+`/${userId}`)
    .then(response =>{
      console.log(response.data);
      return dispatch({
        type: EDIT_USER,
        user:response.data
      })
    })

  }
}


export  function updateUSER(_id, data) {
  console.log(_id);
  console.log(data);
  return dispatch => {
    return axios.put(Config.apiUrl+`/${_id}`, data)
    .then(response =>{
      return  dispatch({
        type: UPDATE_USER,
        USER:response.data
      })
    })

  }
}

export function deleteUSER(_id) {
  console.log(_id);
  return dispatch => {
    return axios.delete(Config.apiUrl+`/${_id}`)
    .then(response =>{
      return dispatch({
        type: DELETE_USER,
        userId:_id,
      })
    })
  }
}
