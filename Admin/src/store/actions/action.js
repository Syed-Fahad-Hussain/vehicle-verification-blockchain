import history from '../../history/index'
export function signedIn(){
    return dispatch => {
        dispatch({ type: "IS_LOGIN", payload: true })
        history.push('/showroom')
    }
}

export function logout(){
    return dispatch => {
        dispatch({ type: "IS_LOGIN", payload: false })
        history.push('/')
    }
}

export function updateUserData(obj){
    return dispatch => {
        dispatch({ type: "USER_DATA", payload: obj })
        history.push('/')
    }
}
