import React from 'react';
import './App.css';
import SingleDay from './SingleDay/SingleDay';

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            days: []
        }
    }



    componentDidMount() {
        fetch('https://netcraft2.s3-eu-west-1.amazonaws.com/weather.json')
            .then(res => res.json())
            .then(days => {
                this.setState({
                    days
                })
            })
    }

    render() {
        return (
            <div className="App">
                <h1>5 Day Forecast</h1>
                <div className="five-day-forecast">
                    {this.state.days.map((day, index) => {
                        return <SingleDay key={index}
                            day={day.day}
                            temp={`${day.temperature}` + String.fromCharCode(176)}
                            icon={day.icon}
                            description={day.description} />
                    })}
                </div>


            </div>
        );
    }

}

export default App;
