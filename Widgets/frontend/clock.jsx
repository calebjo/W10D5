
import React from 'react';

class Clock extends React.Component {
    constructor(props){
        super(props);
        this.state = { date: new Date()};
        this.tick = this.tick.bind(this);
    }

    tick(){
        const {date} = this.state;
        date.setSeconds(date.getSeconds() + 1);
        this.setState({
            date: date
        });
    }

    componentDidMount() {
        setInterval(this.tick,1000);
    }

    render(){
        return(
            <div>
                <h1>Clock</h1>
                <div>
                    {this.state.date.toString().slice(0,16)}
                    <br />
                    {this.state.date.toString().slice(16,25)}
                </div>
            </div>
        );
    }
}

export default Clock;