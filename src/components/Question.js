import React,{Component} from "react"
import { connect } from "react-redux"
import { Card, Button } from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";

class Question extends Component {
    render(){
         const {question, user} = this.props
     
        let avatarURL
        let name
        try{
            avatarURL = user.avatarURL
            name = user.name
            console.log(avatarURL)
        }
        catch(e){
            console.log(e)
        }  
       
        return (
            <div>
                <Card style={{ width: '18rem' }}>
                 <Card.Img variant="top" src={avatarURL}/>
                  <Card.Body>
                  <Card.Title>    
                   {`${name} asks:`}
                    </Card.Title>
                   <Card.Text>Would You Rather</Card.Text>
                     <Card.Text>    
                     {question.optionOne.text}
                    </Card.Text>
                    <Link to={`/questions/${question.id}`}>
                    <Button variant="primary">View Poll</Button>
                    </Link>
                    </Card.Body>
                    </Card>

            </div>
        )
    }
}

function mapStateToProps({users, questions}, {id}){
    const question = questions[id]

    return {
        user: users[question.author],
        question
    }
}

export default connect(mapStateToProps)(Question)