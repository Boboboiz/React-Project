import { produce } from "immer"
const initialState = {
    userLogin: null,
}

const reducer = (state = initialState , {type, payload}) => {
    return produce(state, (draft) => {
        if(type === "LOGIN"){
            draft.userLogin = payload
        }
    })
}

export default reducer