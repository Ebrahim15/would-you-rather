import React from "react";
import { connect } from "react-redux";
import { Form, Button } from "react-bootstrap";
import {handleAddQuestion} from '../actions/questions'
import { Navigate} from "react-router-dom";
import { useState } from "react";


function NewQuestion (props) {
    const [optionOne, setOptionOne] = useState('')
    const [optionTwo, setOptionTwo] = useState('')
    const [toHome, setToHome] = useState(false)
    const handleChangeOne = (e) =>{
        e.preventDefault()
        const text = e.target.value
        setOptionOne(text)
    }
    const handleChangeTwo = (e) =>{
        e.preventDefault()
        const text = e.target.value

      
        setOptionTwo(text)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        const {dispatch} = props
       
        
        dispatch(handleAddQuestion(optionOne, optionTwo))

     
        setOptionOne('')
        setOptionTwo('')
        setToHome(true)
       
    }
        if(toHome === true) {
            return <Navigate to='/'></Navigate>
        }
        return(
            <div>
                <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                <h2>Create new question</h2>
                <Form.Label>Would you rather..</Form.Label>
                <Form.Control type="text" placeholder="Enter option one text" value={optionOne} name="optionOne" onChange={handleChangeOne}/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Or</Form.Label>
                <Form.Control type="text" placeholder="Enter option two text" value={optionTwo} name="optionTwo" onChange={handleChangeTwo}/>
                </Form.Group>
                <Button variant="primary" type="submit" disabled={optionOne === '' || optionTwo === '' }>
                   Submit
                </Button>
                </Form>
            </div>
        )
    
}


export default connect()(NewQuestion)