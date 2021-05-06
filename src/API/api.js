import axios from "axios";


export const authAPI = {
    codeSend(code) {
        return axios.post('/api/auth/code', {code: code})
    }
}
