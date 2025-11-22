import React from 'react';
import error from "../assets/images/2446912.jpg"

const Error = () => {
    return (
        <div className='min-h-screen flex items-center justify-center'>
            <img src={error} alt="Error" className='mx-auto w-full max-w-lg' />
        </div>
    );
};

export default Error;