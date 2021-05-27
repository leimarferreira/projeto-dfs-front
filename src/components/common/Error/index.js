import React, { useState, useEffect } from 'react';

const Error = props => {
    const [message, setMessage] = useState("An error has occurred.");

    useEffect(() => {
        if (props.message) {
            setMessage(props.message);
        }
    }, [props.message]);

    return (
        <div className="bg-danger mx-auto p-3 mt-1 text-center border rounded shadow-lg">
            <p className="text-white">{ message }</p>
        </div>
    );
};

export default Error;
