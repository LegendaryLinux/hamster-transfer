import React from 'react';
import PropTypes from 'prop-types';
import IntroSection from './IntroSection';
import TestimonialSection from "./TestimonialSection";
import '../../css/Homepage/Homepage.css';

class Homepage extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div id="homepage">
                <IntroSection changePage={this.props.changePage}/>
                <TestimonialSection/>
            </div>
        );
    }
}
Homepage.propTypes = {
    changePage:         PropTypes.func.isRequired
};

export default Homepage;