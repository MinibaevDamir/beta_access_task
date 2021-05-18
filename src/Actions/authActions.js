import {authAPI} from "../API/api";
import {AUTH} from "../Reducers/authReducer";

export const logout = () => ({type: AUTH.SET_SECRET_CODE, isAuth: false})

export const login = (code) => (dispatch) => {
    dispatch({type: AUTH.SECRET_CODE_FETCHING, fetching: true})
    authAPI.codeSend(code).then(response => {
        if(response.data.resultCode === 0) {
            dispatch({type: AUTH.SET_SECRET_CODE, isAuth: true})
            dispatch({type: AUTH.SECRET_CODE_FETCHING, fetching: false})
        }
    })
        .catch(function(error) {
            dispatch({type: AUTH.SECRET_CODE_REJECTED, payload: error.response.data.message})
            dispatch({type: AUTH.SECRET_CODE_FETCHING, fetching: false})
        })
}

