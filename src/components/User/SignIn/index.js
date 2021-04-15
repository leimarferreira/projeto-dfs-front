import React, { useState } from 'react';
import UserDataService from '../../../services/User/index';
import { TOKEN_KEY } from '../../../services/shared/api';

const SignIn = props => {

    const [user, setUser] = useState({ id: null, login: "", password: "" });

    const handleInputChange = event => {
        const { name, value } = event.target;
        setUser({ ...user, [name]: value });
    }

    const sendLogin = () => {
        let data = {
            login: user.login,
            password: user.password
        }

        UserDataService.signIn(data)
            .then(response => {
                localStorage.setItem(TOKEN_KEY, response.data?.result?.token);
                // TODO: redirect the user to the main screen
            })
            .catch(error => {
                console.log(error);
            });
    };

    return (
        <div>
            <div>
                <label htmlFor="login">Username</label>
                <input
                    type="text"
                    id="login"
                    name="login"
                    placeholder="Username"
                    required
                    value={user.login}
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

            <button onClick={sendLogin}>
                Submit
            </button>
        </div>
    )
}

export default SignIn;
