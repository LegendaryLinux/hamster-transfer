import React from 'react';
import PropTypes from 'prop-types';
import Homepage from '../Homepage/Homepage.js';
import Router from '../global/Router.js';
import '../../css/global/HeaderBar.css';

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
    changePage:     PropTypes.func.isRequired,
    text:           PropTypes.string.isRequired,
    targetPage:     PropTypes.func.isRequired,
};

class HeaderBar extends React.Component{
    showHomepage = () => {
        this.props.changePage(<Homepage changePage={this.props.changePage}/>)
    };

    render(){
        return (
            <div id="header-bar">
                <div id="header-bar-title" onClick={this.showHomepage}>
                    <img src={Router.getImage('hamster-face.png')} id="header-bar-image"/>
                </div>
            </div>
        );
    };
}
HeaderBar.propTypes = {
    changePage:     PropTypes.func.isRequired,
};

export default HeaderBar;