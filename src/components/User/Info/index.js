import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import UserDataService from '../../../services/User/index';

const Info = () => {
    const { userId } = useParams();
    const [user, setUser] = useState({});
    
    useEffect(() => {
        retrieveUser(userId);
    }, [userId]);

    const retrieveUser = async id => {
        try {
            let response = await UserDataService.get(id);
            setUser(response.data);
        } catch (error) {
            // TODO: handle this error
        }
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
        <div className="row mt-1 g-3 p-3 bg-light border rounded shadow">
            <div>
                <label htmlFor="name" className="form-label">Name</label>
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

            <div>
                <label htmlFor="cpf" className="form-label">CPF</label>
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

            <div>
                <label htmlFor="email" className="form-label">Email</label>
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

            <div>
                <label htmlFor="password" className="form-label">Password</label>
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

            <div className="d-grid gap-2 d-md-block">
                <button onClick={sendUserInfo} className="btn btn-dark">
                    Save
                </button>
                <button onClick={retrieveUser} className="btn btn-dark ms-md-2">
                    Cancel
                </button>
            </div>
        </div>
    );
};

export default Info;
