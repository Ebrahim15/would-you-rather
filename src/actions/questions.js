import { saveQuestion, saveQuestionAnswer } from "../utils/api"


export const GET_QUESTIONS = 'GET_QUESTIONS'
export const ADD_ANSWER = 'ADD_ANSWER'
export const ADD_QUESTION = 'ADD_QUESTION'

export function receiveQuestions (questions) {
    return {
        type: GET_QUESTIONS,
        questions
    }
}

export function addAnswer ({authedUser, qid, answer}) {
    return {
        type: ADD_ANSWER,
        answer: {
            authedUser,
            qid,
            answer
        }
    }
}

export function addQuestion (question) {
    return {
        type: ADD_QUESTION,
        question
    }
}

export function handleAddAnswer (qid, answer){
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

export function handleAddQuestion(optionOne, optionTwo) {
    return(dispatch, getState) => {
        const { authedUser } = getState()

      

        return saveQuestion({
            optionOneText: optionOne,
            optionTwoText: optionTwo,
            author: authedUser
        })
        .then((question) => dispatch(addQuestion(question)))
    }
}
