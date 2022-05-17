import { saveQuestionAnswer } from "../utils/api"


export const RECEIVE_USERS = 'RECEIVE_USERS'
export const ADD_ANSWER_USER = 'ADD_ANSWER_USER'
export function receiveUsers (users) {
    return {
        type: RECEIVE_USERS,
        users
    }
}

export function addAnswer ({authedUser, qid, answer}) {
    return {
        type: ADD_ANSWER_USER,
        answer: {
            authedUser,
            qid,
            answer
        }
    }
}

export function handleAddAnswerUser (qid, answer){
    return(dispatch, getState) => {
        const { authedUser } = getState()

        

        return saveQuestionAnswer({
            authedUser,
            qid,
            answer
        })
        .then(() => dispatch(addAnswer({
            authedUser,
            qid,
            answer
        })))
  
        }
}