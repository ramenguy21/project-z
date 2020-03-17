import React from 'react'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'

class SignIn extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: ''
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
    }

    render() {
        return (
            <div>
                <Container>
                    <Form onSubmit={this.handleSubmit}>
                        <div className="col-sm-5 m-0">
                            <h5 className="text-light">Sign In</h5>
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input className="form-control" type="email" id="email" onChange={this.handleChange}></input>
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <input className="form-control" type="password" id="password" onChange={this.handleChange}></input>
                            </div>
                            <div>
                                <button className="btn-primary">Log In</button>
                            </div>
                        </div>
                    </Form>
                </Container>
            </div>
        )
    }
}

export default SignIn