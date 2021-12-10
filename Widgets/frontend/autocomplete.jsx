import React from "react";


class Autocomplete extends React.Component {
    constructor(props) {
        super(props)
        this.state = {val: ""}
        
    }

    render(){
        return (
            <div>
                <input></input>
                <ul>

                </ul>
            </div>
        )
    }
}

export default Autocomplete;