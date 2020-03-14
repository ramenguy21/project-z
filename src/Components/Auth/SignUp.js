import React from 'react'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import db from '../../fbConfig/firebase'

var docref

class SignUp extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: '',
            userName : ''
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        console.log(this.state)
        let docRef = db.collection('users').doc(this.state.userName)
        let setAda = docRef.set(this.state)
    }

    render() {
        return (
            <div>
                <Container>
                    <Form onSubmit={this.handleSubmit}>
                        <h5 className="text-light">Sign Up</h5>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input className="form-control" type="email" id="email" onChange={this.handleChange}></input>
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input className="form-control" type="password" id="password" onChange={this.handleChange}></input>
                        </div>
                        <div className="form-group">
                            <label htmlFor="userName">UserName</label>
                            <input className="form-control" type="text" id="userName" onChange={this.handleChange}></input>
                        </div>
                        <div>
                            <button className="btn-primary">SignUp</button>
                        </div>
                    </Form>
                </Container>
            </div>
        )
    }
}

export default SignUp