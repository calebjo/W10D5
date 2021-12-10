
import React from 'react';

class Tabs extends React.Component {
    constructor(props){
        super(props);
        this.state = { title: "", content: "" , index: 0 }
        // this.tabs = [ { 'tab1': "first tab" },{ 'tab2': "second tab"  },{ 'tab3': "third tab" } ]
        this.titles = ['tab1', 'tab2', 'tab3']
        this.content = ['first content', 'second content', 'third content']
        this.updateContent = this.updateContent.bind(this)
    }

    updateContent(e){
        // console.log(e.target.innerText)
        const title = e.target.innerText
        const contentIdx = this.titles.indexOf(title)
        this.setState({
            content: this.content[contentIdx]
        })
    }

    render(){
        return(
            <div>
                <ul>
                    {this.titles.map((title,idx) => {
                        return <li onClick={this.updateContent} key={idx}>{title}</li>})
                    }
                </ul>
                    < article >
                        { this.state.content }
                    </article>
            </div>
        );
    }
}

export default Tabs;