import React, {Component} from "react"
import { connect } from "react-redux"
import { handleAuthedUser } from "../actions/shared"
import { Card, Button, Form} from "react-bootstrap"
import Select from 'react-select'

class Login extends Component {
    state = {
        value:'Select User',
    }
    handleSubmit = (e) => {
        e.preventDefault()
        this.props.dispatch(handleAuthedUser(this.state.value))
    }
    handleChange = (e) => {
        this.setState({value: e.value})
    }
    render(){
        const options = []
        this.props.userNames.map((user) => (
               options.push({ value: `${user.id}`, label: `${user.name}` })                
        ))
       console.log("options: " , options)
        return(
            <div>
             {/* <form onSubmit={this.handleSubmit}>
                 <label>Sign In</label>
                 <select onChange={this.handleChange}>
                     <option value="Select User">Select User</option>
                     {this.props.userNames.map((user) => (
                        <option key={user.id} value={user.id}>{user.name}</option>
                    ))}
                </select>
                <button type="submit" disabled={this.state.value === 'Select User' }>Sign in</button>
            </form> */}

        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={require('../images/would-you-rather.png')} />
            <Card.Body>
                <Card.Title>Welcome To Would You Rather App!</Card.Title>
                <Card.Text>
                Please sign in to continue.
                </Card.Text>
                <Form onSubmit={this.handleSubmit}>
                 {/* <select onChange={this.handleChange}>
                     <option value="Select User">Select User</option>
                     {this.props.userNames.map((user) => (
                        <option key={user.id} value={user.id}>{user.name}</option>
                    ))}
                </select> */}
                
                <Select placeholder="Select user" options={options} onChange={this.handleChange}/>
                <Button variant="primary" type="submit" disabled={this.state.value === 'Select User' }>Sign in</Button>
            </Form>
            </Card.Body>
        </Card>
        </div>
        )
    }
}

function mapStateToProps ({users, authedUser}) {
    return {
        authedUser,
        avatarURL: Object.keys(users).map((key) => users[key].avatarURL),
        userNames: Object.keys(users).map((key) => users[key])
    }
}

export default connect(mapStateToProps)(Login)