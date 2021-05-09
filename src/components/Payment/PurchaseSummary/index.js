import React from 'react';

const PurchaseSummary = () => {

    return (
        <div className="col-sm-4">
            <div className="row g-3 mt-3 p-3 bg-light border rounded shadow">
                <h2>Summary</h2>
                <p className="col">Original price:</p>
                <p className="col text-end">${160.00}</p>
                <hr/>
                <p className="col fw-bold">Total:</p>
                <p className="col text-end fw-bold">${160.00}</p>
            </div>
        </div>
    );
};

export default PurchaseSummary;
