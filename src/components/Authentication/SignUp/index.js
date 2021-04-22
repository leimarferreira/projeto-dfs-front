import React, { useState } from 'react';
import UserDataService from '../../../services/User/index';

const SignUp = () => {
    const [user, setUser] = useState({ id: null, name: "", email: "", password: "", cpf: "" });

    const handleInputChange = event => {
        const { name, value } = event.target;
        setUser({ ...user, [name]: value });
    };

    const createUser = () => {
        let data = {
            name: user.name,
            cpf: user.cpf,
            email: user.email,
            password: user.password
        };

        UserDataService.create(data);
    };

    return (
        <div>
            <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                    className="form-control"
                    type="text"
                    id="name"
                    name="name"
                    placeholder="John Smith"
                    required
                    value={user.name}
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
                    value={user.cpf}
                    onChange={handleInputChange}
                />
            </div>

            <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                    className="form-control"
                    type="email"
                    id="email"
                    name="email"
                    placeholder="username@domain.com"
                    required
                    value={user.email}
                    onChange={handleInputChange}
                />
            </div>

            <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                    className="form-control"
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Password"
                    required
                    value={user.password}
                    onChange={handleInputChange}
                />
            </div>

            <button onClick={createUser} className="btn btn-primary">
                Submit
            </button>
        </div>
    );
};

export default SignUp;
