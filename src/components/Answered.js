import React, {Component} from "react"
import { connect } from "react-redux"
import { Card, ProgressBar } from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css';

class Answered extends Component {
    render(){
        const {userAvatar, userName, optionOne, optionTwo, votesOne, votesTwo} = this.props
        const totalVotes = votesOne + votesTwo;
        const optionOnePercentage = Math.round((votesOne / totalVotes) * 100);
		const optionTwoPercentage = Math.round((votesTwo / totalVotes) * 100);
        return(
            <div>
                <Card style={{ width: '18rem' }}>
                 <Card.Img variant="top" src={userAvatar}/>
                  <Card.Body>
                   <Card.Title>{`${userName} asks:`}</Card.Title>
                   <Card.Text>    
                   Would you rather {optionOne} ?
                    </Card.Text>
                    <ProgressBar now={optionOnePercentage} label={`${optionOnePercentage}%`}/>
                    <Card.Text>{`${votesOne} out of ${totalVotes} votes.`}</Card.Text>
                    <Card.Text>    
                   Would you rather {optionTwo} ?
                    </Card.Text>
                    <ProgressBar now={optionTwoPercentage} label={`${optionTwoPercentage}%`}/>
                    <Card.Text>{`${votesTwo} out of ${totalVotes} votes.`}</Card.Text>
                    </Card.Body>
                    </Card>
            </div>
        )
    }
}

function mapStateToProps ({questions, users}, {qid}) {
    const question = questions[qid]
    return{
        question: question ? question : null,
        user: question ? users[question.author] : null,
        optionOne: question ? question.optionOne.text: '',
        optionTwo: question ? question.optionTwo.text: '',
        votesOne: question ? question.optionOne.votes.length: '',
        votesTwo: question ? question.optionTwo.votes.length: '',
        userAvatar: question ? users[question.author].avatarURL : null,
        userName: question ? users[question.author].name : ''
    }
}

export default connect(mapStateToProps)(Answered)