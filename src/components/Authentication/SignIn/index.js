import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import AuthenticationService from '../../../services/Authentication/index';
import { TOKEN_KEY } from '../../../services/shared/api';

const SignIn = () => {

    const [user, setUser] = useState({ id: null, email: "", password: "" });
    const history = useHistory();

    const handleInputChange = event => {
        const { name, value } = event.target;
        setUser({ ...user, [name]: value });
    }

    // TODO: remove the duplicated code in signin and signup
    const sendLogin = () => {
        let data = {
            email: user.email,
            password: user.password
        }

        AuthenticationService.signIn(data)
            .then(response => {
                localStorage.setItem(TOKEN_KEY, response.data?.result?.token);
                localStorage.setItem("currentUserId", response.data?.result?.user?.id);
                history.push("/product");
            })
            .catch(error => {
                // TODO: show a error message to user
            });
    };

    return (
        <div>
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

            <button onClick={sendLogin} className="btn btn-primary btn-block">
                Submit
            </button>
        </div>
    )
}

export default SignIn;
