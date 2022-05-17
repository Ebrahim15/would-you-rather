import React,{Component} from "react"
import { connect } from "react-redux"
import { Card, Button} from "react-bootstrap"
import { handleAddAnswer } from "../actions/questions"
import 'bootstrap/dist/css/bootstrap.min.css';
import { handleAddAnswerUser } from "../actions/users";

class UnAnswered extends Component {
    state = {
        option: ''
    }
    handleChange = (e) => {
        const option = e.target.value

        this.setState(() => ({
            option
        }))
    }
    handleSubmit = (e) => {
        e.preventDefault()

        const {option} = this.state
        const {dispatch, qid} = this.props
        dispatch(handleAddAnswer(qid, option))
        dispatch(handleAddAnswerUser(qid, option))

        this.setState({
            option:''
        })
    }
       render(){
           const {userAvatar, userName, optionOne, optionTwo} = this.props
           return(
               <div>
                   <Card style={{ width: '18rem' }}>
                 <Card.Img variant="top" src={userAvatar}/>
                  <Card.Body>
                   <Card.Title>Would You Rather</Card.Title>
                   <Card.Text>    
                   {`${userName} asks:`}
                    </Card.Text>
                    <form onSubmit={this.handleSubmit}>
                    <input  type="radio" id="optionOne" name="option" value="optionOne" onChange={this.handleChange}/>
                    <label htmlFor="optionOne">{optionOne}</label><br/>
                    <input   type="radio" id="optionTwo" name="option" value="optionTwo" onChange={this.handleChange}/>
                    <label htmlFor="optionTwo">{optionTwo}</label>
                    <Button type="submit">Submit</Button>
                    </form>
                    </Card.Body>
                    </Card>
               </div>
           )
       }
}

function mapStateToProps ({authedUser, questions, users}, {qid}) {
    const question = questions[qid]
    return{
        question,
        optionOne: question ? question.optionOne.text: '',
        optionTwo: question ? question.optionTwo.text: '',
        authedUser: authedUser ? authedUser : null,
        user: question ? users[question.author] : null,
        userAvatar: question ? users[question.author].avatarURL : null,
        userName: question ? users[question.author].name : ''
    }
}

export default connect(mapStateToProps)(UnAnswered)