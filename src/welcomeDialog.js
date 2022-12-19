import React from 'react';
import FancyBorder from './fancyBorder';

const Dialog = (props) => {
    return (
        <FancyBorder color='blue'>
            <h1 className='Dialog-title'>
                {props.title}
            </h1>
            <p className='Dialog-message'>
                {props.message}  
            </p>
        </FancyBorder>
    )
}

const WelcomeDialog = () => {
    return (
        <Dialog 
            title="Welcome"
            message="Thank you for visiting this page!"
        />
    );
};

export default WelcomeDialog;