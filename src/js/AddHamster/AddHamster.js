import React from 'react';
import '../../css/AddHamster/AddHamster.css';
import Router from "../global/Router";

class AddHamster extends React.Component{
    render(){
        return (
            <div id="add-hamster">
                <img src={Router.getImage('hamster-running.gif')}/>
                <h1>You're finished!</h1>
                <p>
                    It really <em>is</em> that simple. We've added a hamster to our power generators and are
                    sending the extra juice your way, which means your computer just got faster. Don't worry about
                    the hamster - he's allowed to rest while your computer is off.
                </p>
            </div>
        );
    }
}

export default AddHamster;