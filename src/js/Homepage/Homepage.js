import React from 'react';
require('../../css/Homepage/Homepage.css');

class Homepage extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div id="homepage">
                Hamster Transfer!
            </div>
        );
    }
}
Homepage.propTypes = {
    changePage:         React.PropTypes.func.isRequired
};

export default Homepage;