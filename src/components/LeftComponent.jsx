import React, { Component } from 'react'

export class LeftComponent extends Component {
    render() {
        return (
            <div>
                <ul className='left-list'>
                    <li><span class="glyphicon glyphicon-asterisk" aria-hidden="true"></span>Dashboard</li>
                    <li><span class="glyphicon glyphicon-plus" aria-hidden="true"></span>Add StartUp</li>
                    <li><span class="glyphicon glyphicon-tasks" aria-hidden="true"></span>Startup Details</li>
                </ul>
            </div>
        )
    }
}

export default LeftComponent
