import React, { Component } from 'react';
import {Button} from 'react-bootstrap';
import './Menubar.css'

class Menubar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoading: false,

        }
    }


    componentDidMount() {
        // console.log(document.cookie)
    }

    render() {
        if (document.cookie === '')
            return (
                <div className="Menubar">
                    <nav className="navbar navbar-expand-sm navbar-dark justify-content-between">
                        <a class="navbar-brand" href="/">
                            {/* <img src="./../Homepage/logo.svg" width="30" height="30" class="d-inline-block align-top" alt="" /> */}
                            Matcher
                        </a>
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link" href="/workshoplist">My Workshop</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/browse">Browse</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/about">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/login">Login</a>
                            </li>
                            <form class="form-inline my-2 my-lg-0">
                                <Button variant="outline-light" onClick={() =>{ window.location.assign('/register') }} >Register</Button>
                            </form>
                        </ul>
                    </nav>
                </div>
            )
        else
            return (
                <div className="Menubar">
                    <nav className="navbar navbar-expand-sm navbar-dark justify-content-between">
                        <a class="navbar-brand" href="/">
                            {/* <img src="./../Homepage/logo.svg" width="30" height="30" class="d-inline-block align-top" alt="" /> */}
                            Matcher
                        </a>
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link" href="/workshoplist">My Workshop</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/browse">Browse</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/about">About</a>
                            </li>
                            <form class="form-inline my-2 my-lg-0">
                                <button class="btn btn-outline-light my-2 my-sm-0" onClick={() => {
                                    //clear cookie somehow
                                    document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
                                    document.cookie = "userType=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
                                    
                                } }>Logout</button>
                            </form>
                        </ul>
                    </nav>
                </div>
            )
    }
}

export default Menubar;