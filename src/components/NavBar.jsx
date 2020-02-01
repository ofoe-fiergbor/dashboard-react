import React, { Component } from 'react'

export class NavBar extends Component {
    render() {
        return (
            <header>
                <h1 className='navbar'><span class="glyphicon glyphicon-asterisk" aria-hidden="true"></span>Dashboard</h1>
                <div class="btn-group btnCus">
                    <button type="button" class="btn btn-default btnCus2 dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Add Startup <span class="caret"></span>
                    </button>
                    <ul class="dropdown-menu">
                        <li><a href="#">Action</a></li>
                        <li><a href="#">Another action</a></li>
                        <li><a href="#">Something else here</a></li>
                        <li role="separator" class="divider"></li>
                        <li><a href="#">Separated link</a></li>
                    </ul>
                </div>
            </header>

        )
    }
}

export default NavBar
