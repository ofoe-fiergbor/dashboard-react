import React, { Component } from 'react'

export class Table extends Component {
    render() {
        return (
            <div>
                <table className='table table-striped '>

                    <thead>
                        <tr>
                            <th>Company</th>
                            <th>Market/Industry</th>
                            <th>Location</th>
                            <th>Joined</th>
                            <th>Approve</th>
                            <th colspan='2'>Action</th>

                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><img src=' https://via.placeholder.com/70x70.png' />  Company Name</td>
                            <td>Real Estate</td>
                            <td>Lagos</td>
                            <td>Oct 12,2014</td>
                            <td>
                                <div id='tick1' className='text-center'>
                                    <span class="glyphicon glyphicon-ok" aria-hidden="true"></span>
                                </div>
                            </td>
                            <td>
                                <div id='tick2' className='text-center'>
                                    <span class="glyphicon glyphicon-pencil" aria-hidden="true"></span>
                                </div>
                            </td>
                            <td>
                                <div id='tick3' className='text-center'>
                                    <span class="glyphicon glyphicon-trash" aria-hidden="true"></span>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td><img src=' https://via.placeholder.com/70x70.png' />  Company Name</td>
                            <td>Real Estate</td>
                            <td>Lagos</td>
                            <td>Oct 12,2014</td>
                            <td>
                                <div id='tick1' className='text-center'>
                                    <span class="glyphicon glyphicon-ok" aria-hidden="true"></span>
                                </div>
                            </td>
                            <td>
                                <div id='tick2' className='text-center'>
                                    <span class="glyphicon glyphicon-pencil" aria-hidden="true"></span>
                                </div>
                            </td>
                            <td>
                                <div id='tick3' className='text-center'>
                                    <span class="glyphicon glyphicon-trash" aria-hidden="true"></span>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td><img src=' https://via.placeholder.com/70x70.png' />  Company Name</td>
                            <td>Real Estate</td>
                            <td>Lagos</td>
                            <td>Oct 12,2014</td>
                            <td>
                                <div id='tick1' className='text-center'>
                                    <span class="glyphicon glyphicon-ok" aria-hidden="true"></span>
                                </div>
                            </td>
                            <td>
                                <div id='tick2' className='text-center'>
                                    <span class="glyphicon glyphicon-pencil" aria-hidden="true"></span>
                                </div>
                            </td>
                            <td>
                                <div id='tick3' className='text-center'>
                                    <span class="glyphicon glyphicon-trash" aria-hidden="true"></span>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>

            </div>
        )
    }
}

export default Table
