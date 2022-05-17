import React, {Component} from "react"
import { connect } from "react-redux"
import { Table } from "react-bootstrap"
class LeaderBoard extends Component {
    render(){
        console.log("users: ", this.props.users)
        const {users} = this.props
        const sortedUsers = Object.keys(users)
        .sort((a, b) => {
            const a2 = users[a].questions.length + Object.keys(users[a].answers).length
            const b2 = users[b].questions.length + Object.keys(users[b].answers).length
            return b2-a2
        })
        
        console.log("sortedUsers: ", sortedUsers)
        return(
            <div>
                <Table striped bordered hover>
                   <thead>
                    <tr>
                    <th>#</th>
                    <th>User</th>
                    <th>Answered questions</th>
                    <th>Created questions</th>
                    <th>Score</th>
                    </tr>
                    </thead>
                    <tbody>
                         {
                          sortedUsers.map((user, index) => (
                            <tr key={users[user].id}>
                            <td>{index + 1}</td>
                            <td><img alt={users[user].name} className="avatar" src={users[user].avatarURL}/>{users[user].name}</td>
                            <td>{Object.keys(users[user].answers).length}</td>
                            <td>{users[user].questions.length}</td>
                            <td>{users[user].questions.length + Object.keys(users[user].answers).length}</td>
                            </tr>
                        ))}
                    </tbody>
                    </Table>
            </div>
        )
    }
}

function mapStateToProps({users}) {
    return {
        users: users ? users: null,
    }
}

export default connect(mapStateToProps)(LeaderBoard)