import { CONFIG_ADD_NEW, CONFIG_FAILURE, CONFIG_REQUEST, GET_CONFIG, UPDATE_CONFIG } from "./actionTypes"

const initialState = {
    isLoading : false,
    isError : false,
    isConfigGeneralAdded : false,
    getallGeneralConfigs : [],
    isUpdated : false

}

export const reducer = (state=initialState,{type,payload}) => {
    switch(type){
        case CONFIG_REQUEST : {
            return {
                ...state,
                isLoading : true,
                isError : false,
                  isConfigGeneralAdded : false,
                  isUpdated : false
            }
        }
        case CONFIG_FAILURE : {
            return {
                ...state,
                isLoading : false,
                isError : true,
                isConfigGeneralAdded : false,
            }
        }
        case GET_CONFIG : {
            return {
                ...state,
                isLoading : false,
                isError : false,
                getallGeneralConfigs : payload
            }
        }
        case CONFIG_ADD_NEW : {
            return {
                ...state,
                isLoading : false,
                isError : false,
                isConfigGeneralAdded : true,
            }
        }
        case UPDATE_CONFIG : {
            return {
                ...state,
                isLoading : false,
                isError : false,
                isUpdated : true
            }
        }
        default : {
           return state
        }
    }
}