import { receiveQuestions } from "./questions"
import { receiveUsers } from "./users"
// import { _getUsers } from "../utils/_DATA"
// import { _getQuestions } from "../utils/_DATA"
import { setAuthedUser } from "./authedUser"
import { getInitialData } from "../utils/api"
import { showLoading, hideLoading } from 'react-redux-loading';

const AUTHED_ID = 'Sign out'

export function handleInitialData () {
    return (dispatch) => {
        dispatch(showLoading())

        return getInitialData()
        .then(({users, questions}) => {
            dispatch(receiveUsers(users))
            dispatch(receiveQuestions(questions))
            dispatch(setAuthedUser(AUTHED_ID))
        }).then(() => dispatch(hideLoading()))
    }
}

export function handleAuthedUser (user) {
    return(dispatch) => {
        return dispatch(setAuthedUser(user))
    }
}