const INITIAL_STATE = {
    isLogin : false,
    uuid : '',
    email : '',
    token : ''
} 

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
            case 'IS_LOGIN':
            return({
                ...state,
                isLogin : action.payload
            })
            case 'USER_DATA':
            return({
                ...state,
                uuid : action.payload.uuid,
                email : action.payload.email,
                token : action.payload.token
            })
        default:
            return state;
    }

}