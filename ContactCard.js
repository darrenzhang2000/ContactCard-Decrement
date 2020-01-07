import React, {Component} from 'react';

import logo from './logo.svg';
import PropTypes from 'prop-types';
import './App.css';


class ContactCard extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return (
            <div id="center"> {/* id={this.props.name} */}
                <h1>Full Name: {this.props.name} </h1> 
                <p>Mobile Number: {this.props.mobileNumber} </p>
                <p>Work Number: {this.props.workNumber} </p>
                <p>Email: {this.props.email} </p>
            </div>
        );
    }
}

ContactCard.propTypes = {
    name: PropTypes.string.isRequired,
    mobileNumber: PropTypes.number.isRequired,
    email: PropTypes.string.isRequired
}
export default ContactCard;

