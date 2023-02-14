import React, { Component, useState } from 'react';
import Pageone from './Pageone';
import Pagetwo from './Pagetwo';

export default function Homepage(){


const [state, setState] = useState({
    step:1
});

const nextStep = () => {
    setState({
        ...state,
        step: state.step + 1
    });
}

 const prevStep = () => {
    setState({
        ...state,
        step: state.step - 1
    });
}


switch(state.step){
    case 1:
        return (
            <Pageone
            nextStep={nextStep}
            values={state}
            />
        )
    case 2:
        return (
            <Pagetwo
            nextStep={nextStep}
            prevStep={prevStep}
            values={state}
            />
        )

    default:
        return <h1>Default Page</h1>
}



}