import React from 'react';
require('../../css/Homepage/Testimonial.css');

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
    name:       React.PropTypes.string.isRequired,
    message:    React.PropTypes.string.isRequired,
    summary:    React.PropTypes.string.isRequired,
};

export default Testimonial;