import React from 'react'
import "./Editor.css"
import Point from "./Point"
import FbDropdown from './FirebaseDropdown'
import Draggable from 'react-draggable'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'
import db from '../fbConfig/firebase'


var pointList = [];
var _newpointlist = []
//when loading pass in the translate() function to the draggable props
//when saving, store the values of transform : translate() of the Draggable class

class Editor extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            state_point_list: [],
            d_name: "",
            load_layout: ""//assign a default value to this btw, else the code breaks
        }
        this.GridRef = React.createRef()
        this.NumberList = this.NumberList.bind(this)
    }

    newPoint() {
        var _pointObj = { x: 25, y: 25 }
        pointList.push(_pointObj)
        this.setState({
            state_point_list:
                pointList//this is the thing that causes a re-render so do not remove
        })
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    NumberList() {
        const listitems = this.state.state_point_list.map((x, index) =>//replace x pls
            <Draggable key={index} defaultPosition={{ x: x.x, y: x.y }} bounds={{ top: -1 * index * 20, left: 0, right: 480, bottom: 480 - index * 20 }}>
                <div>
                    <Point></Point>
                </div>
            </Draggable>
        );
        //console.log(listitems)
        return (listitems);
    }

    async loadDisease() {
        pointList = []
        var int_map = []
        var coord
        var v
        try {
            //map doesn't work for some reason
            //query the name and return that instead of getting them all
            db.collection('points').doc(this.state.load_layout).get().then(doc => {
                for (let i = 0; i < doc.data().pointlist.length; i++) {
                    var x = doc.data().pointlist[i]
                    v = x.match(/\d+/g)
                    coord = { x: parseInt(v[0]), y: parseInt(v[1]) }
                    //console.log(coord)
                    int_map[i] = coord
                }
                //state change not causing a re-render
                this.setState({
                    state_point_list: int_map
                })
            })

        }
        catch (error) {
            this.setState({
                state_point_list: []
            })
            console.log(error)
        }

        //this will just simply cause a re-render of the NumberList so it's cool
        //render the points according to _newpointlist under the editor-frame 
        //listitems = []
        //while also emptying the list somehow ???
    }

    saveDisease() {

        for (let index = 0; index < this.GridRef.current.children.length; index++) {
            _newpointlist[index] = this.GridRef.current.children[index].style.transform;

        }
        let data = {
            name: this.state.d_name,
            pointlist: _newpointlist //remove the new pointlist and update state directly
        }
        //console.log(this.state)
        db.collection('points').doc(this.state.d_name).set(data)
    }




    render() {
        return (
            <div>
                <Container className="mt-3">
                    <Card>
                        <Form className="p-3">
                            <Row>
                                <Col sm="2">
                                    <Form.Group>
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
                                    <div>
                                        <select id="load_layout" onChange={this.handleChange}>
                                            <FbDropdown></FbDropdown>
                                        </select>
                                    </div>
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