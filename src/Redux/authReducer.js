import {authAPI} from "../API/api";

const SET_SECRET_CODE = "SET-SECRET-CODE";
const SECRET_CODE_REJECTED = "SECRET-CODE-REJECTED";
const SECRET_CODE_FETCHING = "SECRET-CODE-FETCHING"
let initialState = {
    isAuth: false,
    error: null,
    fetching: null
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_SECRET_CODE:
            return {
                ...state,
                isAuth: true,
            }
        case SECRET_CODE_REJECTED:
            return {
                ...state,
                error: action.payload
            }
        case SECRET_CODE_FETCHING:
            return {
                ...state,
                fetching: action.fetching
            }
        default:
            return state;


    }
}
export const login = (code) => (dispatch) => {
    dispatch({type: SECRET_CODE_FETCHING, fetching: true})
    authAPI.codeSend(code).then(response => {
        if(response.data.resultCode === 0) {
            dispatch({type: SET_SECRET_CODE})
            dispatch({type: SECRET_CODE_FETCHING, fetching: false})
        }
    })
        .catch(function(error) {
            dispatch({type: SECRET_CODE_REJECTED, payload: error.response.data.message})
            dispatch({type: SECRET_CODE_FETCHING, fetching: false})
        })
}

export default authReducer;