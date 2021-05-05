import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import UserDataService from '../../../services/User/index';

const Info = () => {
    const { userId } = useParams();
    const [user, setUser] = useState({});
    
    useEffect(() => {
        retrieveUser(userId)
            .then(setUser);
    }, [userId]);

    const retrieveUser = async id => {
        let response = await UserDataService.get(id);
        return response.data;
    };

    const sendUserInfo = () => {
        let data = {
            name: user.name,
            cpf: user.cpf,
            email: user.email,
            password: user.password
        };

        UserDataService.update(userId, data);
    };

    const handleInputChange = event => {
        const { name, value } = event.target;
        setUser({ ...user, [name]: value });
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
                    placeholder="Full name"
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
                    placeholder="password"
                    value={user.password}
                    onChange={handleInputChange}
                />
            </div>

            <button onClick={sendUserInfo} className="btn btn-primary">
                Save
            </button>
            <button onClick={retrieveUser} className="btn btn-primary">
                Cancel
            </button>
        </div>
    );
};

export default Info;
