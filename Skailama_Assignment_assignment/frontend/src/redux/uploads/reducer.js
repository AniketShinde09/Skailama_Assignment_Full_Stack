import { CREATE_PROJECTS, CREATE_PROJECT_UPLOADS, DELETE_PROJECT_UPLOADS, EDIT_PROJECT_UPLOADS, GET_PARTICULAR_UPLOAD, GET_PROJECTS, GET_PROJECT_UPLOADS, PROJECT_FAILURE, PROJECT_REQUEST, PROJECT_UPLOAD_FAILURE, PROJECT_UPLOAD_REQUEST } from "./actionTypes"

const initialState = {
    isLoading : false,
    isError : false,
    isUploaded : false,
    alluploads : [],
    isDeleted : false,
    particularUpload : {},
    isEdited : false
}

export const reducer = (state=initialState,{type,payload}) => {
    switch(type){
        case PROJECT_UPLOAD_REQUEST : {
            return {
                ...state,
                isLoading : true,
                isError : false,
                isUploaded : false,
                isDeleted : false,
                isEdited : false
            }
        }
        case PROJECT_UPLOAD_FAILURE : {
            return {
                ...state,
                isLoading : false,
                isError : true,
                isUploaded : false,
                isDeleted : false,
                isEdited : false
            }
        }
        case GET_PROJECT_UPLOADS : {
            return {
                ...state,
                isLoading : false,
                isError : false,
                alluploads : payload
            }
        }
        case GET_PARTICULAR_UPLOAD : {
            return {
                ...state,
                isLoading : false,
                isError : false,
                particularUpload : payload
            }
        }
        case CREATE_PROJECT_UPLOADS : {
            return {
                ...state,
                isLoading : false,
                isError : false,
                isUploaded : true
            }
        }
        case EDIT_PROJECT_UPLOADS : {
            return {
                isLoading : false,
                isError : false,
                isEdited : true
            }
        }
        case DELETE_PROJECT_UPLOADS : {
            return {
                isLoading : false,
                isError : false,
                isDeleted : true
            }
        }
        default : {
           return state
        }
    }
}