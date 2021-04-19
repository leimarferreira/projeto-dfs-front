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
            <div>
                <label htmlFor="name">Name</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="John Smith"
                    required
                    value={user.name}
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
                    value={user.cpf}
                    onChange={handleInputChange}
                />
            </div>

            <div>
                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="username@domain.com"
                    required
                    value={user.email}
                    onChange={handleInputChange}
                />
            </div>

            <div>
                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Password"
                    required
                    value={user.password}
                    onChange={handleInputChange}
                />
            </div>

            <button onClick={createUser}>Submit</button>
        </div>
    );
};

export default SignUp;
