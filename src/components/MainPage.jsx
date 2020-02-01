import React, { Component } from 'react'
import LeftComponent from './LeftComponent'
import RightComponent from './RightComponent'


export class MainPage extends Component {
    render() {
        return (
            <div>
                <div className='header'>
                    <h2>Dashboard</h2>
                </div>
                <div className='ctn2'>
                    <div>
                        <div className="row">
                            <div className="col-md-3">
                                <LeftComponent />
                            </div>
                            <div className="col-md-9">
                                <RightComponent />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default MainPage
