import {authAPI} from "../API/api";

const SET_SECRET_CODE = "SET-SECRET-CODE";
let initialState = {
    isAuth: false
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_SECRET_CODE:
            return {
                ...state,
                isAuth: true,
            }
        default:
            return state;


    }
}
export const setCode = () => ({type: SET_SECRET_CODE});
export const login = (code) => (dispatch) => {
    authAPI.codeSend(code).then(response => {
        if(response.data.resultCode === 0) {
            dispatch(setCode())
        }
    })
}

export default authReducer;