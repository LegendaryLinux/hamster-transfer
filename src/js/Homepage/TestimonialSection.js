import React from 'react';
import Testimonial from "./Testimonial";
import '../../css/Homepage/TestimonialSection.css';

class TestimonialSection extends React.Component{
    render(){
        return (
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
                                         message="There's fast, and then there's hamster fast!"
                                         summary="Goodness gracious!"/>
                        </td>
                    </tr>
                </table>
            </div>
        );
    }
}

export default TestimonialSection;