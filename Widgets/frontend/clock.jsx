
import React from 'react';

class Clock extends React.Component {
    constructor(props){
        super(props);
        this.state = { date: new Date()};
        this.tick = this.tick.bind(this);
    }

    tick(e){
        e.preventDefault();
        const {date} = this.state;
        date.setSeconds(date.getSeconds() + 1);
        this.setState({
            date: date
        });
    }

    render(){
        return(
            <div>
                <h1>{this.state.date.toString()}</h1>
                <button onClick={this.tick}>Tick</button>
            </div>
        );
    }
}

export default Clock;