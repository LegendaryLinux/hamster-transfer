import React from 'react';
import PropTypes from 'prop-types';
import '../../css/Homepage/Testimonial.css';

class Testimonial extends React.Component{
    render(){
        return (
            <div className="testimonial">
                <h3>{this.props.summary}</h3>
                <p>{this.props.message}</p>
                <div>::&nbsp;{this.props.name}</div>
            </div>
        );
    }
}
Testimonial.propTypes = {
    name:       PropTypes.string.isRequired,
    message:    PropTypes.string.isRequired,
    summary:    PropTypes.string.isRequired,
};

export default Testimonial;