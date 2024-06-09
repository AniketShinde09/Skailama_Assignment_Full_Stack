import { CREATE_PROJECTS, GET_PROJECTS, PROJECT_FAILURE, PROJECT_REQUEST } from "./actionTypes"
import axios from 'axios';

const loginDetails = JSON.parse(localStorage.getItem("lama-login-details")) || "";


export const createProjects = (payload) => (dispatch) => {
  dispatch({type:PROJECT_REQUEST})
  axios.post('https://zura-ventures-backend.onrender.com/project/create',payload).then((res)=>{
    // console.log(res)
    dispatch({type:CREATE_PROJECTS})
  }).catch((err)=>{
    // console.log(err)
    dispatch({type:PROJECT_FAILURE});
  })
}

export const getallProjects = (email) => (dispatch) => {
    dispatch({type:PROJECT_REQUEST})
  axios.get('https://zura-ventures-backend.onrender.com/project').then((res)=>{
    // console.log(res)
    let filteredData = res.data.filter((el)=>el.email==loginDetails?.email)
    dispatch({type:GET_PROJECTS,payload:filteredData})
  }).catch((err)=>{
    // console.log(err)
    dispatch({type:PROJECT_FAILURE});
  })
}