import React from 'react';

const PurchaseSummary = () => {

    return (
        <div className="row p-3 border">
            <h2>Summary</h2>
            <p className="col">Original price:</p>
            <p className="col text-end">${160.00}</p>
            <hr/>
            <p className="col fw-bold">Total:</p>
            <p className="col text-end fw-bold">${160.00}</p>
        </div>
    );
};

export default PurchaseSummary;
