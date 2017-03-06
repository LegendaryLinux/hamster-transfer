import React from 'react';
import Testimonial from './Testimonial.js'
require('../../css/Homepage/Homepage.css');

class Homepage extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div id="homepage">
                <h1>Hamster Transfer</h1>
                <h3>Your computer, faster than ever.</h3>
                <button id="get-started-button">Get started now!</button>
                <div id="testimonial-container">
                    <h2>Here's what people are saying!</h2>
                    <table id="testimonial-table">
                        <tr>
                            <td>
                                <Testimonial name="James K."
                                             message="My computer has never been so fast!"
                                             summary="Wow!"/>
                            </td>
                            <td>
                                <Testimonial name="Montgomery S."
                                             message="Quite possibly the best thing I've ever done for my computer."
                                             summary="Unbelieveable!"/>
                            </td>
                            <td>
                                <Testimonial name="Leonard M."
                                             message="Well, it certainly made the computer faster."
                                             summary="That'll do"/>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <Testimonial name="Jack O."
                                             message="Everything's much quicker now"
                                             summary="Very easy"/>
                            </td>
                            <td>
                                <Testimonial name="Samantha C."
                                             message="That's hard to do."
                                             summary="I'm impressed!"/>
                            </td>
                            <td>
                                <Testimonial name="Daniel J."
                                             message=""
                                             summary=""/>
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
        );
    }
}
Homepage.propTypes = {
    changePage:         React.PropTypes.func.isRequired
};

export default Homepage;