import React, {Component} from 'react';

import logo from './logo.svg';
import PropTypes from 'prop-types';
import './App.css';


class Decrement extends Component{
    constructor(props){
        super(props);
        this.state = {
            count: this.props.count
        }
        this.decrementCount = this.decrementCount.bind(this)
        this.incrementCount = this.incrementCount.bind(this)
    }   

    decrementCount(){
        if(this.state.count > 0){
            this.setState({count: this.state.count - 1});
        }
        else{
            alert("Cannot be less than zero");
        }
    }

    incrementCount(){
        this.setState({count: this.state.count + 1})
    }

    render(){
        return(
            <div id="countCenter">
                <h1>Count: {this.state.count}</h1>
                <button onClick={this.decrementCount}>Decrement</button>
                <button onClick={this.incrementCount}>Increment</button>
            </div>
        );
    }
}
Decrement.propTypes = {
    count: PropTypes.number.isRequired
}

export default Decrement;

