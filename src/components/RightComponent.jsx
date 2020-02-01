import React, { Component } from 'react'
import Form from './Form'
import Table from './Table'

export class RightComponent extends Component {
    render() {
        return (
            <div className='right-main'>
                <h3 className='left-h2'>Right Component</h3>
                <div className="row">
                    <div className="row">
                        <Form />
                    </div>
                    <div className="row tb">
                        <Table />
                    </div>
                </div>



            </div>
        )
    }
}

export default RightComponent
