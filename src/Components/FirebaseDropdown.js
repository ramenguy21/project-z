import React from 'react'
import db from '../fbConfig/firebase'

var dsList = []

class FbDropdown extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            selected_value: "",
            diseaseList: []
        }
    }

    async componentDidMount() {
        try {
            db.collection('points').get()
                .then(snapshot => {
                    snapshot.forEach(doc => {
                        dsList.push(doc.id);
                    });
                })
                .catch(err => {
                    console.log('Error getting documents', err);
                });
        }

        catch (error) {
            console.log(error)
        }
        console.log(dsList)
    }

    diseaseListR() {
        const x = dsList.map((y) =>
            <option>{y}</option>
        );

        return(x)
    }

    render() {
        return (
            <div>
                <select>
                   <this.diseaseListR></this.diseaseListR>
                </select>
            </div >
        )
    }
}

export default FbDropdown