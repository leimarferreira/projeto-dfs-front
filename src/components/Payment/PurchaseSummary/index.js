import React from 'react';

const PurchaseSummary = props => {

    return (
        <div className="col-md-4">
            <div className="row g-3 mt-3 p-3 bg-light border rounded shadow">
                <h2>Summary</h2>
                <p className="col">Original price:</p>
                <p className="col text-end">${props?.purchase?.value}</p>
                <hr/>
                <p className="col fw-bold">Total:</p>
                <p className="col text-end fw-bold">${props?.purchase?.value}</p>
            </div>
        </div>
    );
};

export default PurchaseSummary;
