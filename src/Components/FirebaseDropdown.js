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
        this.diseaseListR = this.diseaseListR.bind(this)
    }

    //possible to make this more optimized maybe?
    ///TODO : mayhaps add dynamic updating ?
    async componentDidMount() {
        try {
            db.collection('points').get()
                .then(snapshot => {
                    snapshot.forEach(doc => {
                        dsList.push(doc.id);
                    });
                    this.setState({
                        diseaseList: dsList
                    })
                    console.log(this.state.diseaseList)//LET IT BE FUCKING KNOWN THAT THIS TOOK ME 2 HOURS TO IMPLEMENT KUTTE KA BACHA
                })
                .catch(err => {
                    console.log('Error getting documents', err);
                });
        }

        catch (error) {
            console.log(error)
        }

    }

    diseaseListR() {
        var x = this.state.diseaseList.map((y) =>
            <option key={y}>{y}</option>
        );

        return (x)
    }

    render() {
        return (
            <this.diseaseListR></this.diseaseListR>
        )
    }
}

export default FbDropdown