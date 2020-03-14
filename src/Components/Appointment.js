import React from 'react'
import "./Form.css"

class AppointmentForm extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            name : '',
            ph_no : '',
            e_addr : '',
            a_date : '',
            diag : ''
        }
    }


    render() {
        return (
            <div class="inner-layer">
                <div class="container">
                    <div class="row no-margin">
                        <div class="col-sm-7">
                            <div class="content">
                                <h1>Hijama Therapy</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus accusantium nostrum,
                            eaque nemo ratione quae itaque natus. Minima, eius aperiam.</p>
                            </div>
                        </div>
                        <div class="col-sm-5">
                            <div class="form-data">
                                <div class="form-head">
                                    <h2>Book Appointment</h2>
                                </div>
                                <div class="form-body">
                                    <div class="row form-row">
                                        <input type="text" placeholder="Enter Full name" class="form-control" />
                                    </div>
                                    <div class="row form-row">
                                        <input type="text" placeholder="Enter Phone number" class="form-control" />
                                    </div>
                                    <div class="row form-row">
                                        <input type="text" placeholder="Enter Email address" class="form-control" />
                                    </div>
                                    <div class="row form-row">
                                        <input type="text" placeholder="Appointment Date" class="form-control" />
                                    </div>
                                    <div class="row form-row">
                                        <input type="text" placeholder="Diagnosis" class="form-control" />
                                    </div>
                                </div>
                                <h6>Address Details</h6>

                                <div class="row form-row">
                                    <div class="col-sm-6">
                                        <input type="text" placeholder="Enter Address" class="form-control" />
                                    </div>
                                    <div class="col-sm-6">
                                        <input type="text" placeholder="Enter City" class="form-control" />
                                    </div>
                                    <div class="col-sm-6">
                                        <input type="text" placeholder="Enter Province" class="form-control" />
                                    </div>
                                    <div class="col-sm-6">
                                        <input type="text" placeholder="Postal Code" class="form-control" />
                                    </div>
                                </div>

                            </div>

                            <div class="row form-row">
                                <button class="btn btn-success btn-appointment">
                                    Book Appointment
                        </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default AppointmentForm