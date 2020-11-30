import React from 'react';
import '../assets/css/main.css';
import '../assets/css/index.css';
import Hero from '../components/landing/hero';
import Ilustraciones  from "../components/landing/ilustraciones";
import Body from "../components/landing/body";

const Landing = () =>{
    return (<React.Fragment>
        <Hero/>
        <Ilustraciones/>
        <Body/>
    </React.Fragment>);
};

export default Landing;