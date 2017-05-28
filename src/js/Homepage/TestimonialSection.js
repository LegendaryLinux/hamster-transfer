import React from 'react';
import Testimonial from "./Testimonial";
import '../../css/Homepage/TestimonialSection.css';

class TestimonialSection extends React.Component{
    render(){
        return (
            <div id="testimonial-container">
                <div id="testimonials">
                    <h2>Here's what people are saying!</h2>
                                <Testimonial name="James K."
                                             message="My computer has never been so fast!"
                                             summary="Wow!"/>
                                <Testimonial name="Montgomery S."
                                             message="Quite possibly the best thing I've ever done for my computer."
                                             summary="Unbelieveable!"/>
                                <Testimonial name="Leonard M."
                                             message="Well, it certainly made the computer faster."
                                             summary="That'll do"/>
                                <Testimonial name="Jack O."
                                             message="Everything's much quicker now"
                                             summary="Very easy"/>
                                <Testimonial name="Samantha C."
                                             message="That's hard to do."
                                             summary="I'm impressed!"/>
                                <Testimonial name="Daniel J."
                                             message="There's fast, and then there's hamster fast!"
                                             summary="Goodness gracious!"/>
                </div>
            </div>
        );
    }
}

export default TestimonialSection;