import React, {Component} from "react"
import { connect } from "react-redux"
import Question from './Question'
import { Tab, Tabs } from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css';

class Dashboard extends Component {
    render(){
        const {authedUser, users} = this.props
        let answers
        try {
            answers = users[authedUser].answers
            console.log("auth: ", authedUser)
        } catch (e) {
            answers = []
            console.log(e)
            console.log("auth:",authedUser)
        }
        
        return (
            <div>
                <Tabs  defaultActiveKey="unanswered" id="uncontrolled-tab-example" className="mb-3">
                   <Tab eventKey="unanswered" title="unanswered">
                   <ul>
                    {authedUser==='Sign out' ? null : this.props.questionId.filter((id) => !Object.keys(answers).includes(id)).map((id) => (
                <li key={id}>
                <Question id={id}/>
            </li>
            ))}
            
                </ul>
                   </Tab>
                   <Tab eventKey="answered" title="answered">
                   <ul>
                   {authedUser==='Sign out' ? null : this.props.questionId.filter((id) => Object.keys(answers).includes(id)).map((id) => (
                <li key={id}>
                <Question id={id}/>
            </li>
            ))}
                </ul>
                   </Tab>
                </Tabs>
            </div>
        )
    }
}

function mapStateToProps({questions, users, authedUser}){
    return {
        questionId: Object.keys(questions)
        .sort((a, b) => questions[b].timestamp - questions[a].timestamp),
        authedUser,
        users,
        questions
    }
  }

export default connect(mapStateToProps)(Dashboard)