import React from "react";
import { connect, useSelector } from "react-redux";
import UnAnswered from "./UnAnswered";
import Answered from "./Answered";
import { useParams } from 'react-router-dom'
import PageNotFound from "./PageNotFound";

function ViewPoll() {
        const {question_id} = useParams()
        const authedUser = useSelector(({authedUser}) => authedUser)
        console.log("view poll: ", authedUser)
        const users = useSelector(({users}) => users)
        const questions = useSelector(({questions}) => questions)
        const check = questions[question_id] ? questions[question_id].optionOne.votes.concat(questions[question_id].optionTwo.votes).includes(authedUser) : null
        console.log("view poll: ", users)
        console.log("view poll: ", check)
        let answers
        try {
            answers = users[authedUser].answers
        } catch (e) {
            answers = []
            console.log(e)
        }
        return(
            <div>
                {Object.keys(questions).includes(question_id) ? Object.keys(answers).includes(question_id) ? <Answered qid={question_id}/>: <UnAnswered qid={question_id}/> : <PageNotFound/>}
            </div>
        )
    
}


export default connect(null)(ViewPoll)