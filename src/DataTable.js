import React from 'react'
import db from './fbConfig/firebase'

class DataTable extends React.Component {
    constructor(props){
        super(props)
    }

    componentDidMount() {
        //db.collection('')
    }

    render() {
        return(
            <div>
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">Name</th>
                        </tr>
                    </thead>
                </table>
            </div>
        )
    }
}

export default DataTable