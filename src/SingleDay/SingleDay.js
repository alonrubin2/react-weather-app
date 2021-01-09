import React, { Component } from 'react';
import './SingleDay.css'

class SingleDay extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (

            <div className="day-box">
                <div className="day-and-temp">
                    <span>
                        {this.props.day}
                    </span>
                    <span>
                        {this.props.temp}
                    </span>
                </div>
                <img className="icon" src={this.props.icon} alt={this.props.icon} />
                <div className="description">
                    {this.props.description}
                </div>

            </div>


        );
    }
}

export default SingleDay;
