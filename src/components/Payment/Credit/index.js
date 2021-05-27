import React from 'react';

const Credit = () => {
    
    /* const [paymentInfo, setPaymentInfo] = useState({
        name: "",
        cpf: "",
        cardNumber: "",
        month: "",
        year: "",
        code: "",
    }); */

    return (
        <div className="row g-3">
            <div className="col-md-9">
                <label htmlFor="name" className="form-label">Name</label>
                <input
                    className="form-control"
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Full name"
                    required
                />
            </div>

            <div className="col-md-3">
                <label htmlFor="cpf" className="form-label">CPF</label>
                <input
                    className="form-control"
                    type="text"
                    id="cpf"
                    name="cpf"
                    placeholder="Only numbers"
                    required
                />
            </div>

            <div>
                <label htmlFor="cardNumber" className="form-label">Card number</label>
                <input
                    className="form-control"
                    type="text"
                    id="cardNumber"
                    name="cardNumber"
                    placeholder="Card number"
                    required
                />
            </div>

            <div className="col-md-4">
                <label htmlFor="month" className="form-label">Month</label>
                <input
                    className="form-control"
                    type="text"
                    id="month"
                    name="month"
                    placeholder="MM"
                    required
                />
            </div>

            <div className="col-md-4">
                <label htmlFor="year" className="form-label">Year</label>
                <input
                    className="form-control"
                    type="text"
                    id="year"
                    name="year"
                    placeholder="YYYY"
                    required
                />
            </div>

            <div className="col-md-4">
                <label htmlFor="code" className="form-label">Security code</label>
                <input
                    className="form-control"
                    type="text"
                    id="code"
                    name="code"
                    required
                />
            </div>
        </div>
    );
};

export default Credit;
