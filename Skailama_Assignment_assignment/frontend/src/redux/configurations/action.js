import {  CONFIG_ADD_NEW, CONFIG_FAILURE, CONFIG_REQUEST, GET_CONFIG, UPDATE_CONFIG,  } from "./actionTypes"
import axios from 'axios';

export const createGeneralConfig = (payload) => (dispatch) => {
  dispatch({type:CONFIG_REQUEST})
  axios.post('https://zura-ventures-backend.onrender.com/general/',payload).then((res)=>{
    // console.log(res)
   
    dispatch({type:CONFIG_ADD_NEW})

    localStorage.setItem("generalId",JSON.stringify(res.data.newInfo))
    
  }).catch((err)=>{
    // console.log(err)
    dispatch({type:CONFIG_FAILURE});
  })
}

export const getGeneralConfig = () => (dispatch) => {
  dispatch({type:CONFIG_REQUEST})
  axios.get('https://zura-ventures-backend.onrender.com/general/').then((res)=>{
    // console.log(res)
    dispatch({type:GET_CONFIG,payload:res.data})
  }).catch((err)=>{
    // console.log(err)
    dispatch({type:CONFIG_FAILURE});
  })
}

export const  updateGeneralConfig = (id,payload) => (dispatch) => {
  dispatch({type:CONFIG_REQUEST})
  axios.put(`https://zura-ventures-backend.onrender.com/general/edit/${id}`,payload).then((res)=>{
    // console.log(res)
    dispatch({type:UPDATE_CONFIG})
  }).catch((err)=>{
    // console.log(err)
    dispatch({type:CONFIG_FAILURE});
  })
}