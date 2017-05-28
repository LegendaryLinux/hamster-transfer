import React from 'react';
import PropTypes from 'prop-types';
import '../../css/Homepage/IntroSection.css';
import AddHamster from "../AddHamster/AddHamster";

class IntroSection extends React.Component{
    addHamster = () => {
        this.props.changePage(<AddHamster/>);
    };

    render(){
        return (
            <div id="intro-container">
                <h1>Hamster Transfer</h1>
                <h3>Your computer, faster than ever.</h3>
                <button id="get-started-button" onClick={this.addHamster}>Get started now!</button>
            </div>
        );
    }
}
IntroSection.propTypes = {
    changePage:     PropTypes.func.isRequired,
};

export default IntroSection;