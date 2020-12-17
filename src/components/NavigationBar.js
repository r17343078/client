import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class NavigationBar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-sm navbar-light bg-light">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">ReduxLogin</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample03" aria-controls="navbarsExample03" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarsExample03">
                        <ul className="navbar-nav me-auto mb-2 mb-sm-0">
                            <li className="nav-item">
                                <Link className="nav-link" to="./signup">Sign Up</Link>
                            </li>
                        </ul>
                        
                    </div>
                </div>
            </nav>
        );
    }
}

export default NavigationBar;