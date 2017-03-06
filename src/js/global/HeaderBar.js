import React from 'react';
import Homepage from '../Homepage/Homepage.js';
import Router from '../global/Router.js';
require('../../css/global/HeaderBar.css');

class HeaderBarButton extends React.Component{
    handleClick = () => {
        this.props.changePage(this.props.targetPage);
    };

    render(){
        return (
            <div className="header-bar-button" onClick={this.handleClick}>
                {this.props.text}
            </div>
        );
    }
}
HeaderBarButton.propTypes = {
    changePage:     React.PropTypes.func.isRequired,
    text:           React.PropTypes.string.isRequired,
    targetPage:     React.PropTypes.func.isRequired,
};

class HeaderBar extends React.Component{
    showHomepage = () => {
        this.props.changePage(<Homepage changePage={this.props.changePage}/>)
    };

    render(){
        return (
            <div id="header-bar">
                <div id="header-bar-title" onClick={this.showHomepage}>
                    <img src={Router.getImage('hamster-standing.png')} id="header-bar-image"/>
                </div>
            </div>
        );
    };
}
HeaderBar.propTypes = {
    changePage:     React.PropTypes.func.isRequired,
};

export default HeaderBar;