import api from '../../shared/api';

const signIn = data => {
    return api.post("/authentication", data);
};

export { signIn };
