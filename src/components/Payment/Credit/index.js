import React, { useState } from 'react';

const Credit = () => {
    
    const [paymentInfo, setPaymentInfo] = useState({
        name: "",
        cpf: "",
        cardNumber: "",
        month: "",
        year: "",
        code: "",
    });

    const handleInputChange = event => {
        const { name, value } = event.target;
        setPaymentInfo({ ...paymentInfo, [name]: value });
    };

    const sendPaymentInfo = () => {
        // TODO
    };

    return (
        <div>
            <div>
                <label htmlFor="name">Name</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Full name"
                    required
                    value={paymentInfo.name}
                    onChange={handleInputChange}
                />
            </div>

            <div>
                <label htmlFor="cpf">CPF</label>
                <input
                    type="text"
                    id="cpf"
                    name="cpf"
                    placeholder="xxx.xxx.xxx-xx"
                    required
                    value={paymentInfo.cpf}
                    onChange={handleInputChange}
                />
            </div>

            <div>
                <label htmlFor="number">Number</label>
                <input
                    type="text"
                    id="number"
                    name="number"
                    placeholder="Number on the credit card"
                    required
                    value={paymentInfo.cardNumber}
                    onChange={handleInputChange}
                />
            </div>

            <div>
                <label htmlFor="month">Month</label>
                <input
                    type="month"
                    id="month"
                    name="month"
                    placeholder="MM"
                    required
                    value={paymentInfo.month}
                    onChange={handleInputChange}
                />
            </div>

            <div>
                <label htmlFor="year">Year</label>
                <input
                    type="text"
                    id="year"
                    name="year"
                    placeholder="YYYY"
                    required
                    value={paymentInfo.year}
                    onChange={handleInputChange}
                />
            </div>

            <div>
                <label htmlFor="code">Code</label>
                <input
                    type="text"
                    id="code"
                    name="code"
                    placeholder="3 digits code on the card"
                    required
                    value={paymentInfo.code}
                    onChange={handleInputChange}
                />
            </div>

            <button onClick={sendPaymentInfo}>
                Submit
            </button>
        </div>
    );
};

export default Credit;
