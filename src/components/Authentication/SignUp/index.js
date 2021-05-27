import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Error from '../../common/Error/index';
import UserDataService from '../../../services/User/index';
import AuthenticationService from '../../../services/Authentication/index';
import { TOKEN_KEY } from '../../../services/shared/api';

const SignUp = () => {
    const [user, setUser] = useState({
        id: null,
        name: "",
        email: "",
        password: "",
        cpf: ""
    });
    const [error, setError] = useState(false);

    const history = useHistory();

    const handleInputChange = event => {
        const { name, value } = event.target;
        setUser({ ...user, [name]: value });
    };

    const createUser = () => {
        UserDataService.create(user)
            .then(() => {
                sendLogin();
            }).catch(setError);
    };

    const sendLogin = () => {
        let data = {
            email: user.email,
            password: user.password
        };

        AuthenticationService.signIn(data)
            .then(response => {
                localStorage.setItem(TOKEN_KEY, response.data?.result?.token);
                localStorage.setItem("currentUserId", response.data?.result?.user?.id);
                history.push("/");
            })
            .catch(setError);
    }
    // TODO: remove this sendlogin

    return (
        <div>
            <div className="mb-3">
                <label htmlFor="name" className="form-label">Name</label>
                <input
                    className="form-control"
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Your Name"
                    required
                    value={user.name}
                    onChange={handleInputChange}
                />
            </div>

            <div className="mb-3">
                <label htmlFor="cpf" className="form-label">CPF</label>
                <input
                    className="form-control"
                    type="text"
                    id="cpf"
                    name="cpf"
                    placeholder="Only numbers"
                    required
                    value={user.cpf}
                    onChange={handleInputChange}
                />
            </div>

            <div className="mb-3">
                <label htmlFor="email" className="form-label">Email</label>
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

            <div className="mb-3">
                <label htmlFor="password" className="form-label">Password</label>
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

            <div className="d-grid">
                <button onClick={createUser} className="btn btn-dark">
                    Submit
                </button>
            </div>
            {error &&
            <Error message={error?.response?.data}/>
            }
        </div>
    );
};

export default SignUp;
