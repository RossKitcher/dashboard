import React from 'react';
import {Link} from 'react-router-dom';

class MrRobot extends React.Component {
    render() {
        return (
            <div className="writeup">
                <body data-spy="scroll" data-target=".navbar" data-offset="50">
                    
                    <div className="row">
                        <nav class="navbar col-lg-2">
                            <ul class="nav flex-column">
                                <li class="nav-item">
                                    <Link class="nav-link active" to="#section1">Active</Link>
                                </li>
                                <li class="nav-item">
                                    <Link class="nav-link" to="#section2">Link</Link>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#section3">Link</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">Disabled</a>
                                </li>
                            </ul>
                        </nav>
                        <div className="content  col-lg-10">
                            <div id="section1" className="offset">
                                <h1>Introduction</h1>
                                <p>Try to scroll this page and look at the navigation bar while scrolling!</p>
                            </div>
                            <div id="section2">
                                <h1>Enumeration</h1>
                                <p>Try to scroll this page and look at the navigation bar while scrolling!</p>
                            </div>
                            <div id="section3">
                                <h1>Initial Foothold</h1>
                                <p>Try to scroll this page and look at the navigation bar while scrolling!</p>
                            </div>
                        </div>
                    </div>
                </body>
                
            </div>
        )
    }
}

export default MrRobot;