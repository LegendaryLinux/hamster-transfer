import React from 'react';
import ReactDOM from 'react-dom';
import HeaderBar from './global/HeaderBar.js';
import Homepage from './Homepage/Homepage.js';
import '../css/index.css';

class HamsterTransfer extends React.Component{
    constructor(props){
        super(props);
        
        this.state = {
            currentPage: <Homepage changePage={this.changePage}/>
        };
    }

    // Change the active page
    changePage = (newPage) => {
        if(typeof(newPage) !== 'object') throw "Invalid parameter passed to `changePage`";
        this.setState({currentPage:newPage});
    };

    render(){
        return (
            <div id="hamster-transfer">
                <HeaderBar changePage={this.changePage}/>
                {this.state.currentPage}
            </div>
        );
    }
}

window.onload = () => {
    ReactDOM.render(<HamsterTransfer/>, document.getElementById('application'));
};