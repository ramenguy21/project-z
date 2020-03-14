import React from 'react'
import "./Editor.css"
import Point from "./Point"
import Draggable from 'react-draggable'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'

var pointList = [];
var _newpointlist = []
//when loading pass in the translate() function to the draggable props
//when saving, store the values of transform : translate() of the Draggable class

class Editor extends React.Component {

    constructor(props) {
        super(props)
        this.state = { state_point_list: [],
                        d_name : "" }
        this.GridRef = React.createRef()
        this.NumberList = this.NumberList.bind(this)
    }

    newPoint() {
        pointList.push(new Point())
        this.setState({
            state_point_list:
                pointList//this causes a re-render so do not remove???
        })
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    NumberList() {
        const listitems = this.state.state_point_list.map((x, index) =>
            <Draggable bounds={{ top: -1 * index * 20, left: 0, right: 480, bottom: 480 - index * 20 }}>
                <div>
                    <Point></Point>
                </div>
            </Draggable>
        );
        //console.log(listitems)
        return (listitems);
    }

    loadDisease() {
        this.setState({
            state_point_list: []
        })
       // this.setState({
       //     state_point_list: _newpointlist
       // })//this will just simply cause a re-render of the NumberList so it's cool
        //render the points according to _newpointlist under the editor-frame 
        //listitems = []
        //while also emptying the list somehow ???
    }

    saveDisease() {

        for (let index = 0; index < this.GridRef.current.children.length; index++) {
            _newpointlist[index] = this.GridRef.current.children[index].style.transform;

        }
        console.log(this.state)
    }




    render() {
        return (
            <div>
                <Container className="mt-3">
                    <Card>
                        <Form className="p-3">
                            <Row>
                                <Col sm="2">
                                    <Form.Group controlId="editor.name">
                                        <Form.Label>Disease Name</Form.Label>
                                        <Form.Control id="d_name" onChange={this.handleChange} type="text" placeholder="Cerebral Palsy" />
                                    </Form.Group>
                                    <Button onClick={this.newPoint.bind(this)}>Add New Point</Button>
                                    <Button className="mt-2" type="button" onClick={this.saveDisease.bind(this)} value="save">Save</Button>
                                </Col>
                                {/*extract this component out, pass the points in as props*/}
                                <Col sm="6">
                                    <div className="editor-frame" ref={this.GridRef}>
                                        <this.NumberList>
                                        </this.NumberList>
                                    </div>
                                </Col>
                                <Col sm="4">
                                    <Form.Control as="select">
                                        <option>Disease 1</option>
                                        <option>Disease 2</option>
                                        <option>Disease 3</option>
                                    </Form.Control>
                                    <Button className="mt-2" onClick={this.loadDisease.bind(this)}>Load</Button>
                                </Col>
                            </Row>
                        </Form>
                    </Card>

                </Container>
            </div >
        )
    }
}

export default Editor