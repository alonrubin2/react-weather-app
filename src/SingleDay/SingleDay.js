import React, { Component } from 'react';
import './SingleDay.css'

class SingleDay extends Component {
    constructor(props) {
        super(props);
    }

    translateNumToDay(num) {
        let day;
        switch(num) {
            case 0:
                day = 'Sunday'
                break;
                
            case 1:
                day = 'Monday'
                break;
                
            case 2:
                day = 'Tuesday'
                break;
                
            case 3:
                day = 'Wednesday'
                break;
                
            case 4:
                day = 'Thursday'
                break;
                
            case 5:
                day = 'Friday'
                break;
                
            case 6:
                day = 'Saturday'
                break;
        }
        return day;
    }

    render() {
        return (

            <div className="day-box">
                <div className="day-and-temp">
                    <span>
                        {this.translateNumToDay(this.props.day)}
                    </span>
                    <span>
                        {this.props.temp}
                    </span>
                </div>
                <img className="icon" src={require('../icons/' + this.props.icon + '.png')} alt={this.props.icon} />
                <div className="description">
                    {this.props.description}
                </div>

            </div>


        );
    }
}

export default SingleDay;
