export const AUTH = {
     SET_SECRET_CODE: "SET-SECRET-CODE",
     SECRET_CODE_REJECTED: "SECRET-CODE-REJECTED",
     SECRET_CODE_FETCHING: "SECRET-CODE-FETCHING"
 }
let initialState = {
    isAuth: false,
    error: null,
    fetching: null
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case AUTH.SET_SECRET_CODE:
            return {
                ...state,
                isAuth: action.isAuth,
            }
        case AUTH.SECRET_CODE_REJECTED:
            return {
                ...state,
                error: action.payload
            }
        case AUTH.SECRET_CODE_FETCHING:
            return {
                ...state,
                fetching: action.fetching
            }
        default:
            return state;


    }
}

export default authReducer;