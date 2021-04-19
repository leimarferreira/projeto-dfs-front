import React, { useState } from 'react';
import AuthenticationService from '../../../services/Authentication/index';
import { TOKEN_KEY } from '../../../services/shared/api';

const SignIn = () => {

    const [user, setUser] = useState({ id: null, email: "", password: "" });

    const handleInputChange = event => {
        const { name, value } = event.target;
        setUser({ ...user, [name]: value });
    }

    const sendLogin = () => {
        let data = {
            email: user.email,
            password: user.password
        }

        AuthenticationService.signIn(data)
            .then(response => {
                localStorage.setItem(TOKEN_KEY, response.data?.result?.token);
                // TODO: redirect the user to the main screen
            })
            .catch(error => {
                // TODO: show a error message to user
            });
    };

    return (
        <div>
            <div>
                <label htmlFor="email">Email</label>
                <input
                    type="text"
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
                    placeholder="password"
                    required
                    value={user.password}
                    onChange={handleInputChange}
                />
            </div>

            <button onClick={sendLogin}>
                Submit
            </button>
        </div>
    )
}

export default SignIn;
