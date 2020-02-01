import React, { Component } from 'react'
import NavBar from './NavBar'
import MainPage from './MainPage'

class DashBoard extends Component {
    render() {
        return (
            <div>
                <NavBar />
                <div className="container ctn">
                    <MainPage />
                </div>

            </div>
        )
    }
}

export default DashBoard
