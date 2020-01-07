import React from 'react';
import logo from './logo.svg';
import PropTypes from 'prop-types';
import './App.css';
import ContactCard from "./ContactCard";
import Decrement from "./Decrement";

function App(){
  return (
    <div>
      <ContactCard name="Darren" mobileNumber="123-456-7890" workNumber="123-456-7890" email="1234"/>
      <Decrement count={0}/>
    </div>
  );
}

export default App;

