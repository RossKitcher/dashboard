import React from 'react';
import background from '../img/home.jpg';

class Home extends React.Component {
    constructor(props) {
        super(props);

        
    }


    render() {
        return (
            <div>
                <div className="carousel landing">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img id="backg" src={background} alt="Background image"></img>
                        </div>
                    </div>
                </div>
            </div>
            
        );
    }

}

export default Home;