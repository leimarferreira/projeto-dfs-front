import React, { useEffect, useState } from 'react';
import UserService from '../../../services/User/index';

const Credit = () => {

    const [user, setUser] = useState({ name: "", cpf: "" });
    // eslint-disable-next-line
    const [error, setError] = useState(null);

    useEffect(() => {
        let userId = localStorage.getItem("currentUserId");
        console.log(userId);
        UserService.get(Number.parseInt(userId))
            .then(response => {
                setUser(response.data);
            })
            .catch(setError);
    }, [])

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
                    value={ user.name }
                    disabled
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
                    value={user.cpf}
                    disabled
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
