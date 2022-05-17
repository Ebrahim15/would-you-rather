import React from "react"
import { connect } from "react-redux"
import { NavLink } from "react-router-dom"
import { handleAuthedUser } from "../actions/shared"
import { useSelector } from "react-redux"
import { Button } from "react-bootstrap"

function Nav (props) {
    const authedUser = useSelector(({authedUser}) => authedUser)
    const users = useSelector(({users}) => users)
    const avatarURL = users[authedUser] ? users[authedUser].avatarURL : null
    const name = users[authedUser] ? users[authedUser].name : ''
    return(
        <nav className="nav">
            <ul>
                <li>
                    <NavLink to='/' exact="true" activeclassname='active'>
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/add' activeclassname='active' >
                        New Question
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/leaderboard' activeclassname='active' >
                        LeaderBoard
                    </NavLink>
                </li>
                {authedUser === 'Sign out' ? null : ( <li className="userInfo">
                    <img src={avatarURL ? avatarURL : ""} alt='avatar' className="avatar"/>
                    <label>{name}</label>
                </li>)}
                <Button  id="button" onClick={()=>props.dispatch(handleAuthedUser('Sign out'))}>
                   Logout
                </Button>
            </ul>
        </nav>
    )
}

export default connect()(Nav)