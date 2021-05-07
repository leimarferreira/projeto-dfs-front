import React, { useState, useEffect } from 'react';
import PurchaseDataService from '../../../services/Purchase/index';
import ProductDataService from '../../../services/Product/index';

const Credit = () => {
    
    const location = window.location.href;
    const url = new URL(location);
    const userId = url.searchParams.get("user");
    const productId = url.searchParams.get("product");
    const [purchase, setPurchase] = useState({});
    const [product, setProduct] = useState({});
    const [paymentInfo, setPaymentInfo] = useState({
        name: "",
        cpf: "",
        cardNumber: "",
        month: "",
        year: "",
        code: "",
    });

    useEffect(() => {
        let url = new URL(location);
        let userId = url.searchParams.get("user");
        let productId = url.searchParams.get("product");
        setPurchase({ userId, productId });
    }, [location]);

    const handleInputChange = event => {
        const { name, value } = event.target;
        setPaymentInfo({ ...paymentInfo, [name]: value });
    };

    const sendPaymentInfo = () => {
        console.log(purchase);
    };

    return (
        <div>
            <h1>Finish purchase</h1>
            <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                    className="form-control"
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Full name"
                    required
                    value={paymentInfo.name}
                    onChange={handleInputChange}
                />
            </div>

            <div className="form-group">
                <label htmlFor="cpf">CPF</label>
                <input
                    className="form-control"
                    type="text"
                    id="cpf"
                    name="cpf"
                    placeholder="xxx.xxx.xxx-xx"
                    required
                    value={paymentInfo.cpf}
                    onChange={handleInputChange}
                />
            </div>

            <div className="form-group">
                <label htmlFor="number">Number</label>
                <input
                    className="form-control"
                    type="text"
                    id="number"
                    name="number"
                    placeholder="Number on the credit card"
                    required
                    value={paymentInfo.cardNumber}
                    onChange={handleInputChange}
                />
            </div>

            <div className="form-group">
                <label htmlFor="month">Month</label>
                <input
                    className="form-control"
                    type="month"
                    id="month"
                    name="month"
                    placeholder="MM"
                    required
                    value={paymentInfo.month}
                    onChange={handleInputChange}
                />
            </div>

            <div className="form-group">
                <label htmlFor="year">Year</label>
                <input
                    className="form-control"
                    type="text"
                    id="year"
                    name="year"
                    placeholder="YYYY"
                    required
                    value={paymentInfo.year}
                    onChange={handleInputChange}
                />
            </div>

            <div className="form-group">
                <label htmlFor="code">Code</label>
                <input
                    className="form-control"
                    type="text"
                    id="code"
                    name="code"
                    placeholder="3 digits code on the card"
                    required
                    value={paymentInfo.code}
                    onChange={handleInputChange}
                />
            </div>

            <button onClick={sendPaymentInfo} className="btn btn-primary btn-block">
                Submit
            </button>
        </div>
    );
};

export default Credit;
