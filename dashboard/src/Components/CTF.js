import React from 'react';
import { Route, Switch, Link } from "react-router-dom";

import MrRobot from './Write-ups/MrRobot';

import background from '../img/home.jpg';
import robot from '../img/robot.jpg';
import pickle from '../img/pickle.jpg';
import linux from '../img/linux.jpg';
import arcade from '../img/arcade.jpg';


class CTF extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            boxes: [
                {
                    name: 'Mr Robot',
                    shortDesc: "pump",
                    platform: "TryHackMe.com",
                    difficulty: 'Medium',
                    categories: ['Wordpress', 'Linux', 'CVE'],
                    img: robot,
                    show: true,
                    route: "/MrRobot",

                },
                {
                    name: 'PickleRick',
                    shortDesc: "pum",
                    platform: "TryHackMe.com",
                    difficulty: 'Easy',
                    categories: ['Wordpress', 'Linux', 'CVE'],
                    img: pickle,
                    show: true,
                    route: "/PickleRick",


                },
                {
                    name: 'RootMe',
                    shortDesc: "pu",
                    platform: "TryHackMe.com",
                    difficulty: 'Easy',
                    categories: [],
                    img: linux,
                    show: true,
                    route: "/RootMe",


                },
                {
                    name: 'Retro',
                    shortDesc: "Based on the Mr Robot show.",
                    platform: "TryHackMe.com",
                    difficulty: 'Hard',
                    categories: ['Wordpress', 'Linux'],
                    img: arcade,
                    show: true,
                    route: "/Retro",


                },
            ],
            icons: [
                {
                    name: 'Wordpress',
                    link: 'fab fa-wordpress-simple',
                    checked: false,
                },
                {
                    name: 'Linux',
                    link: 'fab fa-linux',
                    checked: false,

                },
                {
                    name: 'CVE',
                    link: 'fas fa-bug',
                    checked: false,

                },
                {
                    name: 'SQLi',
                    link: 'fas fa-syringe',
                    checked: false,

                },
                {
                    name: 'LFI',
                    link: 'fas fa-binoculars',
                    checked: false,

                },
                {
                    name: 'Misconfiguration',
                    link: 'fas fa-exclamation',
                    checked: false,

                },
                {
                    name: 'Sandbox Escape',
                    link: 'fas fa-lock',
                    checked: false,

                },

            ],
            currentFilter: "",
        }

        this.handleSearch = this.handleSearch.bind(this);
        this.handleCheck = this.handleCheck.bind(this);
        this.updateState = this.updateState.bind(this);

    }

    // SEPERATE IS THE WAY FORWARD
    updateState(tempIcons = this.state.icons, tempBoxes = this.state.boxes, filter = "undef") {
        let iconCount = tempIcons.length;
        let tempCount = 0;
        let tempFilter = "";
        if (filter == "undef") {
            tempFilter = this.state.currentFilter;
        } else {
            tempFilter = filter;
        }
        

        tempIcons.forEach(icon => {
            if (!icon.checked) {
                tempCount += 1;
            }
        })


        tempIcons.forEach(icon => {
            
            tempBoxes.forEach((box, index) => {
                if (tempCount != iconCount) {
                    if (!box.categories.includes(icon.name) && box.show == true) {
                        tempBoxes[index].show = false;
                    } else if (box.categories.includes(icon.name) && box.show == false) {
                        tempBoxes[index].show = true;
                    }
                } else if (tempFilter.length == 0){
                    
                    tempBoxes[index].show = true;
                } else {
                    if (box.name.includes(tempFilter) || box.shortDesc.includes(tempFilter)) {
                        tempBoxes[index].show = true;
                    } else {
                        tempBoxes[index].show = false;
                    }
                }
            })
            
            
        })

        
        if (filter == "undef") {
            this.setState({icons: tempIcons, boxes: tempBoxes});
        } else {
            this.setState({icons: tempIcons, boxes: tempBoxes, currentFilter: tempFilter});
        }
        
    }

    handleSearch(event) {
        let val = event.target.value;
        let tempBoxes = this.state.boxes;
        tempBoxes.forEach((box, index) => {            
            if (box.name.includes(val) || box.shortDesc.includes(val)) {
                tempBoxes[index].show = true;
            } else {
                tempBoxes[index].show = false;
            }
        });
        
        this.updateState(undefined, tempBoxes, val);
    }

    handleCheck(event) {
        let val = event.target.id;
        let tempIcons = this.state.icons;
        if (event.target.checked) {
            tempIcons.forEach((icon, index) => {
                if (icon.name == val) {
                    tempIcons[index].checked = true;
                } 
            })
        } else {
            tempIcons.forEach((icon, index) => {
                if (icon.name == val) {
                    tempIcons[index].checked = false;
                } 
            })
        }
        this.updateState(tempIcons, undefined, undefined);
        
    }
    
    render() {
        return (
            <div>
                <div className="jumbotron">
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1"><i className="fas fa-search"></i></span>
                        <input type="text" className="form-control" onChange={this.handleSearch} placeholder="Search..." aria-label="Search..." aria-describedby="basic-addon1"></input>
                    </div>
                    {this.state.icons.map(icon => {
                        return (
                            <div className="form-check">
                                
                                <input className="form-check-input" onChange={this.handleCheck} type="checkbox" value="" id={icon.name}></input>
                                <label className="form-check-label" for={icon.name}>
                                    {icon.name} 
                                    <i className={icon.link}></i>
                                </label>
                                
                            </div>
                        )
                    })}
                    
                    
                </div>
                <div className="carousel landing">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img id="backg" src={background} alt="Background image"></img>
                            
                            <div className="carousel-caption">
                                <div className="row">
                                    {this.state.boxes.map(box => {
                                        if (box.show == false) {
                                            return false;
                                        }
                                        return (
                                            <div className="col-sm-3" >
                                                <div className="card">
                                                    <img src={box.img} className="card-img-top" alt="test-image"></img>
                                                    <div className="card-body">
                                                        <h5 className="card-title">{box.name}</h5>
                                                        <p className="card-text">{box.shortDesc}</p>

                                                        <Link to={box.route} className="btn btn-outline-secondary btn-sm">View</Link>
                                                        <div className="card-footer">
                                                        {box.categories.map(category => {
                                                            return (
                                                                <div className="card-category">
                                                                    {this.state.icons.map(icon => {
                                                                        if (icon.name === category) {
                                                                            return (
                                                                                <i className={icon.link}></i>
                                                                            )
                                                                        } 
                                                                        
                                                                    })}
                                                                    
                                                                    <p>{category}</p>
                                                                </div>
                                                            )
                                                        })}
                                                        </div>
                                                    
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })}

                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        )
    }
}



export default CTF;