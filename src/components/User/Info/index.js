import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import UserDateService from '../../../services/User/index';

const Info = () => {
    const [user, setUser] = useState({});
    const { userId } = useParams();
    useEffect(() => {
        retrieveUser(userId);
    });

    const retrieveUser = id => {
        UserDateService.get(id)
            .then(response => {
                setUser(response.data);
            })
            .catch(error => {
                // TODO: ...
            });
    };

    const sendUserInfo = () => {
        let data = {
            name: user.name,
            cpf: user.cpf,
            email: user.email,
            password: user.password
        };

        UserDateService.update(userId, data);
    };

    const handleInputChange = event => {
        const { name, value } = event.target;
        setUser({ ...user, [name]: value });
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
                    placeholder="password"
                    value={user.password}
                    onChange={handleInputChange}
                />
            </div>

            <button onClick={sendUserInfo}>Save</button>
            <button onClick={retrieveUser}>Cancel</button>
        </div>
    );
};

export default Info;
