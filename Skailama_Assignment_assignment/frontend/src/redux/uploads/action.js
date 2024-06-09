import { CREATE_PROJECT_UPLOADS,  DELETE_PROJECT_UPLOADS,  EDIT_PROJECT_UPLOADS,  GET_PARTICULAR_UPLOAD,  GET_PROJECT_UPLOADS,  PROJECT_UPLOAD_FAILURE, PROJECT_UPLOAD_REQUEST } from "./actionTypes"
import axios from 'axios';
const loginDetails = JSON.parse(localStorage.getItem("lama-login-details")) || "";
export const createUpload = (payload) => (dispatch) => {
  dispatch({type:PROJECT_UPLOAD_REQUEST})
  axios.post('https://zura-ventures-backend.onrender.com/upload',payload).then((res)=>{
    // console.log(res)
    dispatch({type:CREATE_PROJECT_UPLOADS})
  }).catch((err)=>{
    // console.log(err)
    dispatch({type:PROJECT_UPLOAD_FAILURE});
  })
}

export const getuploads = () => (dispatch) => {
    dispatch({type:PROJECT_UPLOAD_REQUEST})
  axios.get('https://zura-ventures-backend.onrender.com/upload').then((res)=>{
    // console.log(res)
    let filteredData  = res.data.filter((el)=>el.email === loginDetails?.email)
    dispatch({type:GET_PROJECT_UPLOADS,payload:filteredData})
  }).catch((err)=>{
    // console.log(err)
    dispatch({type:PROJECT_UPLOAD_FAILURE});
  })
}

export const getById = (id) => (dispatch) => {
  dispatch({type:PROJECT_UPLOAD_REQUEST})
axios.get(`https://zura-ventures-backend.onrender.com/upload/${id}`).then((res)=>{
  // console.log(res)
  dispatch({type:GET_PARTICULAR_UPLOAD,payload:res.data})
}).catch((err)=>{
  // console.log(err)
  dispatch({type:PROJECT_UPLOAD_FAILURE});
})
}


export const editAndUpload = (id,payload) => (dispatch) => {
  dispatch({type:PROJECT_UPLOAD_REQUEST})
axios.patch(`https://zura-ventures-backend.onrender.com/upload/edit/${id}`,payload).then((res)=>{
  // console.log(res)
  dispatch({type:EDIT_PROJECT_UPLOADS})
}).catch((err)=>{
  // console.log(err)
  dispatch({type:PROJECT_UPLOAD_FAILURE});
})
}


export const deleteupload = (id) => (dispatch) => {
  dispatch({type:PROJECT_UPLOAD_REQUEST})
axios.delete(`https://zura-ventures-backend.onrender.com/upload/delete/${id}`).then((res)=>{
  console.log(res)
  dispatch({type:DELETE_PROJECT_UPLOADS})
}).catch((err)=>{
  console.log(err)
  dispatch({type:PROJECT_UPLOAD_FAILURE});
})
}