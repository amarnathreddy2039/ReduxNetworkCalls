import * as ActionTypes from './types';
import axios from 'react-native-axios';


const headers={
  Accept: 'application/json',
  'Content-Type': 'application/json'
}

export const callWebservice = (url) => {
  return dispatch => {
      dispatch(serviceActionPending())
      axios.get(url,{
        headers:headers
      })
      .then(response => {
          dispatch(serviceActionSuccess(response.data.data.children))
      })
      .catch(error => {
          dispatch(serviceActionError(error))
      });
  }
}

export const serviceActionPending = () => ({
  type: ActionTypes.SERVICE_PENDING
})

export const serviceActionError = (error) => ({
  type: ActionTypes.SERVICE_ERROR,
  error: error
})

export const serviceActionSuccess = (data) => ({
  type: ActionTypes.SERVICE_SUCCESS,
  data: data
})