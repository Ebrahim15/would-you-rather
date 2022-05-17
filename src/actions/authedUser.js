export const SET_AUTHED_USER = 'SET_AUTHED_USER'

export function setAuthedUser (id) {
    return {
        type: SET_AUTHED_USER,
        id
    }
}

export function logout (id) {
    return {
        type: SET_AUTHED_USER,
        id
    }
}

export function handleLogout(){
    return(dispatch, getState) => {
        dispatch(logout("Sign out"))
        const authedUser = getState()
        console.log("logout: ", authedUser)
    }
}