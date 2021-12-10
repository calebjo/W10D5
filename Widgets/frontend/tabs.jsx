
import React from 'react';

class Tabs extends React.Component {
    constructor(props){
        super(props);
        this.state = { title: "", content: "" , index: 0 }
        // this.tabs = [ { 'tab1': "first tab" },{ 'tab2': "second tab"  },{ 'tab3': "third tab" } ]
        this.titles = ['tab1', 'tab2', 'tab3']
        this.content = ['first content', 'second content', 'third content']
    }

    render(){


        return(
            <div>
                <ul>
                    {this.titles.map((title,idx) => {
                        return <li onClick={updateContent} key={idx}>{title}</li>})
                    }
                </ul>
                    < article >
                        { this.content }
                    </article>
            </div>
        )
    }
}

export default Tabs;